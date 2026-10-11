// =====================================
// HHGS SERVICE WORKER
// =====================================

const STATIC_CACHE =
    "hhgs-static-v8";

const IMAGE_CACHE =
    "hhgs-images-v8";

const PAGE_CACHE =
    "hhgs-pages-v8";


const PRECACHE_FILES = [

    "/",

    "/manifest.json",

    "/images/hhgs-icon-192.png",

    "/images/hhgs-icon-512.png",

    "/css/style.css",

    "/css/banner.css",

    "/js/banner.js"

];


// =====================================
// INSTALL
// =====================================

self.addEventListener(
    "install",
    function (event) {

        self.skipWaiting();

        event.waitUntil(

            caches
                .open(STATIC_CACHE)
                .then(function (cache) {

                    return Promise.allSettled(

                        PRECACHE_FILES.map(
                            function (file) {

                                return cache.add(
                                    file
                                );

                            }
                        )

                    );

                })

        );

    }
);


// =====================================
// ACTIVATE
// =====================================

self.addEventListener(
    "activate",
    function (event) {

        const activeCaches = [

            STATIC_CACHE,

            IMAGE_CACHE,

            PAGE_CACHE

        ];

        event.waitUntil(

            caches
                .keys()
                .then(function (cacheNames) {

                    return Promise.all(

                        cacheNames.map(
                            function (cacheName) {

                                if (
                                    !activeCaches.includes(
                                        cacheName
                                    )
                                ) {

                                    return caches.delete(
                                        cacheName
                                    );

                                }

                            }
                        )

                    );

                })
                .then(function () {

                    return self.clients.claim();

                })

        );

    }
);


// =====================================
// FETCH
// =====================================

self.addEventListener(
    "fetch",
    function (event) {

        const request =
            event.request;

        const requestURL =
            new URL(request.url);


        if (
            request.method !== "GET"
        ) {
            return;
        }


        // Do not cache external websites

        if (
            requestURL.origin !==
            self.location.origin
        ) {
            return;
        }


        // =================================
        // PRODUCT AND WEBSITE IMAGES
        // Cache First
        // =================================

        if (
            request.destination === "image"
        ) {

            event.respondWith(

                caches
                    .open(IMAGE_CACHE)
                    .then(
                        async function (cache) {

                            const cachedImage =
                                await cache.match(
                                    request
                                );

                            if (cachedImage) {

                                return cachedImage;

                            }

                            try {

                                const response =
                                    await fetch(
                                        request
                                    );

                                if (
                                    response &&
                                    response.ok
                                ) {

                                    cache.put(
                                        request,
                                        response.clone()
                                    );

                                }

                                return response;

                            } catch (error) {

                                return new Response(
                                    "",
                                    {
                                        status: 404
                                    }
                                );

                            }

                        }
                    )

            );

            return;
        }


        // =================================
        // HTML PAGES
        // Network First
        // =================================

        if (
            request.mode === "navigate"
        ) {

            event.respondWith(

                caches
                    .open(PAGE_CACHE)
                    .then(
                        async function (cache) {

                            try {

                                const response =
                                    await fetch(
                                        request
                                    );

                                if (
                                    response &&
                                    response.ok
                                ) {

                                    cache.put(
                                        request,
                                        response.clone()
                                    );

                                }

                                return response;

                            } catch (error) {

                                const cachedPage =
                                    await cache.match(
                                        request
                                    );

                                return (
                                    cachedPage ||
                                    caches.match("/")
                                );

                            }

                        }
                    )

            );

            return;
        }


        // =================================
        // CSS, JS AND OTHER FILES
        // Stale While Revalidate
        // =================================

        event.respondWith(

            caches
                .open(STATIC_CACHE)
                .then(
                    async function (cache) {

                        const cachedResponse =
                            await cache.match(
                                request
                            );

                        const networkResponse =
                            fetch(request)
                                .then(
                                    function (response) {

                                        if (
                                            response &&
                                            response.ok
                                        ) {

                                            cache.put(
                                                request,
                                                response.clone()
                                            );

                                        }

                                        return response;

                                    }
                                )
                                .catch(function () {

                                    return null;

                                });

                        return (
                            cachedResponse ||
                            networkResponse
                        );

                    }
                )

        );

    }
);

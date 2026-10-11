const CACHE_NAME =
    "global-mini-sabji-v1";

const OFFLINE_PAGES = [
    "/sabji",
    "/sabji/cart"
];


// ======================================================
// INSTALL
// ======================================================

self.addEventListener(
    "install",
    function() {

        self.skipWaiting();
    }
);


// ======================================================
// ACTIVATE
// ======================================================

self.addEventListener(
    "activate",
    function(event) {

        event.waitUntil(

            caches.keys().then(
                function(cacheNames) {

                    return Promise.all(

                        cacheNames.map(
                            function(cacheName) {

                                if(
                                    cacheName !==
                                    CACHE_NAME
                                ) {

                                    return caches.delete(
                                        cacheName
                                    );
                                }
                            }
                        )
                    );
                }
            )
        );

        self.clients.claim();
    }
);


// ======================================================
// FETCH
// Network पहले, Offline होने पर Cache
// ======================================================

self.addEventListener(
    "fetch",
    function(event) {

        const request =
            event.request;

        const url =
            new URL(
                request.url
            );


        if(
            request.method !== "GET" ||
            url.origin !== self.location.origin
        ) {
            return;
        }


        // Admin/API responses को cache नहीं करना है
        if(
            url.pathname.startsWith(
                "/admin/"
            ) ||

            url.pathname ===
                "/sabji/order"
        ) {
            return;
        }


        event.respondWith(

            fetch(request)

                .then(
                    function(response) {

                        if(
                            !response ||
                            response.status !== 200
                        ) {

                            return response;
                        }


                        const responseCopy =
                            response.clone();


                        caches.open(
                            CACHE_NAME
                        ).then(
                            function(cache) {

                                cache.put(
                                    request,
                                    responseCopy
                                );
                            }
                        );


                        return response;
                    }
                )

                .catch(
                    async function() {

                        const cachedResponse =
                            await caches.match(
                                request
                            );


                        if(cachedResponse) {

                            return cachedResponse;
                        }


                        if(
                            request.mode ===
                            "navigate"
                        ) {

                            return (
                                await caches.match(
                                    "/sabji"
                                )
                            );
                        }


                        return new Response(
                            "Offline",
                            {
                                status: 503,
                                headers: {
                                    "Content-Type":
                                        "text/plain"
                                }
                            }
                        );
                    }
                )
        );
    }
);

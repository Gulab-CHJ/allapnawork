function ManageBanner(banners = []) {

    let rows = "";

    banners.forEach((banner, index) => {

        rows += `
        <tr>
            <td>${index + 1}</td>

            <td>
                <img src="${banner.image}" class="banner-img">
            </td>

            <td>
                <a href="${banner.link}" target="_blank">
                    ${banner.link}
                </a>
            </td>

            <td>
                ${
                    banner.active
                        ? '<span class="status active">Active</span>'
                        : '<span class="status inactive">Inactive</span>'
                }
            </td>

            <td class="action">

                <a href="/admin/edit-banner/${banner._id}" class="btn edit">
                    <i class="fa-solid fa-pen"></i>
                </a>

                <a href="/admin/delete-banner/${banner._id}"
                   class="btn delete"
                   onclick="return confirm('Delete Banner?')">
                    <i class="fa-solid fa-trash"></i>
                </a>

                ${
                    banner.active
                        ? `
                        <a href="/admin/deactivate-banner/${banner._id}" class="btn warning">
                            <i class="fa-solid fa-ban"></i>
                        </a>
                        `
                        : `
                        <a href="/admin/activate-banner/${banner._id}" class="btn success">
                            <i class="fa-solid fa-check"></i>
                        </a>
                        `
                }

            </td>

        </tr>
        `;

    });

    return `
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Manage Banner</title>

    <link rel="stylesheet" href="/css/manage-banner.css">

    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">

</head>

<body>

    <div class="container">

        <div class="page-header">

            <div>
                <h1>
                    <i class="fa-solid fa-image"></i>
                    Manage Banners
                </h1>

                <p>Manage Website Home Page Banners</p>
            </div>

            <a href="/admin/add-banner" class="primary-btn">
                <i class="fa-solid fa-plus"></i>
                Add Banner
            </a>

        </div>

        <div class="total-box">
            Total Banners : <b>${banners.length}</b>
        </div>

        <div class="table-box">

            <table>

                <thead>

                    <tr>
                        <th>#</th>
                        <th>Banner</th>
                        <th>Link</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>

                </thead>

                <tbody>

                    ${rows}

                </tbody>

            </table>

        </div>

    </div>

</body>

</html>
`;

}

module.exports = ManageBanner;

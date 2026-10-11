function ManageServices(services = []) {

    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>

        <meta charset="UTF-8">

        <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
        >

        <title>Manage Services</title>

        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        >

        <style>

            *{
                box-sizing:border-box;
                margin:0;
                padding:0;
                font-family:Arial,sans-serif;
            }

            body{
                background:#f1f5f9;
                padding:30px;
                color:#0f172a;
            }

            .topbar{
                max-width:1200px;
                margin:auto;
                display:flex;
                align-items:center;
                justify-content:space-between;
                margin-bottom:30px;
            }

            h1{
                font-size:28px;
            }

            .add-btn{
                text-decoration:none;
                background:#2563eb;
                color:white;
                padding:12px 20px;
                border-radius:10px;
                font-weight:600;
            }

            .back-btn{
                text-decoration:none;
                color:#475569;
                margin-right:15px;
            }

            .services-grid{
                max-width:1200px;
                margin:auto;

                display:grid;

                grid-template-columns:
                repeat(auto-fit,minmax(250px,1fr));

                gap:20px;
            }

            .card{
                background:white;
                border-radius:15px;
                overflow:hidden;

                box-shadow:
                0 8px 25px rgba(0,0,0,.08);
            }

            .image{
                width:100%;
                height:180px;
                object-fit:cover;
                background:#e2e8f0;
            }

            .card-body{
                padding:18px;
            }

            .card h2{
                font-size:19px;
                margin-bottom:8px;
            }

            .card p{
                font-size:14px;
                color:#64748b;
                line-height:1.6;
                margin-bottom:18px;
            }

            .buttons{
                display:flex;
                gap:10px;
            }

            .edit{
                flex:1;
                text-align:center;
                text-decoration:none;

                padding:10px;

                background:#f59e0b;
                color:white;

                border-radius:8px;
            }

            .delete{
                flex:1;
                text-align:center;
                text-decoration:none;

                padding:10px;

                background:#dc2626;
                color:white;

                border-radius:8px;
            }

            .empty{
                background:white;
                padding:50px;
                text-align:center;
                border-radius:15px;
                grid-column:1/-1;
            }

            @media(max-width:600px){

                body{
                    padding:15px;
                }

                .topbar{
                    align-items:flex-start;
                    gap:15px;
                    flex-direction:column;
                }

                .services-grid{
                    grid-template-columns:1fr;
                }

            }

        </style>

    </head>

    <body>

        <div class="topbar">

            <div>

                <a
                    href="/admin/admindashboard"
                    class="back-btn"
                >
                    ← Dashboard
                </a>

                <h1>
                    Manage Services
                </h1>

            </div>

            <a
                href="/admin/add-service"
                class="add-btn"
            >
                <i class="fa-solid fa-plus"></i>
                Add Service
            </a>

        </div>


        <div class="services-grid">

            ${
                services.length
                ?
                services.map(service => `

                    <div class="card">

                        <img
                            class="image"
                            src="${
                                service.image
                                    ? service.image
                                    : "/images/no-image.png"
                            }"
                            onerror="
                                this.onerror=null;
                                this.src='/images/no-image.png';
                            "
                        >

                        <div class="card-body">

                            <h2>
                                ${service.title || "Service"}
                            </h2>

                            <p>
                                ${
                                    service.description
                                    ?
                                    service.description.substring(0,120)
                                    :
                                    "No description available"
                                }
                            </p>

                            <div class="buttons">

                                <a
                                    href="/admin/edit-service/${service._id}"
                                    class="edit"
                                >
                                    <i class="fa-solid fa-pen"></i>
                                    Edit
                                </a>

                                <a
                                    href="/admin/delete-service/${service._id}"
                                    class="delete"
                                    onclick="
                                        return confirm(
                                            'Delete this service?'
                                        )
                                    "
                                >
                                    <i class="fa-solid fa-trash"></i>
                                    Delete
                                </a>

                            </div>

                        </div>

                    </div>

                `).join("")
                :
                `
                    <div class="empty">
                        <h2>No Services Available</h2>
                        <br>
                        <a
                            href="/admin/add-service"
                            class="add-btn"
                        >
                            + Add First Service
                        </a>
                    </div>
                `
            }

        </div>

    </body>

    </html>
    `;

}

module.exports = ManageServices;

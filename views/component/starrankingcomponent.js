function StarRankingSection() {

    return `
<style>

.hhgs-star-section {
    width: calc(100% - 30px);
    max-width: 1180px;

    margin: 35px auto;
    padding: 28px;

    border: 1px solid #dce8e2;
    border-radius: 25px;

    background: #ffffff;

    box-shadow:
        0 18px 50px
        rgba(15, 73, 58, 0.12);
}

.hhgs-star-header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 20px;

    margin-bottom: 20px;
}

.hhgs-star-kicker {
    display: block;

    margin-bottom: 7px;

    color: #a87906;

    font-size: 10px;
    font-weight: 900;
    letter-spacing: 2px;
}

.hhgs-star-header h2 {
    margin: 0;

    color: #103c32;

    font-family:
        Georgia,
        "Times New Roman",
        serif;

    font-size: 32px;
}

.hhgs-star-header p {
    margin: 7px 0 0;

    color: #647c74;

    font-size: 13px;
    line-height: 1.5;
}

.hhgs-star-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.hhgs-star-buttons a {
    min-height: 42px;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    padding: 0 15px;

    border-radius: 12px;

    font-size: 12px;
    font-weight: 800;
    text-decoration: none;
}

.hhgs-ranking-button {
    color: #ffffff;
    background: #0f513f;
}

.hhgs-admin-button {
    border: 1px solid #d7e2dd;

    color: #315c51;
    background: #f5f8f6;
}

.hhgs-star-loading,
.hhgs-star-error,
.hhgs-star-empty {
    min-height: 150px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 8px;

    border-radius: 17px;

    color: #647c74;
    background: #f4f8f6;

    font-size: 13px;
    text-align: center;
}

.hhgs-star-loader {
    width: 32px;
    height: 32px;

    border: 3px solid #dce8e2;
    border-top-color: #dba817;
    border-radius: 50%;

    animation:
        hhgsStarLoader
        0.9s linear infinite;
}

@keyframes hhgsStarLoader {

    to {
        transform: rotate(360deg);
    }

}

.hhgs-star-winner {
    min-height: 120px;

    display: grid;
    grid-template-columns:
        58px
        minmax(0, 1fr)
        auto;
    align-items: center;
    gap: 16px;

    margin-bottom: 13px;
    padding: 20px 23px;

    border-radius: 18px;

    color: #ffffff;
    background: #0d3c31;
}

.hhgs-winner-icon {
    width: 54px;
    height: 54px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    color: #113c32;
    background: #e6b630;

    font-size: 27px;
}

.hhgs-winner-information {
    min-width: 0;

    display: flex;
    flex-direction: column;
}

.hhgs-winner-information small {
    color: #e9c558;

    font-size: 8px;
    font-weight: 900;
    letter-spacing: 2px;
}

.hhgs-winner-information strong {
    margin: 3px 0;

    overflow: hidden;

    font-family:
        Georgia,
        "Times New Roman",
        serif;

    font-size: 25px;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.hhgs-winner-information span {
    color: #b8cec7;
    font-size: 10px;
}

.hhgs-winner-rank {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-left: 18px;

    border-left:
        1px solid
        rgba(255, 255, 255, 0.15);
}

.hhgs-winner-rank strong {
    color: #e6b630;

    font-family:
        Georgia,
        serif;

    font-size: 31px;
}

.hhgs-winner-rank small {
    color: #9fb8b1;

    font-size: 7px;
    font-weight: 900;
}

.hhgs-star-list {
    display: grid;
    gap: 7px;
}

.hhgs-star-row {
    min-height: 60px;

    display: grid;
    grid-template-columns:
        55px
        minmax(0, 1fr)
        90px
        75px;
    align-items: center;
    gap: 10px;

    padding: 8px 14px;

    border: 1px solid #e1e9e5;
    border-radius: 13px;

    background: #fffefa;
}

.hhgs-star-row.top-student {
    border-color: #dfca81;

    background: #fff8dc;

    box-shadow:
        inset 3px 0
        #e0ad1d;
}

.hhgs-rank-number {
    color: #315f53;

    font-family:
        Georgia,
        serif;

    font-size: 20px;
}

.hhgs-student-box {
    min-width: 0;

    display: flex;
    align-items: center;
    gap: 10px;
}

.hhgs-student-avatar {
    width: 38px;
    height: 38px;

    display: flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    color: #1f6956;
    background: #dfeee8;

    font-size: 11px;
    font-weight: 900;
}

.hhgs-student-name {
    min-width: 0;

    display: flex;
    flex-direction: column;
}

.hhgs-student-name strong {
    overflow: hidden;

    color: #173d34;

    font-size: 13px;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.hhgs-student-name small,
.hhgs-student-class {
    color: #71857e;
    font-size: 10px;
}

.hhgs-star-total {
    color: #173d34;

    font-family:
        Georgia,
        serif;

    font-size: 19px;
    font-weight: 700;
}

.hhgs-star-total b {
    color: #d9a717;
}

.hhgs-ranking-security {
    display: flex;
    align-items: center;
    gap: 8px;

    margin-top: 13px;
    padding: 11px 13px;

    border: 1px solid #cce2d9;
    border-radius: 12px;

    color: #497267;
    background: #ebf5f1;

    font-size: 10px;
}

.hhgs-ranking-security b {
    width: 22px;
    height: 22px;

    display: flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    color: #ffffff;
    background: #21836b;
}

@media screen and (max-width: 768px) {

    .hhgs-star-section {
        width: calc(100% - 20px);

        margin: 20px auto;
        padding: 18px 14px;

        border-radius: 20px;
    }

    .hhgs-star-header {
        align-items: stretch;
        flex-direction: column;
    }

    .hhgs-star-header h2 {
        font-size: 25px;
    }

    .hhgs-star-buttons a {
        flex: 1;
    }

    .hhgs-star-winner {
        grid-template-columns:
            47px
            minmax(0, 1fr);

        gap: 10px;

        padding: 17px 14px;
    }

    .hhgs-winner-icon {
        width: 44px;
        height: 44px;

        font-size: 22px;
    }

    .hhgs-winner-information strong {
        font-size: 20px;
    }

    .hhgs-winner-rank {
        grid-column: 2;

        align-items: flex-start;
        flex-direction: row;
        gap: 7px;

        padding: 8px 0 0;

        border-top:
            1px solid
            rgba(255, 255, 255, 0.14);

        border-left: 0;
    }

    .hhgs-winner-rank strong {
        font-size: 21px;
    }

    .hhgs-winner-rank small {
        margin-top: 7px;
    }

    .hhgs-star-row {
        grid-template-columns:
            38px
            minmax(0, 1fr)
            58px;

        padding: 7px 9px;
    }

    .hhgs-student-class {
        display: none;
    }

    .hhgs-star-total {
        justify-self: end;
        font-size: 17px;
    }

}

</style>


<section
    id="hhgsStudentStarRanking"
    class="hhgs-star-section"
>

    <div class="hhgs-star-header">

        <div>

            <span class="hhgs-star-kicker">
                CLASS 1–10 · COMBINED BATCH
            </span>

            <h2>
                ⭐ Student Star Ranking
            </h2>

            <p>
                Homework, Discipline, Attendance और
                Weekly Test के आधार पर Monthly Ranking
            </p>

        </div>


        <div class="hhgs-star-buttons">

            <a
                class="hhgs-ranking-button"
                href="https://global-smart-study-stars.mdg122112.chatgpt.site"
                target="_blank"
                rel="noopener noreferrer"
            >
                View Full Ranking →
            </a>

            <a
                class="hhgs-admin-button"
                href="https://global-smart-study-stars.mdg122112.chatgpt.site/admin"
                target="_blank"
                rel="noopener noreferrer"
            >
                🔐 Admin Login
            </a>

        </div>

    </div>


    <div
        id="hhgsRankingLoading"
        class="hhgs-star-loading"
    >

        <span class="hhgs-star-loader"></span>

        <div>
            Monthly ranking load हो रही है...
        </div>

    </div>


    <div
        id="hhgsRankingError"
        class="hhgs-star-error"
        hidden
    >
        Ranking load नहीं हुई।
        View Full Ranking button दबाएँ।
    </div>


    <div
        id="hhgsRankingEmpty"
        class="hhgs-star-empty"
        hidden
    >
        ⭐ Ranking जल्द शुरू होगी।
        Admin द्वारा Stars देने के बाद result दिखेगा।
    </div>


    <div
        id="hhgsRankingContent"
        hidden
    >

        <div class="hhgs-star-winner">

            <div class="hhgs-winner-icon">
                ♛
            </div>

            <div class="hhgs-winner-information">

                <small>
                    MONTHLY LEADER
                </small>

                <strong id="hhgsWinnerName">
                    Student
                </strong>

                <span id="hhgsWinnerDetails">
                    Class · Stars
                </span>

            </div>

            <div class="hhgs-winner-rank">

                <strong>
                    #1
                </strong>

                <small>
                    CURRENT RANK
                </small>

            </div>

        </div>


        <div
            id="hhgsRankingList"
            class="hhgs-star-list"
        ></div>


        <div class="hhgs-ranking-security">

            <b>✓</b>

            <span>
                Public केवल Ranking देख सकता है।
                Student और Stars में बदलाव सिर्फ Admin करेगा।
            </span>

        </div>

    </div>

</section>


<script>

(function () {

    const rankingApi =
        "https://global-smart-study-stars.mdg122112.chatgpt.site/api/dashboard";

    const loading =
        document.getElementById(
            "hhgsRankingLoading"
        );

    const errorBox =
        document.getElementById(
            "hhgsRankingError"
        );

    const emptyBox =
        document.getElementById(
            "hhgsRankingEmpty"
        );

    const content =
        document.getElementById(
            "hhgsRankingContent"
        );

    const winnerName =
        document.getElementById(
            "hhgsWinnerName"
        );

    const winnerDetails =
        document.getElementById(
            "hhgsWinnerDetails"
        );

    const rankingList =
        document.getElementById(
            "hhgsRankingList"
        );


    function getMonth() {

        const date = new Date();

        return (
            date.getFullYear() +
            "-" +
            String(
                date.getMonth() + 1
            ).padStart(2, "0")
        );

    }


    function getInitials(name) {

        return String(name || "S")
            .trim()
            .split(/\\s+/)
            .slice(0, 2)
            .map(
                function (part) {

                    return part
                        .charAt(0)
                        .toUpperCase();

                }
            )
            .join("");

    }


    function getGroup(classLevel) {

        const level =
            Number(classLevel || 0);

        if (level <= 3) {
            return "Foundation";
        }

        if (level <= 5) {
            return "Primary";
        }

        if (level <= 8) {
            return "Middle";
        }

        return "Board Prep";

    }


    function createElement(
        tagName,
        className,
        value
    ) {

        const element =
            document.createElement(
                tagName
            );

        if (className) {
            element.className =
                className;
        }

        if (
            value !== undefined &&
            value !== null
        ) {
            element.textContent =
                String(value);
        }

        return element;

    }


    function normalizeStudents(data) {

        let students = [];

        if (
            data.finalized &&
            Array.isArray(data.snapshot) &&
            data.snapshot.length
        ) {

            students =
                data.snapshot;

        } else if (
            Array.isArray(data.rankings)
        ) {

            students =
                data.rankings;

        }


        return students.map(
            function (student) {

                return {

                    id:
                        student.studentId ||
                        student.id,

                    name:
                        student.studentName ||
                        student.name ||
                        "Student",

                    classLevel:
                        Number(
                            student.classLevel ||
                            0
                        ),

                    stars:
                        Number(
                            student.stars ||
                            0
                        ),

                    rank:
                        Number(
                            student.rank ||
                            0
                        )

                };

            }
        );

    }


    function showRankings(students) {

        if (!students.length) {

            loading.hidden = true;
            errorBox.hidden = true;
            content.hidden = true;
            emptyBox.hidden = false;

            return;

        }


        const winner =
            students[0];


        winnerName.textContent =
            winner.name;

        winnerDetails.textContent =
            "Class " +
            winner.classLevel +
            " · " +
            winner.stars +
            " Stars";


        rankingList.innerHTML = "";


        students
            .slice(0, 5)
            .forEach(
                function (student) {

                    const row =
                        createElement(
                            "article",
                            "hhgs-star-row" +
                            (
                                student.rank === 1
                                    ? " top-student"
                                    : ""
                            )
                        );


                    const rank =
                        createElement(
                            "span",
                            "hhgs-rank-number",
                            "#" + student.rank
                        );


                    const studentBox =
                        createElement(
                            "div",
                            "hhgs-student-box"
                        );


                    const avatar =
                        createElement(
                            "span",
                            "hhgs-student-avatar",
                            getInitials(
                                student.name
                            )
                        );


                    const nameBox =
                        createElement(
                            "div",
                            "hhgs-student-name"
                        );


                    nameBox.appendChild(
                        createElement(
                            "strong",
                            "",
                            student.name
                        )
                    );


                    nameBox.appendChild(
                        createElement(
                            "small",
                            "",
                            getGroup(
                                student.classLevel
                            )
                        )
                    );


                    studentBox.appendChild(
                        avatar
                    );

                    studentBox.appendChild(
                        nameBox
                    );


                    const classBox =
                        createElement(
                            "span",
                            "hhgs-student-class",
                            "Class " +
                            student.classLevel
                        );


                    const starBox =
                        createElement(
                            "span",
                            "hhgs-star-total"
                        );


                    starBox.appendChild(
                        createElement(
                            "span",
                            "",
                            student.stars + " "
                        )
                    );


                    starBox.appendChild(
                        createElement(
                            "b",
                            "",
                            "★"
                        )
                    );


                    row.appendChild(rank);
                    row.appendChild(studentBox);
                    row.appendChild(classBox);
                    row.appendChild(starBox);

                    rankingList.appendChild(
                        row
                    );

                }
            );


        loading.hidden = true;
        errorBox.hidden = true;
        emptyBox.hidden = true;
        content.hidden = false;

    }


    fetch(
        rankingApi +
        "?month=" +
        encodeURIComponent(
            getMonth()
        ),
        {
            method: "GET",
            mode: "cors",
            cache: "no-store"
        }
    )
        .then(
            function (response) {

                if (!response.ok) {

                    throw new Error(
                        "Ranking request failed"
                    );

                }

                return response.json();

            }
        )
        .then(
            function (data) {

                showRankings(
                    normalizeStudents(data)
                );

            }
        )
        .catch(
            function (error) {

                console.error(
                    "STAR RANKING ERROR:",
                    error
                );

                loading.hidden = true;
                content.hidden = true;
                emptyBox.hidden = true;
                errorBox.hidden = false;

            }
        );

})();

</script>
    `;

}


module.exports =
    StarRankingSection;

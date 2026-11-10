const API_URL =
"https://api-saas-site-prod-236.dotlab.net/general/api/competition/clubs/NCX25N4/results?dt=1";

async function laadUitslagen(){

    try{

        const response = await fetch(API_URL);
        const data = await response.json();

        const container =
            document.getElementById("uitslagen");

        container.innerHTML = "";

        data.data.forEach(wedstrijd => {

            const thuis =
                wedstrijd.homeTeam.score;

            const uit =
                wedstrijd.awayTeam.score;

            const keepFitThuis =
                wedstrijd.homeTeam.teamName.includes("Keep Fit");

            let scoreClass = "";

            if(thuis === uit){

                scoreClass = "gelijk";

            }else if(

                (keepFitThuis && thuis > uit) ||

                (!keepFitThuis && uit > thuis)

            ){

                scoreClass = "winst";

            }else{

                scoreClass = "verlies";

            }

            container.innerHTML += `

                <div class="uitslag-card">

                    <div class="tijd">

                        ${wedstrijd.date_display}
                        <br>
                        ${wedstrijd.time_display}

                    </div>

                    <div class="teams">

                        <strong>
                            ${wedstrijd.homeTeam.teamName}
                        </strong>

                        <br>

                        ${wedstrijd.awayTeam.teamName}

                    </div>

                    <div class="score ${scoreClass}">

                        ${wedstrijd.homeTeam.score}
                        -
                        ${wedstrijd.awayTeam.score}

                    </div>

                </div>

            `;
        });

    }catch(error){

        document.getElementById("uitslagen").innerHTML =

        `<p>
            De uitslagen konden niet geladen worden.
        </p>`;

        console.error(error);
    }
}

laadUitslagen();
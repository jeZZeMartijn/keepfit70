const API_URL =
"https://api-saas-site-prod-236.dotlab.net/general/api/competition/clubs/NCX25N4/program?dt=1";

async function laadProgramma() {

    try {

        const response = await fetch(API_URL);
        const data = await response.json();

        console.log(data);

        data.data.forEach(wedstrijd => {
            console.log("WEDSTRIJD:", wedstrijd);
        });

    }
    catch(error) {

        console.error(error);

    }

}

laadProgramma();
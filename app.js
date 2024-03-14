const championDex = document.getElementById("Championdex");
console.log(championDex);

const fetchChamps = () => {
    const url = 'Insert ddragon.json file from Riot API for the specific patch you are looking for';

    fetch(url)
        .then(res => res.json())
        .then(data => {
            const championData = data.data;
            const champions = Object.keys(championData).map(championKey => {
                return {
                    name: championData[championKey].name,
                    id: championData[championKey].id,
                    title: championData[championKey].title,
                    image: `Champion Icons/${championData[championKey].image.full}`,
                    tags: championData[championKey].tags.join(", ")
                    
                };
            });

            displayChamp(champions);
        })
    };

const displayChamp = (champions) => {
    console.log(champions);
    const championHTML = champions.map(actualChampion => `
        <li class = "champMon"> 
             <img id="main" src="${actualChampion.image}"/>
            <h2 class = "champName1" >${actualChampion.name}</h1>
            <h2 class = "champTitles"> ${actualChampion.title}</h1>
            <p class = "champRoles">Role: ${actualChampion.tags}</p>
        </li> 
    `).join('');

    championDex.innerHTML = championHTML;
};

fetchChamps();
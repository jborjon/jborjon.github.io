{
    async function populate() {
        const request = new Request("data/phrase-data.json");
        const response = await fetch(request);
        const phraseData = await response.json();

        createCards(phraseData);
    }

    function createCards(phraseData) {
        const doc = document;
        const cardContainer = doc.querySelector("#card-container");
        const p = doc.createElement("p");
        
        p.textContent(phraseData.people[1]);
        cardContainer.appendChild(p);
    }

    populate();
}

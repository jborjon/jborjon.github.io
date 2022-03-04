{
    async function populate() {
        const request = new Request("data/phrase-data.json");
        const response = await fetch(request);
        const phraseData = await response.json();

        createCards(phraseData);
    }

    function createCards(phraseData) {
        const doc = document;
        const cardList = doc.querySelector("#card-list");

        let cardListItem;
        const numPeople = 4;
        for (let i = 0; i < numPeople; ++i) {
            cardListItem = doc.createElement("li");
            cardListItem.textContent = "Hallo";//pickRandomItem(phraseData.people);
            cardList.appendChild(cardListItem);
        }
        const p = doc.createElement("p");
        p.textContent = phraseData.people[1];
        cardList.appendChild(p);
    }

    function pickRandomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    populate();
}

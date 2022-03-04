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
        const numPeople = 2;
        for (let i = 0; i < numPeople; ++i) {
            cardListItem = doc.createElement("li");
            cardListItem.textContent = pickRandomItem(phraseData.people);
            cardList.appendChild(cardListItem);
        }
    }

    function pickRandomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    populate();
}

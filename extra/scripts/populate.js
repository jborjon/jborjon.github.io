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

        appendListItems(cardList, 2, phraseData.people);
        appendListItems(cardList, 2, phraseData.occupations);
        appendListItems(cardList, 6, phraseData.things);
    }

    function appendListItems(cardList, numItems, arrayFrom) {
        let cardListItem;
        for (let i = 0; i < numItems; ++i) {
            cardListItem = doc.createElement("li");
            cardListItem.textContent = pickRandomItem(arrayFrom);
            cardList.appendChild(cardListItem);
        }
    }

    function pickRandomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    populate();
}

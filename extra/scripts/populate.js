{
    async function populate() {
        const request = new Request("data/phrase-data.json");
        const response = await fetch(request);
        const phraseData = await response.json();

        createCards(phraseData);
    }

    function createCards(phraseData) {
        const cardList = document.querySelector("#card-list");

        appendListItems(cardList, 2, "", phraseData.people);
        appendListItems(cardList, 2, "The", phraseData.occupations);
        appendListItems(cardList, 6, "", phraseData.things);
    }

    function appendListItems(cardList, numItems, prefix, arrayFrom) {
        let cardListItem;
        for (let i = 0; i < numItems; ++i) {
            cardListItem = document.createElement("li");
            cardListItem.textContent = `${prefix} ${pickRandomItem(arrayFrom)}`;
            cardList.appendChild(cardListItem);
        }
    }

    function pickRandomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    let playButton = document.querySelector("#play-button");
    playButton.addEventListener("click", event => {
        populate();
    });
}

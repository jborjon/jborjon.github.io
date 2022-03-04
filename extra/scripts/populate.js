{
    async function populate() {
        const request = new Request("data/phrase-data.json");
        const response = await fetch(request);
        const phraseData = await response.json();

        createCards(phraseData);
    }

    function createCards(phraseData) {
        appendListItems(cardList, 2, false, phraseData.people);
        appendListItems(cardList, 2, true, phraseData.occupations);
        appendListItems(cardList, 6, false, phraseData.things);
    }

    function appendListItems(cardList, numItems, hasArticle, sourceArray) {
        let cardListItem;
        for (let i = 0; i < numItems; ++i) {
            cardListItem = document.createElement("li");

            // Prepend 'the' or 'a' only if we know we need it
            if (hasArticle) {
                const article = Math.random < 0.5 ? "The" : "A(n)";
                cardListItem.textContent = `${article} ${pickRandomItem(sourceArray)}`;
            } else {
                cardListItem.textContent = pickRandomItem(sourceArray);
            }

            cardList.appendChild(cardListItem);
        }
    }

    function pickRandomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    const cardList = document.querySelector("#card-list");
    let playButton = document.querySelector("#play-button");
    playButton.addEventListener("click", event => {
        cardList.replaceChildren();
        populate();
    });
}

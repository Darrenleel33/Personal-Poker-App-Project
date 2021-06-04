
const cardUrl = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'



fetch(cardUrl)
.then(response=>console.log(response.json))

function dealCards(twoRandomCards){}
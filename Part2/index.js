var cardId = document.getElementById('card-id')
var cardStyle = document.getElementById('card-style')

function setCard(){
    var card = document.getElementById(cardId.value)
    console.log(card.style.color = cardStyle.value)
    
}

function revertColor(){
    const diamonds = document.getElementById('diamonds')
    const hearts = document.getElementById('hearts')
    const clubs = document.getElementById('clubs')
    const spades = document.getElementById('spades')
    diamonds.style.color = 'red'
    hearts.style.color = 'red'
    clubs.style.color = 'black'
    spades.style.color = 'black'
}
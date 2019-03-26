const board = []

function play(clickedId){
    const playerSpan = document.getElementById('player')
    const boxClicked = document.getElementById(clickedId)

    if(playerSpan.innerText === 'X'){
        playerSpan.innerText = 'O'
        boxClicked.innerText = 'X'
        board[clickedId] = 'X'
    }
    else{
        playerSpan.innerText = 'X'
        boxClicked.innerText = 'O'
        board[clickedId] = 'O'
    }
    console.log(board)

    if(board[0] !== undefined && board[0] === board[1] && board[0] === board[2]){
        alert(`Player ${board[0]} is the winner!`);
        console.log('working yet?');
        return;
    }
    if(board[3] !== undefined && board[3] === board[4] && board[3] === board[5]){
        alert(`Player ${board[3]} is the winner!`)
        return
    }
    if(board[6] !== undefined && board[6] === board[7] && board[6] === board[8]){
        alert(`Player ${board[6]} is the winner!`)
        return
    }
    if(board[0] !== undefined && board[0] === board[3] && board[0] === board[6]){
        alert(`Player ${board[0]} is the winner!`)
        return
    }
    if(board[1] !== undefined && board[1] === board[4] && board[1] === board[7]){
        alert (`Player ${board[1]} is the winner!`)
        return
    }
    if(board[2] !== undefined && board[2] === board[5] && board[2] === board[8]){
        alert (`Player ${board[2]} is the winner!`)
        return
    }
    if(board[0] !== undefined && board[0] === board[4] && board[0] === board[8]){
        alert (`Player ${board[0]} is the winner!`)
        return
    }
    if(board[2] !== undefined && board[2] === board[4] && board[2] === board[6]){
        alert (`Player ${board[2]} is the winner!`)
        return
    }

    let filledBoard = true
    for(var i = 0; i < 9; i++){
        if(board[i] === undefined){
            filledBoard = false
        }
    }
    if(filledBoard === true){
        alert(`Cat's game!`)
    }
}




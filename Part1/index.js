var board = []

function reset(){
    board = []
    var box0 = document.getElementById('0')
    box0.innerText = ''
    var box1 = document.getElementById('1')
    box1.innerText = ''
    var box2 = document.getElementById('2')
    box2.innerText = ''
    var box3 = document.getElementById('3')
    box3.innerText = ''
    var box4 = document.getElementById('4')
    box4.innerText = ''
    var box5 = document.getElementById('5')
    box5.innerText = ''
    var box6 = document.getElementById('6')
    box6.innerText = ''
    var box7 = document.getElementById('7')
    box7.innerText = ''
    var box8 = document.getElementById('8')
    box8.innerText = ''
    var box9 = document.getElementById('9')
    box9.innerText = ''
}

function play(clickedId){
    if(gameOver === true){
        alert('Game Over, refresh to replay')
        return
    }
    
    const playerSpan = document.getElementById('player')
    const boxClicked = document.getElementById(clickedId)

    if(board[clickedId] === 'X' || board[clickedId] === 'O'){
        alert('You cannot choose a space already taken!')
        return
    }

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
        alert(`Player ${board[0]} is the winner!`)
        reset()
        return
    }
    if(board[3] !== undefined && board[3] === board[4] && board[3] === board[5]){
        alert(`Player ${board[3]} is the winner!`)
        reset()
        return
    }
    if(board[6] !== undefined && board[6] === board[7] && board[6] === board[8]){
        alert(`Player ${board[6]} is the winner!`)
        reset()
        return
    }
    if(board[0] !== undefined && board[0] === board[3] && board[0] === board[6]){
        alert(`Player ${board[0]} is the winner!`)
        reset()
        return
    }
    if(board[1] !== undefined && board[1] === board[4] && board[1] === board[7]){
        alert (`Player ${board[1]} is the winner!`)
        reset()
        return
    }
    if(board[2] !== undefined && board[2] === board[5] && board[2] === board[8]){
        alert (`Player ${board[2]} is the winner!`)
        reset()
        return
    }
    if(board[0] !== undefined && board[0] === board[4] && board[0] === board[8]){
        alert (`Player ${board[0]} is the winner!`)
        reset()
        return
    }
    if(board[2] !== undefined && board[2] === board[4] && board[2] === board[6]){
        alert (`Player ${board[2]} is the winner!`)
        reset()
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
        reset()
        return
    }
}




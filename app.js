// play_board 表示游戏面板的单元格 当前是哪个角色占有
let play_board = ["", "", "", "", "", "", "", "", ""];
// 表示玩家和电脑分别对应的符号
const player = "X";
const computer ="O";
/*
 记录游戏是否已经结束， 值为true时 棋盘不能再进行下一步
 */
let board_full = false;
let ai_level;

/**
 * 作用：对每一步的结果进行渲染和处理
 * 执行时机：player or computer 每一步之后执行
  */
const game_loop = () => {
	// console.log("game_loop execute...");

	// 渲染游戏面板
	render_board();
	// 检查是否棋盘已满，已满则判定draw平局
	// checkBoardComplete();

	// 判断获胜信息 并更新相关信息
	checkWinner();
}

/**
 * 作用：根据 play_board 中存储的值，对游戏面板内容进行渲染
 * 执行时机：每下一步都需要重新渲染
  */
const render_board = () => {
    const board_container = document.querySelector(".play-area");
    board_container.innerHTML = "";
    play_board.forEach((e,i) => {
        board_container.innerHTML += `<div id="block_${i}" class="block" onclick="addPlayerMove(${i})">${play_board[i]}</div>`;
        if(e == player || e == computer) {
            document.querySelector(`#block_${i}`).classList.add("occupied");
        }
    });
};

//setTimeout(render_board(), 3000);

/**
 * 作用：检查是否棋盘已满，已满则判定draw平局
 */
const checkBoardComplete = () => {
	let flag = true;
	play_board.forEach(element => {
		if(element == "") {
			flag = false;
		}
	});
	board_full = flag;
};


const configure_ai = () => {
    let ai_select = document.querySelector("#ai_level");
    ai_level = Array.from(ai_select.options).filter(option => option.defaultSelected == true)[0].value;
    ai_select.addEventListener("change", event => {
        ai_level = event.target.options[event.target.selectedIndex].value;
    });
}

FBInstant.initializeAsync()
  .then(function(){
        var progress = 0;
        var interval = setInterval(function() {
            if(progress>=95){
                clearInterval(interval);
                FBInstant.startGameAsync().then(
                    function() {
                        console.log("Game Loaded");
                    }
                )
            };
            FBInstant.setLoadingProgress(progress);
            progress += 5;
        }, 100);
  }
);


/**
 * 选择随机开始的角色 用户or电脑
 */
const randomizeStart = () => {
	if (play_board.every(item => item === "")) {
		// const PLAYER = 0;
		const COMPUTER = 1;
		const start = Math.round(Math.random());
		if (start === COMPUTER) {
			addComputerMove(ai_level);
			console.log("COMPUTER STARTED")
		} else {
			console.log("PLAYER STARTS")
		}
	}
}

// 玩家点击单元格 i 后触发 addPlayerMove(i)
const addPlayerMove = e => {
	// 判断 单元格为空 且 游戏未结束
    if (play_board[e] == "" && !board_full) {
		// 用户开始点击后，就不能选择AI的难易程度了
        document.querySelector("#ai_level").disabled = true;
		// 更新play_board数组的当前单元格的值
        play_board[e] = player;
		// 对这一步的结果进行处理
        game_loop();
        addComputerMove(ai_level);
    }
};

const addComputerMove = (ai_level) => {
    if(!board_full){
        let score;
        let compare;
        switch (ai_level) {
            case "hard": 
                score = -Infinity;
                compare = (a,b) => a > b;
                break;
            case "easy": 
                score = Infinity; 
                compare = (a,b) => a < b;
                break;
            case "normal":
                let guess = Math.random() * 100;
                if (guess <= 40) {
                    score = Infinity; 
                    compare = (a,b) => a < b;
                }
                else {
                    score = -Infinity;
                    compare = (a,b) => a > b;
                }
                break;
        }
        let nextMove;
        for(let i = 0; i < play_board.length; i++){
            if(play_board[i] == ""){
                play_board[i] = computer;
                let endScore = minimax(play_board,0, false);
                play_board[i] = "";
                if (compare(endScore, score)) {
                    score = endScore;
                    nextMove = i;
                }
            }
        }
        play_board[nextMove] = computer;
        game_loop();
    }
}

let scores = {X : 1, O : -1, tie : 0};

const minimax = (board, isMaximizing) => {
    let res = check_match();
    if(res != ""){
        return scores[res];
    }
    if(isMaximizing){
        let bestScore = -Infinity;
        for(let i = 0;i<board.length;i++){
            if(board[i] == ""){
                board[i] = computer;
                let score = minimax(board, false);
                board[i] = "";
                bestScore = Math.max(score,bestScore);
            }
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        for(let i = 0;i<board.length;i++){
            if(board[i] == ""){
                board[i] = player;
                let score = minimax(board, true);
                board[i] = "";
                bestScore = Math.min(score,bestScore);
            }
        }
        return bestScore;
    }
}

// 表示结果的6个值（全局）
var temp1 = 0;
var temp2 = 0;
var temp3 = 0;
var temp4 = 0;
var temp5 = 0;
var temp6 = 0;

var endMusic = null; // the Audio object for the music at the end of the game

/**
 * 判断获胜信息 并更新相关信息
 */
const checkWinner = () => {
	// 判断当前棋盘状态是否存在获胜者
	let res = check_match();
	// 表示结果的6个值
	var playerstat1 = 0;
	var computerstat1 = 0;
	var loss1 = 0;
	var loss2 = 0;
	var draw1 = 0;
	var draw2 = 0;

	const winner_statement = document.getElementById("winner");
	const audio = document.querySelector("audio");

	if (res == player) {
		winner_statement.innerText = "Player Won";
		winner_statement.classList.add("playerWin");
		board_full = true;
		playerstat1++;
		loss2++;
		temp1 = temp1 + playerstat1;
		temp3 = temp3 + loss2;
		console.log("player win");
		audio.pause();
		endMusic = new Audio("audio/youWin.mp4");
		endMusic.play();
	} else if (res == computer) {
		winner_statement.innerText = "Computer Won";
		winner_statement.classList.add("computerWin");
		board_full = true;
		computerstat1++;
		loss1++;
		temp2 = temp2 + computerstat1;
		temp4 = temp4 + loss1;
		console.log("computer win");
		audio.pause();
		endMusic = new Audio("audio/iWin.mp4");
		endMusic.play();
	} else if (board_full) {
		winner_statement.innerText = "Draw...";
		winner_statement.classList.add("draw");
		draw1++;
		draw2++;
		temp5 = temp5 + draw1;
		temp6 = temp6 + draw2;
		console.log("draw");
		audio.pause();
		endMusic = new Audio("audio/draw.mp4");
		endMusic.play();
	}

	document.getElementById("playerstat1").innerText = temp1;
	document.getElementById("computerstat1").innerText = temp2;
	document.getElementById("loss1").innerText = temp4;
	document.getElementById("loss2").innerText = temp3;
	document.getElementById("draw1").innerText = temp5;
	document.getElementById("draw2").innerText = temp6;

	if (loss1 == 1 || loss2 == 1 || draw1 == 1 || draw2 == 1) { //when the game ends, I create and add a button in the 'div-end-of-game' div
		var btn = document.createElement("button");
		btn.className = "btn-sound";
		btn.innerHTML = "<i class='fa fa-volume-up' aria-hidden='true'></i>";
		btn.onclick = muteAudio;
		document.getElementsByClassName("div-end-of-game")[0].appendChild(btn);
	}
};

var x = document.getElementById("myAudio");

const muteAudio = () => { //mutes or demutes all the audio (music and end game music)
    var btn = document.getElementsByClassName("btn-sound")[0];
    if(!x.muted) {
        x.muted = true;
        endMusic.muted = true;
        btn.innerHTML = "<i class='fa fa-volume-down' aria-hidden='true'></i>"; //change the icon of the button when the sound is muted
      }
      else {
        x.muted = false;
        endMusic.muted = false;
        btn.innerHTML = "<i class='fa fa-volume-up' aria-hidden='true'></i>";
      }
}

const check_line = (a,b,c) => {
    let status =
        play_board[a] == play_board[b] &&
        play_board[b] == play_board[c] &&
        (play_board[a] == player || play_board[a] == computer);
    if (status) {
        document.getElementById(`block_${a}`).classList.add("won");
        document.getElementById(`block_${b}`).classList.add("won");
        document.getElementById(`block_${c}`).classList.add("won");
    }
    return status;
};

/**
 * 判断当前棋盘状态是否存在获胜者
 * @returns {string} 返回获胜者(X/O) 或者 棋盘已满(tie), 使用字典scores映射到数字 1 -1 0
 * 如果这一轮还没结束，则返回空字符串 ""
 */
const check_match = () => {
	// 判断是否存在横条的三个相同
    for (let i=0; i<9; i+=3) {
        if(check_line(i,i+1,i+2)) {
            return play_board[i];
        }
    }
	// 判断是否存在竖条的三个相同
    for (let i=0; i<3; i++) {
        if(check_line(i, i+3, i+6)) {
            return play_board[i];
        }
    }
	// 判断斜着的两个方向
    if(check_line(0,4,8)) {
        return play_board[0];
    }
    if(check_line(2,4,6)) {
        return play_board[2];
    }
    checkBoardComplete();
    if(board_full) return "tie";
    return "";
}

const reset_board = () => {
	// 播放开始音乐
	beginMusic = new Audio("audio/pressStart.MP4");
    beginMusic.play();
    const winner_statement = document.getElementById("winner");
    play_board = ["", "", "", "", "", "", "", "", ""];
    board_full = false;
    winner_statement.classList.remove("playerWin");
    winner_statement.classList.remove("computerWin");
    winner_statement.classList.remove("draw");
    winner_statement.innerText = "";
    document.querySelector("#ai_level").disabled = false;
    const audio = document.querySelector("audio");
    render_board();
    randomizeStart();

    var mute_sound_btn = document.getElementsByClassName("btn-sound")[0];
    if (mute_sound_btn != undefined)
        mute_sound_btn.parentNode.removeChild(mute_sound_btn); //delete the button when reseting the board
}

/**
 * 页面初始执行的函数
 */
// 初始渲染面板
render_board();
// 配置AI
configure_ai();


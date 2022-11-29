// 表示当前轮数
var round = 1;
// play_board 表示游戏面板的单元格 当前是哪个角色占有
let play_board = ["", "", "", "", "", "", "", "", ""];
// 表示玩家和电脑分别对应的符号
const player = "X";
const computer ="O";
/*
 记录游戏是否已经结束， 值为true时 棋盘不能再进行下一步
 */
let board_full = false;
var ai_level;

const updateRound = () => {
	$("#round").text(round);
}

/**
 * 作用：对每一步的结果进行渲染和处理
 * 执行时机：player or computer 每一步之后执行
 * @return {number} fin=0表示本轮还没结束，fin=1表示本轮已经结束
  */
const game_loop = () => {
	let res = "";
	let fin = 0;

	// console.log("game_loop execute...");

	// 渲染游戏面板
	render_board();
	// 检查是否棋盘已满，已满则判定draw平局
	// checkBoardComplete();

	/*
	 	根据本次结果装填判断是否本轮可以结束了 并更新相关信息
	 */
	res = checkWinner();

	/**
	 * 如果本轮结束 那么就判断此次匹配是否已经完成五轮，如果已经五轮，则执行最终的操作逻辑
	 */
	if (res != ""){
		if (round == 5) {
			endOperation();
		} else { // 如果还没结束 reset重置棋盘
			round ++;
			updateRound();
			reset_board();
		}
		fin = 1;
	}
	return fin;
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
 * 选择随机开始的先手角色 用户or电脑
 */
const randomizeStart = () => {
	if (play_board.every(item => item === "")) {
		// const PLAYER = 0;
		const COMPUTER = 1;
		const start = Math.round(Math.random());
		if (1) { // start === COMPUTER
			// 电脑先手
			console.log("COMPUTER STARTED")
			addComputerMove(ai_level);
		} else {
			// 玩家先手
			console.log("PLAYER STARTS");
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

		console.log("player操作：选择 " + e + " 位置");

		// 对这一步的结果进行处理
        let fin;
		fin = game_loop();
        if (fin == 0) addComputerMove(ai_level);
    }
};

const addComputerMove = (ai_level) => {
	// console.log("ai_level: ", ai_level);
    if(!board_full){
        let score;
        let compare = (a, b) => a > b;
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
		console.log("computer操作：选择 " + nextMove + " 位置");
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
var playerWin = 0;
var computerWin = 0;
var playerLost = 0;
var computerLost = 0;
var draw = 0;

const updateScore = () => {
	// 更新结果表的值
	document.getElementById("playerstat1").innerText = playerWin;
	document.getElementById("computerstat1").innerText = computerWin;
	document.getElementById("loss1").innerText = playerLost;
	document.getElementById("loss2").innerText = computerLost;
	document.getElementById("draw1").innerText = draw;
	document.getElementById("draw2").innerText = draw;
}

var endMusic = null; // the Audio object for the music at the end of the game

/**
 * 判断获胜信息 并更新相关信息
 * @return {string} 把本轮的结果返回给gameloop()
 */
const checkWinner = () => {
	// 判断当前棋盘状态是否存在获胜者, X表示玩家赢，O表示电脑赢，tie表示平局，空字符串表示本轮还没结束
	let res = check_match();

	// 根据获胜者信息来更新 结果表 和 最终逻辑（if 五轮结束）
	if (res == player) {
		// 更新值
		playerWin ++;
		computerLost ++;
		// 棋盘完全结束 full
		board_full = true;

		console.log("player win in round " + round);
	} else if (res == computer) {
		// 更新值
		computerWin ++;
		playerLost ++;
		board_full = true;

		console.log("computer win in round " + round);
	} else if (board_full) { // 棋盘已满，平局
		draw ++;
		console.log("draw in round " + round);
	}

	// 如果本轮结束，则更新结果表
	if (res != "") {
		updateScore();
	}

	return res;
};

/**
 * 一次匹配（五轮）结束后的处理逻辑
 * @param x
 */
const endOperation = () => {
	let winner_role = null;
	// 判断winner role 0表示玩家赢，1表示电脑赢 2表示平局
	if (playerWin > computerWin) winner_role = 0;
	else if (playerWin < computerWin) winner_role = 1;
	else winner_role = 2;

	/*
		更新页面元素
	 */
	// 如果电脑赢，则更新上方Game Over，将round元素的值改成Over就行
	if (winner_role == 1) {
		$("#round").text("Over");
	}

	// 在下方显示获胜者
	if (winner_role == 0) {
		$("#prompt").text("Player WIN!");
	} else if (winner_role == 1) {
		$("#prompt").text("Computer WIN!");
	} else {
		$("#prompt").text("DRAW!");
	}

	// 比较并保存TopScore

	// 播放音乐
	// audio.pause();
	if (1) {  // 玩家获胜
		endMusic = new Audio("audio/iWin.mp4");
		endMusic.play();
	} else if (2) { // 电脑获胜
		endMusic = new Audio("audio/youWin.mp4");
		endMusic.play();
	} else { // 平局
		endMusic = new Audio("audio/draw.mp4");
		endMusic.play();
	}
}

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

/**
 * 重置棋盘，开始一次匹配中新的一轮
 */
const reset_board = () => {
	console.log('执行reset_board操作');
	// 重置棋盘内容
    play_board = ["", "", "", "", "", "", "", "", ""];
    board_full = false;
    document.querySelector("#ai_level").disabled = false;
    render_board();

	// 随机开始
    randomizeStart();
}

/**
 * 开始新的一次匹配（对应五轮）
 */
const begin_new_game = () => {
	// 重置轮数
	round = 1;
	updateRound();

	// 重置提示语
	$("#prompt").text("PRESS START");

	// 重置比分表
	playerWin = computerWin = playerLost = computerLost = draw = 0;
	updateScore();

	// 重置棋盘
	reset_board();
}

// $(() => {
// 	// 播放开始音乐
// 	const audio = document.querySelector("audio");
// 	beginMusic = new Audio("audio/pressStart.MP4");
// 	beginMusic.play();
// });

/**
 * 页面初始执行的函数
 */
// 配置AI, 其中配置的ai_level 在下一步的begin_new_game() -> reset_board() -> randomizeStart() 中进行电脑先手时要用到
configure_ai();

// 初始渲染面板
begin_new_game();


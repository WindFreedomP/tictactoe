# Report

## Implementation of start button and reset_board
我们把start按钮的click事件绑定begin_new_game()方法。

begin_new_game方法用于开始一次新的游戏，其中每场游戏包括五轮。
```js
/**
 * 开始新的一次匹配（对应五轮）
 */
const begin_new_game = () => {
	// 标识游戏进行中，用于停止语音
	running = true;

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
```

每一轮开始时需要通过reset_board()来重置棋盘并且选择随机开始的角色，对应randomizeStart函数。
```js
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
```

## The move of Player and Computer
首先是game_loop函数对每一步的结果进行处理。
* 我们用play_board变量保存棋盘每个单元的值，然后通过render_board函数渲染到前端页面
* 接下通过checkWinner函数来对每一步结果进行判断，是否已经达到结束状态，并更新相关信息
```js
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
		sleep(1000).then(() => {
			if (round == tot_round) {
				endOperation();
			} else { // 如果还没结束 reset重置棋盘
				round ++;
				updateRound();
				reset_board();
			}
			fin = 1;
		});
	}
	return fin;
}
```

然后通过addComputerMove和addPlayerMove来实现电脑和玩家的落子。
其中电脑通过AI来实现落子选择，ai_level控制AI的难易程度。
```js
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
```

## Different First Player
```javascript
/**
 * 选择随机开始的先手角色 用户or电脑
 */
const randomizeStart = () => {
	if (play_board.every(item => item === "")) {
		// const PLAYER = 0;
		const COMPUTER = 1;
		const start = Math.round(Math.random());
		if (start === COMPUTER) { // start === COMPUTER
			// 电脑先手
			console.log("COMPUTER STARTED")
			addComputerMove(ai_level);
		} else {
			// 玩家先手
			console.log("PLAYER STARTS");
		}
	}
}
```

## win_line
我们将三个单元格设置为同一种颜色
```js
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
```

## Top Score
每次加载游戏后读取文件并显示
```js
// 实现从topscore文件中读取内容并显示
const display_topscore = () => {
	const reader = new FileReader();
	$.get(
		url = "./topscore.txt",
		callback = (data) => {
			tmp = data.split(' ');
			$("#score").text(tmp[1]);
			$("#name").text(tmp[0]);
			// console.log('topscore: ', data);
		}
	);
}
```

每次游戏结束比较当前的score和文件保存的score，如果当前的score更高，则提示用户输入name并更新文件
```js
/*
	 	比较并保存TopScore
	 */
	let name;
	// 首先获取原来的值
	score = parseInt($("#score").text());
	console.log('previous score: ' + score);
	// 获取现在的值 即playerWin
	if (playerWin > score) {
		alert("You broke the highest record!!!");
		name = prompt('input your name');
		console.log("user who break the record: ", name);

		// 保存数据到本地
		var blob = new Blob([name + ' ' + playerWin], {type: 'text/plain'})

		var url = window.URL.createObjectURL(blob)
		// 上面这个是创建一个blob的对象连链接，
		var link = document.createElement('a')
		// 创建一个链接元素，是属于 a 标签的链接元素，所以括号里才是a，

		link.href = url;
		// 把上面获得的blob的对象链接赋值给新创建的这个 a 链接
		link.setAttribute('download', "topscore.txt")
		// 设置下载的属性（所以使用的是download），这个是a 标签的一个属性
		// 后面的是文件名字，可以更改
		link.click();
		// 使用js点击这个链接
	}
```

## 定时播报声音
首先定义running变量标识运行状态。

然后执行定时任务 `setInterval("audio_pressStart()", 10000);`

当running==true时，audio_pressStart中进行判断停止播放声音。


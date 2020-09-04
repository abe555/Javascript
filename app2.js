
var user_hand = prompt("じゃんけんの手を選んでください。")

while((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー" ) && (user_hand != null)){
	alert('グー、チョキ、パーのいずれかを入力してください。');
	user_hand = prompt("じゃんけんの手を選んでください。")
}
var js_hand = getJShand();

var judge = winLose(user_hand, js_hand);

if(user_hand != null){
	alert("あなたの選んだ手は" + user_hand + "です。\nJSの選んだ手は" + js_hand + "です。\n結果は" + judge + "です");
}else {
	alert("また挑戦してね");
}

function getJShand(){
	var js_hand_num = Math.floor( Math.random() * 3 );

	if(js_hand_num == 0){
		js_hand = "グー";
	}else if(js_hand_num == 1){
		js_hand = "チョキ";
	}else if(js_hand_num == 2){
		js_hand = "パー";
	}

	return js_hand;
}

function winLose(user, js){
	var winLoseStr;

	if(user == "グー"){
		if(js == "グー"){
			winLoseStr = "あいこ";
		}else if(js == "チョキ"){
			winLoseStr = "負け";
		}else if(js == "パー"){
			winLoseStr = "勝ち";
		}
	}else if(user == "チョキ"){
		if(js == "グー"){
			winLoseStr = "負け";
		}else if(js == "チョキ"){
			winLoseStr = "あいこ";
		}else if(js == "パー"){
			winLoseStr = "勝ち";
		}
	}else if(user == "パー"){
		if(js == "グー"){
			winLoseStr = "勝ち";
		}else if(js == "チョキ"){
			winLoseStr = "負け";
		}else if(js == "パー"){
			winLoseStr = "あいこ";
		}
	}

	return winLoseStr;
}
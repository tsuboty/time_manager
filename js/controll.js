$(function(){
	var isButton = false; //true: 稼働中　false:停止中
	var stopTime;
	var diff;


	$(".button").on("click",function(){
		if(isButton){
			//停止する
			isButton=false;
			$(".button").css({
				'background-image' : 'url("./img/start.png")'
			});


		}else{
			//稼働する
			isButton=true;
			$(".button").css({
				'background-image' : 'url("./img/stop.png")'
			});
			console.log("start");
			console.log(startTime);
			countDown();

		}
	});

});


var startTime = new Date().getTime();
function countDown(){
	var date_o = new Date();
	stopTime = date_o.getTime();
	diff = stopTime - startTime;
	console.log("stop");
	diff = Math.floor(diff / 1000);

	console.log(diff);

	$(".timer").text(diff);

	setTimeout('countDown()', 1000);
			
	
};
function init(){
	size_adjust();
}
init();
function size_adjust(){
	var width_size = window.outerWidth;
	if(width_size <= 767){
		//sp
		document.getElementById("create_account_img").src = "./corp/lp/fxop/images_responsive/btn-koza-ad-sp.png";//口座登録
			
		document.getElementById("how_to_buy_3step_img").src = "./corp/lp/fxop/images_responsive/img-sec02-figure-sp.png";//3ステップ購入方法
			
		document.getElementById("step1_img").src = "./corp/lp/fxop/images_responsive/img-sec07-flow-step1-sp.png";//スピード本人確認 STEP1
		document.getElementById("step2_img").src = "./corp/lp/fxop/images_responsive/img-sec07-flow-step2-sp.png";//スピード本人確認 STEP2
		document.getElementById("step3_img").src = "./corp/lp/fxop/images_responsive/img-sec07-flow-step3-sp.png";//スピード本人確認 STEP3
		document.getElementById("step4_img").src = "./corp/lp/fxop/images_responsive/img-sec07-flow-step4-sp.png";//スピード本人確認 STEP4
		document.getElementById("judge_img").src = "./corp/lp/fxop/images_responsive/img-sec07-flow-judge-sp.png";//スピード本人確認 審査
	}else{
		//pc
		document.getElementById("create_account_img").src = "./corp/lp/fxop/images_responsive/btn-koza-ad-pc.png";//口座登録
			
		document.getElementById("how_to_buy_3step_img").src = "./corp/lp/fxop/images_responsive/img-sec02-figure-pc.png";//3ステップ購入方法
			
		document.getElementById("step1_img").src = "./corp/lp/fxop/images_responsive/img-sec07-flow-step1-pc.png";//スピード本人確認 STEP1
		document.getElementById("step2_img").src = "./corp/lp/fxop/images_responsive/img-sec07-flow-step2-pc.png";//スピード本人確認 STEP2
		document.getElementById("step3_img").src = "./corp/lp/fxop/images_responsive/img-sec07-flow-step3-pc.png";//スピード本人確認 STEP3
		document.getElementById("step4_img").src = "./corp/lp/fxop/images_responsive/img-sec07-flow-step4-pc.png";//スピード本人確認 STEP4
	}
}
window.onresize = size_adjust;
function binary_option(argument){
	display = argument.parentNode.children[1].style.display;
	switch(display){
		case "block":
			argument.parentNode.children[1].style.display = "none";
			break;
		case "none":
			argument.parentNode.children[1].style.display = "block";
			break;
	}
}
function other_bank_sp(argument){
	display = argument.parentNode.children[1].style.display;
	switch(display){
		case "block":
			argument.parentNode.children[1].style.display = "none";
			break;
		case "none":
			argument.parentNode.children[1].style.display = "block";
			break;
	}
}
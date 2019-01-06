var headingsArr = ["a", "a.iWantYou", "a", "a", "a.youWantMe", "a", "a"];


headingsArr.indexOf("a.iWantYou")
headingsArr.findIndex(/a\..*/, headingsArr.indexOf("a.iWantYou"))

headingsArr.findIndex((el)=>{

});

for (let i = headingsArr.indexOf("a.iWantYou") + 1; i < headingsArr.length; i++) {
	if (headingsArr[i].length == 1) {
		console.log(i, headingsArr[i]);
	}
	else {
		break;
	}
}

function isArmstrong(nums){
	var cube = 0
	var numsString = nums.toString();
	if (numsString.length < 6) {
		for (var i = 0; i < numsString.length; i++) {
			cube += Math.pow(parseInt(numsString[i]), numsString.length);
		};
		if (cube == nums){
			return true
		};
	};
	return false
}

function allArmstrongs(){
	var result = ''
	for (var i = 1; i < 99999; i++) {
		if (isArmstrong(i) == true){
			result += i.toString() + ' ' 
		}
	};
	return result.slice(0,-1)
}

function allSubstrings1(str){
	result = ''
	word = ''
	for (var i = 0; i < str.length-1; i++) {
		for (var r = i; r < str.length; r++) {
		word += str[r]
		result += word + ', '
		};
	word = ''
	};
	return result + str[str.length-1]
}

function allSubstrings2(str){
	result = []
	word = ''
	for (var i = 0; i < str.length; i++) {
		for (var r = i; r < str.length; r++) {
		word += str[r]
		result.push(word)
		};
	word = ''
	};
	return result
}

function maxWord(str){
	var res = str.split(" ");
	console.log(res)
	max = ''
	for (var i = 0; i < res.length; i++) {
		if (res[i].length > max.length){
			max = res[i]
		};
	};
	return max
}

let result = document.getElementById('result');
result.addEventListener('click', SendResult)




function SendResult () {
	
	let count = 0;
	
	let answer1 = document.getElementById('answer1');
	if (answer1.value == 3) count++;
	
	let answer2 = document.getElementById('answer2');
	if (answer2.value == 6) count++;
	
	let answer3 = document.getElementById('answer3');
	if (answer3.value == 5) count++;
	
	let answer4 = document.getElementById('answer4');
	if (answer4.value == 16) count++;
	
	let answer5 = document.getElementById('answer5');
	if (answer5.value == 1) count++;
	
	alert ('Количество правельных ответов: ' + count++);
	
	
	
};
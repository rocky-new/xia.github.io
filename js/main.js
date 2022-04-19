// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!'

// document.querySelector('html').onclick = function(){
// 	alert('hello world');
// }

let myImg = document.querySelector('img');
myImg.onclick = function(){
	let mySrc = myImg.getAttribute('src');
	if(mySrc === 'img/img.png'){
		myImg.setAttribute('src','img/2.jpg');
	}
	else{
		myImg.setAttribute('src','img/img.png');
	}
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
	let myName = prompt('请输入你的名字。');
	localStorage.setItem('name',myName);
	myHeading.textContent = 'Mozilla酷毙了，'+myName;
}

if(!localStorage.getItem('name')){
	setUserName();
}
else{
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Mozilla酷毙了，'+storedName;
}

myButton.onclick = function(){
	setUserName();
}
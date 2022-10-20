// const ulList = document.getElementById("list");
const ulList = document.createElement("ul");
document.body.appendChild(ulList);
for (let i = 1; i < 4; i++) {
	const liItem = document.createElement("li");
	ulList.appendChild(liItem);
	liItem.textContent = i;
}
const lastLiElement = document.querySelector("li:last-child");

lastLiElement.textContent = "ostatni element";
lastLiElement.style.color = "red";

const button1 = document.querySelector(".btn1");
const button2 = document.querySelector(".btn2");
const button3 = document.querySelector(".btn3");

const paragraph = document.querySelector(".lorem");

// const hide = () => paragraph.style.hide;
button1.addEventListener("click", function () {
	paragraph.classList.add("show");
	paragraph.classList.remove("hide");
});
button2.addEventListener("click", function () {
	paragraph.classList.add("hide");
	paragraph.classList.remove("show");
});

button3.addEventListener("click", function () {
	paragraph.classList.toggle("show");
});

function test1() {
	console.log("siemka");
}
// setInterval(test1,1000);

console.log(Math.pow(5, 5));

console.log(Math.floor(Math.random() * 10));

const link = document.querySelector("a");
const img = document.querySelector("img");
const h1 = document.querySelector("h1");

link.setAttribute("target", "_blank");

console.log(img.getAttribute("alt"));

const hasAtr = img.hasAttribute("src");
console.log(hasAtr);

const div = document.querySelector(".data");
console.log(div.dataset.text);

console.log(div.dataset.moreInfo);
console.log(hasAtr);


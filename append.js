const fruitList=document.querySelector("#fruits-container ul")

const li = document.createElement("li")
li.innerText='kathal'
fruitList.appendChild(li)
// console.log(fruitList);

const mainContainer = document.getElementById("main-container")
// console.log(mainContainer);

const section=document.createElement("section")
//  console.log(section);
const h1=document.createElement('h1')
h1.innerText='My Food List in Bellow'
section.appendChild(h1)
const ul=document.createElement('ul')

const li1 = document.createElement('li')
li1.innerText='vat'
ul.appendChild(li1)
const li2 = document.createElement('li')
li2.innerText='mash'
ul.appendChild(li2)
const li3 = document.createElement('li')
li3.innerText='meet'
ul.appendChild(li3)
const li4 = document.createElement('li')
li4.innerText='misti'
ul.appendChild(li4)
console.log(ul);
section.appendChild(ul)
mainContainer.appendChild(section)
// set HTML Directly
const dressSection=document.createElement('section')
 
dressSection.innerHTML= `
<h1>My Drese Section</h1>
<ul>
<li>sari</li>
<li>T shirt</li>
<li>sari</li>
<li>Lungi</li>
</ul>

`
mainContainer.appendChild(dressSection)

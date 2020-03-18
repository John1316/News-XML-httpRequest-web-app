// function welcome(userName , salary){

// console.log(`welcome ${userName} your salary is ${salary}`)

// }

// welcome("ali" , 5000)
// let students = new Set()

// students.add("ali")
// students.add("john")
// students.add("mary")
// students.add("berbara")
// students.add("hambozo")

// students.size
// students.clear()

// console.log(students.has("hamada"))

let rowData = document.getElementById("rowData");
let posts = "";
let req;
let links = document.getElementsByClassName("nav-link");

for (let i = 0; i < links.length; i++) {
	links[i].addEventListener("click", function(e) {
		let category = e.target.innerHTML;
		getNews(category);
	});
}

getNews("general");

function getNews(category) {
	if (window.XMLHttpRequest) {
		req = new XMLHttpRequest();
	} else {
		req = new ActiveXObject("Microsoft.Xmlhttp");
	}

	let url = `http://newsapi.org/v2/top-headlines?country=eg&category=${category}&apiKey=ecd2176861394402bb5d9a98a16437c2`;
	req.open("GET", url);

	req.onreadystatechange = function() {
		if (req.status == 200 && req.readyState == 4) {
			posts = JSON.parse(req.response);
			posts = posts.articles;
			displayData();
		}
	};
	req.send();
}

function displayData() {
	let temp = ``;
	for (let i = 0; i < posts.length; i++) {
		temp += ` <div class="col-md-3">
                  <a href="${posts[i].url}">
                  <img class="img-fluid" src="${posts[i].urlToImage}">
                  <h3>${posts[i].title}</h3>
                  <p>${posts[i].description}</p>
                  </a>
                   </div>`;
	}
	rowData.innerHTML = temp;
}

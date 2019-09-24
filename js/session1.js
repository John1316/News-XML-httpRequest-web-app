let rowData = document.getElementById("rowData");
let posts ="";
let req;
let links = document.getElementsByClassName("nav-link")


for(let i=0; i<links.length ; i++)
{
    links[i].addEventListener("click" , function (e) {
         let cateogry =  e.target.innerHTML ;
         getNews(cateogry);
      })
}


getNews ('general');

function getNews (cateogry)
{

if (window.XMLHttpRequest)
{
req = new XMLHttpRequest ();
}
else 
{
    req = new ActiveXObject ('Microsoft.Xmlhttp');
}
let Url = 'https://newsapi.org/v2/top-headlines?country=eg&category='+cateogry+'&apiKey=aac542ad5ff84029b0c3f0c7193e5c95'
req.open('GET' ,  Url );



req.onreadystatechange =function() {

    if (req.status == 200 && req.readyState==4) 
    {
        posts= JSON.parse( req.response );
        posts = posts.articles;
        displayData ();

    }

}

req.send();
}

function displayData ()
{

let temp =``;

for(let i=0; i<posts.length ; i++)
    {
        temp += `<div class="col-md-3">
                
           <a href=${posts[i].url}>
           <div class="post">
           <img class="img-fluid" src='${posts[i].urlToImage}' />   
            <h5>${posts[i].title}</h5> 
               <p>${posts[i].description}</p>

        </div>
        </a>
    </div>` 

    } 
   
    rowData.innerHTML= temp;   
}


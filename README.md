# HACKED NEWS
![alt text](https://github.com/michaeldidonato/hackednews/blob/main/img/Cattura3.JPG)
This web app allows you to read and load the most recent tecnology news from all over the world.

## Built with:
* HTML/CSS
* [MDBootstrap](https://mdbootstrap.com/)
* JavaScript
* [Hacker News API](https://github.com/HackerNews/API) 
* [Google Font](https://fonts.google.com/) 

## Istallation
1. Clone the repo: 
```sh 
gh repo clone michaeldidonato/hackednews
```
2. Open index.html file on broswer

3. Otherwise click the following link to try the app online: https://michaeldidonato.github.io/hackednews/

## How it works and Usage
At the startup the app load the first 10 news calling the API, it shows title, date and button where the user will click to read the page. If you want to load more news click the button "LOAD MORE" and it will be shown others 10 news  
![alt text](https://github.com/michaeldidonato/hackednews/blob/main/img/Cattura1.JPG)

### Behind the app

When we load the web page, JS calls the API https://hacker-news.firebaseio.com/v0/newstories.json through the fetch request and it gets an array of 500 ID. Then we use the ID's to fetch every single object that will be used to catch the title, the date, the hour and the url. In the following code you'll see what  i've explained 

```js
let response = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json');
  let dataId = await response.json();
  
  for(; i<end; i++){
    console.log(dataId[i]);
    let article = await fetch(`https://hacker-news.firebaseio.com/v0/item/${dataId[i]}.json`);
    let resObj = await article.json();
    createCards(resObj.title, resObj.url, resObj.time);
```

After that the cards will be created dinamically through JS with the following function:
```js
function createCards(title,url,timeUnix) {
let mainDivCard = document.createElement('div');
mainDivCard.setAttribute('class','col-md-4');
mainDiv.appendChild(mainDivCard);

let divCard = document.createElement('div');
divCard.setAttribute('class','card-body border-card m-3')
mainDivCard.appendChild(divCard);

let titleLink = document.createElement('h5');
titleLink.setAttribute('class','card-title color-title')
titleLink.innerHTML = title;
divCard.appendChild(titleLink);

let unixTimestamp = timeUnix;
let milliseconds = unixTimestamp * 1000;
let dateObject = new Date(milliseconds);
let humanDateFormat = dateObject.toLocaleString();
console.log(humanDateFormat);
let showTime = document.createElement('p');
showTime.setAttribute('class','card-text');
showTime.innerHTML = humanDateFormat;
divCard.appendChild(showTime);

let showUrl = document.createElement('a');
showUrl.setAttribute('href', url);
divCard.appendChild(showUrl);
let buttonUrl = document.createElement('button');
buttonUrl.setAttribute('class','btn btn-secondary')      
buttonUrl.innerHTML = 'Read more';                 
showUrl.appendChild(buttonUrl);
}
```

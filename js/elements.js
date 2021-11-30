let mainDiv = document.querySelector('#divRow')

function createCards(title,url,timeUnix) {
let mainDivCard = document.createElement('div');
mainDivCard.setAttribute('class','col-lg-4');
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

let start = 0;
let i = start;
let end = start+10;

async function getValue() {
  let response = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json');
  let dataId = await response.json();

  for(; i<end; i++){
    console.log(dataId[i]);
    let article = await fetch(`https://hacker-news.firebaseio.com/v0/item/${dataId[i]}.json`);
      if(article.ok){
        let resObj = await article.json();
        console.log(resObj.title);
        console.log(resObj.url);
        console.log(resObj.time);
        createCards(resObj.title, resObj.url, resObj.time);
      }
    else {
      alert("HTTP-Error: " + response.status)
    }
  }
}

getValue();

let btn = document.querySelector('#btn');
btn.addEventListener('click', ()=>{
  start = start + 10;
  end = end + 10;
  getValue();
})

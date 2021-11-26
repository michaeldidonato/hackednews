let start = 0;
let i = start;
let end = start+10;

async function getValue() {
  let response = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json');
  if (response.ok) {
    let dataId = await response.json();

    for(; i<end; i++){
      let article = await fetch(`https://hacker-news.firebaseio.com/v0/item/${dataId[i]}.json`);
        if(article.ok){
          let resObj = await article.json();
          createCards(resObj.title, resObj.url, resObj.time);
        }
      else {
        alert("HTTP-Error: " + article.status)
      }
    }
  }
  else {
    alert("HTTP-Error: " + response.status)
  }
}

getValue();

let btn = document.querySelector('#btn');
btn.addEventListener('click', ()=> {
  start = start + 10;
  end = end + 10;
  getValue();
})

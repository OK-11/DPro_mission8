let number = 0;
const videoArea = document.getElementById("video");
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const button = document.getElementById('btn');

let jsonDate = [];

function getData() {
  const request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState == 4) {
      if(request.status == 200) {
        jsonDate = request.response;
      }
    }
  }
  request.open("GET", "ajax.json");
  request.responseType = "json";
  request.send(null);
}


function changeVideo() {
  button.addEventListener('click', e => {
    if (jsonDate.length == 0) {
      getData();
    } else {
      titleArea.innerHTML = jsonDate[number].title;
      contentArea.innerHTML = jsonDate[number].content;
      videoArea.setAttribute("src", jsonDate[number].url);
      if (number==2) {
        number = 0;
      } else {
        number++;
      }
    }
  })
}


function set(){
  getData();
  changeVideo();
}
window.onload = set;


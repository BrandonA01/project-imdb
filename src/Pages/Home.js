import React from 'react';

window.onload = function addImages(){
  const row1 = document.getElementById('row1')
  const row2 = document.getElementById('row2')
  const row3 = document.getElementById('row3')
  let index = 0;
  
  for(let i = 0; i <= 8; i++){
         fetch('https://dog.ceo/api/breeds/image/random')
          .then(res => res.json())
          .then(data => {
             if(i <= 2){
                row1.innerHTML += `<img id=${i} src="${data.message}" class="third fade-in" alt="wee doggo" />` 
             }
             else if(i <= 5){
                row2.innerHTML += `<img id=${i} src="${data.message}" class="third fade-in" alt="wee doggo" />` 
             }
             else {
                row3.innerHTML += `<img id=${i} src="${data.message}" class="third fade-in" alt="wee doggo" />` 
             }
          }); 
  }
  
  let changeImage = function(){
      let img = null;
      fetch('https://dog.ceo/api/breeds/image/random')
          .then(res => res.json())
          .then(data => {
              if(index < 3){
                  row1.children.item(index).setAttribute("class", `fade-out third`);
                  row1.children.item(index).setAttribute("src", `${data.message}`);
                  index++;
              }
              else if(index < 6){
                  row2.children.item(index-3).setAttribute("class", `fade-out third`);
                  row2.children.item(index-3).setAttribute("src", `${data.message}`); 
                  index++;
              }
              else {
                  row3.children.item(index-6).setAttribute("class", `fade-out third`);
                  row3.children.item(index-6).setAttribute("src", `${data.message}`); 
                  index++;

              }
              if(index == 9){
                  index = 0;
              }
      });
  }
  setInterval(changeImage, 7 * 1000);
}

class Home extends React.Component{
    
    render(){
      return(
        <div id="Home">
            <div class="info">
                <h2>Hi, I'm Brandon</h2>
                <p>I'm a graduate Software Developer!</p>
                <p>Here's some Dog Pictures:</p>
            </div>
                <div id="gallery">
                    <div id="row1" class="row">
                    </div>
                    <div id="row2" class="row">
                    </div>
                    <div id="row3" class="row">
                    </div>
                </div>
        </div>
      );
    }
  }

  export default Home;

  
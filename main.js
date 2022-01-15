
let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 3;

loadMoreBtn.onclick = () =>{
   let boxes = [...document.querySelectorAll('.container .box-container .box')];
   for (var i = currentItem; i < currentItem + 3; i++){
      boxes[i].style.display = 'inline-block';
   }
   currentItem += 3;

   if(currentItem >= boxes.length){
      loadMoreBtn.style.display = 'none';
   }
}

//sign show
let sign = document.querySelector('.sign-in');
function Open(){
   sign.classList.add('open');
}
// sign hidden
function Close(){
   sign.classList.remove('open');
}


//  validation
// sign-btn 
let data = [['admin','tranducnghia'],['123','456']];

function signbtn(){
let user = document.getElementById('email').value; 
let pass = (document.getElementById('password').value);

for (let i = 0; i<data.length; i++){
   for(let j = 0; j<data[i].length; j++){
      if(user === data[i][j] && pass === data[i+1][j]){
          document.getElementById('user').innerText = user ;
          sign.classList.remove('open');
      }
   }
}


//  document.getElementById('user').innerText = user ;
//  sign.classList.remove('open');
}


const API_KEY="api_key=f54821b68aa712ad0eb042b63564688a";
const BASE_URL="https://api.themoviedb.org/3";
const API_URL=BASE_URL+"/discover/movie?sort_by=popularity.desc&"+API_KEY;
const IMG_URL='https://image.tmdb.org/t/p/w500';
const searchURL=BASE_URL+'/search/movie?'+API_KEY;
const main =document.getElementById('main'); 
const form=document.getElementById('form');
const search=document.getElementById('search');

getmovies(API_URL);
function getmovies(url){
  fetch(url).then(res=>res.json()).then(data=>{
       console.log(data.results);
       showmovies(data.results);
         

      
  })
}

function showmovies(data){
    main.innerHTML = '';
    data.forEach(movie=> {
        const {title,poster_path,overview}=movie;
        const movieel=document.createElement('div');
        movieel.classList.add('movie');
        movieel.innerHTML=`
        <img src="${IMG_URL+poster_path}"alt="${title}">
        <div class="movie_info">
            
            <h3> ${title}</h3>
            
            </div>
      
          <div class="overview">
            <h3>overview</h3>
            ${overview}   
           </div>
        `
      main.appendChild(movieel);
    })
}

function find(){

form.addEventListener('submit',(e)=>{
  e.preventDefault();
const searchterm=search.value;
if(searchterm){
  getmovies(searchURL+'&query='+searchterm);

}
else{
  getmovies(API_URL);
}

})
}




function home(){
  getmovies(API_URL);
}

 
 

   
               
      
      
       
      
      
      
 
       
       
      
            

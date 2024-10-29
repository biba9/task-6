fetch('https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/')
    .then(res => res.json())
    
    .then(res => {
        featured(res); // استدعاء لجلب آخر 4 كتب
        popular(res);  // استدعاء لجلب أول 8 كتب
    }) 
let div = document.querySelector('.root-card');
function featured(res) {
                console.log(res);

    
    for (let  index = res.length - 4; index < res.length; index++) {
    div.innerHTML +=
            `<div class=" card border-0 first-color col-lg-3 col-md-12"style="width:18rem;"   >
            <div class="card-body mb-4  d-flex justify-content-center align-items-center border border-secondary-subtle secondary-color">
            <img class =" w-75 my-4" src =${res[index].simple_thumb} />
            </div>
         <h1 class="card-title green_color fs-5  my-2 text-center ">${res[index].author}</h1>
            <p class=" card-text text-center mb-5" >${res[index].title}</p>
            </div>
          
            `        
    }
}


let div2 = document.querySelector('.root2-card');
function popular(resulte) {
                console.log(resulte);

    
    for (let index = 30; index < 38;  index++) {
    div2.innerHTML +=
            `<div class=" card border-0 first-color col-lg-3 col-md-12"style="width:18rem;"   >
            <div class="card-body mb-4  d-flex justify-content-center align-items-center border border-secondary-subtle secondary-color">
            <img class =" w-75 my-4" src =${resulte[index].simple_thumb} />
            </div>
         <h1 class="card-title green_color fs-5  my-2 text-center ">${resulte[index].author}</h1>
            <p class=" card-text text-center mb-5" >${resulte[index].title}</p>
            </div>
          
            `        
    }
}

fetch('https://wolnelektury.pl/api/books/studnia-i-wahadlo/')
    .then(res => res.json())
    
    .then(res => {
        selling(res); 
    
    }) 
let div3 = document.querySelector('.root3-card');
function selling(res) {
                console.log(res);

    div3.innerHTML +=
            `   <img src=${res.cover} class=" best-book-img mb-5 mx-2 border  border-best-book" alt="best-book-img"/>
  <div class="detaill-body mt-5 mx-5 ">
    <h2 class="card-title text-capitalize mb-2 fs-1 best-selling-h2 ">best selling book</h2>
    <div class="border boder-sh mb-5"></div>
    <p class="card-text text-capitalize  text-secondary mb-3 "> ${res.authors[0].name}</p>
    <h3 class=" text-capitalize mb-4 fs-3">${res.fragment_data.title}</h3>
    <p class="lh-lg text-secondary mb-5">${res.fragment_data.html}</p>
    <button href="#" class="btn text-capitalize fw-bold mb-5 ">show it now
              <i class="fa-solid fa-arrow-right mx-2" style="color: #0a0a0a;"
                aria-hidden="true"></i>
      </button>
      </div>
     `
    }
// Lorem ipsu
//       m, dolor sit amet consectetur adipisicing elit, necessitatibus qui sequi 
//       voluptate! Veritatis modi fuga tenetur repellat!
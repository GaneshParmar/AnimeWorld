const animeWrap=document.getElementById('animeWrap');
const loader=document.getElementById('loader')

var url='https://ghibliapi.herokuapp.com/films'

fetch('https://ghibliapi.herokuapp.com/films')
.then(response => response.json())
.then(d=>{
      loader.classList.add('active');
        d.forEach(data => {
            
            animeWrap.innerHTML+=`<div class="animeCard">
                <img src="${data["image"]}" alt="" srcset="">
                <h4>${data["title"]}</h4>
                <button><a href="./moreInfo.html?animeid=${data['id']}">More Detail</a></button>
            </div>`
        });
}
)

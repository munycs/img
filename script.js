const accessKey = "K8x7RnfWgmkq1iLDrx2WX4KTJdVzmkZqOyAJ4-AI4t8";

const searchForm = document.getElementById('search')
const searchBox = document.getElementById('search-box')
const searchResult = document.getElementById('search-result')
const loadMore = document.getElementById('show-more')

let keyword = "";
let page = 1;

async function searchImages(){
    keyword = searchBox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();


    if(page === 1){
        searchResult.innerHTML = "";
    }
    const results = data.results;
    results.map((results) =>{
        const image = document.createElement("img");
        image.src = results.urls.regular;
        // const imageLink = document.createElement("a");
        // imageLink.href = results.links.html;
        // imageLink.target = "_blank";

        // imageLink.appendChild(image);

        searchResult.appendChild(image);
    })

    loadMore.style.display = "block";
}

searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    page =1;
    searchImages();
})

loadMore.addEventListener("click", ()=>{
    page++;
    searchImages();
})

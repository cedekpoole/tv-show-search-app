const form = document.querySelector("#search-form");
const cardRow = document.querySelector("#card-row");

form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const tvShow = this.elements.query.value;
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${tvShow}`);
    console.log(res.data)
    this.elements.query.value = "";
    makeShowImage(res.data)
})

const makeShowImage = (shows) => {
    for (let tvShow of shows){
        const div = document.createElement("DIV");
        div.setAttribute("class", "col-3 mb-2")
        const image = document.createElement("IMG");
        image.src = tvShow.show.image.medium;
        div.append(image)
        cardRow.append(div)
    }
}
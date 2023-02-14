const form = document.querySelector("#search-form");

form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const tvShow = this.elements.query.value;
    const res = await axios.get(`https://api.tvmaze.com/singlesearch/shows?q=${tvShow}`);
    console.log(res.data)
})
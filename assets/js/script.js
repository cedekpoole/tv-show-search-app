const form = document.querySelector("#search-form");
const cardRow = document.querySelector("#card-row");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  cardRow.innerHTML = "";
  const tvShow = this.elements.query.value;
  const config = { params: { q: tvShow } };
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
  this.elements.query.value = "";
  makeShowImage(res.data);
});

const makeShowImage = (shows) => {
  for (let tvShow of shows) {
    if (tvShow.show.image) {
      const div = document.createElement("DIV");
      div.setAttribute("class", "col-3 mb-2");
      const image = document.createElement("IMG");
      image.src = tvShow.show.image.medium;
      div.append(image);
      cardRow.append(div);
    }
  }
};

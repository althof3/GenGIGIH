const SOURCE_API_URL =
  "https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json";
const fetchBtn = document.getElementById("fetch-btn");
const tracksContainer = document.getElementById("playlist-wrapper");

const onSubmitForm = (form, event) => {
  event.preventDefault();
  console.log(form);
  alert("data submited succesfully! 😄");
  form.reset();
};

const renderNewCard = (data) => {
  tracksContainer.insertAdjacentHTML(
    "beforeend",
    `<div class='card'>ls
    
      <div class='card-avatar'>
        <img class='card-avatar__image' src=${data.album.images[1].url} alt=${data.album.name}>
      </div>
      <div class='card-desc'>
        <p>😀 ${data.album.name}</p>
        <p>👨‍🎤 ${data.name}</p>
        <p>📅 ${data.album.release_date}</p>
        <a target="_blank" href=${data.album.external_urls.spotify}><button>Play in Spotify</button></a>
      </div>
    </div>`
  );
}

fetchBtn.addEventListener("click", () => {
  fetch(SOURCE_API_URL)
    .then((res) => res.json())
    .then((data) => {
      renderNewCard(data)
      console.log(data);
    })
    .catch((err) => alert(err));
});

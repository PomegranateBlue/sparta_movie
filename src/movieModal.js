import { searchMovieData } from "./movieSearch.js";
import { fetchData } from "./movieCard.js";

const selectMovieCard = document.querySelector(".movieCard");
//위의 해당하는 영화카드를 클릭하면 클릭한 무비카드의
//id값을 통해 구분하고 해당 값의 데이터를 처리한다.
const selectEventPointer = document.querySelector(".movieContainer");
//이벤트 위임을 위한 변수로서 선택한 영화카드의 정보를 가리킬 것
//selectMovieCard를 선택하면 해당 요소의 데이터만 선택할 것
const modal = document.querySelector(".modal");
const modalMoviePoster = document.querySelector("#modalMoviePoster");
const modalMovieTitle = document.querySelector("#modalMovieTitle");
const modalMovieOverview = document.querySelector("#modalMovieOverview");
const modalMovieRating = document.querySelector("#modalMovieRating");
const modalMovieRelease = document.querySelector("#modalMovieRelease");
const modalMovieId = document.querySelector("[data-id");
const modalCloseBtn = document.querySelector("#closeModalBtn");

selectEventPointer.addEventListener("click", function (e) {
  console.log(e.target.closest(".movieCard"));
  const movieCard = e.target.closest(".movieCard");
  if (movieCard) {
    const movieData = {
      id: movieCard.querySelector("[data-id]").dataset.id,
      poster: movieCard.querySelector("#movieImage img").src,
      title: movieCard.querySelector("#movieTitle").textContent,
      overview: movieCard.querySelector("[data-overview]").dataset.overview,
      rating: movieCard.querySelector("#movieRating").textContent,
      release: movieCard.querySelector("[data-release]").dataset.release,
    };
    openModal(movieData);
  }
});

const openModal = (movieData) => {
  modal.style.display = "flex";
  modalMoviePoster.innerHTML = `<img src="${movieData.poster}"/>`;
  modalMovieTitle.innerHTML = `<span>${movieData.title}</span>`;
  modalMovieOverview.innerHTML = `<p>${movieData.overview}</p>`;
  modalMovieRating.innerHTML = `<span>평균 평점 : ${movieData.rating}</span>`;
  modalMovieRelease.innerHTML = `<span>개봉일 : ${movieData.release}</span>`;
};

modalCloseBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

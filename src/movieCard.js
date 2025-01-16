import { options } from "../app.js";
let movieImage = document.querySelector("#movieImage");
let movieTitle = document.querySelector("#movieTitle");
let movieRating = document.querySelector("#movieRating");
let movieId = document.querySelector("#movieId");
let movieOverview = document.querySelector("#movieOverview");
let movieRelease = document.querySelector("#movieRelease");

const movieContainer = document.querySelector(".movieContainer");
//해당 파일에서는 영화 데이터를 불러옴과 동시에 다른 파일로 내보낼 수 있도록한다.
export const fetchData = async () => {
  try {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1",
      options
    );
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("error occurred", error);
    return null;
  }
};

export const renderMovieCard = async () => {
  const data = await fetchData();
  for (let i = 0; i < data.results.length; i++) {
    let movieContent = data.results[i];
    movieImage = movieContent.poster_path;
    movieTitle = movieContent.title;
    movieRating = movieContent.vote_average;
    movieId = movieContent.id;
    movieOverview = movieContent.overview;
    movieRelease = movieContent.release_date;
    let tempHtml = `<div class="movieCard">
      <div id="movieImage"><img src=https://image.tmdb.org/t/p/w342${movieImage}></div>
      <div id="movieTitle">${movieTitle}</div>
      <div id="movieRating">평점 ${movieRating}</div>
      <div data-id="${movieId}"></div>
      <div data-overview="${movieOverview}"></div>
      <div data-release="${movieRelease}"></div>
    </div>`;
    movieContainer.innerHTML += tempHtml;
  }
};

fetchData();
renderMovieCard();

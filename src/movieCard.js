// let movieImage = document.querySelector("#movieImage");
// let movieTitle = document.querySelector("#movieTitle");
// let movieRating = document.querySelector("#movieRating");
// const movieContainer = document.querySelector(".movieContainer");
// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Zjg2N2MyYjNiNDRjZmE0NzAxODdlMWRlNjQxMDM2MiIsIm5iZiI6MTcwODc2Mjk0Mi43NzYsInN1YiI6IjY1ZDlhNzNlNzJkODU1MDE4NWJjMjg0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UYalcSODuTn5-UDZXy0V8UTx_KhlojTLsbUE3ayggqc",
//   },
// };

// fetch(
//   "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1",
//   options
// )
//   .then((res) => res.json())
//   .then((data) => {
//     for (let i = 0; i < data.results.length; i++) {
//       let movieContent = data.results[i];
//       movieImage = movieContent.poster_path;
//       movieTitle = movieContent.title;
//       movieRating = movieContent.vote_average;
//       let tempHtml = `<div class="movieCard">
//         <div id="movieImage"><img src=https://image.tmdb.org/t/p/w342${movieImage}></div>
//         <div id="movieTitle">${movieTitle}</div>
//         <div id="movieRating">${movieRating}</div>
//       </div>`;
//       movieContainer.innerHTML += tempHtml;
//     }
//     // let testMovie = data.results[0];
//     // movieImage = testMovie.poster_path;
//     // movieTitle = testMovie.title;
//     // movieRating = testMovie.vote_average;
//     console.log(movieTitle);
//     console.log(movieRating);
//     console.log(movieImage);
//     console.log(data.results.length);

//     // let tempHtml = `<div class="movieCard">
//     //       <div id="movieImage"><img src=https://image.tmdb.org/t/p/w342${movieImage}></div>
//     //       <div id="movieTitle">${movieTitle}</div>
//     //       <div id="movieRating">${movieRating}</div>
//     //     </div>`;
//     // movieContainer.innerHTML = tempHtml;
//   })
//   .catch((err) => console.error(err));

///위에는 fetch, then 사용

import { options } from "../app.js";
let movieImage = document.querySelector("#movieImage");
let movieTitle = document.querySelector("#movieTitle");
let movieRating = document.querySelector("#movieRating");
let movieId = document.querySelector("#movieId");
let movieOverview = document.querySelector("#movieOverview");
let movieRelease = document.querySelector("#movieRelease");

const movieContainer = document.querySelector(".movieContainer");

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
      <div id="movieRating">${movieRating}</div>
      <div data-id="${movieId}"></div>
      <div data-overview="${movieOverview}"></div>
      <div data-release="${movieRelease}"></div>
    </div>`;
    movieContainer.innerHTML += tempHtml;
  }
};

fetchData();
renderMovieCard();

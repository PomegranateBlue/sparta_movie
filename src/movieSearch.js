import { options } from "../app.js";
import { fetchData, renderMovieCard } from "./movieCard.js";
export let searchMovieData = [];
const userInput = document.querySelector("#userInput"); // 사용자 입력 감지
const searchContainer = document.querySelector(".movieContainer"); //검색한 무비카드 담는 태그

//search API 호출
const searchMovie = async (query) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?include_adult=true&language=ko-KR&query=${encodeURIComponent(
        query
      )}`,
      options
    );
    const data = await res.json();
    searchMovieData += data;

    renderSearchMovie(data.results, query);
    //검색어를 렌더링하는  함수에 전달하고 ,data의 results 부분전달
    console.log(data);
    console.log(typeof data.results);
  } catch (error) {
    console.error("Error on movieSearch.js", error);
  }
};
//debounce
function debounce(callback, delay) {
  let timeoutId; // 타이머 ID를 저장할 변수
  return function (...args) {
    clearTimeout(timeoutId); // 기존 타이머 제거
    timeoutId = setTimeout(() => {
      callback(...args); // 딜레이 이후 콜백 실행
    }, delay);
  };
}

//사용자 검색어 처리

const renderSearchMovie = (movieData, query) => {
  searchContainer.innerHTML = "";

  movieData.forEach((movie) => {
    const { poster_path, title, vote_average, id, overview, release_date } =
      movie;

    const movieCard = `<div class="movieCard">
      <div id="movieImage"><img src=https://image.tmdb.org/t/p/w342${poster_path}></div>
      <div id="movieTitle">${title}</div>
      <div id="movieRating">평점 ${vote_average}</div>
      <div data-id="${id}"></div>
      <div data-overview="${overview}"></div>
      <div data-release="${release_date}"></div>
    </div>`;
    searchContainer.innerHTML += movieCard;
  });
};

userInput.addEventListener(
  "input",
  debounce(() => {
    const query = userInput.value.trim();
    if (query === "") {
      searchContainer.innerHTML = "";

      renderMovieCard();
    } else {
      searchMovie(query);
    }
  }, 300)
);

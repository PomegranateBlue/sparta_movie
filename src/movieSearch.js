import { options } from "../app.js";
import { fetchData, renderMovieCard } from "./movieCard.js";
//const SearchMovieBaseUrl = "https://api.themoviedb.org/3/search/movie";
export let searchMovieData = [];
const userInput = document.querySelector("#userInput"); // 사용자 입력 감지
const searchContainer = document.querySelector(".movieContainer"); //검색한 무비카드 담는 태그
//여기다가 영화 카드 늘여놓기

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

userInput.addEventListener(
  "input",
  debounce(() => {
    const query = userInput.value.trim();
    const mainPage = document.querySelector(".movieContainer");
    if (query === "") {
      //searchContainer.innerHTML = "";
      fetchData();
      renderMovieCard();
    } else {
      searchMovie(query);
    }
  }, 300)
);

//검색한 거 화면에 보여지는 함수
//movieData는 API로부터 받아온 영화 데이터이,고,query는 사용자의 검색어 입력이다
//API 호출 시 renderSearchMovie를 호출하면서 보내준 데이터는 data.results
const renderSearchMovie = (movieData, query) => {
  searchContainer.innerHTML = "";

  const searchFilter = movieData.filter((movie) => {
    const { title, original_title, overview } = movie;
    const queryLow = query.toLowerCase();
    return (
      (title && title.toLowerCase().includes(queryLow)) ||
      (original_title && original_title.toLowerCase().includes(queryLow)) ||
      (overview && overview.toLowerCase().includes(queryLow))
    );
  });
  //필터링 된 거 기준 화면 렌더링에 구현
  searchFilter.forEach((movie) => {
    const { poster_path, title, vote_average, id } = movie;
    const movieCard = `<div class="movieCard">
    <div id="searchMovieImage"><img src=https://image.tmdb.org/t/p/w342${poster_path}></div>
    <div id="searchMovieTitle">${title}</div>
    <div id="searchMovieRating">${vote_average}</div>
    <div data-id="${id}"></div>
  </div>`;

    searchContainer.innerHTML += movieCard;
  });
};

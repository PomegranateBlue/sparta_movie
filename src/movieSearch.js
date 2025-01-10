import { options } from "../app.js";

const SearchMovieBaseUrl = "https://api.themoviedb.org/3/search/movie";

const userInput = document.querySelector("#userInput");
const searchList = document.querySelector(".movieSearchList");
//여기다가 영화 카드 늘여놓기
userInput.addEventListener("input", async () => {
  const searchKeyword = userInput.value.trim();

  try {
    const res = await fetch(
      `${SearchMovieBaseUrl}?include_adult=true&language=ko-KR&query=${encodeURIComponent(
        searchKeyword
      )}`,
      options
    );
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
});

import { options } from "../app.js";
let userInput = document.querySelector("#userInput").value;

const movieSearch = async () => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/collection?query=${userInput}&include_adult=false&language=en-US&page=1`,
      options
    );
    const data = res.json();
  } catch (error) {
    console.log("Movie search has a problem", error);
  }
};

movieSearch();

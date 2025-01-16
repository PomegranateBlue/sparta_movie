

let bookmarkContainer = document.querySelector(".movieContainer");
const addBookmark = document.querySelector("#bookmarkBtn");
const bookmarkPage = document.querySelector("#bookmarkPage");
const saveMovieToLocal = () => {
  const bookmarkList =
    JSON.parse(localStorage.getItem("bookmarkedMovie")) || [];
  const bookmarkData = {
    poster: document.querySelector("#modalMoviePoster img").src,
    title: document.querySelector("#modalMovieTitle").textContent,
    overview: document.querySelector("#modalMovieOverview").textContent,
    rating: document.querySelector("#modalMovieRating").textContent,
    release: document.querySelector("#modalMovieRelease").textContent,
  };
  bookmarkList.push(bookmarkData);
  localStorage.setItem("bookmarkedMovie", JSON.stringify(bookmarkList));
};

addBookmark.addEventListener("click", function (e) {
  console.log(e.target);
  saveMovieToLocal();
});

const renderBookmarkList = () => {
  const loadLocalStorage = JSON.parse(localStorage.getItem("bookmarkedMovie"));
  bookmarkContainer.innerHTML = "";
  console.log(loadLocalStorage);
  //bookmarkContainer -> 현재 화면에 보여지는 영화카드 지우고 렌더링하기
  // let tempHtml = `<div class="movieCard">
  //   <div id="movieImage"><img src=https://image.tmdb.org/t/p/w342${movieImage}></div>
  //   <div id="movieTitle">${movieTitle}</div>
  //   <div id="movieRating">${movieRating}</div>
  //   <div data-id="${movieId}"></div>
  //   <div data-overview="${movieOverview}"></div>
  //   <div data-release="${movieRelease}"></div>
  // </div>`;
  loadLocalStorage.forEach((data) => {
    let temp = `<div class="movieCard">
    <div id="movieImage"><img src=${data.poster}></div>
    <div id="movieTitle">${data.title}</div>
    <div id="movieRating">${data.rating}</div>
  </div>`;
    bookmarkContainer.innerHTML += temp;
  });
};

bookmarkPage.addEventListener("click", renderBookmarkList);
renderBookmarkList();

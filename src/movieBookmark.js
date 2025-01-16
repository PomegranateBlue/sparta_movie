let bookmarkContainer = document.querySelector(".movieContainer");
const addBookmark = document.querySelector("#bookmarkBtn");
const bookmarkPage = document.querySelector("#bookmarkPage");

let isBookmark = false;
let previous = "";
const showBookmark = () => {
  isBookmark = !isBookmark;
};
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
  loadLocalStorage.forEach((data) => {
    let temp = `<div class="movieCard">
    <div id="movieImage"><img src=${data.poster}></div>
    <div id="movieTitle">${data.title}</div>
    <div id="movieRating">${data.rating}</div>
  </div>`;
    bookmarkContainer.innerHTML += temp;
  });
};

bookmarkPage.addEventListener("click", () => {
  showBookmark();
  if (isBookmark) {
    previous = bookmarkContainer.innerHTML;
    renderBookmarkList();
  } else {
    bookmarkContainer.innerHTML = previous;
  }
});

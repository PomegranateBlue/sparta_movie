const bookmarkBtn = document.querySelector("#bookmarkPage");
const bookmarkContainer = document.querySelector(".movieContainer");
const addBookmark = document.querySelector("bookmarkBtn");
bookmarkBtn.addEventListener("click", function (e) {
  bookmarkContainer.innerHTML = "";
  console.log(e.target);
});

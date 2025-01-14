import { searchMovieData } from "./movieSearch.js";
import { fetchData } from "./movieCard.js";

const selectMovieCard = document.querySelector(".movieCard");

//위의 해당하는 영화카드를 클릭하면 클릭한 무비카드의
//id값을 통해 구분하고 해당 값의 데이터를 처리한다.
const selectEventPointer = document.querySelector(".movieContainer");
//이벤트 위임을 위한 변수로서 선택한 영화카드의 정보를 가리킬 것
//selectMovieCard를 선택하면 해당 요소의 데이터만 선택할 것

selectEventPointer.addEventListener("click", function (e) {
  console.log(e.target.closest(".movieCard"));
});

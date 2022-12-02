const profile = document.querySelector(".report__profile");
const actWork = document.querySelector(".report__activity--work");
const actPlay = document.querySelector(".report__activity--play");
const actStudy = document.querySelector(".report__activity--study");
const actExercise = document.querySelector(".report__activity--exercise");
const actSocial = document.querySelector(".report__activity--social");
const actSelfCare = document.querySelector(".report__activity--self-care");

const activitiesArr = [
  actWork,
  actPlay,
  actStudy,
  actExercise,
  actSocial,
  actSelfCare,
];

const reproduceMotion = () => {
  profile.classList.add("motion");
  for (let i = 0; i < activitiesArr.length; i++) {
    activitiesArr[i].classList.add("motion");
    activitiesArr[0].addEventListener("animationend", () => {
      setTimeout(() => {
        activitiesArr[i].classList.add("post");
      }, 200);
    });
  }
};

window.onload = reproduceMotion();

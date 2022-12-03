import data from "./data.js";

const profile = document.querySelector(".report__profile");
const actWork = document.querySelector(".report__activity--work");
const actPlay = document.querySelector(".report__activity--play");
const actStudy = document.querySelector(".report__activity--study");
const actExercise = document.querySelector(".report__activity--exercise");
const actSocial = document.querySelector(".report__activity--social");
const actSelfCare = document.querySelector(".report__activity--self-care");
const btnDaily = document.querySelector("#daily");
const btnWeekly = document.querySelector("#weekly");
const btnMonthly = document.querySelector("#monthly");
const btnWeeklyAttr = btnWeekly.getAttribute("data-active");

const workTitle = document.querySelector("#work_title");
const workCT = document.querySelector("#work_ct");
const workPT = document.querySelector("#work_pt");
const playTitle = document.querySelector("#play_title");
const playCT = document.querySelector("#play_ct");
const playPT = document.querySelector("#play_pt");
const studyTitle = document.querySelector("#study_title");
const studyCT = document.querySelector("#study_ct");
const studyPT = document.querySelector("#study_pt");
const exerciseTitle = document.querySelector("#exercise_title");
const exerciseCT = document.querySelector("#exercise_ct");
const exercisePT = document.querySelector("#exercise_pt");
const socialTitle = document.querySelector("#social_title");
const socialCT = document.querySelector("#social_ct");
const socialPT = document.querySelector("#social_pt");
const scTitle = document.querySelector("#sc_title");
const scCT = document.querySelector("#sc_ct");
const scPT = document.querySelector("#sc_pt");

const obj_work = data[0];
const obj_play = data[1];
const obj_study = data[2];
const obj_exercise = data[3];
const obj_social = data[4];
const obj_selfCare = data[5];

const displayTitles = () => {
  workTitle.textContent = obj_work.title;
  playTitle.textContent = obj_play.title;
  studyTitle.textContent = obj_study.title;
  exerciseTitle.textContent = obj_exercise.title;
  socialTitle.textContent = obj_social.title;
  scTitle.textContent = obj_selfCare.title;
};

/*
I believe this is not the most efficient 
way of implementing this. Nevertheless, I spent
two hours thinking how to achieve it clean and lean.
This is the best thing I could do.
Yep. 
*/

const initialStates = () => {
  workCT.textContent = `${obj_work.timeframes.weekly.current}hrs`;
  workPT.textContent = `Last Week - ${obj_work.timeframes.weekly.previous}hrs`;
  playCT.textContent = `${obj_play.timeframes.weekly.current}hrs`;
  playPT.textContent = `Last Week - ${obj_play.timeframes.weekly.previous}hrs`;
  studyCT.textContent = `${obj_study.timeframes.weekly.current}hrs`;
  studyPT.textContent = `Last Week - ${obj_study.timeframes.weekly.previous}hrs`;
  exerciseCT.textContent = `${obj_exercise.timeframes.weekly.current}hrs`;
  exercisePT.textContent = `Last Week - ${obj_exercise.timeframes.weekly.previous}hrs`;
  socialCT.textContent = `${obj_study.timeframes.weekly.current}hrs`;
  socialPT.textContent = `Last Week - ${obj_study.timeframes.weekly.previous}hrs`;
  scCT.textContent = `${obj_selfCare.timeframes.weekly.current}hrs`;
  scPT.textContent = `Last Week - ${obj_selfCare.timeframes.weekly.previous}hrs`;
};

btnDaily.addEventListener("click", () => {
  workCT.textContent = `${obj_work.timeframes.daily.current}hrs`;
  workPT.textContent = `Last Week - ${obj_work.timeframes.daily.previous}hrs`;
  playCT.textContent = `${obj_play.timeframes.daily.current}hrs`;
  playPT.textContent = `Last Week - ${obj_play.timeframes.daily.previous}hrs`;
  studyCT.textContent = `${obj_study.timeframes.daily.current}hrs`;
  studyPT.textContent = `Last Week - ${obj_study.timeframes.daily.previous}hrs`;
  exerciseCT.textContent = `${obj_exercise.timeframes.daily.current}hrs`;
  exercisePT.textContent = `Last Week - ${obj_exercise.timeframes.daily.previous}hrs`;
  socialCT.textContent = `${obj_study.timeframes.daily.current}hrs`;
  socialPT.textContent = `Last Week - ${obj_study.timeframes.daily.previous}hrs`;
  scCT.textContent = `${obj_selfCare.timeframes.daily.current}hrs`;
  scPT.textContent = `Last Week - ${obj_selfCare.timeframes.daily.previous}hrs`;
  if (btnWeeklyAttr) {
    btnWeekly.setAttribute("data-active", false);
  }
});

btnWeekly.addEventListener("click", () => {
  initialStates();
  btnWeekly.setAttribute("data-active", true);
});

btnMonthly.addEventListener("click", () => {
  workCT.textContent = `${obj_work.timeframes.monthly.current}hrs`;
  workPT.textContent = `Last Week - ${obj_work.timeframes.monthly.previous}hrs`;
  playCT.textContent = `${obj_play.timeframes.monthly.current}hrs`;
  playPT.textContent = `Last Week - ${obj_play.timeframes.monthly.previous}hrs`;
  studyCT.textContent = `${obj_study.timeframes.monthly.current}hrs`;
  studyPT.textContent = `Last Week - ${obj_study.timeframes.monthly.previous}hrs`;
  exerciseCT.textContent = `${obj_exercise.timeframes.monthly.current}hrs`;
  exercisePT.textContent = `Last Week - ${obj_exercise.timeframes.monthly.previous}hrs`;
  socialCT.textContent = `${obj_study.timeframes.monthly.current}hrs`;
  socialPT.textContent = `Last Week - ${obj_study.timeframes.monthly.previous}hrs`;
  scCT.textContent = `${obj_selfCare.timeframes.monthly.current}hrs`;
  scPT.textContent = `Last Week - ${obj_selfCare.timeframes.monthly.previous}hrs`;
  if (btnWeeklyAttr) {
    btnWeekly.setAttribute("data-active", false);
  }
});

// FN: Feel free to PR. Please. Help.

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

window.onload = (reproduceMotion(), displayTitles(), initialStates());

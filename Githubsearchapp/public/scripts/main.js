import { githubDOM } from "./githubDOM.js";

const userPhoto = document.getElementById("user-photo");
const fullName = document.getElementById("full-name");
const githubUsername = document.getElementById("github-username");
const dateJoined = document.getElementById("date-joined");
const userBio = document.getElementById("user-bio");
const repos = document.getElementById("user-repos");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const location = document.getElementById("location");
const blog = document.getElementById("blog");
const twitter = document.getElementById("twitter");
const company = document.getElementById("company");
const errorMessage = document.getElementById("error");
const userProfile = document.getElementById("user-profile");
const lightToggle = document.getElementById("light-button");
const darkToggle = document.getElementById("dark-button");
const form = document.getElementById("form");
const loadingText = document.getElementById("loading");
new githubDOM({
  userPhoto,
  fullName,
  githubUsername,
  dateJoined,
  userBio,
  repos,
  followers,
  following,
  location,
  blog,
  twitter,
  company,
  errorMessage,
  userProfile,
  lightToggle,
  darkToggle,
  form,
  loadingText,
});

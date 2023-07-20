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
const website = document.getElementById("website");
const twitter = document.getElementById("twitter");
const company = document.getElementById("company");

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
  website,
  twitter,
  company,
});

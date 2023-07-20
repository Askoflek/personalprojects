import { currentUser } from "./github.js";

export class githubDOM {
  currentUser;
  elements;
  constructor(elements) {
    this.elements = elements;
    this.currentUser = new currentUser();
    const form = document.getElementById("form");
    form.addEventListener("submit", this.handleSubmit.bind(this));
  }

  handleSubmit(e) {
    e.preventDefault();
    const input = document.getElementById("user").value;
    console.log("username:", input);
    this.processInput(input);
  }
  processInput(input) {
    this.renderUser(input)
      .then((data) => {
        this.renderData(data);
      })
      .catch((e) => {
        this.renderError();
      });
  }
  async renderUser(username) {
    try {
      const data = await this.currentUser.getUser(username);
      console.log(data);
      return data;
    } catch (e) {
      console.log(e);
    }
  }
  renderData(data) {
    this.elements.userPhoto.src = data.avatar_url;
    this.elements.fullName.textContent = data.name;
    this.elements.githubUsername.textContent = data.login;
    this.elements.userBio.textContent = data.bio ? data.bio : "This profile has no bio";
    this.elements.dateJoined.textContent = this.renderDate(data.created_at);
    this.elements.repos.textContent = data.public_repos;
    this.elements.followers.textContent = data.followers;
    this.elements.following.textContent = data.following;
    this.elements.location.textContent = data.location ? data.location : "Not available";
    this.elements.website.href = data.blog ? data.blog : "Not available";
    this.elements.website.textContent = data.blog;
    this.elements.twitter.textContent = data.twitter_username
      ? data.twitter_username
      : "Not available";
    this.elements.company.textContent = data.company ? data.company : "Not available";
  }
  renderDate(date) {
    const dateObj = new Date(date);
    const options = { year: "numeric", month: "short", day: "2-digit" };
    const output = dateObj.toLocaleDateString("en-US", options).replace(",", "");
    return `Joined ${output}`;
  }
}

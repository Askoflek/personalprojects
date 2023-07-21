import { currentUser } from "./github.js";

export class githubDOM {
  currentUser;
  elements;
  constructor(elements) {
    this.elements = elements;
    this.currentUser = new currentUser();
    const form = document.getElementById("form");
    form.addEventListener("submit", this.handleSubmit.bind(this));
    const darkToggle = document.getElementById("dark-button");
    const lightToggle = document.getElementById("light-button");
    darkToggle.addEventListener("click", this.enableDarkMode.bind(this));
    lightToggle.addEventListener("click", this.disableDarkMode.bind(this));
  }
  enableDarkMode() {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
    this.elements.darkButton.style.display = "none";
    this.elements.lightButton.style.display = "flex";
  }
  disableDarkMode() {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    this.elements.darkButton.style.display = "flex";
    this.elements.lightButton.style.display = "none";
  }

  handleSubmit(e) {
    e.preventDefault();
    const input = document.getElementById("user").value;
    this.processInput(input);
  }
  async processInput(input) {
    try {
      const data = await this.currentUser.getUser(input);
      this.hideError();
      this.renderData(data);
    } catch (error) {
      this.renderError();
      console.error(error);
    }
  }

  renderData(data) {
    console.log(data);
    this.renderUserProfile();
    this.elements.userPhoto.src = data.avatar_url;
    this.elements.fullName.textContent = data.name;
    this.elements.githubUsername.textContent = data.login;
    this.elements.userBio.textContent = data.bio ? data.bio : "This profile has no bio";
    this.elements.dateJoined.textContent = this.renderDate(data.created_at);
    this.elements.repos.textContent = data.public_repos;
    this.elements.followers.textContent = data.followers;
    this.elements.following.textContent = data.following;
    this.renderLocation(data);
    this.renderBlog(data);
    this.renderTwitter(data);
    this.renderCompany(data);
    console.log("success");
  }

  renderDate(date) {
    const dateObj = new Date(date);
    const options = { year: "numeric", month: "short", day: "2-digit" };
    const output = dateObj.toLocaleDateString("en-US", options).replace(",", "");
    return `Joined ${output}`;
  }

  renderError() {
    console.log("rendering error");
    this.elements.errorMessage.style.display = "block";
    this.elements.userProfile.style.display = "none";
  }

  hideError() {
    this.elements.errorMessage.style.display = "none";
  }
  renderUserProfile() {
    this.elements.userProfile.style.display = "flex";
  }

  renderLocation(data) {
    const text = this.elements.location.querySelector("span");
    text.textContent = data.location ? data.location : "Not available";
    if (!data.location) {
      this.elements.location.classList.add("unavailable");
    } else {
      this.elements.location.classList.remove("unavailable");
    }
  }
  renderBlog(data) {
    const link = this.elements.blog.querySelector("a");
    link.href = data.blog;
    link.textContent = data.blog;
    if (!data.blog) {
      this.elements.blog.classList.add("unavailable");
      link.textContent = "Not available";
    } else {
      this.elements.blog.classList.remove("unavailable");
    }
  }
  renderTwitter(data) {
    const text = this.elements.twitter.querySelector("span");
    text.textContent = data.twitter ? data.twitter : "Not available";
    if (data.twitter == null) {
      this.elements.twitter.classList.add("unavailable");
    } else {
      this.elements.twitter.classList.remove("unavailable");
    }
  }
  renderCompany(data) {
    const text = this.elements.company.querySelector("span");
    text.textContent = data.company ? data.company : "Not available";
    if (!data.company) {
      this.elements.company.classList.add("unavailable");
    } else {
      this.elements.company.classList.remove("unavailable");
    }
  }
}

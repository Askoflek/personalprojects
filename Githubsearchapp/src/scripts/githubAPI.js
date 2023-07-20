export class githubAPI {
  async getUser(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    return response.json();
  }
}

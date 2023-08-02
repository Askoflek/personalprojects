import { githubAPI } from "./githubAPI.js";
export class GetCurrentUser {
  githubAPI = new githubAPI();
  async getUser(username) {
    const data = await this.githubAPI.getUserData(username);
    return data;
  }
}

import { githubAPI } from "./githubAPI.js";
export class currentUser {
  githubAPI = new githubAPI();
  async getUser(username) {
    const data = await this.githubAPI.getUser(username);
    return data;
  }
}
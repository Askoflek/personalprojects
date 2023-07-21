/*export class githubAPI {
  async getUserData(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    return response.json();
  }
}*/

export class githubAPI {
  async getUserData(username) {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);

      if (!response.ok) {
        // If the response is not successful, throw an error with the status text
        throw new Error(`Request failed: ${response.statusText}`);
      }

      return response.json();
    } catch (error) {
      // Handle any other fetch-related errors here
      throw new Error(`Error fetching user data: ${error.message}`);
    }
  }
}

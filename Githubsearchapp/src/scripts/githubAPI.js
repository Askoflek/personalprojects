/*const octokit = new Octokit({ auth: `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` });

const response = await octokit.request("GET /orgs/{org}/repos", {
  org: "octokit",
  type: "private",
});

console.log(response);*/
/*const username = "askoflek";
async function getUser(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();
  console.log(data);
}

getUser();*/
// Replace 'your-username' with the GitHub username you want to fetch data for
const username = "askoflek";
const apiUrl = `https://api.github.com/users/${username}`;

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    // Here, 'data' will contain the response from the API as a JavaScript object
    console.log(data);
    // You can do whatever you want with the data here
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

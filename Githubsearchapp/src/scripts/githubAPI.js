/*const octokit = new Octokit({ auth: `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` });

const response = await octokit.request("GET /orgs/{org}/repos", {
  org: "octokit",
  type: "private",
});

console.log(response);*/
import { Octokit } from "octokit";

const octokit = new Octokit({});

try {
  await octokit.request("GET /octocat", {});
} catch (e) {
  console.log(e);
}

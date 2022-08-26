import {Octokit} from "@octokit/rest";

export class GithubRequest {
    async listPullRequests(owner: string, repo: string) {
        const octokit = new Octokit({})

        const result = await octokit.rest.pulls.list({
            owner,
            repo,
        });

        return result.data
    }
}

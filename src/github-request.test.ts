import {GithubRequest} from "./github-request";

describe('GithubRequest', () => {
    it('should be defined', function () {
        expect(GithubRequest).toBeDefined()
    });

    it('should list all PRs', async () => {
        const githubRequest = new GithubRequest();
        const repos = await githubRequest.listPullRequests('owner', 'repo');
        expect(repos).toBeDefined()
        expect(repos[0].number).toBeDefined()
        expect(repos[0].title).toBeDefined()
        expect(repos[0].number).toEqual(1)
        expect(repos[0].title).toEqual('Meu PR Cheiroso')
    })
})

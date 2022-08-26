import {GithubRequest} from "./github-request";

const mockGithub = {
    rest: {
        pulls: {
            list: jest.fn()
        }
    }
}

// Module Factory Function
// https://jestjs.io/pt-BR/docs/es6-class-mocks#chamar--jestmock-com-o-par%C3%A2metro-de-module-factory
jest.mock('@octokit/rest', () => {
    return {
        Octokit: jest.fn().mockImplementation(() => {
                return mockGithub
            }
        )
    }
})

describe('GithubRequest', () => {
    it('should be defined', function () {
        expect(GithubRequest).toBeDefined()
    });

    it('should list all PRs', async () => {
        const githubRequest = new GithubRequest();
        mockGithub.rest.pulls.list.mockResolvedValue({ data: [{number: 1, title: 'Meu PR Cheiroso'}]})
        const repos = await githubRequest.listPullRequests('owner', 'repo');
        expect(repos).toBeDefined()
        expect(repos[0].number).toBeDefined()
        expect(repos[0].title).toBeDefined()
        expect(repos[0].number).toEqual(1)
        expect(repos[0].title).toEqual('Meu PR Cheiroso')
    })
})

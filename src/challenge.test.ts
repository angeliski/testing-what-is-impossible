import Challenge from "./challenge";
import {IncidentManager} from "./incident-manager";
import axios from "axios";

jest.mock('axios')

describe('Challenge', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    })

    it('should be defined', function () {
        expect(Challenge).toBeDefined()
    });

    describe('when calling the operation service', () => {
        //testing the firstChallenge
        it('should return operation when status is 200', async () => {
            (axios.post as jest.Mock).mockResolvedValueOnce({
                status: 200,
                data: {
                    operation: 'insert'
                }
            });

            const incidentManager = new IncidentManager();
            const challenge = new Challenge(incidentManager);

            const result = await challenge.firstChallenge('guilherme', 23);

            expect(result).toEqual('insert');
        })

        it('should return undefined when status is not 200', async () => {
            (axios.post as jest.Mock).mockResolvedValueOnce({
                status: 500
            });

            const incidentManager = new IncidentManager();
            const challenge = new Challenge(incidentManager);

            const result = await challenge.firstChallenge('guilherme', 23);

            expect(result).not.toBeDefined();
        })
    })

    describe('when doing something amazing', () => {
        //testing the secondChallenge
        it('test', () => {
            throw new Error("Not implemented yet")
        })
    })

    describe('when checking mtta', () => {
        //testing the thirdChallenge
        describe('when the incident is old', () => {
            it('test', () => {
                throw new Error("Not implemented yet")
            })
        })
        describe('when the incident is\'t old', () => {
            it('test', () => {
                throw new Error("Not implemented yet")
            })
        })
    })
})

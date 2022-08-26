import axios from "axios";
import AmazingWorker from "./amazing-worker";
import {IncidentManager} from "./incident-manager";

export default class Challenge {
    private readonly incidentManager : IncidentManager
    constructor(incidentManager : IncidentManager) {
        this.incidentManager = incidentManager
    }
    async firstChallenge(name: string, amount: number) {
        const result = await axios.post('http://meu-servico-externo.agoravai.com/faz-alguma-coisa', {
            name,
            amount
        });

        if(result.status ==  200) {
            return result.data.operation
        }
    }
    secondChallenge(param: { name: string, amount: number }) {
        return new AmazingWorker().doSomethingAmazing(param.name, param.amount)
    }
    async thirdChallenge() {
        const incidentRunning = this.incidentManager.getCurrentIncident()

        try {
            if (incidentRunning.isOld()) {
                await this.incidentManager.notifyHighMtta(incidentRunning)
            }
        }catch (e) {
            throw new Error(`Incident not reachable ${e}`)
        }
    }
}

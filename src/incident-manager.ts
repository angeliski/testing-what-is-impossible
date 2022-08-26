export type Incident = {
    isOld(): boolean
}

export class IncidentManager {

    getCurrentIncident(): Incident {
        throw new Error("Not implemented yet")
    }

    async notifyHighMtta(_incident: Incident) {
        throw new Error("Not implemented yet")
    }
}

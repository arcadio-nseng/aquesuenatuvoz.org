import axios from "axios";

export interface ISendPulseApiCredentials {
    access_token: string;
    token_type: string;
    expires_in: number;
}

export async function getApiCredentials(): Promise<ISendPulseApiCredentials | void> {

    const sendPulseCredentials = {
        grant_type: "client_credentials",
        client_secret: process.env.SENDPULSE_SECRET,
        client_id: process.env.SENDPULSE_ID
    }

    return await axios.post<ISendPulseApiCredentials>(
        'https://api.sendpulse.com/oauth/access_token',
        sendPulseCredentials
    ).then(res => res.data).catch(() => {});
}

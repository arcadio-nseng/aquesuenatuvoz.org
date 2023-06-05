import ContactForm from "@/components/ContactForm";
import axios from "axios";
import {ISendPulseApiCredentials} from "@/lib/sendPulse";

export default async function Contact() {

    const sendPulseCredentials = {
        grant_type: "client_credentials",
        client_secret: process.env.SENDPULSE_SECRET,
        client_id: process.env.SENDPULSE_ID
    }

    const apiCredentials = await axios.post<ISendPulseApiCredentials>(
        'https://api.sendpulse.com/oauth/access_token',
        sendPulseCredentials
    ).then(res => res.data).catch(() => {});


    return (
        <ContactForm apiCredentials={apiCredentials}/>
    )
}

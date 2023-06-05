import ContactForm from "@/components/ContactForm";
import axios from "axios";
import {getApiCredentials, ISendPulseApiCredentials} from "@/lib/sendPulse";

export default async function Contact() {

    const apiCredentials = await getApiCredentials();

    return (
        <ContactForm apiCredentials={apiCredentials}/>
    )
}

'use client'

import {ISendPulseApiCredentials} from "@/lib/sendPulse";
import {FormEvent, useState} from "react";
import axios from "axios";

type SubscriptionFormProps = {
    apiCredentials: ISendPulseApiCredentials | void
}

export default function SubscriptionForm({apiCredentials}: SubscriptionFormProps) {

    const [email, setEmail] = useState<string>();
    const [loading, setLoading] = useState<boolean>(false);

    if (!apiCredentials) {
        return <p>Formulario de suscripción no disponible temporalmente</p>
    }

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        axios.post('https://api.sendpulse.com/addressbooks/218455/emails', {
            "emails":[email]
        }, {headers: {Authorization: `Bearer ${apiCredentials.access_token}`}}).then(res => {
            setLoading(false);
            console.log(res.data);
        }).catch(reason => {
            setLoading(false);
            console.log(reason);
        })
    }

    return (
        <form onSubmit={onSubmit}
            className="flex flex-col justify-center space-y-3 w-full md:flex-row md:space-x-3 md:space-y-0">
            <div className="relative w-full">
                <input type="email" id="&quot;form-subscribe-Subscribe" onChange={e => {setEmail(e.target.value)}}
                       className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                       placeholder="Email" required/>
            </div>
            <button disabled={loading}
                className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-primary rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                type="submit">
                {
                    loading ? 'Enviando...' : 'Suscribirse'
                }
            </button>
        </form>
    )

}

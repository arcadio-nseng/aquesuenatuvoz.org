'use client'

import {ISendPulseApiCredentials} from "@/lib/sendPulse";
import FormNotAvailableImage from '../../public/assets/images/undraw_mobile_inbox_re_ciwq.svg';
import Image from "next/image";
import Link from "next/link";
import {FormEvent, useState} from "react";
import axios from "axios";

type ContactFormProps = {
    apiCredentials: ISendPulseApiCredentials | void;
}

export default function ContactForm({apiCredentials}: ContactFormProps) {

    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [subject, setSubject] = useState<string>();
    const [message, setMessage] = useState<string>();
    const [loading, setLoading] = useState<boolean>(false);

    if (!apiCredentials) {
        return (
            <div className="w-full p-6 m-auto rounded-lg shadow dark:bg-gray-800">
                <p className="mb-6 text-3xl font-light text-gray-800 dark:text-white">
                    Déjanos un mensaje
                </p>
                <p className="mb-4">Formulario de contacto no disponible en este momento. Intente <Link href="/contacto"
                                                                                                        className="text-primary"
                                                                                                        scroll={false}
                                                                                                        prefetch={false}>refrescar
                    la página</Link></p>
                <Image src={FormNotAvailableImage} alt={''} className="mx-auto max-w-sm"/>
            </div>
        )
    }

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);

        axios.post('https://api.sendpulse.com/smtp/emails', {
            "email": {
                "subject": "Nuevo mensaje de [aquesuenatuvoz.com]",
                "template": {
                    "id": 29778,
                    "variables": {
                        "name": name,
                        "email": email,
                        "subject": subject,
                        "message": subject,
                    }
                },
                "from": {
                    "name": "Arcadio",
                    "email": "arcadio@arcadio.dev"
                },
                "to": [
                    {
                        "email": "arcadio.dev@gmail.com",
                        "name": "Arcadio"
                    }
                ]
            }
        }, {headers: {Authorization: `Bearer ${apiCredentials.access_token}`}}).then(res => {
            console.log(res.data);
            setLoading(false);
        }).catch(reason => {
            console.log(reason);
            setLoading(false);
        })

    }

    return (
        <form className="flex w-full space-x-3" onSubmit={onSubmit}>
            <div
                className="w-full p-6 m-auto rounded-lg shadow dark:bg-gray-800">
                <div className="mb-6 text-3xl font-light text-gray-800 dark:text-white">
                    Déjanos un mensaje
                </div>
                <div className="grid grid-cols-2 gap-4 m-auto">
                    <div className="col-span-2 lg:col-span-1">
                        <div className=" relative ">
                            <input type="text" id="contact-form-name" onChange={(e) => {
                                setName(e.target.value)
                            }}
                                   className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                   placeholder="Nombre" required/>
                        </div>
                    </div>
                    <div className="col-span-2 lg:col-span-1">
                        <div className=" relative ">
                            <input type="email" id="contact-form-email" onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                                   className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                   placeholder="email" required/>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className=" relative ">
                            <input type="text" id="create-account-pseudo" onChange={(e) => {
                                setSubject(e.target.value)
                            }}
                                   className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                   name="Asunto" placeholder="Asunto" required/>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <label className="text-gray-700" htmlFor="name">
                            <textarea onChange={(e) => {
                                setMessage(e.target.value)
                            }}
                                      className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                      id="comment" placeholder="Escriba su mensaje..." name="comment" rows={5} cols={40}
                                      required>
                            </textarea>
                        </label>
                    </div>
                    <div className="col-span-2 text-right">
                        <button type="submit" disabled={loading}
                                className="py-2 px-4 bg-primary hover:bg-primary/80 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            {
                                loading ? 'Enviando...' : 'Enviar'
                            }
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )

}

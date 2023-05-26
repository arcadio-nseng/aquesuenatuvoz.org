export default function ContactForm() {

    return (
        <form className="flex w-full space-x-3">
            <div
                className="w-full p-6 m-auto bg-white rounded-lg shadow dark:bg-gray-800">
                <div className="mb-6 text-3xl font-light text-gray-800 dark:text-white">
                    Déjanos un mensaje
                </div>
                <div className="grid grid-cols-2 gap-4 m-auto">
                    <div className="col-span-2 lg:col-span-1">
                        <div className=" relative ">
                            <input type="text" id="contact-form-name"
                                   className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                   placeholder="Nombre"/>
                        </div>
                    </div>
                    <div className="col-span-2 lg:col-span-1">
                        <div className=" relative ">
                            <input type="text" id="contact-form-email"
                                   className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                   placeholder="email"/>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className=" relative ">
                            <input type="text" id="create-account-pseudo"
                                   className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                   name="Asunto" placeholder="Pseudo"/>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <label className="text-gray-700" htmlFor="name">
                            <textarea
                                className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                id="comment" placeholder="Escriba su mensaje..." name="comment" rows={5} cols={40}>
                            </textarea>
                        </label>
                    </div>
                    <div className="col-span-2 text-right">
                        <button type="submit"
                                className="py-2 px-4 bg-primary hover:bg-primary/80 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )

}

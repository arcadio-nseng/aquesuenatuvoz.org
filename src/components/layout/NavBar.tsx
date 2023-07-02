'use client';
import Image from "next/image";
import Logo70 from "../../../public/assets/icons/ms-icon-70x70.png";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {FaBars} from "react-icons/fa";
import {useEffect, useState} from "react";

export default function NavBar() {

    const path = usePathname();
    const [showMenu, setShowMenu] = useState<boolean>(false);

    useEffect(() => {
        /*document.onclick = (ev) => {
            ev.stopImmediatePropagation()
            console.log('click documento');
            if (showMenu) setShowMenu(false);
        }*/
    })

    return (
        <header className="absolute top-0 left-0 right-0 z-20">

            <nav
                className={`px-6 py-4 md:px-12 fixed w-full z-20 top-0 left-0 border-b ${path === '/' ? 'bg-surface/70' : 'bg-surface'} backdrop-blur`}>
                <div className="items-center justify-between md:flex container mx-auto">
                    <div className="flex items-center justify-between">
                        <a href="/" className="text-white flex items-center uppercase space-x-1">
                            <Image src={Logo70} width={50} height={50} alt={'A qué Suena tu Voz'}/>
                            <h1 className="leading-none">
                                <span className="font-light text-xs">A Qué suena</span><br/>
                                <span className="font-black">tu voz🎤</span></h1>
                        </a>
                        <div className="relative inline-block text-left md:hidden">
                            <button className="text-white focus:outline-none text-4xl" onClick={(event) => {
                                event.stopPropagation();
                                setShowMenu(!showMenu)
                            }}>
                                <FaBars/>
                            </button>

                            <div
                                className={`absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 ${showMenu ? '' : 'hidden'}`}>
                                <div className="py-1 " role="menu" aria-orientation="vertical"
                                     aria-labelledby="options-menu">
                                    <Link href="/"
                                       className={`block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${path === '/' ? 'bg-gray-100' : ''}`}
                                       role="menuitem">
                                            <span className="flex flex-col">
                                                <span>
                                                    Inicio
                                                </span>
                                            </span>
                                    </Link>
                                    <Link href={'/quienes-somos'}
                                       className={`block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${path === '/quienes-somos' ? 'bg-gray-100' : ''}`}
                                       role="menuitem">
                                            <span className="flex flex-col">
                                                <span>
                                                    Acerca de
                                                </span>
                                            </span>
                                    </Link>
                                    <Link href={'/proyectos'}
                                       className={`block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${path === '/proyectos' ? 'bg-gray-100' : ''}`}
                                       role="menuitem">
                                            <span className="flex flex-col">
                                                <span>
                                                    Proyectos
                                                </span>
                                            </span>
                                    </Link>
                                    <Link href={'/merchandising'}
                                       className={`block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${path === '/merchandising' ? 'bg-gray-100' : ''}`}
                                       role="menuitem">
                                            <span className="flex flex-col">
                                                <span>
                                                    Merchandising
                                                </span>
                                            </span>
                                    </Link>
                                    <Link href={'/contacto'}
                                       className={`block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${path === '/contacto' ? 'bg-gray-100' : ''}`}
                                       role="menuitem">
                                            <span className="flex flex-col">
                                                <span>
                                                    Contacto
                                                </span>
                                            </span>
                                    </Link>

                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="items-center hidden md:flex">
                        <Link href={'/'} className={`mx-3 text-lg text-white transition-all ease-in duration-300  cursor-pointer ${path === '/' ? 'active' : 'non-active'}`}>
                            Inicio
                        </Link>
                        <Link href={'/quienes-somos'} className={`mx-3 text-lg text-white transition-all ease-in duration-300  cursor-pointer ${path === '/quienes-somos' ? 'active' : 'non-active'}`}>
                            Acerca de
                        </Link>
                        <Link href={'/proyectos'} className={`mx-3 text-lg text-white transition-all ease-in duration-300  cursor-pointer ${path === '/proyectos' ? 'active' : 'non-active'}`}>
                            Proyectos
                        </Link>
                        <Link href={'/merchandising'} className={`mx-3 text-lg text-white transition-all ease-in duration-300  cursor-pointer ${path === '/merchandising' ? 'active' : 'non-active'}`}>
                            Merchandising
                        </Link>
                        <Link href={'/contacto'} className={`mx-3 text-lg text-white transition-all ease-in duration-300  cursor-pointer ${path === '/contacto' ? 'active' : 'non-active'}`}>
                            Contacto
                        </Link>

                    </div>
                </div>
            </nav>
        </header>
    )

}

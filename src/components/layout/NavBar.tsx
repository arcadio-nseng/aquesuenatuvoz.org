'use client';
import Image from "next/image";
import Logo70 from "../../../public/assets/icons/ms-icon-70x70.png";
import {Dropdown} from "flowbite-react";
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function NavBar() {

    const path = usePathname();

    console.log(path);

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
                        <div className="md:hidden">

                            <Dropdown
                                label={
                                    <button className="text-white focus:outline-none">
                                        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round">
                                            </path>
                                        </svg>
                                    </button>
                                }
                                inline={true}
                                size={"sm"}
                            >
                                <Dropdown.Item>
                                    <Link href={'/'}>Inicio</Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link href={'/quienes-somos'}>Acerca de</Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link href={'/proyectos'}>Proyectos</Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link href={'/proyectos'}>Merchandising</Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link href={'/contacto'}>Contacto</Link>
                                </Dropdown.Item>
                            </Dropdown>
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
                        <Link href={'contacto'} className={`mx-3 text-lg text-white transition-all ease-in duration-300  cursor-pointer ${path === '/contacto' ? 'active' : 'non-active'}`}>
                            Contacto
                        </Link>

                    </div>
                </div>
            </nav>
        </header>
    )

}

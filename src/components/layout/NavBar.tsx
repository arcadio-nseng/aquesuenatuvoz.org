'use client';
import Image from "next/image";
import Logo70 from "../../../public/assets/icons/ms-icon-70x70.png";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {FaBars} from "react-icons/fa";

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
                            <button className="text-white focus:outline-none text-4xl">
                                <FaBars/>
                            </button>

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

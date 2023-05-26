import '../styles/globals.css'
import {Inter} from 'next/font/google'
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/NavBar";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'A Qué Suena tu Voz',
    description: 'Sitio web oficial de A Qué Suena tu Voz',
}

export default function RootLayout({children,}: { children: React.ReactNode }) {


    return (
        <html lang="es">
        <head>
            <link rel="apple-touch-icon" sizes="57x57" href="/assets/icons/apple-icon-57x57.png"/>
            <link rel="apple-touch-icon" sizes="60x60" href="/assets/icons/apple-icon-60x60.png"/>
            <link rel="apple-touch-icon" sizes="72x72" href="/assets/icons/apple-icon-72x72.png"/>
            <link rel="apple-touch-icon" sizes="76x76" href="/assets/icons/apple-icon-76x76.png"/>
            <link rel="apple-touch-icon" sizes="114x114" href="/assets/icons/apple-icon-114x114.png"/>
            <link rel="apple-touch-icon" sizes="120x120" href="/assets/icons/apple-icon-120x120.png"/>
            <link rel="apple-touch-icon" sizes="144x144" href="/assets/icons/apple-icon-144x144.png"/>
            <link rel="apple-touch-icon" sizes="152x152" href="/assets/icons/apple-icon-152x152.png"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/assets/icons/apple-icon-180x180.png"/>
            <link rel="icon" type="image/png" sizes="192x192" href="/assets/icons/android-icon-192x192.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/assets/icons/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="96x96" href="/assets/icons/favicon-96x96.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/assets/icons/favicon-16x16.png"/>
            <link rel="manifest" href="/manifest.json"/>
            <meta name="msapplication-TileColor" content="#7f3a0b"/>
            <meta name="msapplication-TileImage" content="/assets/icons/ms-icon-144x144.png"/>
            <meta name="theme-color" content="#7f3a0b"/>
        </head>
        <body className={inter.className}>
        <NavBar/>
        <main>{children}</main>
        <Footer/>
        </body>
        </html>
    )
}

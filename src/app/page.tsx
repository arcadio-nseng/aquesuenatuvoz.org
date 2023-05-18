import Image from 'next/image'
import Banner from '../../public/assets/images/main-2.png'

export default function Home() {
  return (
    <Image src={Banner} alt={'A qué suena tu voz'}/>
  )
}

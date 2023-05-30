import {BsFacebook, BsInstagram, BsLinkedin, BsTwitter} from "react-icons/bs";

export default function SocialIcon({name}: {name: 'facebook' | 'twitter' | 'instagram' | 'linkedin';}) {

    if (name === 'facebook') {
        return <BsFacebook className="transition-all duration-300 hover:opacity-50"/>
    } else if (name === 'twitter') {
        return <BsTwitter className="transition-all duration-300 hover:opacity-50"/>
    } else if (name === 'instagram') {
        return <BsInstagram className="transition-all duration-300 hover:opacity-50"/>
    } else if (name === 'linkedin') {
        return <BsLinkedin className="transition-all duration-300 hover:opacity-50"/>
    } else {
        return <></>
    }

}

import Link from "next/link";
import Image from "next/image";
import FormNotAvailableImage from "../../public/assets/images/undraw_mobile_inbox_re_ciwq.svg";

type NoDataProps = {
    message: string;
}
export default function NoData({message}: NoDataProps) {

    return (
        <div className="container px-6 md:px-12 mb-24">
            <p className="mb-6 text-3xl font-light text-gray-800 text-center">
                {message}
            </p>
            <Image src={FormNotAvailableImage} alt={''} className="mx-auto max-w-sm"/>
        </div>
    )

}

import Image from "next/image";
import Merchant1 from "../../public/assets/images/merchand-1.jpg";

export default function ProductCard() {

    const colors = ['bg-primary', 'bg-blue-500', 'bg-yellow-500', 'bg-purple-500'];
    const color = colors[Math.round((colors.length - 1) * Math.random())]
    console.log('chosen color', color);

    return (
        <div
            className={`relative max-w-sm overflow-hidden ${color || 'bg-primary'} rounded-lg shadow-lg`}>
            <svg className="absolute bottom-0 left-0 mb-8 opacity-20" viewBox="0 0 375 283" fill="none">
                <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)"
                      fill="#f3c06b">
                </rect>
                <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)"
                      fill="#f3c06b">
                </rect>
            </svg>
            <div className="relative flex items-center justify-center px-10 pt-10">
                <div className="absolute bottom-0 left-0 block w-48 h-48 ml-3 -mb-24">
                </div>
                <Image className="relative w-40" src={Merchant1} alt="shopping item" style={{borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'}}/>
            </div>
            <div className="relative px-6 pb-6 mt-6 text-white">
                    <span className="block -mb-1 opacity-75">
                        Talla XL
                    </span>
                <div className="flex justify-between">
                        <span className="block text-xl font-semibold">
                            Camiseta
                        </span>
                    <span
                        className="flex items-center px-3 py-2 text-xs font-bold leading-none text-yellow-500 bg-white rounded-full">
                            35.000 XAF
                        </span>
                </div>
            </div>
        </div>
    )

}

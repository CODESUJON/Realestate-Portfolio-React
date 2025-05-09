import Description from "./Description";
import Heading from "./Heading";
import { FaStar } from 'react-icons/fa';

interface Ctype {
    image: string;
    name: string;
    text: string;
    feedback: string;
}

function ClientCard({ image, text, name, feedback }: Ctype) {
    return (
        <div className="bg-white hover:bg-rose-100 cursor-pointer p-12 flex flex-col justify-center items-center gap-6 rounded-xl w-full">
            <div className="flex justify-start items-center w-full gap-4">
                <img src={image} className="w-[70px] transform hover:scale-110 transition-transform duration-300" />
                <div className="flex flex-col justify-center items-start gap-1">
                    <Heading text={name} className="text-xl " />
                    <Description text={text} className="text-slate-600" />
                </div>
            </div>

            <p className="text-md text-justify text-md text-slate-600">{feedback}</p>
            <div className="flex justify-start items-start gap-2 w-full">
                {Array.from({ length: 5 }).map((_, index) => (
                    <FaStar
                        key={index}
                        className="size-4 text-yellow-400"
                    />
                ))}

            </div>
        </div>
    )
}

export default ClientCard
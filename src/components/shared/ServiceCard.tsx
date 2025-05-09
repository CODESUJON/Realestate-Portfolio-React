import Description from "./Description";
import Heading from "./Heading";

interface Stype{
  icon: React.ElementType;
  title:string;
  desc:string;
}



function ServiceCard({icon,title,desc}:Stype) {
  const Icon = icon;
  return (
    <div className="bg-white h-[350px] px-8 py-16 flex flex-col justify-center items-start gap-4 rounded-xl border-b-[5px] border-rose-500 hover:bg-rose-300 cursor-pointer">
      <div className="p-6 rounded-full bg-rose-200">
        <Icon  className="text-red-600 size-10 transform hover:scale-110 transition-transform duration-300 cursor-pointer"/>

      </div>

      <Heading text={title} className="text-[22px]"/>
      <Description text={desc} className="text-slate-700"/>
      <button className="mt-4 text-red-600 border-b-2 border-red-600 font-semibold-0">READ MORE</button>
    </div>
  )
}

export default ServiceCard
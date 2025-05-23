import { FaBath, FaShareAlt, FaBed, FaUserCircle, FaPlus, FaMapMarkerAlt, FaVideo, FaCamera, FaHeart } from "react-icons/fa"
import { MdSpaceDashboard } from "react-icons/md"


interface Ptype {
  images: string;
  address: string;
  name: string;
  price: string;
  about: string;
  bath: number;
  bed: number;
  area: string;
  owner: string;

}



function PropertiesCard({ images, address, name, price, about, bath, bed, area, owner }: Ptype) {
  return (
    <div data-aos="zoom-in" data-aos-delay="200" className=" bg-white rounded-xl w-full ">
      <div id="image-box" className="bg-cover bg-center h-[250px] rounded-xl p-4 flex flex-col justify-between items-end" style={{ backgroundImage: `url(${images})` }}>
        <div className="flex justify-between items-end w-full">
          <div>
            <button className="px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px]">Feature</button>
          </div>

          <div className="flex justify-between items-center gap-3">
            <button className="px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px]">Sales</button>
            <button className="px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px]">active</button>

          </div>

        </div>

        <div className="flex justify-between items-end w-full">
          <div className=" flex justify-start items-center gap-2">
            <FaMapMarkerAlt className="size-4 text-white" />
            <h1 className="text-white">{address}</h1>
          </div>

          <div className="flex justify-center items-center gap-4">
            <FaVideo className="size-4 text-white" />
            <FaCamera className="size-4 text-white" />

          </div>
        </div>
      </div>

      <div className="px-6 py-3 flex flex-col justify-center items-start gap-2 w-full ">
        <h1 className="text-xl text-black font-semibold">{name}</h1>
        <h1 className="text-2xl text-red-600 font-bold">{price}</h1>
        <p className="text-black">{about}</p>
        <div id="icons" className="flex justify-center items-start gap-4">
          <div className="flex justify-center items-center gap-2">
            <FaBath className="size-5 text-rose-500" />
            <h1 className="">{bath}</h1>
          </div>

          <div className="flex justify-center items-center gap-2">
            <FaBed className="size-5 text-rose-500" />
            <h1 className="">{bed}</h1>
          </div>

          <div className="flex justify-center items-center gap-2">
            <MdSpaceDashboard className="size-5 text-rose-500" />
            <h1 className="">{area}</h1>
          </div>
        </div>

        <div className="w-full h-[1px] bg-gray-200 mt-8"></div>
        <div className="flex justify-between items-center w-full mt-2">
          <div className="flex justify-center items-center gap-2">
            <FaUserCircle className="size-5 text-rose-400" />
            <h1 className="">{owner}</h1>
          </div>

          <div className="flex justify-center items-center gap-4">
            <div className="p-2 border-2 border-gray-200 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <FaShareAlt className="size-4 text-rose-400" />
            </div>

            <div className="p-2 border-2 border-gray-200 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <FaHeart className="size-4 text-rose-400" />
            </div>

            <div className="p-2 border-2 border-gray-200 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <FaPlus className="size-4 text-rose-400" />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertiesCard
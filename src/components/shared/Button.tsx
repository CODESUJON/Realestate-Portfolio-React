interface Btype{
  text:string;
  className?: string;
}

function Button({text,className}:Btype) {
  return (
    <>
    <button className={`bg-red-600 hover:bg-black text-white text-lg p-4  font-semibold rounded-xl cursor-pointer transform hover:scale-110 transition-transform duration-300 ${className}`}>{text}</button>
    </>
  )
}

export default Button
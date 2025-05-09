interface Htype{
  text:string;
  className?:string;
}

function Heading({text,className}:Htype) {
  return (
    <h1 className={`text-black font-semibold  ${className}`}>{text}</h1>
  )
}

export default Heading
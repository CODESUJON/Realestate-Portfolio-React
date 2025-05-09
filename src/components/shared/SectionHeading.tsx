interface SHtype {
    text:string;
    className?:string;
}

function SectionHeading({text,className}:SHtype) {
  return (
    <h1 className={`text-red-500 ${className}`}>{text}</h1>
  )
}

export default SectionHeading
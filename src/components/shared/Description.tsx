
interface Dtype{
  text:string;
  className?: string;
}

function Description({text,className}:Dtype) {
  return (
    <>
    <p className={` text-xl ${className}`}>{text}</p>
    </>
  )
}

export default Description
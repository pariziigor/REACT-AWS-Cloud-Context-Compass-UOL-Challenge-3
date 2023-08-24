import Image from "next/image"

interface CardImageProps {
  src: string;
  textName: string;
  textInfo: string;
}

function CardImage({ src, textName, textInfo}: CardImageProps) {
  return (
    <div 
    className=" flex flex-col justify-center items-center rounded-2xl text-dark-10 bg-dark-30 lg:py-6">
      <Image
        className="h-[114px] w-[114px] my-4 outline outline-brand-color outline-offset-2 rounded-full md:h-[170px] md:w-[170px]"
        src={src}
        alt="foto-perfil"
        height={170}
        width={170} />
      <p className="font-medium text-2xl">{textName}</p>
      <p className="my-3 text-base">{textInfo}</p>
    </div>
  )
}

export default CardImage
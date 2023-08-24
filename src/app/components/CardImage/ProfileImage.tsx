import Image from "next/image";


export default function ProfileImage() {
  return (
    <div className="h-[80%] w-[40%] ">
      <header
        className="  bg-white grid place-items-center rounded-2xl text-dark-10 bg-dark-30">
        <Image
          className="h-40 w-40 outline outline-brand-color outline-offset-2 rounded-full top-8"
          src="https://i.imgur.com/jguCgC7.png"
          alt="foto-perfil"
          width={50}
          height={50} />
        <p className="font-medium text-2xl">Hello, world!</p>
        <p className="my-3 text-base">Solteiro, Brasil</p>
      </header>
      <div className="my-8 rounded-2xl bg-dark-30 grid place-items-center">
        <button className="h-[7vh] w-[17vw] bg-white  text-brand-color text-base font-medium">Editar meu perfil</button>
      </div>
    </div>
  );
}
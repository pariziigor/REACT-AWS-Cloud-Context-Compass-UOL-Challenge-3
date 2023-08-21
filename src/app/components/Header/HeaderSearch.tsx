import { BiSearch } from "react-icons/Bi";

export default function HeaderSearch() {
  return (
    <>
      <div className="relative hidden w-[25%] items-center rounded-md bg-input-color px-3 py-2 lg:flex">
        <BiSearch className="text- absolute text-dark-20" />
        <input
          className="ml-6 bg-no-color outline-none"
          type="text"
          placeholder="Pesquisar no Orkut"
        />
      </div>
    </>
  );
}

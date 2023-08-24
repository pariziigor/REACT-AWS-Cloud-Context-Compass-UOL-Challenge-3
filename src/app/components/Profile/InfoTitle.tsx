
interface infoTitleProps {
    name: string;
  }
  
  function infoTitle({ name }: infoTitleProps) {
    return (
      <>
        <p className="text-2xl text-dark-10">Boa tarde, {name}</p>
      </>
    )
  }
  
  export default infoTitle
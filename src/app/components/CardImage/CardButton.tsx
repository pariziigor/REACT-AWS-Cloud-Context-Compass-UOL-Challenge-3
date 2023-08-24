
interface CardButtonProps {
    textButton: string;
  }
  
  function CardButton({ textButton} : CardButtonProps) {
    return (
      <div className="py-4 rounded-2xl bg-dark-30 grid place-items-center">
        <button className="text-brand-color text-base font-medium">{textButton}</button>
      </div>
    )
  }
  
  export default CardButton;
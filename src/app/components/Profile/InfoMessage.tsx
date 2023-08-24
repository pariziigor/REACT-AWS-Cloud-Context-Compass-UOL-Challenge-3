
interface InfoMessageProps {
    message: string;
  }
  
  function InfoMessage({ message }: InfoMessageProps) {
    return (
      <p>{message}</p>
    )
  }
  
  export default InfoMessage
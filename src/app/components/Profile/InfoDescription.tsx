import { ChangeEvent, InputHTMLAttributes } from "react";

interface InfoDescriptionProps extends InputHTMLAttributes<HTMLInputElement> {
  Textlabel?: string;
  nameSpan: string;
  inputValue: string;
  setInputValue: (event: ChangeEvent<HTMLInputElement>) => void;
}

const style = "w-full rounded-md bg-input-color px-3 py-2";

export default function InfoDescription({
  Textlabel,
  nameSpan,
  inputValue,
  setInputValue,
  ...rest
}: InfoDescriptionProps) {
  return (
    <>
      {Textlabel ? (
        <label className={`${style} flex flex-col`}>
          {Textlabel}
          <input value={inputValue} onChange={setInputValue} {...rest} />
        </label>
      ) : (
        <p>
          <span className='text-base text-dark-20 pr-2'>{nameSpan}</span> {inputValue}
        </p>
      )}
    </>
  );
}
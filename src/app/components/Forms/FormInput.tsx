import { ChangeEvent, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  Textlabel?: string;
  className?: string;
  inputValue: string;
  setInputValue: (event: ChangeEvent<HTMLInputElement>) => void;
}

const style = "w-full rounded-md bg-input-color px-3 py-2";

export default function FormInput({
  Textlabel,
  className,
  inputValue,
  setInputValue,
  ...rest
}: InputProps) {
  return (
    <>
      {Textlabel ? (
        <label className={`${style} ${className} flex flex-col`}>
          {Textlabel}
          <input value={inputValue} onChange={setInputValue} {...rest} />
        </label>
      ) : (
        <input
          className={`${style} ${className}`}
          value={inputValue}
          onChange={setInputValue}
          {...rest}
        />
      )}
    </>
  );
}

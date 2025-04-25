//import { ChangeEventHandler } from "react";

interface InputProps {
  paddingRight?: string;
  type: "email" | "password" | "text";
  id: string;
  //name: string;
  placeholder: string;
  //value: string;
  //onChange: ChangeEventHandler<HTMLInputElement>;
}

function Input({ paddingRight = "pr-2", ...props }: InputProps) {
  return (
    <input
      className={`min-w-full py-2 pl-8 ${paddingRight} border-2 border-black rounded-md shadow-md outline-none focus:border-custom-blue`}
      {...props}
      required
    />
  );
}
// 
export default Input;

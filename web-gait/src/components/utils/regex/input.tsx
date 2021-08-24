import React, { InputHTMLAttributes, useCallback } from "react";
import { cep, currency, cp, crm, telefone, password } from "../regex/mask";


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  mask: "cep" | "currency" | "cp" | "crm"| "telefone" | "password";
  prefix?: string;
}

const Input: React.FC<InputProps> = ({ mask, prefix, ...props }) => {
  const handleKeyUp = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      if (mask === "cep") {
        cep(e);
      }
      if (mask === "currency") {
        currency(e);
      }
      if (mask === "cp") {
        cp(e);
      }
      if(mask === "crm"){
        crm(e);
      }
      if(mask === 'telefone'){
        telefone(e);
      }
      if(mask === 'password'){
        password(e);
      }
    },
    [mask]
  );

  return (
    <div className="input-group prefix">
      {prefix && <span className="prefix-span">{prefix}</span>}
      <input {...props} onKeyUp={handleKeyUp} />
    </div>
  );
};

export default Input;
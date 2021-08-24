export function cep(e: React.FormEvent<HTMLInputElement>) {
    e.currentTarget.maxLength = 9;
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{5})(\d)/, "$1-$2");
    e.currentTarget.value = value;
    return e;
  }
  
  export function currency(e: React.FormEvent<HTMLInputElement>) {
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d)(\d{2})$/, "$1,$2");
    value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
  
    e.currentTarget.value = value;
    return e;
  }
  
  export function cp(e: React.FormEvent<HTMLInputElement>) {
    e.currentTarget.maxLength = 14;
    let value = e.currentTarget.value;
    if (!value.match(/^(\d{3}).(\d{3}).(\d{3})-(\d{2})$/)) {
      value = value.replace(/\D/g, "");
      value = value.replace(/(\d{3})(\d)/, "$1.$2");
      value = value.replace(/(\d{3})(\d)/, "$1.$2");
      value = value.replace(/(\d{3})(\d{2})$/, "$1-$2");
      e.currentTarget.value = value;
    }
    return e;
  }

  export function crm(e: React.FormEvent<HTMLInputElement>) {
    e.currentTarget.maxLength = 4;
    let value = e.currentTarget.value;
    
      value = value.replace(/\D/g, "");
      value = value.replace(/(\d{4})(\d)/, "$1.$2");
      value = value.replace(/(\d{4})(\d)/, "$1.$2");
      value = value.replace(/(\d{4})(\d{2})$/, "$1-$2");
      e.currentTarget.value = value;
    
    return e;
  }
  
  export function telefone(e: React.FormEvent<HTMLInputElement>) {
    
    let value = e.currentTarget.value;
    e.currentTarget.maxLength = 14;
    value = value.replace(/\D+/g, '')
    value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/,"($1) $2-$3");
    // value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/,"($1)$2-$3");
    console.log(value)
    e.currentTarget.value = value;
   
    return e
  }

  export function password(e: React.FormEvent<HTMLInputElement>) {
    
    let value = e.currentTarget.value;
    
    e.currentTarget.value = value;
   
    return e;
  }
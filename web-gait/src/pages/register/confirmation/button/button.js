import '../button/button.css';

const SIZES = ['btn--medium', 'btn--large', 'btn--small'];

const Button = ({
  children,
  type,
  onClick,
  buttonSize
}) => {
  
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];  

  return (
    <button
        className={`button ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
  );
};

export default Button;
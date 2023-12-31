import classes from './Button.module.css'

const Button = (props) => {
  const buttonClasses = `${classes.button} ${classes[props.className]}`;

  return (
    <button 
      className={buttonClasses}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
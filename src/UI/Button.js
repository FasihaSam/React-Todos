import classes from './Button.module.css';

const Button = (props) => {
    const cssClass = props.className;
    return ( <button 
     type= {props.type || 'button'}
     className= {classes[cssClass]}
     onClick={props.onClick}>
        {props.children}
    </button> )
}

export default Button;
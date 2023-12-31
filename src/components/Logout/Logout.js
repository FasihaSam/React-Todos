import classes from './Logout.module.css';
import { Link } from 'react-router-dom';

function Logout () {
return(
    <nav className= {classes.nav}>
    <ul><li> <Link to= '/'> Logout </Link></li></ul>
    </nav>
)
}
export default Logout;
import classes from './Logout.module.css';

function Logout () {
    
    const handleLogout = () =>{
        localStorage.removeItem('userToken');
        window.location.href = '/';
    }
return(
    <nav className= {classes.nav}>
    <ul><li onClick={handleLogout}> Logout </li></ul>
    </nav>
)
}
export default Logout;
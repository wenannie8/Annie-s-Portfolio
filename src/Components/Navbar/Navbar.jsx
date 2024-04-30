import './Navbar.css'
const Navbar = () => {
    return (
         <div className='nav'>
            <div className = "nav-logo"> Annie's Portfolio</div>
            <ul className="nav-menu">
                <li className='nav-work'> Work </li>
                <li>Resume</li>
                <li>About</li>   
            </ul>
        </div>
        
    )
}
export default Navbar
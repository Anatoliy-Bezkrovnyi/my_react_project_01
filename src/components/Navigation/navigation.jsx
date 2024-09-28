import { NavLink } from "react-router-dom"
import styles from "./navigation.module.css"
import clsx from "clsx"

const activeClassName = ({ isActive }) => { 
    return clsx(isActive && styles.isActive)
 }


const Navigation = () => { 

    return (
        <nav>
        <ul className={styles.navLinks}>
          <li><NavLink className={activeClassName} to="/">Home</NavLink></li>
          <li><NavLink className={activeClassName} to="/posts">Post Page</NavLink></li>
          <li><NavLink className={activeClassName} to="/balance">Balance Page</NavLink></li>
          
        </ul>
      </nav>
    )
}
 
export default Navigation
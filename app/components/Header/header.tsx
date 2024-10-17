
import Link from "next/link";
import headerStyle from "./header.module.css";




const Header = ()=>{
    
    
    return(
        <div className={headerStyle.header}>
    <ul id={headerStyle.container}>
        <li><Link href="/."></Link>Home</li>
        <li><Link href="./about"></Link>About</li>
        <li><Link href="./service"></Link>Service</li>
    </ul>
    </div>
    )
};
export default Header;
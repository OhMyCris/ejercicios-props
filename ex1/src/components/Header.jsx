import Links from "./Links";
import Logo from "./Logo";
import Menu from "./Menu";
import { data } from "./data";

const {header} = data;

const Header = () => {
    return <div>
        <Logo img= {header.logo.img}></Logo>
        <Links links= {header}></Links>
        <Menu menu= {header.menu}></Menu>
    </div>
}

export default Header;
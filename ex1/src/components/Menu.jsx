const Menu = ({menu}) => {
    return <div className="menu">
                {menu.map((item, index) => (
                    <a key={index} href={item.url}>{item.text}</a>
                ))}
            </div>
}

export default Menu;
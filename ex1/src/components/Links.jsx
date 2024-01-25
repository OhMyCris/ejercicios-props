const Links = ({links}) => {

    // console.log(links);
    return <div className="links">
                {links.links.map((item, index) => (
                    <a key={index} href={item.url}>{item.text}</a>
                ))}
            </div>
}

export default Links;
const Heading = ({heading}) => {
    return <div className="heading">
                <a href={heading.url}>{heading.text}</a>
            </div>
}

export default Heading;
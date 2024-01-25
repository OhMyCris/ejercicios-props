const Colors = ({colors}) => {
    return <div>
        {colors.map((item, index) => (
            <p key={index}>{item}</p>
        ))}
    </div>
}

export default Colors;
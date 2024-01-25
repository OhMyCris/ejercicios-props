import "./Sizes.css"

const Sizes = ({sizes}) => {
    return <div>
        {sizes.map((item, index) => (
            <div key={index} className={item.qty === 0 ? "opacity" : ""}>
                {item.qty <= 5 && <img src="https://cdn.achology.com/wp-content/uploads/20231011161150/cY0VvYbFve76m9w8NBpn9.png" className="relojes"/>}
                <span>{item.name}</span> 
            </div>
            
        ))}
    </div>
}

export default Sizes;
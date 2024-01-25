const Card = ({gallery}) => {
    console.log(gallery);
    return <div className="cards">
        {gallery.map((item, index) => (
                    <div key={index}>
                    <h2>{item.card.title}</h2>
                    <p>-{item.card.discount}%</p>
                    <p>{item.card.price}</p>
                    {item.card.tag && <p>{item.card.tag}</p>}
                    <img src={item.card.img} alt={item.card.title} />
                    </div>
                ))}
    </div>
}

export default Card;
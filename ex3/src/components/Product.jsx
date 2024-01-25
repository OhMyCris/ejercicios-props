import Colors from "./Colors";
import Sizes from "./Sizes";
import { data } from "./data";

const {product} = data;

const Product = () => {
    return <div>
        <h2>{product.title}</h2>
        <img src={product.img} alt={product.title}/>
        <p>{product.price}</p>
        <p>{product.ref}</p>
        <Colors colors={product.colors}></Colors>
        <Sizes sizes={product.sizes}></Sizes>
    </div>
}

export default Product;
import Card from "./Card";
import { data } from "./data";

const {gallery} = data

const Gallery = () => {
    return <div>
        <Card gallery={gallery}></Card>
    </div>
}

export default Gallery;
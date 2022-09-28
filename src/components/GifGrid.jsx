import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import './LoaderCustom.css'


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading
                &&
                (
                    <div className="center">
                        <div className="loader"><span>Loading...</span></div>
                    </div>
                )
            }
            <div className="card-grid">
                {
                    images.map(image => (
                        <GifItem
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}

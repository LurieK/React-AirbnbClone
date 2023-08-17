
import Star from "./img/Star 1.png";
 
function Card(props){
    return (
        <section className="cards">
            <div className="card-badge">SOLD OUT</div>
            <img className='card-image' src={props.img}/>
            //tag I don't know {props.openSpots=== 0 && display the image}
            <div className="card-info">
                <div className="star">
                    <img className="star-img" src={Star}/>
                    <span>{props.rating} </span>
                    <span class="gray"> ({props.reviewCount}) • </span>
                    <span class="gray">{props.location}</span>
                </div>
                <p>{props.title}</p>
                <p><span className="bold">From ${props.price}</span> / person</p>
            </div>
        </section>

    )

}

 export default Card
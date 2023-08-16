
import Star from "./img/Star 1.png";
 
function Card(props){
    return (
        <section className="cards">
            <img className='card-image' src={props.img}/>
            
            <div className="card-info">
                <div className="star">
                    <img className="star-img" src={Star}/>
                    <span>{props.rating} </span>
                    <span class="gray"> ({props.reviewCount}) • </span>
                    <span class="gray">{props.country}</span>
                </div>
                <p>{props.title}</p>
                <p><span className="bold">From ${props.price}</span> / person</p>
            </div>
        </section>

    )

}

 export default Card
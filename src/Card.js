
import Star from "./img/Star 1.png";
 
function Card(props){
    let badgeText
    if (props.item.openSpots === 0){
        badgeText = "SOLD OUT"
    }else if (props.item.location === "Online"){
        badgeText = "ONLINE"
    }
    return (
        <section className="cards">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img className='card-image' src={props.item.coverImg}/>
            <div className="card-info">
                <div className="star">
                    <img className="star-img" src={Star}/>
                    <span>{props.rating} </span>
                    <span class="gray"> ({props.item.stats.reviewCount}) • </span>
                    <span class="gray">{props.item.stats.location}</span>
                </div>
                <p>{props.item.title}</p>
                <p><span className="bold">From ${props.item.price}</span> / person</p>
            </div>
        </section>

    )

}

 export default Card
import Katie from "./img/Katie_Zaferes.png";
import Star from "./img/Star 1.png";

function Card(){
    return (
        <section className="cards">
            <img className='card-image' src={Katie}/>
            
            <div className="card-info">
                <div className="star">
                    <img className="star-img" src={Star}/>
                    <span>5.0</span>
                    <span>(6) • </span>
                    <span>USA</span>
                </div>
                <p>Life lessons with Katie Zaferes</p>
                <p><strong>From $136</strong> / person</p>
            </div>
        </section>

    )

}

 export default Card
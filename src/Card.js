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
                    <span class="gray">(6) • </span>
                    <span class="gray">USA</span>
                </div>
                <p>Life lessons with Katie Zaferes</p>
                <p><span className="bold">From $136</span> / person</p>
            </div>
        </section>

    )

}

 export default Card
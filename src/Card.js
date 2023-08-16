import Katie from "./img/Katie_Zaferes.png";
import Star from "./img/Star 1.png";

function Card(){
    return (
        <section className="cards">
            <img className='card-image' src={Katie}/>
            
            <div className="card-info">
                <div className="star">
                    <img className="star-img" src={Star}/>
                    <p>5.0(6)-USA</p>
                </div>
                <p>Life lessons with Katie Zaferes</p>
                <p>From $136 / person</p>
            </div>
        </section>

    )

}

 export default Card
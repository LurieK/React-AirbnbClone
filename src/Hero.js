import Grid from "./photo-grid"

function Hero (){
    return(
        <>
        <div>
            <img src={Grid} className="grid"/>
        </div>
        <div className="hero-text">
            <h1>Online Experiences</h1>
            <h3>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</h3>
        </div>
        </>
    )

}
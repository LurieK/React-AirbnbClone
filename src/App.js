import "./styles.css";
import Navbar from "./Navbar.js";
import Hero from "./Hero.js";
import Card from "./Card.js";
import Katie from "./img/Katie_Zaferes.png"
import cardData from "./data.js"

export default function App() {
  const cardElements = cardData.map((card)=>{
    return <Card 
    key= {card.id}
    item={card}
   />
  })

  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <div className="cards-section">
     {cardElements}
     </div>
    </div>
  );
}






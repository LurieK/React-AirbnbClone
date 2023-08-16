import "./styles.css";
import Navbar from "./Navbar.js";
import Hero from "./Hero.js";
import Card from "./Card.js";
import Katie from "./img/Katie_Zaferes.png"

export default function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <Card 
      img =
      rating= "5.0"
      reviewCount={6}
      country="USA"
      title= "Life Lessons with Katie Zaferes"
      price={136}
     />
    </div>
  );
}






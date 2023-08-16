import Logo from "./img/airbnb-logo.png"

function Navbar (){
    return (
        <div className='navbar'>
            <img className="logo" src={Logo}/>
        </div>
    )
}

export default Navbar
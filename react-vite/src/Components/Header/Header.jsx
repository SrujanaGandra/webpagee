import "./Header.css"

const Header = () => {
    return (
        <>
        <header className = "header">
            <div>
        <img src="https://vismaifood.com/themes/pivisions/assets/images/logo.png"></img>
        </div>
        <nav>
        <div className="list">
        <a href="">Home</a>
        <a href="">Recipes</a>
        <a href="">Subscribe</a>
        </div>
        </nav>
        
        </header>
        </>
    )
}

export default Header
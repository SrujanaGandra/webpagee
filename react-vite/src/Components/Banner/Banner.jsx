import "./Banner.css"

const Banner = () => {
  return (
    <>
      <div className="banner">
      <h1>Trending Recipes</h1>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="food">
            <img src="https://vismaifood.com/storage/app/uploads/public/155/a80/259/thumb__700_0_0_0_auto.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-caption d-none d-md-block">
            <h3>Street-Style Mumbai<br></br> Sandwich Recipe|Sandwich<br></br> Recipe</h3>
          </div>
        </div>
        <div className="carousel-item">
          <div className="food">
            <img src="https://vismaifood.com/storage/app/uploads/public/9aa/a14/be8/thumb__700_0_0_0_auto.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-caption d-none d-md-block">
            <h3>South Indian Style Mutton<br></br> Dum Biryani|Mutton Dum <br></br> Biryani Recipe</h3>
          </div>
        </div>
        <div className="carousel-item">
          <div className="food">
            <img src="https://vismaifood.com/storage/app/uploads/public/70a/d13/a53/thumb__700_0_0_0_auto.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-caption d-none d-md-block">
            <h3>Wedding Style Bottle Gourd<br></br> Halwa Recipe|Sorakaya Halwa<br></br> Recipe
              Sweets</h3>
          </div>
        </div>
        <div className="carousel-item">
          <div className="food">
            <img src="https://vismaifood.com/storage/app/uploads/public/2c4/ed1/09b/thumb__700_0_0_0_auto.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-caption d-none d-md-block">
            <h3>Superhit Kakarakaya <br></br>kotthimeera karam Recipe|<br></br>Bitter Gourd With Coriander<br></br> Leaves Recipe</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner;
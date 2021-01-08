
import winter_house from "../images/winter_house.png"

export const SecondPortion = ()=> {

    return(
        <div className="box2">


        <img src={winter_house} className="leftAlign_image" />
        <div className="rightAlign_items">
          <h1 style={{ color: "orange" }}  >Blow Blow Thou Winter Wind</h1>
          <br />
          <h3>Blow, blow, thou winter wind, </h3>
          <h3>Thou art not so unkind </h3>
          <h3>As man’s ingratitude; </h3>
          <h3> Thy tooth is not so keen, </h3>
          <h3>Because thou art not seen, </h3>
          <h3> Although thy breath be rude.</h3>
          <br />
          <h4>-[William Shakespeare]</h4>

        </div>
      </div>
    )
}

import {Updown_animation} from '../anims/Updown_animation'
export const LastPortion = ()=>{

    return(
        <div className="box2" style={{ background: "  linear-gradient(90deg, rgba(206,2,189,1) 0%, rgba(75,6,193,1) 100%)" }}>

        <div className="centerAlign_items" ref={Updown_animation().ref} >
          <h1>About us</h1>
          <hr />
          <br />
          <h2>Muhammad Usman</h2>
          <h2>  PanaCloud BootCamp 2020 </h2>
          <h2> Project 4B</h2>

          <br />

        </div>
      </div>
    )
}
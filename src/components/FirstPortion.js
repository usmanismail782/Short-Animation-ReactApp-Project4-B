import sImage from "../images/Intro_Brain.svg"
import aImage from "../images/Intro_Featured_Image_Empty.svg"
import bImage from "../images/Intro_Front_Layer.svg"
import Snowfall from 'react-snowfall'
import {Updown_animation} from '../anims/Updown_animation'
import {Blinking_animation} from '../anims/Blinking_animation'
import {ChangeTextColor_animation} from '../anims/ColorChange_animation'



export const FirstPortion = ()=> {

    return(
    <div className="box1"  >
        <Snowfall snowflakeCount={200} />

        <div className="headings">
          <p>PanaCloud Project</p>
          <p ref={ChangeTextColor_animation().ref}>4B</p>
          <p> By Usman </p>
        </div>


        <div className="header-container-image" >
          <img src={sImage} ref={Updown_animation().ref} />
          <img src={bImage} ref={Blinking_animation().ref}/>
          <img src={aImage} />

        </div>
      </div>

    )
}
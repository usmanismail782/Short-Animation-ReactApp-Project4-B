
import useWebAnimations from "@wellyshen/use-web-animations";
  
 


  export const ChangeTextColor_animation = ()=>{
  

           const anim =         useWebAnimations({

                        keyframes:
                        [
                            { color: " #fffb01" },
                            { color: " rgb(38, 209, 15)" },
                            { color: " white" },
                            { color: " rgba(206,2,189,1)" },
                            { color: " #fffb01" }


                        ],
                        timing:
                        {
                        duration: 6000,
                        iterations: Infinity,


                        }

                    }
                    )
    return(

        anim
    )


}
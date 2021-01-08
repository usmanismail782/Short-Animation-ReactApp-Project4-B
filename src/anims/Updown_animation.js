
  import useWebAnimations from "@wellyshen/use-web-animations";
  
  export const Updown_animation = ()=> {
      
    
    const anim = useWebAnimations({

    keyframes:
      [
        { transform: "translate(0 ,0)" },
        { transform: "translateY(50px)" },
        { transform: "translate(0 ,0)" },


      ],
    timing:
    {
      duration: 3200,
      iterations: Infinity,


    }

  }
  )

  return anim;
}
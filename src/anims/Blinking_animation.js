
import useWebAnimations from "@wellyshen/use-web-animations";
  
 
export const Blinking_animation = ()=> {
  
  
  
  const anim = useWebAnimations({

    keyframes:
      [
        { opacity: 0 },
        { opacity: .5 },
        { opacity: 1 }
      ],
    timing:
    {
      duration: 100,
      iterations: Infinity,
      playbackRate: 1

    }

  }
  )

  return anim

}
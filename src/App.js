import React from 'react';
import './App.css';
import useWebAnimations from "@wellyshen/use-web-animations";
function App() {



  const background1Movement = useWebAnimations({
    keyframes:  [
                    { transform: "rotate(360deg)", background: "red"},  
                   ],
    timing: {
      duration: 4000,
      iterations: Infinity
     
    }
  });

  const speedUp = () => {
    
   const animation = background1Movement.getAnimation()

    if(animation.playState === "running")
   { animation.pause()}
    else
    onMo
    {animation.play()}

  };

 

  return (
  
      <div className="square" id="foreground1" ref={background1Movement.ref}  ></div>

  );
}

export default App;

import React from "react";
import lottie from "lottie-web";
import animation from "../images/data.json";
let animObj = null;
 class App extends React.Component{
 componentDidMount() {
         animObj = lottie.loadAnimation({
         container: this.animBox,
         renderer: "svg",
         loop: true,
         autoplay: true,
         animationData: animation
     });
 }
     handleStop = () => {
         animObj.stop();
     }
     handlePlay() {
         animObj.play();
     }
     render() {
         return (
             <div className="App">
                 <div className="animation-container" ref={ ref => this.animBox = ref} onMouseEnter={this.handlePlay} onMouseLeave={this.handleStop}/>
                 <div>Bodymovin Animations in React</div>

             </div>
         )
     }
 }
 export default App



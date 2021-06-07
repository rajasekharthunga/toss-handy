import {React, useState } from 'react';
import './App.css';
import { ReloadOutlined } from '@ant-design/icons'
import Wickets from "./assests/wickets.png"
import BallBg from "./assests/ball-bg.jpg"
import headsCoin from "./assests/headsCoin.png"
import tailsCoin from "./assests/tailsCoin.png"

import { Modal } from "antd"
import 'antd/dist/antd.css'

function App() {
  const [isHeads, setIsHeads] = useState("")
  const [showModal, setShowModal] = useState(false)
  const coin_flip = () => {
    setIsHeads("")
    var flipResult = Math.floor((Math.random() * 2) + 1);
    setTimeout(() =>{
      if(flipResult === 1){
        setIsHeads("heads")
        console.log('it is head');
      }
      else{
        setIsHeads("tails")
        console.log('it is tails');
      }
    }, 100);
    setTimeout(() => {
      setShowModal(true)
    },3250)
    setTimeout(() => {
      setShowModal(false)
    }, 5200)  
  }
  const refreshHandler = () => {
    setIsHeads("")
  }
  return (
    <div className="main-div">
      <Modal
            title="Toss Result" 
            visible={showModal} 
            className={"success-overlay"}
            closable={false}
            bodyStyle={{ "height" : "400px"}} >
            <img src={isHeads === "heads" ? headsCoin : tailsCoin} alt="" />
            {/* <img src={Wickets} alt="" /> */}
            {/* <span>{isHeads === "heads" ? "It is Heads" : "It is Tails"}</span>                 */}
        </Modal>
        <img src={BallBg} alt="" />
        <h1>Toss Handy</h1>
        {/* <div className="coin-flip">
          <div className={ isHeads ? "heads show" : "heads"}>heads</div>
          <div className={ isHeads ? "tails" : "tails show"}>tails</div>
          <button id="btnFlip" onClick={coin_flip}>Flip the Coin</button>
        </div> */}
        <ReloadOutlined className="reload-icon" onClick={refreshHandler}/>
        <div id="coin" className={isHeads}>
          <div className="side-a">
            <span>HEADS</span>
          </div>
          <div className="side-b">
            <span>TAILS</span>
          </div>
        </div>
        <button id="btnFlip" onClick={coin_flip} className="flip-button">
          <span>Flip the Coin</span>
        </button>
    </div>
  );
}

export default App;

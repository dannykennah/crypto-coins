import React from "react";
import "./Coin.css";

const Coin = ({name, symbol, image, price, mcap, perc}) => {

      
    return(
    <div className="coin-card">
            <div className="coin-row">
                <img className="coin-logo" src={image} alt="logo"></img>
                <h4 className="coin-name">{name}</h4>
                <h4 className="coin-symbol">{symbol}</h4>
                <h4 className="coin-price">£{price}</h4>
                {perc < 0 ? (
                    <h3 className="coin-perc red">{perc}%</h3>
                ) : (
                    <h3 className="coin-perc green">{perc}%</h3>
                )}
                <h6 className="coin-mcap">£{mcap.toLocaleString()}</h6>
            </div>
    </div>
    
       

        

        
    )
}

export default Coin;
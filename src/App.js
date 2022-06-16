import React, {useState, useEffect} from 'react';
import logo from './cosmos-wordmark-complex-dark.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Coin from './Coin';
import './App.css';
import './Coin.css';

function App(  ) {
  const [coins, setCoins] = useState( [] );
  const [search, setSearch] = useState('');

  const element = <FontAwesomeIcon icon={faArrowUp} />
  const element1 = <FontAwesomeIcon icon={faArrowDown} />

  useEffect( () => {
   
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&category=cosmos-ecosystem&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res =>{
      setCoins(res.data);
      
    });
  }, [1]);


  const sortCoinsh = () => {
    const sortByPerc = [...coins];

    sortByPerc.sort((a, b) => {
      return parseFloat(b.price_change_percentage_24h) - parseFloat(a.price_change_percentage_24h)
    })
    setCoins(sortByPerc)
  }
  const sortCoinsl = () => {
    const sortByPerc = [...coins];

    sortByPerc.sort((a, b) => {
      return parseFloat(a.price_change_percentage_24h) - parseFloat(b.price_change_percentage_24h)
    })
    setCoins(sortByPerc)
  }
  

  const handleChange = e => {
    setSearch(e.target.value)
  }
  const sortByPerc = coins.filter(coin =>
     coin.name.toLowerCase().includes(search.toLowerCase())
    
    )
    
  const listCoins = sortByPerc.map((coin) => {
        return(
          <Coin key={coin.id} name={coin.name} symbol={coin.symbol} image={coin.image} price={coin.current_price} mcap={coin.market_cap} perc={coin.price_change_percentage_24h?.toFixed(2)}/>
        )
        } )
 
  

  return (
    <div className="App">
      <div className='App-Header'>
         
        <div className='coin-search'>
        <div>
          <img className='cosmos' src={logo} alt="logo"/>
        </div>
            <h3>Search Currency</h3>
              <form>
                <input type='text' placeholder='Search' className='coin-input' onChange={handleChange}/>
              </form>
        </div>
        
        
        </div>

      <div className='App-Body'>
        <div className='coin-cointainer'>
          <div className='headings'>
            <div className='coin-row'>
              <h6 className='coin-logo'></h6>
              <h6 className='coin-name name'>NAME</h6>
              <h6 className='coin-symbol symbol'>symbol</h6>
              <h6 className='coin-price price'>PRICE</h6>
              <h6 className='coin-perc perc'>24h<i onClick={sortCoinsh}>{element}</i><i onClick={sortCoinsl}>{element1}</i></h6>
              <h6 className='coin-mcap mcap'>MKCAP</h6>
            </div>
          </div>
          
          {listCoins}
        </div>
      </div>
    </div>
  );

}

export default App;

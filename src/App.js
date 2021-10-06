import './App.css';
import React, {useState, useEffect} from 'react';
import './Components/BeerInfo'; 
import BeerInfo from './Components/BeerInfo';
import Header from './Components/Header';

const brewDogUrl = "https://api.punkapi.com/v2/beers?per_page=80";

/**
 *Retrieves and displays information about Brewdog beers
 *
 */
function App() {

  const [beerData, setBeerData] = useState([]);

  useEffect(() => {
    getBeerData();
  },[])

  /**
   *Retrieves beer data from Brew Dog and sorts by ABV in descending order
   *
   */
  const getBeerData = async() => {
    const response = await fetch(brewDogUrl);
    const jsonBeerData = await response.json();
    const jsonSortedBeerData = jsonBeerData.sort((beer1,beer2) => beer2.abv - beer1.abv);
    setBeerData(jsonSortedBeerData); 
  }

  return (
    <div>
      <Header/>
      <BeerInfo  beerData = {beerData} />
    </div>    
      
  );
}

export default App;

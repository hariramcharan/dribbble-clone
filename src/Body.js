import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import RestaurantCard from './RestaurantCard';
const Body=()=>{  
  const [data, setData] = useState([]);
  
  const [sortBy, setSortBy] = useState("");
  const [currentTab, setCurrentTab] = useState("discover");

  useEffect(() => {
    if (sortBy === "popularity") {
      // Sort by popularity
      setData(prevData => prevData.slice().sort((a, b) => b.popularity - a.popularity));
    } else if (sortBy === "new") {
      // Sort by new
      setData(prevData => prevData.slice().sort((a, b) => a.new - b.new));
    }
  }, [sortBy]);

  useEffect(() => {
   // Load data based on the current route
   fetchData(currentTab);
 }, [currentTab]);

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };


  const fetchData = async (tab) => {
   try {
     const response = await fetch('/data.json');
     const jsonData = await response.json();
     console.log(jsonData);

     const filteredData = jsonData.filter((ele) => ele.type === tab.toLowerCase());
     setData(filteredData);
   } catch (error) {
     console.error("Error fetching data:", error);
   }
 };



  return (
   <Router>
    <div className="body">
      <div className="search">Search</div>
      <select onChange={handleSortChange}>
        <option value="">Sort By</option>
        <option value="popularity">Popular</option>
        <option value="new">New & Noteworthy</option>
      </select>
      <div className="buttons">
          <Link to="/discover" onClick={() => setCurrentTab("discover") }><span>Discover</span></Link>
          <Link to="/animation" onClick={() => setCurrentTab("animation") }><span className='buton'>Animation</span></Link>
          <Link to="/branding" onClick={() => setCurrentTab("branding") }><span className='buton'>Branding</span></Link>
          <Link to="/illustration" onClick={() => setCurrentTab("illustration") }><span className='buton'>Illustration</span></Link>
          <Link to="/mobile" onClick={() => setCurrentTab("mobile") }><span className='buton'>Mobile</span></Link>
          <Link to="/print" onClick={() => setCurrentTab("print") }><span className='buton'>Print</span></Link>
        </div>
      <div className="res-container">
      <Switch>
            <Route path="/discover">
              {data.map((ele, index) => (
                <div key={index}>
                  <RestaurantCard Name={ele.Name} imglink={ele.imglink} popularity={ele.popularity} new={ele.new} tag="Pro"/>
                </div>
              ))}
            </Route>
            <Route path="/animation">
              {data.map((ele, index) => (
                <div key={index}>
                  <RestaurantCard Name={ele.Name} imglink={ele.imglink} popularity={ele.popularity} new={ele.new} tag="Pro"/>
                </div>
              ))}
            </Route>
            <Route path="/branding">
              {data.map((ele, index) => (
                <div key={index}>
                  <RestaurantCard Name={ele.Name} imglink={ele.imglink} popularity={ele.popularity} new={ele.new} tag="Pro"/>
                </div>
              ))}
            </Route>
            <Route path="/illustration">
              {data.map((ele, index) => (
                <div key={index}>
                  <RestaurantCard Name={ele.Name} imglink={ele.imglink} popularity={ele.popularity} new={ele.new} tag="Pro"/>
                </div>
              ))}
            </Route>
            <Route path="/mobile">
              {data.map((ele, index) => (
                <div key={index}>
                  <RestaurantCard Name={ele.Name} imglink={ele.imglink} popularity={ele.popularity} new={ele.new} tag="Pro"/>
                </div>
              ))}
            </Route>
            <Route path="/print">
              {data.map((ele, index) => (
                <div key={index}>
                  <RestaurantCard Name={ele.Name} imglink={ele.imglink} popularity={ele.popularity} new={ele.new} tag="Pro"/>
                </div>
              ))}
            </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );


  }
  export default Body;
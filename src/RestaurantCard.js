import { useState } from 'react';

const RestaurantCard = (props) => {
  const [count, setCount] = useState(0);

  const handleHeartClick = () => {
    setCount((prevCount) => prevCount === 0 ? 1 : 0);
  };

  return (
    <div>
      <div className="res-card">
        <div>
          <img className="card-img" src={props.imglink} alt="" />
        </div>
        <div className="titles">
          <h3>{props.Name}</h3>
          <button>{props.tag}</button>
          <div>
            <span>{count}</span>
            <button onClick={handleHeartClick}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" className="icon fill-current shot-tools-icon">
                <path d="M10.7408 2C13.0889 2 14.6667 4.235 14.6667 6.32C14.6667 10.5425 8.11856 14 8.00004 14C7.88152 14 1.33337 10.5425 1.33337 6.32C1.33337 4.235 2.91115 2 5.2593 2C6.60745 2 7.48893 2.6825 8.00004 3.2825C8.51115 2.6825 9.39263 2 10.7408 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;

import React, {useState} from "react";
import data from './data';
import './App.css';
import Tours from "./components/Tours";

const App = () => {

  const[tour, setTours] = useState(data);

  function removeTour(id){
    const newTour = tour.filter(t => t.id !== id);
    console.log(id);   
    setTours(newTour);

  }

  if(tour.length === 0){
    return(
      <div className="no-tour-left">
        <h1>No tours Left</h1>
        <button onClick={()=>setTours(data)} className="no-tour-left-btn">
          Refresh
        </button>
      </div>
    )
  }

  function c(){
    console.log(tour);
  }

  return (
      <div>
        <Tours tours={tour} removeTour={removeTour}></Tours>
      </div>

  )
};

export default App;

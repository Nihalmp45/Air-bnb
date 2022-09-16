import React from 'react';
import data from './Components/data';
import './App.css';
import Card from './Components/Card';
import Middlelogo from './Components/Middlelogo';
import Navbar from './Components/Navbar';





function App() {
  const cards=data.map(item=>{
    return (<Card {...item}/>)
})
  return (
    <div >
         <Navbar/>
         <Middlelogo/>
        <section className='card-list'>
            {cards}
          </section>
    </div>
  );
}

export default App;


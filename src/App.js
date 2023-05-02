import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
// new set is used to get all the different properties in this case lunch,breakfast,dinner.
//spread opeator and square breackers convert it from object to array.all adds all property
const allCategories=["all",...new Set(items.map((item)=> item.category))]
 
console.log(allCategories)

function App() {
  const[menuItems,setMenuItems]=useState(items)
  const[categories,setCatergories]=useState(allCategories)
  const filterItems=(categories)=>{
    if(categories==="all"){
      setMenuItems(items)
    }
    else{
 const newCategories=items.filter((item)=>item.category===categories)
 setMenuItems(newCategories)
    }
  }

  return <h2>
    <section className="menu section">
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </div>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu menuItems={menuItems} />
    </section>
    </h2>;
}

export default App;

import React from 'react';

const Categories = ({filterItems,categories}) => {
  return( 
  <div className='btn-container'>
   {categories.map((category,ibdex)=>{
    console.log(ibdex)
    return(
       <button 
       type='button'
       className='filter-btn'
       key={ibdex}
        onClick={()=>filterItems(category)}>{category}</button>
  ) 
   })}
  </div>
  )
};

export default Categories;

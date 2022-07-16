import React from "react";


function CategoryFilter({categories, selected,setCategory}) {
  let category = categories.map((category) => {
    const className = category === selected ? "selected" : null;
    return (
      <button 
        key={category}
        className={className}
        onClick={() => setCategory(category)}
      >
      {category}
      </button>
      )
    })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {category}
    </div>
  );
}

export default CategoryFilter;

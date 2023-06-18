import React from "react";

function CategoryFilter({categories, onChangeClick, selectedCategory}) {



  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
        {categories.map((category) => {
          const className = category === selectedCategory ? "selected" : null;
          return(
            <button key={category} className={className} onClick={() => onChangeClick(category)}>{category}</button>
          )
        })}
    </div>
  );
}

export default CategoryFilter;


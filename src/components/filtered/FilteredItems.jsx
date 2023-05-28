import "./FilteredItems.css"
import { useSelector } from "react-redux";
const FilteredItems = () => {
  const jobs = useSelector((state) => state.filter.myArray);
 
  return (
    <div className="filter-container">
          <div className="filter-values">
              {jobs.map((job, index) => (
                  <div key={index} className="item">
                  {job}
                  <button>X</button>
                  </div>
              ))}
      </div>
      <button>Clear</button>
    </div>
  );
};

export default FilteredItems;

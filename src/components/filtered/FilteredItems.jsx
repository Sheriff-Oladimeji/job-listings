import "./filteredItems.css";
import { useSelector } from "react-redux";
const FilteredItems = () => {
    const jobs = useSelector((state) => state.filter.value);
  return (
    <div className="filter-values">
          <div>
              {jobs.map((job, index) => (
                  <div key={index}>
                      <p>{job}</p>  
                  </div>
              ))}
      </div>
      <button>Clear</button>
    </div>
  );
};

export default FilteredItems;

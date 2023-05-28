import { clearFilter, removeFilter } from "../../features/filter";
import "./Selected.css";
import { useSelector, useDispatch } from "react-redux";
const Selected = () => {
  const dispatch = useDispatch();
  let jobs = useSelector((state) => state.filter.myArray);
  console.log(jobs);

  return (
    <div className={jobs.length === 0 ?"hidden" :"filter-container"}>
      <div className="filter-values">
        {jobs.map((job, index) => (
          <div key={index} className="item">
            <p>{job}</p>
            <button
              onClick={(event) =>
                dispatch(removeFilter(event.target.previousSibling.innerText))
              }
            >
              X
            </button>
          </div>
        ))}
      </div>
      <button onClick={() => dispatch(clearFilter())}>Clear</button>
    </div>
  );
};

export default Selected;

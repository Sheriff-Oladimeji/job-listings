import "./Selected.css";
import { useSelector } from "react-redux";
const Selected = () => {
  let jobs = useSelector((state) => state.filter.myArray);
  console.log(jobs)

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
      <button >Clear</button>
    </div>
  );
};

export default Selected;

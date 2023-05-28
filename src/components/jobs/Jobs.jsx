import { useState } from "react";
import data from "../../data/data";
import Button from "../button/Button";
import { useDispatch } from "react-redux";
import "./Jobs.css";
import { filterClick } from "../../features/filter";
const Jobs = () => {
  const [jobs, setJobs] = useState(data);
  const dispatch = useDispatch([]);
  const filterRole = (role) => {
    setJobs(data.filter((job) => job.role === role));
  };
  const filterLevel = (level) => {
    setJobs(data.filter((job) => job.level === level));
  };
  const filterLanguage = (language) => {
   data.map((obj) => obj.languages.filter(value => value === language) )
  };

  return (
    <main>
      <div className="cards">
        {jobs.map((job) => (
          <section
            key={job.id}
            className={`card ${job.featured ? "card-new" : ""}`}
          >
            <div className="card-info">
              <img src={job.logo} alt="" />
              <div className="content">
                <div className="card-tags">
                  <h4>{job.company}</h4>
                  {job.new == true && <p className="new">New!</p>}
                  {job.featured == true && <p className="featured">Featured</p>}
                </div>
                <h3>{job.position}</h3>
                <div className="card-about">
                  <small>{job.postedAt}</small>•<small>{job.contract}</small>•
                  <small>{job.location}</small>
                </div>
              </div>
            </div>
            <div className="buttons">
              <Button
                value={job.role}
                changeValue={(event) => {
                  filterRole(job.role);
                  dispatch(filterClick(event.target.innerText));
                }}
              />
              <Button
                value={job.level}
                changeValue={(event) => {
                  filterLevel(job.level);
                  dispatch(filterClick(event.target.innerText));
                }}
              />
              {job.languages.map((language, index) => (
                <Button
                  value={language}
                  key={index}
                  changeValue={() => {
                    filterLanguage(language)
                  }}
                />
              ))}
              {job.tools.map((tool, index) => (
                <Button value={tool} key={index} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default Jobs;

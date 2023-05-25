import data from "../../data/data.json";
import Button from "../button/Button";
import "./Jobs.css"
const Jobs = () => {
  return (
    <main>
      <div className="cards">
        {data.map((job) => (
          <section
            key={job.id}
            className={`card ${job.featured ? "card-new" : ""}`}
          >
            <div className="card-info">
              <img src={job.logo} alt="" />
              <div>
                <div className="card-tags">
                  <h4>{job.company}</h4>
                  <p className="new">{job.new ? "New!" : null}</p>
                  <p className="featured">{job.featured ? "Featured" :null}</p>
                </div>
                <h3>{job.position}</h3>
                <div className="card-about">
                  <small>{job.postedAt}</small>•<small>{job.contract}</small>•
                  <small>{job.location}</small>
                </div>
              </div>
            </div>
            <div className="buttons">
              <Button value={job.role} />
              <Button value={job.level} />
              {job.languages.map((language) => (
                <Button value={language} key={job.id} />
              ))}
              {job.tools.map((tool) => (
                <Button value={tool} key={job.id} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default Jobs;

import data from "../../data/data.json";
import Button from "../button/Button";
import "./Jobs.css"
const Jobs = () => {
  return (
    <main>
      <div className="cards">
        {data.map((job) => (
          <section key={job.id} className={`card ${job.new?"card-new":""}`}>
            <div className="card-info">
              <img src={job.logo} alt="" />
              <div>
                <div>
                  <h4>{job.company}</h4>
                  <p>{job.new ? "New" : null}</p>
                  <p>{job.featured ? "Featured" : null}</p>
                </div>
                <h3>{job.position}</h3>
                <div>
                  <small>{job.postedAt}</small>
                  <small>{job.contract}</small>
                  <small>{job.location}</small>
                </div>
              </div>
            </div>
            <div>
              <Button value={job.role} />
              <Button value={job.level} />
              {job.languages.map((language) => (
                <Button value={language} key={job.id} />
              ))}
                    {job.tools.map(tool => (
                        <Button value={tool} key={job.id}/>
                    ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default Jobs;

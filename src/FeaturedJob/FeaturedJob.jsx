import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const FeaturedJob = ({job}) => {

  
    
    const {companylogo, jobtitle, companyname, remoteoronsite, fulltimeorparttime, location, salary} = job;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl h-full">
  <figure>
    <img className='mt-2 p-4' src={companylogo} alt="companyLogo" />
    </figure>
  <div className="card-body">
    <h2 className="card-title">{jobtitle}</h2>
    <p>{companyname}</p>
    <div className='flex justify-around items-center'>
    <button className="btn btn-outline btn-accent">{remoteoronsite}</button>
    <button className="btn btn-outline btn-accent">{fulltimeorparttime}</button>
    </div>
    <div className='flex items-center'>
        <p><FontAwesomeIcon icon={faLocationDot} /> {location}</p>
        <p><FontAwesomeIcon icon={faDollarSign} /> Salary: {salary}</p>

    </div>
    <div className="card-actions my-2">
    <Link to={`/job/${job.id}`} className="btn btn-accent">
        View Details
    </Link>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default FeaturedJob;
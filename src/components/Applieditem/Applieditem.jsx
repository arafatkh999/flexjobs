import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Applieditem = ({cartItem}) => {


    return (
        <div className='my-container'>
            <div className="card card-side bg-base-100 shadow-xl">
  <figure><img className='p-5' src={cartItem.companylogo} /></figure>
  <div className="card-body">
    <h2 className="card-title">{cartItem.jobtitle}</h2>
    <p>{cartItem.companyname}</p>
    <div className='flex'>
    <button className='btn btn-accent w-25'>{cartItem.remoteoronsite}</button>
    <button className='btn btn-accent w-25 ml-5'>{cartItem.fulltimeorparttime}</button>
    </div>
    <div className='flex'>
    <p><FontAwesomeIcon icon={faLocationDot} /> {cartItem.location}</p>
    <p><FontAwesomeIcon icon={faDollarSign} /> Salary: {cartItem.salary}</p>
    </div>
    <div className="card-actions justify-end">
    <Link to={`/job/${cartItem.id}`} className="btn btn-accent">View Details</Link>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Applieditem;
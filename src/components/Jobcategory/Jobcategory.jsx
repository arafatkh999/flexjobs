import React from 'react';

const Jobcategory = ({singlejob}) => {
    const {categoryLogo, categoryName, jobsAvailable} = singlejob;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
  <figure><img className='bg-slate-200 mt-2 p-4 rounded-md' src={categoryLogo} alt="jobscategory" /></figure>
  <div className="card-body">
    <h2 className="card-title font-bold">{categoryName}</h2>
    <p className='font-light'>{jobsAvailable}</p>
    
  </div>
</div>
</div>
    );
};

export default Jobcategory;
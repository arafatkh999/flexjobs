import React, { useEffect, useState } from 'react';
import FeaturedJob from '../../FeaturedJob/FeaturedJob';
import Jobcategory from '../Jobcategory/Jobcategory';

const Home = () => {

    const [jobscategory, setJobcategory] = useState([]);
    const [jobinfo, setJobinfo] = useState([]);
    const [showAll, setShowAll] = useState(false);

    const handleShowAll = () => {
        setShowAll(true);
      };



    useEffect(()=>{
        fetch('jobscategory.json')
        .then(res => res.json())
        .then(data => setJobcategory(data))
    },[]);

    useEffect(()=>{
        fetch('jobsinfo.json')
        .then(res => res.json())
        .then(data => setJobinfo(data))
    }, []);

    return (
        <div className='my-container'>
          <section className='flex flex-col justify-center items-center lg:flex-row'>
            <div>
                <h2 className='text-5xl lg:text-8xl'>
                One Step Closer To Your <span className='text-teal-400'>Dream Job</span> 
                </h2>
                <p className='py-4'>
                Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                </p>
                <button className='btn btn-accent'>Get Started</button>
            </div>
            <div>
                <img src="person.png" alt="" />
            </div>
            
            </section>
            <section>
                <div>
                    <h2 className='text-3xl lg:text-6xl text-center py-4 font-semibold'>Job Category List</h2>
                    <p className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='grid gap-4 grid-cols-1 lg:grid-cols-4 my-5'>
                    {
                        jobscategory.map(singlejob => <Jobcategory key={singlejob.id}
                        singlejob={singlejob}
                        ></Jobcategory>)
                    }
                </div>

                </section>

                <section>
                <div>
                    <h2 className='text-3xl lg:text-6xl text-center py-4 font-semibold'>Featured Jobs</h2>
                    <p className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='grid gap-4 grid-cols-1 lg:grid-cols-2 my-5'>
                    {
                        jobinfo.slice(0, showAll? 6 : 4).map(job =><FeaturedJob
                        key={job.id}
                        job={job}
                        ></FeaturedJob>)
                    }

                </div>
                <div className='flex justify-center'>
                    {!showAll && (
                            <span onClick={handleShowAll}>
                            <button className="btn btn-accent">See All Jobs</button>
                            </span>
                        )}
                </div>
                                    
                    
                    </section>  
            
        </div>
    );
};

export default Home;
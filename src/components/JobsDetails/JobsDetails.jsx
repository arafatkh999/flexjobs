import { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { faCalendarWeek } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { addToDb } from '../../utils/fakedb';
import toast, { Toaster } from 'react-hot-toast';
import AppliedJobs from '../AppliedJobs/AppliedJobs';


const JobsDetails = () => {
    const { id } = useParams();

    const [jobinfo, setJobinfo] = useState({});
    const jobs = useLoaderData();
    

    useEffect(() => {
        if (jobs) {
            let match = jobs.find(job => job.id == id);
            setJobinfo(match);
        }
    }, [jobs, id]);


  const [cart, setCart] = useState([])

  const handleAddToCart = product => {
    let newCart = []
    const exists = cart.find(
      existingProduct => existingProduct.id === product.id
    )
    if (!exists) {
      product.quantity = 1
      newCart = [...cart, product]
    } else {
      const rest = cart.filter(
        existingProduct => existingProduct.id !== product.id
      )
      exists.quantity = exists.quantity + 1
      newCart = [...rest, exists]
    }

    setCart(newCart)
    addToDb(product.id)
    if(exists){
        toast.error("Already applied in this job", { autoClose: 500 })
        
    }
    else{
        toast.success('Applied in the job', { autoClose: 500 })
    }
    

  }

    return (
        <div>
            <Toaster />
            <section>
                    <div className="hero">
                    <img src='Vector.png' alt="" />
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Job Details</h1>
                </div>
                </div>
                </div>
            </section>
            <section className='my-container grid grid-cols-1 lg:grid-cols-5 gap-5'>
                <div className='col-span-3'>
                    <h2> <span className='font-semibold'>Job Description: </span> {jobinfo.jobdescription}</h2>
                    <h2 className='my-3'>
                        <span className='font-semibold'>Job Responsibility:</span> {jobinfo.jobresponsibility}
                    </h2>
                    <h2 className='my-5'>
                        <span className='font-semibold'>Educational Requirements:</span> <br />
                        {jobinfo.educationalrequirements}
                    </h2>
                    <h2>
                        <span className='font-semibold'>Experiences:</span> <br />
                        {jobinfo.experiences}
                    </h2>

                </div>
            <div className='col-span-2'>

                <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Job Details</h2>
                    <hr />
                    <p><FontAwesomeIcon icon={faDollarSign} /> Salary: {jobinfo.salary}</p>
                    <p><FontAwesomeIcon icon={faCalendarWeek} /> Job Title : {jobinfo.jobtitle}</p>
                    <h2 className="card-title">Contact Information</h2>
                    <hr />
                    <p><FontAwesomeIcon icon={faPhone} /> Phone : {jobinfo.phone}</p>
                    <p><FontAwesomeIcon icon={faEnvelope} /> Email : {jobinfo.email}</p>
                    <p><FontAwesomeIcon icon={faLocationDot} /> Address : {jobinfo.location}</p>
                    <div className="card-actions ">
                        
                            
                            <button onClick={()=>handleAddToCart(jobinfo)} className="btn btn-accent w-full mt-5 ">Apply Now</button>
                        
                    
                    </div>
                </div>
                </div>
            </div>
            
            </section>
            
        </div>
    );
};

export default JobsDetails;



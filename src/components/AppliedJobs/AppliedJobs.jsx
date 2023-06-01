import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown} from '@fortawesome/free-solid-svg-icons'
import { getStoredCart } from '../../utils/fakedb';
import { useLoaderData } from 'react-router-dom';
import Applieditem from '../Applieditem/Applieditem';

const AppliedJobs = () => {

    const savedCart = useLoaderData();
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        const storedCart = getStoredCart()
        const newCart = []
        for(const id in storedCart){
            const addedjob = savedCart.find(job => job.id == id)
            newCart.push(addedjob)
        }
        setCart(newCart);
    },[])


   const handleRemote = ()=>{
    let newRemoteCart = []
    
   cart.filter(singlejob => {
    if(singlejob.remoteoronsite === 'Remote'){
    newRemoteCart.push(singlejob)
    }

   })
   setCart(newRemoteCart)
   
    }

    const handleOnsite = () =>{
        let newOnsiteCart = []
        cart.filter(singlejob =>{
            if(singlejob.remoteoronsite === 'On-site'){
                newOnsiteCart.push(singlejob)
            }
        })
        setCart(newOnsiteCart)

    }



    
    return (
        <div>
            <section>
                    <div className="hero">
                    <img src='Vector-1.png' alt="" />
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Applied Jobs</h1>
                </div>
                </div>
                </div>
            </section>

            <section className='my-container flex justify-end'>
                                <div className="dropdown">
                    <label tabIndex={0} className="btn m-1">Filter By<span className='ms-1'><FontAwesomeIcon icon={faAngleDown} /></span></label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box">
                        <button onClick={handleRemote} className="btn btn-accent my-2">remote</button>
                        <button onClick={handleOnsite} className='btn btn-accent'>on-site</button> 
                    </ul>
                    </div>
            </section>
            <section>
                <div>
                    {
                        cart.map(cartItem => <Applieditem
                        key={cartItem.id}
                        cartItem={cartItem}
                        ></Applieditem>)
                    }
                
                </div>
                
                
            </section>
        </div>
    );
};

export default AppliedJobs;
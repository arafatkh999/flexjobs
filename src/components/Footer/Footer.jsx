import React from 'react';

const Footer = () => {
    return (
        <div className=''>
            <footer className="footer p-10 bg-black text-white">
            <div>
    <span className="footer-title">Flexjobs</span> 
    <p>There are many variations of passages <br /> of Lorem Ipsum , but the majority have <br /> suffered alteration in some form.</p> 
    <img src="Group.png" alt="" /> 
    
  </div>
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About Us</a> 
    <a className="link link-hover">Work</a> 
    <a className="link link-hover">Latest News</a> 
    <a className="link link-hover">Careers</a>
  </div> 
  <div>
    <span className="footer-title">Product</span> 
    <a className="link link-hover">Prototype</a> 
    <a className="link link-hover">Plans & Pricing</a> 
    <a className="link link-hover">Customers</a> 
    <a className="link link-hover">Integrations</a>
  </div> 
  <div>
    <span className="footer-title">Support</span> 
    <a className="link link-hover">Help Desk</a> 
    <a className="link link-hover">Sales</a> 
    <a className="link link-hover">Become a Partner</a>
    <a className="link link-hover">Developers</a>
  </div>
  <div>
    <span className="footer-title">Contact</span> 
    <a className="link link-hover">524 Broadway , NYC</a> 
    <a className="link link-hover">+1 777 - 978 - 5570</a>
  </div>
</footer> 
<footer className="footer px-10 py-4 border-t bg-black text-white border-base-300">
  <div className="items-center grid-flow-col">
    
    <p>@2023 CareerHub. All Rights Reserved</p>
  </div> 
  <div className="md:place-self-center md:justify-self-end">
    <p>Powered by flexjobs</p>
  </div>
</footer>
        </div>
    );
};

export default Footer;
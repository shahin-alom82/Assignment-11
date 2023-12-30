import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 rounded-lg bg-neutral text-neutral-content mt-10">
                <aside>
                    <img className='h-40 text-white' src="https://i.ibb.co/vJ5FhQh/mmm-removebg-preview.png" alt="" />
                    <p className=''>MARKETING Industries Ltd.<br />Online Market Places 2023</p>
                </aside>
                <nav className='mt-10'>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className='mt-10'>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className='mt-10'>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;
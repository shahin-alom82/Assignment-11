import React from 'react';

const TeamSection = () => {
    return (
        <div>
            <div className="container rounded-lg mt-10 mx-auto px-8 md:px-16 lg:px-10 bg-blue-100">
                    <div className="team-header-section text-cente pt-10 py-3">
                        <h1 className="team-heading text-4xl py-3 text-center font-bold text-blue-700">Online Marketplace Solutions for Small Businesses</h1>
                        <p className="text-sm text-center text-gray-700 ">Online marketplace solutions provide small businesses with a digital platform to showcase and sell their products or services, <br />   expanding their reach and customer base. These platforms offer a cost-effective way for small businesses</p>
                    </div>
                    <div className="container text-center grid lg:grid-cols-4 sm:grid-cols-1 my-10  px-10 pb-10">
                        <div>
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src="https://i.ibb.co/gSp0LQh/member1.png" />
                                </div>
                            </div>
                            <h1 className="text-center text-black ">Awlad Hossain</h1>
                            <p className="text-center text-black">Web Developer</p>
                            <div>
                                <i className="fa-brands fa-facebook text-white"></i>
                                <i className="fa-brands fa-twitter text-white"></i>
                                <i className="fa-brands fa-linkedin text-white"></i>
                            </div>
                        </div>
                        <div>
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src="https://i.ibb.co/wpkr2pG/member2.png" />
                                </div>
                            </div>
                            <h1 className="text-center text-black ">Chaity</h1>
                            <p className="text-center  text-black">Digital Marketing</p>
                            <div>
                                <i className="fa-brands fa-facebook text-white "></i>
                                <i className="fa-brands fa-twitter  text-white"></i>
                                <i className="fa-brands fa-linkedin  text-white"></i>
                            </div>
                        </div>
                        <div>
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src="https://i.ibb.co/0y7Bt8p/member3.png" />
                                </div>
                            </div>
                            <h1 className="text-center text-black"> Rakib Hussain
                            </h1>
                            <p className="text-center text-black">Graphic Designer</p>
                            <div>
                                <i className="fa-brands fa-facebook text-white"></i>
                                <i className="fa-brands fa-twitter text-white"></i>
                                <i className="fa-brands fa-linkedin text-white"></i>
                            </div>
                        </div>
                        <div>
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src="https://i.ibb.co/8NPkVc5/member4.png" />
                                </div>
                            </div>
                            <h1 className="text-center text-black ">Safia Chowdhury
                            </h1>
                            <p className="text-center  text-black">Team Manager</p>
                            <div>
                                <i className="fa-brands fa-facebook  text-white"></i>
                                <i className="fa-brands fa-twitter  text-white"></i>
                                <i className="fa-brands fa-linkedin  text-white"></i>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default TeamSection;





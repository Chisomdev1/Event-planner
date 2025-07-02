import React from 'react';
import image from "../assets/images/image1.jpeg";
import MainNavbar from '../components/MainNavbar';
import Footer from '../components/Footer';

const ViewEvent = () => {
    return (
        <div className="">

            <MainNavbar />

            <div className="w-full px-4 md:flex p-6 inter space-x-5 justify-center text-gray-800 font-sans bg-whit">
                {/* Hosted By Section */}
                <section className="mb-10 mr-0">
                    <div className=''>
                        <img
                        src={image}
                        alt="Event"
                        className="w-74 h-74 md:w-[350px] md:h-[350px] rounded-lg mb-2" // <-- add m-0 to remove margin
                    />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-4 text-blue-700">Hosted By</h3>
                    <ul className="space-y-3">
                        <li className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-blue-500 mr-3 flex items-center justify-center text-white font-bold">N</div>
                            <span>Nyityo Doowuese Mirabel</span>
                        </li>
                        <li className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-blue-500 mr-3 flex items-center justify-center text-white font-bold">#</div>
                            <span>#Startupsouth Port Harcourt Community</span>
                        </li>
                    </ul>

                    <div className="mt-6">
                        <div className="flex items-center gap-0">
                            <img src="https://i.pravatar.cc/40?img=1" alt="avatar" className="w-8 h-8 rounded-full border-2 border-white" />
                            <img src="https://i.pravatar.cc/40?img=2" alt="avatar" className="w-8 h-8 rounded-full border-2 border-white -ml-4" />
                            <img src="https://i.pravatar.cc/40?img=3" alt="avatar" className="w-8 h-8 rounded-full border-2 border-white -ml-4" />
                            <p className="ml-2 flex items-center text-black font-medium">
                                157 Going
                            </p>
                        </div>
                        <p className="text-gray-600">Emmanuel Chimebuka Onu, Edo Tech Community</p>
                    </div>
                </section>

                {/* Event Details Section */}
                <section className="mb-10 sm:m-auto">

                    <h3 className="text-2xl font-bold mb-4 text-blue-800">INDUSTRY CONNECT</h3>
                    <ul className="space-y-4">

                        <li className="flex items-start">
                            <div className="w-12 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-semibold">Saturday, July 5</p>
                                <p className="text-gray-600">10:30 AM - 12:30 PM GMT+1</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <div className="w-12 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-semibold">Zoom</p>
                            </div>
                        </li>
                    </ul>
                    <section className='bg-gray-200 rounded-[15px] p-4 mt-6'>
                        <h3 className="text-xl font-semibold mb-4 text-blue-700">You're in</h3>

                        <div className="inline-flex w-full justify-between items-start mb-4">
                            <p className="font-medium">Event starting in</p>
                            <p className="text-red-700">21d 23h</p>
                        </div>

                        <p className="text-gray-600 mb-6 ml-7">The join button will be shown when the event is about to start.</p>

                        <div className="flex items-start mb-4 justify-between">
                            <div className="flex bg-blue-500 rounded-[20px] py-1 px-3">
                                <p className="font-medium text-white">Add to Calendar</p>
                            </div>

                            <div className="flex bg-blue-500 rounded-[20px] py-1 px-3">
                                <p className="font-medium text-white">Invite a Friend</p>
                            </div>
                        </div>

                        <p className="text-gray-600 mb-6">No longer able to attend? Notify the host by
                            <span className='ml-1 text-red-700'>canceling your registration.</span> </p>

                        <div className="bg-blue-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-blue-800 mb-2">Get Ready for the Event</h4>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Profile Complete</span>
                            </div>
                            <div className="flex items-center mt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                                </svg>
                                <span>Reminder: Email</span>
                            </div>
                        </div>
                    </section>

                </section>
            </div>


            <Footer />
        </div>
    );
};

export default ViewEvent;
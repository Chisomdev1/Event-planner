import React from "react";
import { GoDotFill } from "react-icons/go";
import { IoNotificationsOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import image from "../assets/images/image1.jpeg"

const Dashboard = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Header */}
            <header className="bg-white shadow-md py-4 inter">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-blue-600">Events Dashboard</h1>
                    <div className="px-4 text-black inline-flex items-center space-x-2">
                        <div>
                        Create Event
                        </div>
                        <CiSearch />
                        <IoNotificationsOutline />

                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-6 poppins">

                <h2 className="text-xl font-semibold text-gray-700 mb-4">Events</h2>

                {/* Event Cards */}
                <div className="gap-6">
                    {/* Example Event Card */}
                    {/* <div className="">
                        <p className="text-xl font-semibold text-gray-800">June 7</p>
                        <p className="text-lg text-gray-600">Saturday</p>
                    </div> */}

                    {/* Add more event cards dynamically */}
                    <div className="bg-white shadow-md rounded-lg p-6 w-full flex justify-between gap-6">
                        {/* Event Details */}
                        <div className="">
                            <p className="font-bold text-red-500 inline-flex items-center">
                                <GoDotFill /> LIVE
                            </p>
                            <h3 className="text-xl">SUI BUILDATHON PORT-HARCOURT</h3>
                            <div className="text-gray-600">By Sui on Campus</div>
                            <div className="text-gray-600">Google Meet</div>
                            <button className="mt-4 px-6 w-[50%] py-3 bg-black text-[15px] text-white justify-center rounded-md inline-flex items-center">
                                <svg
                                    className="w-[20%]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="m11.139 6.606 2.384-1.951a.904.904 0 0 1 1.477.7l-.009 5.322a.904.904 0 0 1-1.477.696l-2.375-1.951m-.003 1.21c.059 1.326-1.012 2.448-2.391 2.505-.102.004-5.054-.006-5.054-.006-1.373.104-2.574-.882-2.683-2.204-.008-.099-.006-5.413-.006-5.413-.06-1.328 1.009-2.452 2.389-2.511.103-.005 5.049.004 5.049.004 1.38-.102 2.584.891 2.691 2.22.007.095.005 5.404.005 5.404"
                                    ></path>
                                </svg>
                                Join Event
                            </button>
                        </div>

                        {/* Event Image */}
                        <div className="flex justify-end">
                            <img src={image} alt="" className="w-[30%]" />
                        </div>
                    </div>
                </div>
                <svg width="109" height="95" viewBox="0 0 109 95" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M69.0381 59.3096C71.6653 60.6668 74.8122 62.1596 77.7783 63.2168C79.3759 63.7862 80.9607 64.2439 82.4082 64.4795C83.7369 64.6957 85.0868 64.7482 86.2588 64.4209L86.4912 64.3506C88.5249 63.6787 91.6064 62.1339 94.7178 60.4414C97.4674 58.9457 100.327 57.2844 102.674 55.8916C101.308 58.3337 99.7532 61.3754 98.6045 64.3848C97.9493 66.1012 97.4119 67.8437 97.124 69.4824C96.857 71.0025 96.787 72.5319 97.1103 73.9014L97.1797 74.1729C97.8801 76.6782 99.5262 80.0026 101.306 83.1963C102.851 85.9705 104.553 88.7367 105.953 90.9395C103.452 89.7703 100.288 88.361 97.207 87.1895C95.4319 86.5144 93.6641 85.9095 92.0547 85.4746C90.6666 85.0995 89.3227 84.8303 88.1621 84.7764L87.6768 84.7666C86.3948 84.7783 84.9316 85.1801 83.4707 85.7402C81.984 86.3103 80.3794 87.0922 78.7793 87.9639C75.9536 89.5033 73.0605 91.3672 70.7256 92.9561C71.8852 90.5466 73.2182 87.5992 74.3164 84.6904C75.4734 81.6261 76.4374 78.4338 76.5703 75.9277L76.5859 75.4365C76.6061 72.91 75.3624 69.8406 73.8516 66.9863C72.4276 64.2961 70.6427 61.5779 69.0381 59.3096Z" stroke="#0F0B0C" stroke-width="3"/>
<path d="M50.8325 50.819C45.2587 41.092 27.289 17.6588 -2.76362e-06 1.74189M33.4424 63.4199C28.5375 61.6514 24.0785 58.7775 9.36388 60.7671M64.8783 42.1974C66.8848 35.5653 70.2291 23.6276 61.534 9.03714" stroke="#0F0B0C" stroke-width="3" stroke-linecap="round"/>
</svg>

            </main>
        </div>
    );
};

export default Dashboard;
import React from "react";
import { useNavigate } from "react-router-dom";
import { CalendarDays, ArrowRight, MoveUpRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
const Home = () => {

  const attendItems = [
    {
      id: "01",
      title: "SEAMLESS EVENT CREATION",
      description:
        "Easily create and manage blockchain-powered events with intuitive tools and smart contract automation on Sui.",
    },
    {
      id: "02",
      title: "REAL-TIME INTERACTION",
      description:
        "Engage participants through on-chain RSVPs, live updates, and interactive event features that enhance engagement.",
    },
    {
      id: "03",
      title: "WEB3-NATIVE NETWORKING",
      description:
        "Connect with fellow builders, attendees, and communities using verifiable on-chain credentials and reputation.",
    },
    {
      id: "04",
      title: "DECENTRALIZED ACCESS",
      description:
        "Empower users with transparent, trustless access to events using Sui wallet authentication and NFT ticketing.",
    },
  ];


  const navigate = useNavigate();

  return (
    <main className="bg-white poppins text-gray-900 min-h-screen w-full font-sans">

      <Navbar />

      {/* Hero Section */}
      <section className="bg-black text-white py-20 sm:font-bold px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl mb-6 leading-tight inter">
            Plan Seamless Events on Sui
          </h1>
          <p className="text-md md:text-[17px] text-gray-300 mb-8 inter">
            Professional event management designed for the Sui blockchain ecosystem,
            enjoy secure ticketing, real-time engagement, and seamless networking for both organizers and attendees.
            
            <span className="hidden md:inline ml-2">
                 SuiVents empowers you to create memorable experiences, leverage blockchain transparency, and connect with a global community—all in one platform.
            </span>
          </p>
          <button
            className="bg-blue-600 hover:bg-blue-700 inter text-white text-lg px-4 inline-flex items-center py-2 rounded-[20px]"
            onClick={() => navigate("/login")}
          >
            <CalendarDays className="mr-2" />
            Create an Event
          </button>
        </div>
        {/* <img
          src={sui}
          alt="SUI Event"
          className="rounded-t-full shadow-lg hover:shadow-xl w-[20%] h-[30%] transition duration-300 transform hover:scale-105"
        /> */}
      </section>

      {/* Features Section */}
      <section className="bg-black text-white py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:inline-flex justify-between items-center">
            <h2 className="text-4xl font-bold md:mr-[190px] ">WHY HOST ON SUIVENTS?</h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto md:text-[15px] md:text-left">
              Discover how Sui Event Planner revolutionizes event creation and participation with Web3-native tools, decentralized access, and seamless blockchain integration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {attendItems.map((item) => (
              <div
                key={item.id}
                className="bg-gray-800 rounded-2xl p-6 flex flex-col justify-between shadow-md"
              >
                <h3 className="text-sm text-gray-300 font-semibold uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-gray-400 mt-2">{item.description}</p>
                <span className="text-6xl font-bold text-blue-600 mt-6">{item.id}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 md:px-20 bg-black inter">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center bg-blue-500 rounded-xl shadow hover:shadow-lg transition p-6">
              <div className="bg-white inter text-blue-700  rounded-full w-12 h-12 flex items-center justify-center mb-4 text-xl font-bold shadow">
                1
              </div>
              <h3 className="font-semibold text-white mb-2">Sign In</h3>
              <p className="text-white text-sm">
                Sign in with your Sui wallet, Google, or Email.
              </p>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center bg-blue-50 rounded-xl shadow hover:shadow-lg transition p-6">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 text-xl font-bold shadow">
                2
              </div>
              <h3 className="font-semibold text-blue-700 mb-2">Create Event</h3>
              <p className="text-gray-600 text-sm">
                Create and configure your event with ease.
              </p>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center bg-blue-50 rounded-xl shadow hover:shadow-lg transition p-6">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 text-xl font-bold shadow">
                3
              </div>
              <h3 className="font-semibold text-blue-700 mb-2">Share & Manage</h3>
              <p className="text-gray-600 text-sm">
                Share registration links and manage attendees.
              </p>
            </div>
            {/* Step 4 */}
            <div className="flex flex-col items-center bg-blue-50 rounded-xl shadow hover:shadow-lg transition p-6">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 text-xl font-bold shadow">
                4
              </div>
              <h3 className="font-semibold text-blue-700 mb-2">Host & Track</h3>
              <p className="text-gray-600 text-sm">
                Host your event and track engagement live.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-black flex items-center justify-center p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
          {/* Speakers */}
          <div className="bg-blue-600 text-white rounded-2xl p-6 flex flex-col justify-between">
            <h2 className="text-xl font-semibold mb-2">Speakers</h2>
            <div className="inline-flex flex-col-3 justify-between h-full">
              <div className="w-10 h-10 bg-white px-3 text-blue-600 mr-9 rounded-full flex items-center justify-center mb-4">
                <MoveUpRight size={18} />
              </div>
              <p className="text-sm mb-4">
                Hear from top Sui blockchain developers, protocol engineers, and ecosystem builders shaping the future of decentralized innovation.
              </p>

            </div>
            <div className="flex items-center gap-0">
              <img src="https://i.pravatar.cc/40?img=1" alt="avatar" className="w-8 h-8 rounded-full border-2 border-white" />
              <img src="https://i.pravatar.cc/40?img=2" alt="avatar" className="w-8 h-8 rounded-full border-2 border-white -ml-4" />
              <img src="https://i.pravatar.cc/40?img=3" alt="avatar" className="w-8 h-8 rounded-full border-2 border-white -ml-4" />
              <button className="ml-4 flex items-center text-sm px-3 py-1 bg-transparent text-white border-white border-[1px] rounded-full font-medium">
                And more <ArrowRight className="ml-1" size={14} />
              </button>
            </div>
          </div>

          {/* Technologies */}
          <div className="bg-blue-500 text-white rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-2">Technologies</h2>
            <p className="text-sm">
              Dive deep into Sui Move programming, smart contract development, zero-knowledge proof integrations, and innovations in parallel execution.
            </p>
          </div>

          {/* Networking */}
          <div className="bg-gray-100 text-gray-900 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-2">Networking Opportunities</h2>
            <p className="text-sm">
              Connect with fellow Sui builders, attend workshops, hackathons, and exclusive meetups designed to build lasting partnerships in Web3.
            </p>
          </div>
        </div>
      </div>

      <Testimonials />

      {/* Footer */}
      <Footer />

    </main>
  )
}

export default Home

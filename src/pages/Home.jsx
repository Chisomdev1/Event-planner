import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { CalendarDays, MapPin, Users, ClipboardList, ArrowRight, MoveUpRight } from "lucide-react";
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
      <section className="bg-gradient-to-r from-[#0c0c24] to-[#0a0a1c] text-white py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Plan Seamless Events on Sui
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Professional-grade event management designed for the Sui blockchain ecosystem.
          </p>
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-full"
            onClick={() => navigate("/login")}
          >
            <CalendarDays className="mr-2" />
            Create an Event
          </Button>
        </div>
        {/* <img
          src={sui}
          alt="SUI Event"
          className="rounded-t-full shadow-lg hover:shadow-xl w-[20%] h-[30%] transition duration-300 transform hover:scale-105"
        /> */}
      </section>

      {/* Features Section */}
      <section className="bg-gray-900 text-white py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">WHY BUILD ON SUI EVENTS?</h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">
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
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">How It Works</h2>
          <ol className="space-y-8 text-left text-gray-700">
            <li>
              <span className="font-semibold text-blue-600">Step 1:</span> Sign in with your Sui wallet, Google or Email.
            </li>
            <li>
              <span className="font-semibold text-blue-600">Step 2:</span> Create and configure your event.
            </li>
            <li>
              <span className="font-semibold text-blue-600">Step 3:</span> Share registration links and manage attendees.
            </li>
            <li>
              <span className="font-semibold text-blue-600">Step 4:</span> Host your event and track engagement live.
            </li>
          </ol>
        </div>
      </section>

      <div className="bg-black min-h-screen flex items-center justify-center p-4">
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

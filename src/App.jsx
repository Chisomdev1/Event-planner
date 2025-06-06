import React from "react";
import { Button } from "./components/Button";
import { CalendarDays, MapPin, Users, ClipboardList } from "lucide-react";

function App() {

  return (
    <main className="bg-white poppins text-gray-900 min-h-screen w-full font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0c0c24] to-[#0a0a1c] text-white py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Plan Seamless Events on Sui
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Professional-grade event management designed for the Sui blockchain ecosystem.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-full">
            Create an Event
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 md:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          <div>
            <CalendarDays className="mx-auto text-blue-600 mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">Easy Scheduling</h3>
            <p className="text-gray-600">Set up event dates and times with precision and flexibility.</p>
          </div>
          <div>
            <MapPin className="mx-auto text-blue-600 mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">Venue Management</h3>
            <p className="text-gray-600">Manage physical or virtual locations for every event type.</p>
          </div>
          <div>
            <Users className="mx-auto text-blue-600 mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">Attendee Control</h3>
            <p className="text-gray-600">Track RSVPs, guests, and participation in real-time.</p>
          </div>
          <div>
            <ClipboardList className="mx-auto text-blue-600 mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">Smart Registrations</h3>
            <p className="text-gray-600">Integrated with Sui for secure ticketing and access.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">How It Works</h2>
          <ol className="space-y-8 text-left text-gray-700">
            <li>
              <span className="font-semibold text-blue-600">Step 1:</span> Sign in with your Sui wallet.
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

      {/* Call to Action */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Planning Today</h2>
          <p className="text-lg mb-8">
            Join the future of decentralized event planning. Built on trust. Powered by Sui.
          </p>
          <Button className="bg-white text-blue-800 text-lg px-6 py-3 rounded-full hover:bg-gray-100">
            Launch App
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 md:px-20 bg-gray-100 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} SuiEvent. All rights reserved.
      </footer>
    </main>
  )
}

export default App

import React, { useState } from "react";

const CreateEvent = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    banner: null,
    category: "",
    ticketType: "free",
    ticketPrice: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the form data
    alert("Event Created!\n\n" + JSON.stringify(form, null, 2));
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e0e7ef] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-2">Create Your Event</h2>
        <p className="text-gray-500 text-center mb-8">Host your next big thing on SuiVents</p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Banner Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Event Banner</label>
            <input
              type="file"
              name="banner"
              accept="image/*"
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              onChange={handleChange}
            />
          </div>
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Event Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-600 focus:border-blue-600"
              placeholder="e.g. Sui Hackathon 2025"
            />
          </div>
          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              required
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-600 focus:border-blue-600"
              placeholder="Tell attendees what your event is about"
            />
          </div>
          {/* Date & Time */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-600 focus:border-blue-600"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-600 focus:border-blue-600"
              />
            </div>
          </div>
          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-600 focus:border-blue-600"
              placeholder="Venue or online link"
            />
          </div>
          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-600 focus:border-blue-600"
            >
              <option value="">Select category</option>
              <option value="Tech">Tech</option>
              <option value="Workshop">Workshop</option>
              <option value="Conference">Conference</option>
              <option value="Meetup">Meetup</option>
              <option value="Webinar">Webinar</option>
              <option value="Other">Other</option>
            </select>
          </div>
          {/* Ticket Type */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Ticket Type</label>
              <select
                name="ticketType"
                value={form.ticketType}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-600 focus:border-blue-600"
              >
                <option value="free">Free</option>
                <option value="paid">Paid</option>
              </select>
            </div>
            {form.ticketType === "paid" && (
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Ticket Price ($)</label>
                <input
                  type="number"
                  name="ticketPrice"
                  value={form.ticketPrice}
                  onChange={handleChange}
                  min="0"
                  step="0.01"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-600 focus:border-blue-600"
                  placeholder="Enter price"
                />
              </div>
            )}
          </div>
          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg transition"
          >
            Create Event
          </button>
        </form>
      </div>
    </main>
  );
};

export default CreateEvent;
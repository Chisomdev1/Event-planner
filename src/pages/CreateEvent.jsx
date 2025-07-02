import React, { useState } from "react";
import MainNavbar from "../components/MainNavbar";
import ImageUploader from "../components/ImageUpload";
import Footer from "../components/Footer";

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
        <div>
            <MainNavbar />
            <main className="md:flex justify-center px-4 py-10 inter">
                <ImageUploader />

                <div className="md:w-full md:max-w-2xl  rounded-2xl md:p-8">
                    <form className="space-y-6 w-[100%]" onSubmit={handleSubmit}>
                        <div>
                            <input
                                type="text"
                                name="title"
                                value={form.title}
                                onChange={handleChange}
                                required
                                className="w-full text-lg py-2 border-0 size=40 rounded-lg focus:outline-none"
                                placeholder="EVENT NAME"
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


            <Footer />
        </div>
    );
};

export default CreateEvent;
import React from "react";
// import "./styles.css";

class ContactForm extends React.Component {
  render() {
    return (
      <div className="container mx-auto my-8">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <section id="contact">
          <form
            className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md"
            action="https://formspree.io/f/xoqozbka"
            method="POST"
          >
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-blue-500"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-3 py-2 border rounded-md mt-1 bg-gray-100 text-black"
            />

            <label
              htmlFor="email"
              className="block text-sm font-semibold text-blue-500 mt-4"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-3 py-2 border rounded-md mt-1 bg-gray-100 text-black"
            />

            <label
              htmlFor="message"
              className="block text-sm font-semibold text-blue-500 mt-4"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full px-3 py-2 border rounded-md mt-1 bg-blue-100 text-black"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 mt-4 rounded-md hover:bg-blue-600"
            >
              Send
            </button>
          </form>
        </section>
      </div>
    );
  }
}

export default ContactForm;

import React from "react";
import { Link } from "react-router-dom";

const Help = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-pink-50">
      <div className="max-w-4xl mx-auto px-4 py-8 relative">
        <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Help & Support
        </h1>
        <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-xl p-6 mb-8 border border-purple-100">
          <h2 className="text-2xl font-semibold mb-6 text-purple-800">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-purple-700">
              About Artists
            </h3>
            <div className="space-y-4">
              <div className="border-b border-purple-100 pb-4 hover:bg-purple-50 transition-colors p-2 rounded">
                <h4 className="text-lg font-medium text-purple-600 mb-2">
                  How can I become a featured artist?
                </h4>
                <p className="text-gray-600">
                  Submit your portfolio through our artist submission form and
                  our team will review your work within 5-7 business days.
                </p>
              </div>

              {/* ... Rest of the FAQ items with same styling ... */}
            </div>

            <h3 className="text-xl font-semibold text-purple-700">
              Contact & Support
            </h3>
            <div className="space-y-4">
              <div className="border-b border-purple-100 pb-4 hover:bg-purple-50 transition-colors p-2 rounded">
                <h4 className="text-lg font-medium text-purple-600 mb-2">
                  How do I report a technical issue?
                </h4>
                <p className="text-gray-600">
                  Email our support team at support@artgallery.com with details
                  of the issue, including screenshots if possible. We'll respond
                  within 24 hours.
                </p>
              </div>
              <div className="border-b border-purple-100 pb-4 hover:bg-purple-50 transition-colors p-2 rounded">
                <h4 className="text-lg font-medium text-purple-600 mb-2">
                  How can I provide feedback?
                </h4>
                <p className="text-gray-600">
                  We value your feedback! Use our feedback form in the user
                  dashboard or email us directly at feedback@artgallery.com.
                </p>
              </div>
              <div className="border-b border-purple-100 pb-4 hover:bg-purple-50 transition-colors p-2 rounded">
                <h4 className="text-lg font-medium text-purple-600 mb-2">
                  What are your response times?
                </h4>
                <p className="text-gray-600">
                  We aim to respond to all inquiries within 24 hours during
                  business days. Premium members receive priority support with
                  faster response times.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-xl border border-purple-100">
          <h3 className="text-xl font-semibold mb-4 text-purple-800">
            Need More Help?
          </h3>
          <p className="text-gray-700 mb-4">Contact us directly:</p>
          <ul className="space-y-2 text-gray-600">
            <li>Email: info@artgallery.com</li>
            <li>Phone: (555) 123-4567</li>
            <li>Hours: Mon-Fri, 9am-6pm EST</li>
          </ul>
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/home"
            className="inline-flex items-center px-6 py-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Help;

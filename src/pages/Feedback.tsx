import React, { useState } from "react";
import { MessageSquare, ThumbsUp } from "lucide-react";

export default function Feedback() {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-2xl">
      {submitted ? (
        <div className="space-y-4 rounded-lg bg-white p-8 text-center shadow-md">
          <ThumbsUp className="mx-auto h-16 w-16 text-green-500" />
          <h2 className="text-2xl font-bold text-gray-900">Thank You!</h2>
          <p className="text-gray-600">
            Your feedback helps us improve our service.
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="mb-2 text-3xl font-bold text-gray-900">
              Share Your Experience
            </h1>
            <p className="text-gray-600">
              Help us improve Smart Travel Planner with your valuable feedback
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-lg bg-white p-8 shadow-md"
          >
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                How would you rate your experience?
              </label>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setRating(value)}
                    className={`h-12 w-12 rounded-full ${
                      rating >= value
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100 text-gray-600"
                    } transition-colors hover:bg-blue-400 hover:text-white`}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label
                htmlFor="feedback"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                What could we improve?
              </label>
              <textarea
                id="feedback"
                rows={4}
                className="w-full rounded-lg border p-3 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                placeholder="Share your thoughts..."
              ></textarea>
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Your Email (optional)
              </label>
              <input
                type="email"
                id="email"
                className="w-full rounded-lg border p-3 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                placeholder="email@example.com"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center space-x-2 rounded-lg bg-blue-500 px-6 py-3 text-white transition-colors hover:bg-blue-600"
            >
              <MessageSquare className="size-5" />
              <span>Submit Feedback</span>
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

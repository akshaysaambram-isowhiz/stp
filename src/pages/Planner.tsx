import { useState } from "react";
import { Sparkles } from "lucide-react";
import PreferenceForm from "../components/PreferenceForm";
import Itinerary from "../components/Itinerary";
import type { TravelPreference, ItineraryDay } from "../types";

export default function Planner() {
  const [itinerary, setItinerary] = useState<ItineraryDay[]>([]);
  const [loading, setLoading] = useState(false);

  const handlePreferenceSubmit = async (preferences: TravelPreference) => {
    setLoading(true);
    // TODO: Integrate with OpenAI API to generate itinerary
    const mockItinerary: ItineraryDay[] = [
      {
        day: 1,
        activities: [
          {
            time: "09:00 AM",
            activity: "City Walking Tour",
            location: "Historic Downtown",
            description:
              "Explore the city's rich history and architecture with a guided walking tour.",
          },
          {
            time: "12:30 PM",
            activity: "Local Cuisine Experience",
            location: "Central Market",
            description:
              "Sample local delicacies and learn about the region's culinary traditions.",
          },
          {
            time: "03:00 PM",
            activity: "Museum Visit",
            location: "National Museum",
            description:
              "Discover local art and cultural artifacts at the renowned museum.",
          },
        ],
      },
    ];

    setTimeout(() => {
      setItinerary(mockItinerary);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <div className="rounded-lg bg-white p-6 shadow-md">
        <div className="mb-6 flex items-center space-x-2">
          <Sparkles className="size-6 text-blue-500" />
          <h2 className="text-xl font-semibold">Your Travel Preferences</h2>
        </div>
        <PreferenceForm onSubmit={handlePreferenceSubmit} />
      </div>

      <div className="space-y-6">
        {loading ? (
          <div className="flex h-64 items-center justify-center">
            <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-blue-500"></div>
          </div>
        ) : itinerary.length > 0 ? (
          <Itinerary days={itinerary} />
        ) : (
          <div className="rounded-lg bg-white p-6 text-center shadow-md">
            <p className="text-gray-600">
              Fill in your preferences to generate a personalized travel
              itinerary
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

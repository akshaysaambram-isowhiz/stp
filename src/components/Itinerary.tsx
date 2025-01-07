import { Clock, MapPin } from "lucide-react";
import type { ItineraryDay } from "../types";

interface ItineraryProps {
  days: ItineraryDay[];
}

export default function Itinerary({ days }: ItineraryProps) {
  return (
    <div className="space-y-8">
      {days.map((day) => (
        <div key={day.day} className="rounded-lg bg-white p-6 shadow-md">
          <h3 className="mb-4 text-xl font-semibold">Day {day.day}</h3>
          <div className="space-y-4">
            {day.activities.map((activity, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Clock className="size-4" />
                  <span>{activity.time}</span>
                </div>
                <h4 className="mt-1 font-medium">{activity.activity}</h4>
                <div className="mt-1 flex items-center space-x-2 text-gray-600">
                  <MapPin className="size-4" />
                  <span>{activity.location}</span>
                </div>
                <p className="mt-2 text-gray-600">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

import React, { useState } from "react";
import { Calendar, DollarSign, Map, Compass } from "lucide-react";
import type { TravelPreference } from "../types";

interface PreferenceFormProps {
  onSubmit: (preferences: TravelPreference) => void;
}

export default function PreferenceForm({ onSubmit }: PreferenceFormProps) {
  const [preferences, setPreferences] = useState<TravelPreference>({
    interests: [],
    travelStyle: "cultural",
    accommodation: "mid-range",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(preferences);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Map className="size-5 text-blue-500" />
          <input
            type="text"
            placeholder="Where do you want to go?"
            className="w-full rounded-lg border p-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
            onChange={(e) =>
              setPreferences({ ...preferences, destination: e.target.value })
            }
          />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex items-center space-x-2">
            <Calendar className="size-5 text-blue-500" />
            <input
              type="date"
              className="w-full rounded-lg border p-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
              onChange={(e) =>
                setPreferences({ ...preferences, startDate: e.target.value })
              }
            />
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="size-5 text-blue-500" />
            <input
              type="date"
              className="w-full rounded-lg border p-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
              onChange={(e) =>
                setPreferences({ ...preferences, endDate: e.target.value })
              }
            />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <DollarSign className="size-5 text-blue-500" />
          <select
            className="w-full rounded-lg border p-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
            onChange={(e) =>
              setPreferences({ ...preferences, budget: e.target.value })
            }
          >
            <option value="">Select your budget</option>
            <option value="budget">Budget</option>
            <option value="moderate">Moderate</option>
            <option value="luxury">Luxury</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <Compass className="size-5 text-blue-500" />
            <span>Travel Style</span>
          </label>
          <div className="grid grid-cols-2 gap-2">
            {["relaxed", "adventure", "cultural", "nature"].map((style) => (
              <button
                key={style}
                type="button"
                className={`rounded-lg border p-2 ${
                  preferences.travelStyle === style
                    ? "bg-blue-500 text-white"
                    : "hover:bg-blue-50"
                }`}
                onClick={() =>
                  setPreferences({ ...preferences, travelStyle: style as any })
                }
              >
                {style.charAt(0).toUpperCase() + style.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
      >
        Generate Itinerary
      </button>
    </form>
  );
}

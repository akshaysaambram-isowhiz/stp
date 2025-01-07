export interface TravelPreference {
  destination?: string;
  startDate?: string;
  endDate?: string;
  budget?: string;
  interests: string[];
  travelStyle: "relaxed" | "adventure" | "cultural" | "nature";
  accommodation: "budget" | "mid-range" | "luxury";
}

export interface ItineraryDay {
  day: number;
  activities: {
    time: string;
    activity: string;
    location: string;
    description: string;
  }[];
}

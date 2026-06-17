export const EVENT = {
  name: "Solstice Log Boom Tri",
  date: "Sunday, June 21, 2026",
  location: "Log Boom Park, Kenmore WA",
  tagline: "Swim. Bike. Run. Picnic.",
};

export const SCHEDULE = [
  { time: "10:00 AM", event: "Check-in, Race Briefing & Transition Setup" },
  { time: "10:30 AM", event: "Race Start / Swim (T1)" },
  { time: "—", event: "Bike (T2) — bikes locked back in cars between legs" },
  { time: "—", event: "Run (T3)" },
  { time: "—", event: "Finish Line & Picnic" },
];

export const LEGS = {
  swim: {
    number: "01",
    title: "Swim",
    subtitle: "Open Water",
    distance: "1.5 km",
    color: "swim" as const,
    description:
      "Kick off your race in the calm, flat waters of Lake Washington at Log Boom Park's sandy beach. This 1.5 km open water, zero elevation swim follows a looping course along the shoreline, returning to the T1 transition zone on the beach.",
    details: [
      "Start: Log Boom Park beach",
      "Open water, completely flat",
      "Wetsuits encouraged",
      "Lifeguards and kayakers on course (Yezy?)",
      "Return to T1 at the beach",
    ],
    garminCourseId: "SWIM_COURSE_ID",
    gpxFile: "/gpx/SWIM_COURSE.gpx",
    mapsLink: "https://maps.google.com/?q=Log+Boom+Park,+Kenmore,+WA",
  },
  bike: {
    number: "02",
    title: "Bike",
    subtitle: "Lake Washington Loop",
    distance: "~43 km",
    color: "bike" as const,
    description:
      "The bike leg traces the eastern shore of Lake Washington heading clockwise, then cuts west across the SR-520 floating bridge. Pick up the Burke-Gilman Trail on the west side and cruise north through the University of Washington, along the north shore, and back to T2 at Log Boom Park.",
    details: [
      "Start: T1 at Log Boom Park",
      "Head south along Lake Washington Loop (clockwise)",
      "Past Juanita Bay Park and Kirkland Waterfront",
      "Continue south through Bellevue waterfront",
      "Cross SR-520 bridge on the shared-use path (westbound)",
      "Join Burke-Gilman Trail at Montlake",
      "North through UW, Matthews Beach, Sand Point",
      "Finish: T2 at Log Boom Park",
    ],
    garminCourseId: "475420265",
    gpxFile: "/gpx/COURSE_475420265.gpx",
    mapsLink: "https://connect.garmin.com/modern/course/475420265",
  },
  run: {
    number: "03",
    title: "Run",
    subtitle: "Burke-Gilman Trail",
    distance: "10 km",
    color: "run" as const,
    description:
      "Fresh off the bike, head out on a 10 km out-and-back run heading east on the Burke-Gilman Trail. The wide, paved path follows the shoreline away from the park, offering lake views as you make your way to the 5 km turnaround before returning west to the finish line.",
    details: [
      "Start: T2 at Log Boom Park",
      "Head east on the Burke-Gilman Trail",
      "Flat, paved trail along the north shore",
      "Turnaround at 5 km",
      "Finish: Log Boom Park — picnic awaits!",
    ],
    garminCourseId: "475422307",
    gpxFile: "/gpx/COURSE_475422307.gpx",
    mapsLink: "https://connect.garmin.com/modern/course/475422307",
  },
};

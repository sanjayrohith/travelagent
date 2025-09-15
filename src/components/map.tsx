"use client";

import { APIProvider, Map as GoogleMap, Marker } from "@vis.gl/react-google-maps";

export default function Map() {
  const position = { lat: 34.052235, lng: -118.243683 }; // Los Angeles
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return (
      <div className="flex h-full min-h-[400px] w-full items-center justify-center bg-muted text-center text-muted-foreground">
        <p>
          Google Maps API key is missing.
          <br />
          Please add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to your environment variables.
        </p>
      </div>
    );
  }

  return (
    <APIProvider apiKey={apiKey}>
      <div className="h-full min-h-[400px] w-full">
        <GoogleMap
          defaultCenter={position}
          defaultZoom={10}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
          mapId="wanderlust-map"
        >
          <Marker position={position} />
        </GoogleMap>
      </div>
    </APIProvider>
  );
}

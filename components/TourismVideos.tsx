import VideoGallerySection from "@/components/VideoGallerySection";

const videos = [
  {
    id: "discover-puntland",
    title: "Discover Puntland",
    tag: "Tourism",
    src: "/Tourism/discover-puntland.mp4",
  },
  {
    id: "tourism-reel",
    title: "Coastal Highlights",
    tag: "Tourism",
    src: "/Tourism/tourism-reel.mp4",
  },
  {
    id: "bina",
    title: "Bina",
    tag: "Destination",
    src: "/Tourism/bina.mp4",
  },
  {
    id: "shoreline",
    title: "Shoreline",
    tag: "Coast",
    src: "/Tourism/shoreline.mp4",
  },
  {
    id: "landscapes",
    title: "Landscapes",
    tag: "Nature",
    src: "/Tourism/landscapes.mp4",
  },
  {
    id: "destinations",
    title: "Destinations",
    tag: "Travel",
    src: "/Tourism/destinations.mp4",
  },
  {
    id: "coastal-journey",
    title: "Coastal Journey",
    tag: "Journey",
    src: "/Tourism/coastal-journey.mp4",
  },
  {
    id: "coastal-views",
    title: "Coastal Views",
    tag: "Travel",
    src: "/Tourism/coastal-views.mp4",
  },
  {
    id: "travel-moments",
    title: "Travel Moments",
    tag: "Travel",
    src: "/Tourism/travel-moments.mp4",
  },
  {
    id: "puntland-horizons",
    title: "Puntland Horizons",
    tag: "Tourism",
    src: "/Tourism/puntland-horizons.mp4",
  },
] as const;

export default function TourismVideos() {
  return (
    <VideoGallerySection
      id="tourism-videos"
      title="Tourism Videos"
      subtitle="Discover the beauty of Puntland"
      videos={videos}
    />
  );
}

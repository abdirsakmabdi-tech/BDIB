import VideoGallerySection from "@/components/VideoGallerySection";

const videos = [
  {
    id: "catch-of-the-day",
    title: "Catch of the Day",
    tag: "Fishing",
    src: "/Fishing/catch-of-the-day.mp4",
  },
  {
    id: "blue-economy",
    title: "Blue Economy",
    tag: "Coast",
    src: "/Fishing/blue-economy.mp4",
  },
] as const;

export default function FishingVideos() {
  return (
    <VideoGallerySection
      id="fishing-videos"
      title="Fishing Videos"
      subtitle="Discover the beauty of Puntland fishing areas"
      videos={videos}
    />
  );
}

import VideoGallerySection from "@/components/VideoGallerySection";

const videos = [
  {
    id: "tiktok",
    title: "Catch of the Day",
    tag: "Fishing",
    src: "/Tourism/tiktok.mp4",
  },
  {
    id: "blue-economy",
    title: "Blue Economy",
    tag: "Fishing",
    src: "/videos/fishing/blue-economy.mp4",
    muted: true,
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

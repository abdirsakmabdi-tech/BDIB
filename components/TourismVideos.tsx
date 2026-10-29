import VideoGallerySection from "@/components/VideoGallerySection";

const videos = [
  {
    id: "discover-puntland",
    title: "Discover Puntland",
    tag: "Tourism",
    src: "/videos/coastal-highlights.mp4",
  },
  {
    id: "coastal-highlights",
    title: "Coastal Highlights",
    tag: "Tourism",
    src: "/videos/discover-puntland.mp4",
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

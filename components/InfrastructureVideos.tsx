import VideoGallerySection from "@/components/VideoGallerySection";

const videos = [
  {
    id: "ports",
    title: "Ports",
    tag: "Infrastructure",
    src: "/infrastructure/road-works.mp4",
  },
  {
    id: "roads",
    title: "Roads",
    tag: "Infrastructure",
    src: "/infrastructure/construction-progress.mp4",
  },
] as const;

export default function InfrastructureVideos() {
  return (
    <VideoGallerySection
      id="infrastructure-videos"
      title="Infrastructure Videos"
      subtitle="Discover the beauty of Puntland infrastructure"
      videos={videos}
    />
  );
}

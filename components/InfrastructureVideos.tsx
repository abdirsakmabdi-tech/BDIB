import VideoGallerySection from "@/components/VideoGallerySection";

const videos = [
  {
    id: "roads-1",
    title: "Roads",
    tag: "Infrastructure",
    src: "/videos/infrustructure/ports.mp4",
  },
  {
    id: "roads-2",
    title: "Roads",
    tag: "Infrastructure",
    src: "/videos/infrustructure/roads.mp4",
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

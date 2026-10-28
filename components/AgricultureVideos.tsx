import VideoGallerySection from "@/components/VideoGallerySection";

const videos = [
  {
    id: "geesaleey",
    title: "Geesaleey",
    tag: "Agriculture",
    src: "/beeraha/geesaleey.mp4",
  },
] as const;

export default function AgricultureVideos() {
  return (
    <VideoGallerySection
      id="agriculture-videos"
      title="Agriculture"
      subtitle="Discover the beauty of Puntland agriculture"
      videos={videos}
    />
  );
}

import VideoGallerySection from "@/components/VideoGallerySection";

const videos = [
  {
    id: "herding",
    title: "Herding",
    tag: "Livestock",
    src: "/Xoolaha/herding.mp4",
  },
  {
    id: "xoolo",
    title: "Xoolo",
    tag: "Livestock",
    src: "/Xoolaha/xoolo.mp4",
  },
] as const;

export default function LivestockVideos() {
  return (
    <VideoGallerySection
      id="livestock-videos"
      title="Livestock Videos"
      subtitle="Discover the beauty of Puntland livestock"
      videos={videos}
    />
  );
}

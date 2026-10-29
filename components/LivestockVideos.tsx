import VideoGallerySection from "@/components/VideoGallerySection";

const videos = [
  {
    id: "xoolo",
    title: "Xoolo",
    tag: "Livestock",
    src: "/Xoolaha/xoolo.mp4",
  },
  {
    id: "no-ticktok",
    title: "Herding",
    tag: "Livestock",
    src: "/Xoolaha/no-ticktok.mp4",
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

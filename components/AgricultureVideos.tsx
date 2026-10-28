import VideoGallerySection from "@/components/VideoGallerySection";

const videos = [
  {
    id: "22-aad",
    title: "22-aad",
    tag: "Agriculture",
    src: "/beeraha/22-aad.mp4",
  },
  {
    id: "geeska-oo-cod-leh",
    title: "Geeska oo cod leh",
    tag: "Agriculture",
    src: "/beeraha/geeska-oo-cod-leh.mp4",
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

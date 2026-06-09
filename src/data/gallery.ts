// Add your images here — drop any photo into src/assets/gallery/ and import it below
import dd1 from "@/assets/gallery/dd1.png";
import dd2 from "@/assets/gallery/dd2.png";
import dd3 from "@/assets/gallery/dd3.png";
import dd4 from "@/assets/gallery/dd4.png";
import dd5 from "@/assets/gallery/dd5.png";
import dd6 from "@/assets/gallery/dd6.jpg";
import dd7 from "@/assets/gallery/dd7.jpg";
import dd8 from "@/assets/gallery/dd8.jpeg";
import dd9 from "@/assets/gallery/dd9.jpeg";
import dd10 from "@/assets/gallery/dd10.png";

export type GalleryImage = {
  src: string;
  caption: string;
  tag?: string;
};

export const galleryImages: GalleryImage[] = [
  { src: dd1, caption: "DD Morning Live Show — Shiksha Avam Rojgar", tag: "Media" },
  { src: dd2, caption: "Career Guidance Session on Doordarshan", tag: "Media" },
  { src: dd3, caption: "Live on DD Prasar Bharati", tag: "Media" },
  { src: dd4, caption: "Education & Employment Advisory", tag: "Media" },
  { src: dd5, caption: "Shiksha Avam Rojgar — National Broadcast", tag: "Media" },
  { src: dd6, caption: "Academic Session", tag: "Events" },
  { src: dd7, caption: "Career Counselling Program", tag: "Events" },
  { src: dd8, caption: "Educational Workshop", tag: "Events" },
  { src: dd9, caption: "Academic Program", tag: "Events" },
  { src: dd10, caption: "Educational Event", tag: "Events" },
];

// Add your images here — drop any photo into src/assets/gallery/ and import it below
import dd1 from "@/assets/gallery/dd1.png";
import dd2 from "@/assets/gallery/dd2.png";
import dd3 from "@/assets/gallery/dd3.png";
import dd4 from "@/assets/gallery/dd4.png";
import dd5 from "@/assets/gallery/dd5.png";

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
];

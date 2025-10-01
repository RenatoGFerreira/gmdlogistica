import { StaticImageData } from "next/image"; 

export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export interface GalleryItemProps {
  imageSrc: string | StaticImageData;
  altText: string;
  label: string;
}

export interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  autoplay?: boolean;
  loop?: boolean;
  controls?: boolean;
  mute?: boolean;
}

export interface FaqItemProps {
  question: string;
  answer: string;
}

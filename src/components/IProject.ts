export default interface IProject {
  title: string;
  tagline: string;
  detailsList: string[];
  description: string;
  tech: string;
  placeholderThumbnail: string;
  thumbnail: string;
  thumbnailAlt: string;
  liveSite?: string;
  sourceCode?: string;
  dates?: {
    start?: string;
    end?: string;
  };
}

export interface ProjectType {
  url: string;
  srcImg: string;
  srcImgAlt: string;
  title: string;
  externalLink?: boolean;
}

export type Projects = Array<ProjectType>;

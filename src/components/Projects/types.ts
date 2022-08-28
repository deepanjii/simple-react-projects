export interface ProjectType {
  url: string;
  srcImg: string;
  srcImgAlt: string;
  title: string;
  externalLink?: boolean;
  techStack: { [key:string]: string }
}

export type Projects = Array<ProjectType>;

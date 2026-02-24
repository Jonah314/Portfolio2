export interface IProject {
  id?: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  
}

export interface IBootcampProjects {
    title: string;
    description:string;
    githubUrl:string;
    liveUrl:string;
    image:string;
}
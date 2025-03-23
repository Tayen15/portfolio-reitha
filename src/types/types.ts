export interface Project {
     id: string;
     title: string;
     description: string;
     technologies: string[];
     image: string;
     liveUrl?: string;
     repoUrl?: string;
     featured: boolean;
}

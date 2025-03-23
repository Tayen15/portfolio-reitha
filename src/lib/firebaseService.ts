import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebaseConfig';
import { Project } from '@/types/types';

export const getProjects = async (): Promise<Project[]> => {
     const projectCollection = collection(db, "projects");
     const snapshot = await getDocs(projectCollection);

     const projects: Project[] = [];
     snapshot.forEach((doc) =>  {
          projects.push({ id: doc.id, ...doc.data() } as Project);
     });

     return projects;
}
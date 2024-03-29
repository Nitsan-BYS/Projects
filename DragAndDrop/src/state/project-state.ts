import { Project } from '../models/project';
import { ProjectStatus } from '../models/project';

//Project State Management class
type Listener<T> = (items: T[]) => void;

class State<T> {
   protected listeners: Listener<T>[] = [];

   addListener(listenerFn: Listener<T>) {
      this.listeners.push(listenerFn);
   }
}

export class ProjectState extends State<Project> {
   private projects: Project[] = [];
   private static instance: ProjectState;

   private constructor() {
      super();
   }

   static getInstance() {
      if (this.instance) {
         return this.instance;
      }
      this.instance = new ProjectState();
      return this.instance;
   }

   addProject(title: string, description: string, numOfPeople: number) {
      const newProject = new Project(
         Math.random().toString(),
         title,
         description,
         numOfPeople,
         ProjectStatus.ACTIVE
      );

      this.projects.push(newProject);
      this.updateListeners();
   }

   //Switch project's status when moved
   moveProject(projectId: string, newStatus: ProjectStatus) {
      const project = this.projects.find((project) => project.id === projectId);
      if (project && project.status !== newStatus) {
         project.status = newStatus;
         this.updateListeners();
      }
   }

   private updateListeners() {
      for (const listenerFn of this.listeners) {
         listenerFn(this.projects.slice());
      }
   }
}

export const projectState = ProjectState.getInstance(); //global constant to be used anywhere

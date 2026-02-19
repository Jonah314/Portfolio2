import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IProject } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private firestore = inject(Firestore);

  getProjects(): Observable<IProject[]> {
    const projectsRef = collection(this.firestore, 'projects');
    return collectionData(projectsRef, { idField: 'id' }) as Observable<IProject[]>;
  }
}
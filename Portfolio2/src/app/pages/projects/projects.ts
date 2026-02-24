import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Observable } from 'rxjs';
import { IProject } from '../../models/project.model';
import { Project } from '../../services/project';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './projects.html',
})
export class Projects {

  private projectService = inject(Project);

  projects$: Observable<IProject[]> = this.projectService.getProjects();
}
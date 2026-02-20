import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../services/project';
import { Observable } from 'rxjs';
import { IProject } from '../../models/project.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html'
})
export class Home {

  private projectService = inject(Project);

  projects$: Observable<IProject[]> = this.projectService.getProjects();
}
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../services/project';
import { Observable } from 'rxjs';
import { IProject } from '../../models/project.model';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html'
})
export class Home {

  private projectService = inject(Project);

  projects$: Observable<IProject[]> = this.projectService.getProjects();
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component'
import { FooterComponent } from '../../components/footer/footer.component';
import { LucideAngularModule, Wrench, Layers3, Cpu, Layout, Home } from 'lucide-angular';

@Component({
  selector: 'app-home',
  imports: [CommonModule, NavbarComponent, FooterComponent, LucideAngularModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private router: Router) {}

  readonly WrenchIcon = Wrench;
  readonly Layers3Icon = Layers3;
  readonly CpuIcon = Cpu;
  readonly LayoutIcon = Layout;
  readonly HomeIcon = Home;

  heroLinks = [
    {
      label: 'Project Management and Consultancy',
      fragment: 'project-management'
    },
    {
      label: 'Engineering Services',
      fragment: 'engineering-services'
    },
    {
      label: 'IT and Web Development',
      fragment: 'it-web-development'
    },
    {
      label: 'Real Estate',
      fragment: 'real-estate'
    }
  ];

  navigateTo(route: string): void {
    this.router.navigate([route]).then(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' 
      });
    });
  }
}

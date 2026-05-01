import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  LucideAngularModule,
  Wrench,
  Layers3,
  Cpu,
  Layout,
  Home
} from 'lucide-angular';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    LucideAngularModule,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  readonly WrenchIcon = Wrench;
  readonly Layers3Icon = Layers3;
  readonly CpuIcon = Cpu;
  readonly LayoutIcon = Layout;
  readonly HomeIcon = Home;
  
  serviceDomains = [
  {
    id: 'engineering-services',
    title: 'Engineering Services',
    summary: 'Professional HVAC installation, lifts, escalators, modular LGSF structures, BMS, office automation, fire protection, and critical infrastructure systems across Srinagar, Jammu & Kashmir.',
    icon: this.WrenchIcon,
    highlights: ['HVAC systems', 'LGSF structures', 'BMS automation', 'Vertical transport', 'Fire safety'],
    breakdownTitle: 'Engineering Services',
    breakdownIntro: 'Concept Engineering Service delivers reliable engineering solutions for commercial, residential, healthcare, and industrial projects. We combine technical expertise, quality materials, green building concepts, and professional execution to ensure long-term performance, safety, and efficiency.',
    breakdown: [
      {
        title: 'Installation of HVAC Systems',
        items: [
          'VRV / VRF air conditioning systems for commercial buildings',
          'Electric underfloor heating for modern homes and offices',
          'Hydronic underfloor heating for efficient thermal comfort',
          'Central heating and cooling using boilers, chillers, heat pumps, and radiators',
          'Energy-efficient ventilation and climate control systems'
        ]
      },
      {
        title: 'Installation of Lifts, Elevators & Escalators',
        items: [
          'Passenger lifts for residential and commercial buildings',
          'Freight elevators for warehouses and industrial facilities',
          'Hospital lifts with smooth and reliable movement',
          'Escalator installation for malls and public spaces',
          'Maintenance and modernization support'
        ]
      },
      {
        title: 'Installation of Cold Rooms & CA Chains',
        items: [
          'Cold storage rooms for food and pharmaceutical industries',
          'Controlled atmosphere chains for perishables',
          'Temperature-controlled storage solutions',
          'Custom refrigeration systems for commercial use'
        ]
      },
      {
        title: 'Modular LGSF Structures',
        items: [
          'Innovative modular construction using Light Gauge Steel Framing (LGSF)',
          'Quick and efficient building solutions for residential, commercial, and institutional projects',
          'Green building concepts with reduced material wastage and faster execution',
          'Lightweight, durable, and precision-engineered structural systems',
          'Design, planning, fabrication, and installation support'
        ]
      },
      {
        title: 'BMS & Office Automation',
        items: [
          'Building Management Systems (BMS) for centralized monitoring and control',
          'Automation of lighting, HVAC, energy usage, and access systems',
          'Smart office solutions for improved comfort, efficiency, and security',
          'Sensor-based controls, scheduling, and energy optimization',
          'Integration with existing building infrastructure and digital systems'
        ]
      },
      {
        title: 'Hospital Support Services',
        items: [
          'DG Sets for uninterrupted backup power',
          'Online, offline, and hybrid UPS systems',
          'Medical gas pipeline systems',
          'Modular operation theatres (OTs)',
          'Critical utility planning for healthcare facilities'
        ]
      },
      {
        title: 'Fire Detection & Alarm Systems',
        items: [
          'Automatic fire detection systems',
          'Smoke and heat sensor installation',
          'Addressable fire alarm systems',
          'Emergency warning and evacuation systems'
        ]
      },
      {
        title: 'Fire Fighting & Fire Suppression',
        items: [
          'Hydrant and sprinkler systems',
          'Gas-based fire suppression systems',
          'Portable extinguishing systems',
          'Commercial and industrial fire safety compliance solutions'
        ]
      }
    ]
  },

  {
    id: 'it-web-development',
    title: 'Digital Solutions',
    summary: 'Custom websites, business software, e-commerce stores, digital marketing, and scalable digital platforms built for modern businesses.',
    icon: this.LayoutIcon,
    highlights: ['Web platforms', 'E-commerce', 'Digital marketing', 'UI/UX design', 'APIs'],
    breakdownTitle: 'Digital Solutions',
    breakdownIntro: 'We help businesses grow online through modern websites, digital marketing, business automation tools, and secure digital systems designed for performance, user experience, and scalability.',
    breakdown: [
      {
        title: 'Web Platforms & Applications',
        items: [
          'Business websites with responsive design',
          'Custom web portals and dashboards',
          'E-commerce websites and online stores',
          'Booking and service management platforms',
          'SEO-friendly websites for better online visibility'
        ]
      },
      {
        title: 'Digital Marketing',
        items: [
          'Search engine optimization (SEO) for stronger organic visibility',
          'Social media marketing and campaign management',
          'Google Ads and paid advertising support',
          'Content strategy for websites and digital channels',
          'Lead generation and online brand growth'
        ]
      },
      {
        title: 'Backend Development & Integrations',
        items: [
          'Secure backend APIs',
          'CRM and ERP integrations',
          'Payment gateway integrations',
          'Database design and management',
          'Cloud deployment and hosting support'
        ]
      }
    ]
  },

  {
    id: 'project-management',
    title: 'Project Management and Consultancy',
    summary: 'Professional planning, supervision, budgeting, and consultancy services to ensure smooth project delivery from start to finish.',
    icon: this.HomeIcon,
    highlights: ['Scope planning', 'Vendor coordination', 'Site supervision', 'Compliance'],
    breakdownTitle: 'Project Management and Consultancy',
    breakdownIntro: 'Our consultancy and project management services help clients complete projects efficiently, reduce delays, control costs, and maintain quality standards.',
    breakdown: [
      {
        title: 'Project Management',
        items: [
          'Scope definition and project planning',
          'Vendor and contractor coordination',
          'Timeline management and milestone tracking',
          'On-site supervision and reporting',
          'Budget monitoring and cost optimization'
        ]
      },
      {
        title: 'Architectural & Design Consultancy',
        items: [
          'Building and interior design',
          '3D modeling and visual presentations',
          'Concept planning and space optimization',
          'Material and finish recommendations',
          'Execution guidance and design compliance'
        ]
      }
    ]
  },

  {
    id: 'real-estate',
    title: 'Real Estate',
    summary: 'Reliable real estate advisory, project marketing, property listings, leasing support, feasibility studies, and investment guidance in Jammu & Kashmir.',
    icon: this.Layers3Icon,
    highlights: ['Project marketing', 'Property listings', 'Commercial leasing', 'Feasibility', 'Local expertise'],
    breakdownTitle: 'Real Estate Services',
    breakdownIntro: 'We support clients, investors, brands, and developers with strategic real estate services backed by engineering insight, local market understanding, and practical execution planning.',
    breakdown: [
      {
        title: 'Site Evaluation & Feasibility',
        items: [
          'Land and property assessment',
          'Construction feasibility studies',
          'Utility and infrastructure evaluation',
          'Risk and opportunity analysis',
          'Investment suitability guidance'
        ]
      },
      {
        title: 'Development Planning & Advisory',
        items: [
          'Residential and commercial development planning',
          'Project viability consultation',
          'Regulatory guidance and approvals support',
          'Cost planning and ROI assessment',
          'Local market advisory for Jammu & Kashmir'
        ]
      },
      {
        title: 'Marketing, Listings & Leasing',
        items: [
          'Marketing support for residential and commercial projects',
          'Listing residential and commercial properties for sale, purchase, and rentals',
          'Buyer, tenant, and investor lead generation support',
          'Brand tie-ups for commercial spaces',
          'Commercial leasing support for retail, office, and business spaces'
        ]
      }
    ]
  }
];

scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    element.focus(); // Accessibility: focus the section
  }
}
}

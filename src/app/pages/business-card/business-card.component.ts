import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  BriefcaseBusiness,
  Download,
  ExternalLink,
  Mail,
  MessageCircle,
  Phone,
  Share2,
  Wrench
} from 'lucide-angular';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-business-card',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  templateUrl: './business-card.component.html',
  styleUrl: './business-card.component.scss'
})
export class BusinessCardComponent {
  readonly PhoneIcon = Phone;
  readonly MailIcon = Mail;
  readonly MessageCircleIcon = MessageCircle;
  readonly DownloadIcon = Download;
  readonly Share2Icon = Share2;
  readonly ExternalLinkIcon = ExternalLink;
  readonly WrenchIcon = Wrench;
  readonly BriefcaseBusinessIcon = BriefcaseBusiness;

  readonly companyName = 'Concept Engineering Service';
  readonly tagline = 'Engineering, Digital Solutions, PMC & Real Estate';
  readonly location = '34, Hill View Colony East, Sector 1, Old Airport Road, Wanabal, Srinagar, Jammu & Kashmir';
  readonly email = 'ces_mailbox@yahoo.com';
  readonly phoneDisplay = '+91-700-660-3177';
  readonly phoneHref = '+917006603177';
  readonly whatsappUrl = 'https://wa.me/917006603177';

  readonly services = [
    'Engineering Services',
    'Digital Solutions',
    'Project Management & Consultancy',
    'Real Estate Services'
  ];

  readonly channelPartners = [
    {
      name: 'Hisense HVAC',
      logo: 'assets/partners/hisense.png',
      url: 'http://www.hisensehvac.com'
    },
    {
      name: 'Omega Elevators',
      logo: 'assets/partners/omega.png',
      url: 'https://www.omega-elevators.com'
    }
  ];

  get shareUrl(): string {
    return typeof window === 'undefined' ? '/business-card' : window.location.href;
  }

  get vCardHref(): string {
    const vcard = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `FN:${this.companyName}`,
      `ORG:${this.companyName}`,
      `TITLE:${this.tagline}`,
      `TEL;TYPE=WORK,VOICE:${this.phoneHref}`,
      `EMAIL;TYPE=WORK:${this.email}`,
      `ADR;TYPE=WORK:;;${this.location};;;;`,
      `NOTE:${this.tagline}`,
      'END:VCARD'
    ].join('\n');

    return `data:text/vcard;charset=utf-8,${encodeURIComponent(vcard)}`;
  }

  async shareCard(): Promise<void> {
    const nav = typeof navigator === 'undefined'
      ? undefined
      : navigator as Navigator & {
        share?: (data: { title?: string; text?: string; url?: string }) => Promise<void>;
        clipboard?: { writeText: (text: string) => Promise<void> };
      };

    if (nav?.share) {
      await nav.share({
        title: this.companyName,
        text: this.tagline,
        url: this.shareUrl
      });
      return;
    }

    if (nav?.clipboard) {
      await nav.clipboard.writeText(this.shareUrl);
    }
  }
}

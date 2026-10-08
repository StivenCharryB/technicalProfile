export interface SocialLink {
  label: string;
  url: string;
  iconName: 'github' | 'linkedin' | 'mail' | 'file-text';
  highlight?: boolean;
}

export interface PillarItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface ProfileMetadata {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  location: string;
  availability: {
    status: boolean;
    badgeText: string;
    subtext: string;
  };
  valueProposition: {
    title: string;
    description: string;
  };
  socialLinks: SocialLink[];
  pillars: PillarItem[];
}

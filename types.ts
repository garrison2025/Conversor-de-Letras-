export enum FontCategory {
  ALL = 'all',
  CURSIVE = 'cursive',
  GOTHIC = 'gothic',
  GRAFFITI = 'graffiti',
  TATTOO = 'tattoo',
  SOCIAL = 'social',
}

export interface FontStyle {
  id: string;
  name: string;
  category: FontCategory[];
  map: Record<string, string>;
  isPremium?: boolean;
}

export interface NavItem {
  label: string;
  path: string;
  category: FontCategory;
}
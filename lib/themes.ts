export interface ThemeInfo {
  name: string;
  theme: string;
  icon: string;
  publisher: string;
}

export const THEMES: ThemeInfo[] = [
  {
    name: 'GitHub Dark',
    theme: 'github-dark',
    icon: '/portfolio-website/themes/github-dark.png',
    publisher: 'GitHub',
  },
  {
    name: 'Dracula',
    theme: 'dracula',
    icon: '/portfolio-website/themes/dracula.png',
    publisher: 'Dracula Theme',
  },
  {
    name: 'Ayu Dark',
    theme: 'ayu-dark',
    icon: '/portfolio-website/themes/ayu.png',
    publisher: 'teabyii',
  },
  {
    name: 'Ayu Mirage',
    theme: 'ayu-mirage',
    icon: '/portfolio-website/themes/ayu.png',
    publisher: 'teabyii',
  },
  {
    name: 'Nord',
    theme: 'nord',
    icon: '/portfolio-website/themes/nord.png',
    publisher: 'arcticicestudio',
  },
  {
    name: 'Night Owl',
    theme: 'night-owl',
    icon: '/portfolio-website/themes/night-owl.png',
    publisher: 'sarah.drasner',
  },
  {
    name: 'GitHub Light',
    theme: 'github-light',
    icon: '/portfolio-website/themes/github-light.png',
    publisher: 'GitHub',
  },
  {
    name: 'One Dark Pro',
    theme: 'one-dark-pro',
    icon: '/portfolio-website/themes/one-dark-pro.png', 
    publisher: 'binaryify',
  },
];

export const THEME_KEYS = THEMES.map(t => t.theme) as [string, ...string[]];

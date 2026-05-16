export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: 'The Digital Philologist',
    description:
      'Unsupervised authorship detection using BERT & Haar Wavelet Transforms. Analyzed classical corpora with signal-processing techniques.',
    logo: '/portfolio-website/logos/python-icon.svg', 
    link: 'https://github.com/OfirBraude/Final-Project',
    slug: 'digital-philologist',
  },
  {
    title: 'Hardened TCP Messaging Infrastructure',
    description:
      `High-concurrency Java server hardened with TLS/SSL encryption and secure non-root Alpine containers.
      Monitored via Prometheus/Grafana and backed by an automated DevSecOps CI pipeline (Semgrep, Snyk, Trivy).`,
    logo: '/portfolio-website/logos/java-icon.svg', 
    link: 'https://github.com/emanueldavidov/Java-Chat-System',
    slug: 'hardened-tcp-messaging',
  },
  {
    title: 'NutriPlus',
    description:
      'Full-stack nutrition management SPA built with React, Redux, and Node.js. Features a responsive UI and RESTful MongoDB API.',
    logo: '/portfolio-website/logos/react_icon.svg',
    link: 'https://nutri-client-oh11.onrender.com/',
    slug: 'nutri-plus',
  },
  {
    title: 'pandas-pyarrow',
    description:
      'Open-source contribution to the Pandas ecosystem, optimizing backend transitions and high-performance data processing.',
    logo: '/portfolio-website/logos/vsc.svg',
    link: 'https://github.com/pandas-dev/pandas',
    slug: 'pandas-contribution',
  },
  {
    title: 'GoNature',
    description:
      'Desktop management app using JavaFX and MVC. Integrated MySQL for real-time reservation handling and persistent storage.',
    logo: '/portfolio-website/logos/java-icon.svg',
    link: 'https://github.com/yossishemtov/SemesterProjectGoNature',
    slug: 'go-nature',
  },
  {
    title: 'ChainAbuse',
    description:
      'Bitcoin fraud detection system using design patterns (Mediator, Observer, Factory) and external API integration for wallet analysis.',
    logo: '/portfolio-website/logos/java-icon.svg',
    link: 'https://github.com/emanueldavidov/ChainAbuse',
    slug: 'chain-abuse',
  },
];
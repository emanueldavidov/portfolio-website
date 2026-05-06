import type { Metadata } from 'next';
import Layout from '@/components/Layout';
import '@/styles/globals.css';
import '@/styles/themes.css';

export const metadata: Metadata = {
  title: {
    default: 'Emanuel Davidov | Portfolio',
    template: 'Emanuel Davidov | %s',
  },
  description:
    'Software Engineer specializing in high-concurrency systems, networking protocols, and scalable modular architectures using Java, Python, and Docker.',
  keywords: [
    'Emanuel Davidov',
    'Emanuel',
    'Davidov',
    'Software Engineer Portfolio',
    'Java Developer',
    'Python Developer',
    'Backend Engineer Israel',
    'Networking Protocols',
    'Docker',
    'Pandas Open Source',
  ],
  openGraph: {
    title: "Emanuel Davidov's Professional Portfolio",
    description:
      "Explore the technical projects and engineering expertise of Emanuel Davidov, featuring high-concurrency systems and AI-driven applications.",
    images: ['/portfolio-website/logos/my_photo.jpg'],
    url: 'https://emanueldavidov.github.io/portfolio-website/', 
  },
  twitter: {
    card: 'summary_large_image',
  },
};

const themeScript = `
  (function() {
    const theme = localStorage.getItem('theme');
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
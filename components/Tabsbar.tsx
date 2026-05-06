import Tab from '@/components/Tab';

import styles from '@/styles/Tabsbar.module.css';

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/portfolio-website/logos/react_icon.svg" filename="home.tsx" path="/" />
      <Tab icon="/portfolio-website/logos/html_icon.svg" filename="about.html" path="/about" />
      <Tab icon="/portfolio-website/logos/css_icon.svg" filename="contact.css" path="/contact" />
      <Tab icon="/portfolio-website/logos/js_icon.svg" filename="projects.js" path="/projects" />
    </div>
  );
};

export default Tabsbar;

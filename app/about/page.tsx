'use client';

import { VscGithub, VscMail } from 'react-icons/vsc';
import Link from 'next/link';

import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.headerText}>
              <h1 className={styles.name}>Emanuel Davidov</h1>
              <p className={styles.role}>Software Engineer</p>
              <div className={styles.location}>
                <span className={styles.dot} />
                Haifa District, Israel
              </div>
            </div>
          </div>
          
          <div className={styles.headerActions}>
            <a 
              href="https://github.com/emanueldavidov" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.iconButton}
            >
              <VscGithub size={20} />
            </a>
            <Link href="/contact" className={styles.iconButton}>
              <VscMail size={20} />
            </Link>
          </div>
        </header>

        <div className={styles.content}>
          {/* Bio Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>01</span>
              <h2 className={styles.sectionTitle}>About</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <p className={styles.paragraph}>
                I&apos;m a Software Engineering Graduate (B.Sc., Dean’s List) with practical experience in <b>Java</b>, <b>Python</b>, and <b>Docker</b>. 
                I specialize in developing high-concurrency systems, networking protocols, and NLP solutions. 
                As an open-source contributor to <b>Pandas</b>, I focus on building reliable software using <b>GitHub Actions</b>, 
                monitoring tools, and <b>leveraging design patterns for scalable, modular architectures</b>.
              </p>
            </div>
          </section>

          {/* Education Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>02</span>
              <h2 className={styles.sectionTitle}>Education</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>2021 — 2025</span>
                </div>
                <h3 className={styles.expRole}>B.Sc. in Software Engineering</h3>
                <p className={styles.expCompany}>Braude College of Engineering</p>
                <ul className={styles.expList}>
                  <li>Focused on software architecture, complex algorithms, and system design.</li>
                  <li>Deep dive into operating systems and concurrent programming.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Expanded Skills Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>03</span>
              <h2 className={styles.sectionTitle}>Technical Expertise</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <div className={styles.skillsGrid}>
                {/* Languages */}
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Programming Languages</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>Java</span>
                    <span className={styles.skillTag}>Python</span>
                    <span className={styles.skillTag}>C</span>
                    <span className={styles.skillTag}>JavaScript</span>
                    <span className={styles.skillTag}>SQL</span>
                  </div>
                </div>

                {/* Networking */}
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Networking & Protocols</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>TCP/IP Stack</span>
                    <span className={styles.skillTag}>UDP</span>
                    <span className={styles.skillTag}>DNS</span>
                    <span className={styles.skillTag}>Routing Algorithms</span>
                    <span className={styles.skillTag}>Congestion Control</span>
                  </div>
                </div>

                {/* Web & Desktop */}
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Web & Desktop Dev</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>React</span>
                    <span className={styles.skillTag}>Node.js</span>
                    <span className={styles.skillTag}>Redux</span>
                    <span className={styles.skillTag}>Tailwind CSS</span>
                    <span className={styles.skillTag}>JavaFX</span>
                    <span className={styles.skillTag}>HTML/CSS</span>
                  </div>
                </div>
                
                {/* Tools & DevOps */}
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Tools & DevOps</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>Docker</span>
                    <span className={styles.skillTag}>Git/GitHub</span>
                    <span className={styles.skillTag}>GitHub Actions</span>
                    <span className={styles.skillTag}>Linux Environment</span>
                    <span className={styles.skillTag}>Prometheus/Grafana</span>
                  </div>
                </div>

                {/* Data & AI */}
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Data & AI (Fundamentals)</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>Pandas</span>
                    <span className={styles.skillTag}>NumPy</span>
                    <span className={styles.skillTag}>PyTorch</span>
                    <span className={styles.skillTag}>BERT (NLP)</span>
                  </div>
                </div>

                {/* Concepts */}
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Core Concepts</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>OOP</span>
                    <span className={styles.skillTag}>Design Patterns (MVC, Factory, Observer)</span>
                    <span className={styles.skillTag}>RESTful APIs</span>
                    <span className={styles.skillTag}>Client-Server Architecture</span>
                  </div>
                </div>

                {/* Databases */}
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Databases</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>MongoDB</span>
                    <span className={styles.skillTag}>MySQL</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <footer className={styles.footer}>
          <Link href="/projects" className={styles.footerLink}>
            View my technical projects →
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;
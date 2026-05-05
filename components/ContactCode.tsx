import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'email',
    link: 'emanuel12342111@gmail.com', 
    href: 'mailto:emanuel12342111@gmail.com',
  },
  {
    social: 'github',
    link: 'EmanuelDavidov', 
    href: 'https://github.com/emanueldavidov',
  },
  {
    social: 'linkedin',
    link: 'emanuel-davidov', 
    href: 'https://www.linkedin.com/in/emanuel-davidov/',
  },
  {
    social: 'Phone',
    link: '053-332-4478', 
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.variableName}>contactInfo</span> = &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <span className={styles.string}>
            &apos;
            <a href={item.href} target="_blank" rel="noopener">
              {item.link}
            </a>
            &apos;
          </span>
          ,
        </p>
      ))}
      <p className={styles.line}>&#125;;</p>
    </div>
  );
};

export default ContactCode;
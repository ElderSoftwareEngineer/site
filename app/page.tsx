import React from 'react';
import styles from '../styles/Home.module.css';
import ContactForm from '../components/ContactForm';

export const metadata = {
  title: 'Elder Softwares Inteligentes',
  description: 'Desenvolvimento de softwares inteligentes, eficientes e performáticos',
};

export default function Home() {
  const currentYear: number = new Date().getFullYear();

  return (
    <div className={styles.container}>

      {/* Cabeçalho com a Logo */}
      {/* <header className={styles.header}>
        <img src="/logo_elder_soft.png" alt="Elder Softwares Inteligentes" className={styles.logo} />
      </header> */}

      {/* Seção de Apresentação da Empresa */}
      <main className={styles.main}>
        <h1 className={styles.title}>Bem-vindo à Elder Softwares Inteligentes</h1>
        <div className={styles.descriptionContainer}>
          <p className={styles.description}>
            Bem-vindo à Elder Softwares Inteligentes, onde a inovação e a excelência tecnológica se encontram. Somos uma empresa dedicada ao desenvolvimento de softwares inteligentes, eficientes e performáticos que impulsionam o crescimento e a transformação digital de negócios em diversos setores.
          </p>
        </div>
      </main> 

      <img src="/logo_elder_soft.png" alt="Elder Softwares Inteligentes" className={styles.logo} />

      {/* Input para Contato por E-mail */}
      <section className={styles.contactSection}>
        <h2>Entre em Contato</h2>
        <ContactForm />
      </section>

      {/* Rodapé */}
      <footer className={styles.footer}>
        <div className={styles.contactInfo}>
          <p>Contato: +55 (71) 99316-4658</p>
          <p>Email: e.docarmooliveira@gmail.com</p>
          <div className={styles.socialLinks}>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="#"
              // href="https://facebook.com/eldersoftwares"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a href="https://wa.me/71993164658" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2024 Elder Softwares Inteligentes</p>
          <div className={styles.policyLinks}>
            <a href="/politica-de-privacidade">Política de Privacidade</a>
            <a href="/termos-de-uso">Termos de Uso</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

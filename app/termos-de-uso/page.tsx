import React from 'react';
import styles from '../../styles/Home.module.css';

export const metadata = {
  title: 'Termos de Uso - Elder Softwares Inteligentes',
};

export default function TermosDeUso() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Termos de Uso</h1>
        <p>1. Aceitação dos termos: Ao adquirir os nossos produtos ou serviços, você concorda com os termos e condições aqui estabelecidos. </p>
        <br />
        <p>2. A manutenção dos produtos/sistemas é de nosso inteira responsabilidade.</p>
        <br />
        <p>3. Todo suporte é de nossa inteira responsabilidade.</p>
        <br />
        <p>4. O usuário tem responsabilidade de não compartilhamento dos nossos produtos e serviçõs, podendo utilizar apenas para sua exclusidade de negócio.</p>
        <br />
        <p>Para mais informações, por favor, entre em contato conosco através do e-mail e.docarmooliveira@gmail.com ou WhatsApp +55 71 99316-4658</p>
        <br />
        <br />
        <p>&copy; 2024 Elder Softwares Inteligentes</p>
      </main>
    </div>
  );
}

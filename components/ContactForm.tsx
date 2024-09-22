'use client';

import React from 'react';
import emailjs from 'emailjs-com';
import styles from '../styles/Home.module.css';

export default function ContactForm() {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        e.target as HTMLFormElement,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      )
      .then(
        (result:any) => {
          alert('Mensagem enviada com sucesso!');
        },
        (error:any) => {
          alert('Ocorreu um erro. Tente novamente.');
        }
      );
  };

  return (
    <form className={styles.contactForm} onSubmit={sendEmail}>
      <input type="email" name="from_email" placeholder="Seu e-mail" required />
      <button type="submit">Enviar</button>
    </form>
  );
}

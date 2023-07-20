import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from '../styles/ContactForn.module.css';

const ContactForm = () => {
  const [state, handleSubmit] = useForm('mrgwgykv');
  if (state.succeeded) {
    window.location.reload();
    return <p>Thanks for joining!</p>;
  }

  return (
    <div className={styles.formContainer}>
      <div className={styles.formWrapper}>
        <h1 className={styles.title}>Contact me</h1>
        <p className={styles.info}>
          If you have an application you are interested in developing,
          a feature that you need built or a project that needs coding.
          I’d love to help with it!
        </p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="full name"
            className={styles.input}
          />
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email Address"
            className={styles.input}
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            className={styles.message}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting} className={styles.get}>
            Get in touch
          </button>
        </form>
      </div>

    </div>

  );
};

export default ContactForm;

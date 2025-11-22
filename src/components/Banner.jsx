import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../styles/Banner.module.css';
import { Link } from 'react-scroll';
import Button from './Button';

function Banner() {
  return (
    <section
      className={`${styles.heroSection} section-standard`}
      id='home'
    >
      <Container className={`animate-fade-in ${styles.contentWrapper} text-start`}>
        <div className="d-flex flex-column align-items-center">
          <div className="d-inline-block text-start">
            <div className={`d-inline-block mb-4 px-4 py-2 rounded-pill ${styles.scheduleBadge}`}>
              <span
                className={`text-uppercase ${styles.scheduleText}`}
                aria-label="Horário de atendimento: terça a sábado, das 9 às 19 horas"
              >
                ter - sab | 09h - 19h
              </span>
            </div>

            <h1 className={`mb-3 animate-slide-in-up delay-100 ${styles.title}`}>
              Lucena Barbearia
            </h1>

            <p className={`mb-5 animate-slide-in-up delay-200 ${styles.subtitle}`}>
              Barbearia Familiar, Com Ambiente Climatizado
            </p>

            <div className="animate-slide-in-up delay-300">
              <Button
                href="#agendar"
                variant="primary"
                size="lg"
                className={styles.ctaButton}
              >
                Agendar Horário
              </Button>
            </div>
          </div>
        </div>
      </Container>

      <Link
        to="servicos"
        smooth={true}
        duration={500}
        className={styles.scrollIndicator}
        aria-label="Rolar para baixo"
      >
        <div className={styles.scrollArrow}></div>
      </Link>
    </section>
  );
}

export default Banner;

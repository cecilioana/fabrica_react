'use client';
import styles from './emitirRelatorio.module.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Relatorio() {
  return (
    <main>
      <Header />
      <div className={styles.fundo}>
      <div className={styles.data}>
        <h2 className={styles.h2}>Emitir relatório</h2>
        <form>
          <div className={styles.venda}>
            <label className={styles.label} htmlFor="data-inicio">
              Data de venda
              <input className={styles.input} type="date" id="data-inicio" name="data-inicio" />
            </label>
            <label htmlFor="data-fim" className={styles.label}>
              à
              <input className={styles.input} type="date" id="data-fim" name="data-fim" />
            </label>
          </div>
        </form>
        <div className={styles.bots}>
          <button className={styles.botao} type="submit">
            <a className={styles.bott} href="/area">
              Confirmar
            </a>
          </button>
          <button className={styles.botao} type="button">
            <a href="/area">Voltar</a>
          </button>
        </div>
      </div>
    </div>
    <Footer />
    </main>
   
  );
}

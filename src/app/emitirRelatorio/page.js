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
        <h1 className={styles.h1}>Emitir relatório</h1>
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
          <div className={styles.entrega}>
            <label className={styles.label} htmlFor="data-entrega1">
              Data de entrega
              <input className={styles.input} type="date" id="data-entrega1" name="data-entrega1" />
            </label>
            <label className={styles.label} htmlFor="data-entrega2">
              à
              <input className={styles.input} type="date" id="data-entrega2" name="data-entrega2" />
            </label>
          </div>
          <div className={styles.produtoo}>
            <label className={styles.label} htmlFor="produto">
              Produto
              <input className={styles.input}
                type="text"
                id="produto"
                placeholder="Digite o nome do produto"
                name="produto"
                required
              />
            </label>
          </div>
          <div className={styles.vendedorr}>
            <label className={styles.label} htmlFor="vendedor">
              Vendedor
              <input className={styles.input}
                type="text"
                id="vendedor"
                placeholder="Digite o nome do vendedor"
                name="vendedor"
                required
              />
            </label>
          </div>
          <div className={styles.clientee}>
            <label className={styles.label} htmlFor="cliente">
              Cliente
              <input className={styles.input}
                type="text"
                id="cliente"
                placeholder="Digite o nome do cliente"
                name="cliente"
                required
              />
            </label>
          </div>
        </form>
        <div className={styles.bots}>
          <button className={styles.botao} type="submit">
            <a className={styles.bott} href="#">
              Confirmar
            </a>
          </button>
          <button className={styles.botao} type="button">
            <a href="#">Voltar</a>
          </button>
        </div>
      </div>
    </div>
    <Footer />
    </main>
   
  );
}

'use client'
import Link from 'next/link';
import styles from './eventos.module.css';
import Image from 'next/image';
import { useState } from 'react';
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Eventos() {
  const [mensagem, setMensagem] = useState(false);

    function msg(event) {
        const arquivo = event.target.files;
        if (arquivo.length > 0) {
            setMensagem(true);
            setTimeout(() => setMensagem(false), 3000);
        } else {
            setMensagem(false); 
        }
    }

  return (
    <main>
      <Header />
      <h1 className={styles.h1}>Pacote para Eventos</h1>
      <div className={styles.fundo}>
        <div className={styles.titulo}><h3 className={styles.h3}>Embalagens</h3></div>
        <form id={styles.emb} method="get">
          <h4 className={styles.h4}>Datas comemorativas</h4>
          {['Ano Novo', 'Páscoa', 'Dia das Mães', 'Dia dos Namorados', 'Dia dos Pais', 'Dia das Crianças', 'Halloween', 'Natal'].map((data, index) => (
            <div key={data}>
              <label className={styles.label}>
                <input type="radio" name="opcao" />
                {data}
              </label>
            </div>
          ))}
          <button className={styles.button} type="reset">Limpar</button>
          <button className={styles.button} type="submit">Enviar</button>
        </form>

        <div className={styles.texto}>
          <form method="get">
            <h4 className={styles.h4}>Personalizado</h4>
            <label>
              <input type="radio" name="opcao" /> Personalizado
              <br />
              <textarea className={styles.textarea} placeholder="Descreva aqui sua embalagem"></textarea>
              <label className={styles.label} htmlFor="image" id= 'file' tabIndex={0}>
                <span className={styles.filee}>Carregue Fotos</span>
                <input onChange={msg} type="file" id='image' accept="image/*" className={styles.images} />
                <span><Image src="/images/Wallpaper (1).png" width={24} height={24} alt="Imagem de upload" /></span>
              </label>
              <button className={styles.button} type="reset">Limpar</button>
              <button className={styles.button} type="submit">Enviar</button>
            </label>
          </form>
        </div>

        <div className={styles.quantidade}>
          <form method="get">
            <label htmlFor="quantidade">Quantidade</label>
            <input type="number" id="quantidade" name="quantidade" min="1" placeholder="Digite aqui" required />
          </form>
        </div>

        <div className={styles.bots}>
          <button className={styles.botao} type="button"><Link className={styles.bott} href="/pedido">Confirmar</Link></button>
          <button className={styles.botao} type="button"><Link className={styles.bott} href="/pedido">Voltar</Link></button>
        </div>
      </div>
      <Footer />
    </main>
  );
}

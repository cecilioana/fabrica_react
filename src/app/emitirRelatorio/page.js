'use client';
import { useState } from 'react';
import styles from './emitirRelatorio.module.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Relatorio() {
  const [dataInicio, setDataInicio] = useState('');
  const [dataFim, setDataFim] = useState('');
  const [pedidos, setPedidos] = useState([]);
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensagem('');
    setPedidos([]);

    if (!dataInicio || !dataFim) {
      setMensagem('As datas de início e fim são obrigatórias.');
      return;
    }

    const url = `https://apisweetcandy.dev.vilhena.ifro.edu.br/relatorio?dataInicio=${dataInicio}&dataFim=${dataFim}`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      if (!res.ok) {
        setMensagem(data.mensagem || 'Erro ao buscar relatório.');
      } else if (Array.isArray(data) && data.length === 0) {
        setMensagem('Nenhum pedido foi encontrado no intervalo informado.');
      } else {
        setPedidos(data);
      }
    } catch (error) {
      setMensagem('Erro ao conectar com a API.');
    }
  };

  return (
    <main>
      <Header />
      <div className={styles.fundo}>
        <div className={styles.data}>
          <h2 className={styles.h2}>Emitir relatório</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.venda}>
              <label className={styles.label} htmlFor="data-inicio">
                Data de venda
                <input
                  className={styles.input}
                  type="date"
                  id="data-inicio"
                  name="data-inicio"
                  value={dataInicio}
                  onChange={(e) => setDataInicio(e.target.value)}
                />
              </label>
              <label htmlFor="data-fim" className={styles.label}>
                à
                <input
                  className={styles.input}
                  type="date"
                  id="data-fim"
                  name="data-fim"
                  value={dataFim}
                  onChange={(e) => setDataFim(e.target.value)}
                />
              </label>
            </div>
            <div className={styles.bots}>
              <button className={styles.botao} type="submit">
                Confirmar
              </button>
              <button className={styles.botao} type="button">
                <a className={styles.bott} href="/area">Voltar</a>
              </button>
            </div>
          </form>

          {mensagem && (
            <p style={{ color: 'red', textAlign: 'center', marginTop: '10px' }}>{mensagem}</p>
          )}

          {pedidos.length > 0 && (
            <table style={{ width: '100%', marginTop: '20px', fontFamily: 'Coiny, system-ui', color: 'var(--cor4)', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#ffa4eb' }}>
                  <th style={{ padding: '8px', border: '1px solid #fff' }}>ID</th>
                  <th style={{ padding: '8px', border: '1px solid #fff' }}>Data</th>
                  <th style={{ padding: '8px', border: '1px solid #fff' }}>Cliente</th>
                  <th style={{ padding: '8px', border: '1px solid #fff' }}>Total</th>
                </tr>
              </thead>
              <tbody>
                {pedidos.map((pedido) => (
                  <tr key={pedido.id} style={{ backgroundColor: '#fbd1ff' }}>
                    <td style={{ padding: '8px', border: '1px solid #fff' }}>{pedido.id}</td>
                    <td style={{ padding: '8px', border: '1px solid #fff' }}>{pedido.data}</td>
                    <td style={{ padding: '8px', border: '1px solid #fff' }}>{pedido.cliente}</td>
                    <td style={{ padding: '8px', border: '1px solid #fff' }}>R$ {pedido.total.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
}

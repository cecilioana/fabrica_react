"use client";

import { useState } from 'react';
import styles from './page.module.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SolicitarDevolucao() {
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
        <div>
            <Header />
            <div className={styles.container}>
                <h2 className={styles.h2}>Solicitar Devolução</h2>
                <form action="#" method="post" encType="multipart/form-data">
                    <div className={styles.sections}>
                        <div className={styles.sectionleft}>
                            <h3 className={styles.h3}>Razão do retorno</h3>
                            <label className={styles.label}>
                                <input className={styles.input} type="radio" name="motivo" value="danificado" />
                                Item (itens) danificado(s) ou defeituoso(s)
                            </label>
                            <label className={styles.label}>
                                <input className={styles.input} type="radio" name="motivo" value="tamanho" />
                                Não é verdade em tamanho / medição
                            </label>
                            <label className={styles.label}>
                                <input className={styles.input} type="radio" name="motivo" value="malfeito" />
                                Mal feito / Danificado
                            </label>
                            <label className={styles.label}>
                                <input className={styles.input} type="radio" name="motivo" value="qualidade" />
                                Qualidade dos ingredientes
                            </label>

                            <div className={styles.upload}>
                                <label className={styles.label} htmlFor="image" id="file" tabIndex="0">
                                    <span className={styles.filee}>Carregue fotos</span>
                                    <input 
                                        className={styles.input} 
                                        type="file" 
                                        id="image" 
                                        accept="image/*" 
                                        onChange={msg} 
                                    />
                                    <span>
                                        <img 
                                            className={styles.fotoinput} 
                                            src="/images/importimage.png" 
                                            alt="imagem" 
                                        />
                                    </span>
                                </label>
                            </div>
                        </div>

                        <div className={styles.sectionright}>
                            <h3 className={styles.h3}>Etapas de Reembolso</h3>
                            <div className={styles.timeline}>
                                <div className={styles.timelineitem}>
                                    <span className={styles.circle}></span>
                                    <span>Solicitado para devolução</span>
                                </div>
                                <div className={styles.timelineitem}>
                                    <span className={styles.circle}></span>
                                    <span>Devolução Recebida</span>
                                </div>
                                <div className={styles.timelineitem}>
                                    <span className={styles.circle}></span>
                                    <span>Verificação de qualidade concluída</span>
                                </div>
                                <div className={styles.timelineitem}>
                                    <span className={styles.circle}></span>
                                    <span>Reembolso</span>
                                </div>
                                <div className={styles.timelineitem}>
                                    <span className={styles.circle}></span>
                                    <span>Reembolsado</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.buttons}>
                        <button className={`${styles.button} ${styles.cancel}`} type="button">
                            Cancelar
                        </button>
                        <button className={`${styles.button} ${styles.confirm}`} type="submit">
                            Confirmar
                        </button>
                    </div>
                </form>

                {mensagem && (
                    <div className={styles.aviso}>
                        Imagem anexada com sucesso! 𐙚  
                    </div>
                )}

            </div>
            <Footer />
        </div>
    );
}
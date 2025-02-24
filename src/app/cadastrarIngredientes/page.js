'use client'

import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function cadastrarIngredientes() {
  const [ingredientes, setIngredientes] = useState({
    cores: ["Roxo", "Lilás", "Rosa", "Azul", "Azul Claro", "Branco", "Verde Menta"],
    coberturas: ["Glacê", "Chantilly", "Merengue", "Ganache", "Brigadeiro"],
    recheios: ["Brigadeiro", "Doce de leite", "Leite Ninho", "Nutella", "Beijinho", "Geleia de Morango"],
    massas: ["Baunilha", "Chocolate", "Cenoura", "Red Velvet"]
  });

  const handleAdd = (categoria, valor) => {
    if (valor && !ingredientes[categoria].includes(valor)) {
      setIngredientes((prev) => ({
        ...prev,
        [categoria]: [...prev[categoria], valor]
      }));
    }
  };

  const handleRemove = (categoria, valor) => {
    setIngredientes((prev) => ({
      ...prev,
      [categoria]: prev[categoria].filter((item) => item !== valor)
    }));
  };

  return (
    <form className={styles.form}>
      <h1 className={styles.h1}>Cadastrar Ingredientes</h1>
      <div className={styles.tudo}>
        {Object.entries(ingredientes).map(([categoria, itens]) => (
          <div className={styles.card} key={categoria}>
            <p className={styles.cores}>{categoria.charAt(0).toUpperCase() + categoria.slice(1)}</p>
            <div className={styles.ingredientes}>
              {itens.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
            <label className={styles.label}>
              Adicionar {categoria}
              <input className={styles.input}
                type="text"
                placeholder="Digite aqui..."
                onBlur={(e) => handleAdd(categoria, e.target.value)}
              />
            </label>
            <label className={styles.label}>
              Excluir {categoria}
              <input className={styles.input}
                type="text"
                placeholder="Digite aqui..."
                onBlur={(e) => handleRemove(categoria, e.target.value)}
              />
            </label>
          </div>
        ))}
      </div>
      <button type="reset" className={styles.botao}>
        <Link href='/area'> Cancelar</Link>
       </button>
      <button type="submit" className={styles.botao}>
      <Link href='/area'> Confirmar</Link>
       </button>
    </form>
  );
}
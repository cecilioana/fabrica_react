import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Header from '@/components/Header'
import Footer from '@/components/Footer'


export default function CadastrarEndereco() {
  return (
    <main>
        <Header />
        <div className={styles.divTotal}>

<form className={styles.form}>

    <h1 className={styles.h1}>Endereço de entrega</h1>

    <div className={styles.inputRua}>
        <label className={styles.label} htmlFor="rua">Rua</label>
        <Image className={styles.img} src="/images/endereco.png" alt="" width={33} height={33}/>
        <input className={styles.input} type="text" id="rua" name="rua" placeholder="Digite sua rua" required />
    </div>

    <div className={styles.inputNumero}>
        <label className={styles.label} htmlFor="numero">Nº da casa</label>
        <Image className={styles.img} src="/images/numero.png" alt="" width={33} height={33}/>
        <input className={styles.input} type="text" id="numero" name="numero" placeholder="Digite o número da casa"/>
    </div>

    <div className={styles.inputCpf}>
        <label className={styles.label} htmlFor="cpf">CPF</label>
        <Image className={styles.img} src="/images/cpf.png" alt="" width={33} height={33}/>
        <input className={styles.input} type="text" id="cpf" name="cpf" placeholder="Digite o seu CPF"/>
    </div>

    <button className={styles.button} type="reset">
    <Link className={styles.link} href="/checkout">Cancelar</Link></button>
    <button className={styles.button} type="submit">
      <Link className={styles.link} href="/checkout">Confirmar</Link>
    </button>

</form>
</div>
    <Footer />
    </main>
    
  );
}    
import Image from 'next/image';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Styles from './realizarPamento.module.css';
import Link from 'next/link';

export default function Pagamento() {
  return (
    <main>
      <Header />
      <div>
        <div className={Styles.pagamento}>
          <h1 className={Styles.titulo}>Realizar Pagamento</h1>
          <form className={Styles.formulario} action="" method="post">
            <label className={Styles.label} htmlFor="nome">
              Nome
              <div className={Styles.inputContainer}>
                <Image className={Styles.icone} src="/images/nome.png" width={24} height={24} alt="User Icon" />
                <input className={Styles.input} type="text" id="nome" placeholder="Digite seu nome:" required />
              </div>
            </label>

            <label className={Styles.label} htmlFor="id">
              ID
              <div className={Styles.inputContainer}>
                <Image className={Styles.icone} src="/images/indentidade.png" width={24} height={24} alt="Edit Icon" />
                <input className={Styles.input} type="text" id="id" placeholder="Digite seu ID:" required />
              </div>
            </label>

            <label className={Styles.label} htmlFor="cpf">
              CPF
              <div className={Styles.inputContainer}>
                <Image className={Styles.icone} src="/images/cpf.png" width={24} height={24} alt="Identity Icon" />
                <input className={Styles.input} type="text" id="cpf" placeholder="Digite seu CPF:" required />
              </div>
            </label>

            <label className={Styles.label} htmlFor="conta">
              Conta Bancária
              <div className={Styles.inputContainer}>
                <Image className={Styles.icone} src="/images/cartao.png" width={24} height={20} alt="Bank Icon" />
                <input className={Styles.input} type="text" id="conta" placeholder="Digite sua Conta Bancária:" required />
              </div>
            </label>

            <div className={Styles.botoes}>
              <button className={Styles.botao} type="reset">
                <Link href='/area'>Cancelar</Link>
                
              </button>
              <button className={Styles.botao} type="submit">
                <Link href='/pedido'>Confirmar</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
}

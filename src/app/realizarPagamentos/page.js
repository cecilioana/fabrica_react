import styles from './realizarPamento.module.css';
import Image from 'next/image';

export default function Pagamento() {
  

  return (
    <main>
      <div>
        <div className={styles.pagamento}>
          <h1 className={styles.titulo}>Realizar Pagamento</h1>
          <form className={styles.formulario} action="" method="post">
            <label className={styles.label} htmlFor="nome">
              Nome
              <div className={styles.inputContainer}>
                <Image className={styles.icone} src="/images/iconuser.png" width={24} height={24} alt="User Icon" />
                <input className={styles.input} type="text" id="nome" placeholder="Digite seu texto:" required />
              </div>
            </label>

            <label className={styles.label} htmlFor="id">
              ID
              <div className={styles.inputContainer}>
                <Image className={styles.icone} src="/images/Edit Property.png" width={24} height={24} alt="Edit Icon" />
                <input className={styles.input} type="text" id="id" placeholder="Digite seu id:" required />
              </div>
            </label>

            <label className={styles.label} htmlFor="cpf">
              CPF
              <div className={styles.inputContainer}>
                <Image className={styles.icone} src="/images/IdentityTheft.png" width={24} height={24} alt="Identity Icon" />
                <input className={styles.input} type="text" id="cpf" placeholder="Digite seu CPF:" required />
              </div>
            </label>

            <label className={styles.label} htmlFor="conta">
              Conta Bancária
              <div className={styles.inputContainer}>
                <Image className={styles.icone} src="/images/Group (2).png" width={24} height={24} alt="Bank Icon" />
                <input className={styles.input} type="text" id="conta" placeholder="Digite sua Conta Bancária:" required />
              </div>
            </label>

            <div className={styles.botoes}>
              <button className={styles.botao} type="reset">
                Cancelar
              </button>
              <button className={styles.botao} type="submit">
                <a href="/">Confirmar</a>
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

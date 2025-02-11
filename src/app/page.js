import Link from "next/link"

export default function home(){
  return(
    <main>
      <h1>oir</h1>
      <Link href="./eventos">eventos</Link>
      <br></br>
      <Link href="./realizarPagamentos">pagamento</Link>
      <br></br>
      <Link href="./emitirRelatorio">relatório</Link>
    </main>
  )
}
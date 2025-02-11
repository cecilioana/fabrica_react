import "./globals.css";
import Header from '../componentes/Header'
import Footer from '../componentes/Footer'

export const metadata = {
  title: "Tela de pagamento e eventos",
  description: "tela de pagamento para funcionários e eventos",
  author : "Ana Paula",
};

export default function RootLayout({ children }){
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}

import "./globals.css";


export const metadata = {
  title: "Tela de pagamento e eventos",
  description: "tela de pagamento para funcionários e eventos",
  author : "Ana Paula",
};

export default function RootLayout({ children }){
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

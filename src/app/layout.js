import "./globals.css";


export const metadata = {
  title: "Sweet Candy",
  charset: 'UTF-8',
  description: "Cupcakeria",
  author : "Ana Gabriely, Ana Paula, Isabella, Leticia , Priscila, Thamylla",
  keywords: 'Doce, Cupcake, Loja',
};

export default function RootLayout({ children }){
  return (
    <html lang="en">
      <head>
        <link rel="icon" href= "./images/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

// src/app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Asegúrate de que las rutas relativas coincidan con tu estructura de carpetas
import Header from "./components/header"; 
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Libros Para Ti - Tu Librería Online de Confianza",
  description: "Descubre tu próxima lectura en Libros Para Ti, la librería online que ofrece una amplia selección de libros para todos los gustos. Desde novelas hasta libros de autoayuda, encuentra el libro perfecto para ti con envío rápido y seguro.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es" // Cambiado a 'es' ya que tu sitio está en español
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">
        <Header />
        {/* Usamos flex-grow en main para que el footer siempre quede abajo si no hay mucho contenido */}
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
// src/components/Footer.js
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#1e2336] text-gray-300 py-12 mt-auto font-sans w-full">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* Columna 1: Logo y Descripción */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <div className="bg-yellow-500 text-[#1e2336] p-2 rounded-full font-serif font-bold text-xl h-12 w-12 flex items-center justify-center">
              LP
            </div>
            <span className="font-serif font-bold text-xl leading-tight text-white">
              Libros<br/>Para Ti
            </span>
          </Link>
          <p className="text-sm text-gray-400 mt-2 max-w-[250px] mx-auto md:mx-0 leading-relaxed">
            Descubre tu próxima aventura literaria en nuestra librería online. Grandes historias para nuevas perspectivas.
          </p>
        </div>

        {/* Columna 2: Enlaces de Navegación */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <h3 className="text-white font-bold mb-2 text-lg">Explorar</h3>
          <Link href="/" className="hover:text-yellow-500 transition text-sm">Inicio</Link>
          <Link href="/catalogo" className="hover:text-yellow-500 transition text-sm">Catálogo</Link>
          <Link href="/explorar" className="hover:text-yellow-500 transition text-sm">Explorar (Novedades y Géneros)</Link>
          <Link href="/colecciones" className="hover:text-yellow-500 transition text-sm">Colecciones</Link>
          <Link href="/nosotros" className="hover:text-yellow-500 transition text-sm">Acerca de nosotros</Link>
        </div>

        {/* Columna 3: Ayuda y Contacto */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <h3 className="text-white font-bold mb-2 text-lg">Atención al Cliente</h3>
          <Link href="#" className="hover:text-yellow-500 transition text-sm">Preguntas frecuentes</Link>
          <Link href="#" className="hover:text-yellow-500 transition text-sm">Envíos y devoluciones</Link>
          <Link href="#" className="hover:text-yellow-500 transition text-sm">Términos y condiciones</Link>
          <Link href="#" className="hover:text-yellow-500 transition text-sm">Aviso de privacidad</Link>
        </div>
        
      </div>

      {/* Copyright y Detalles Finales */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 mt-12 pt-8 border-t border-gray-700/50 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Libros Para Ti. Todos los derechos reservados.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500 font-medium">
          <span>Pagos 100% seguros</span>
          <span className="hidden md:inline text-gray-700">•</span>
          <span>Envíos a todo el país</span>
        </div>
      </div>
    </footer>
  )
}
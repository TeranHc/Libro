'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, User, ShoppingCart, Menu, X } from 'lucide-react'

export default function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  return (
    <nav className="flex items-center justify-between px-4 md:px-8 py-4 border-b border-gray-100 bg-white font-sans">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 cursor-pointer z-50">
        <div className="bg-[#1e2336] text-yellow-500 p-2 rounded-full font-serif font-bold text-xl h-10 w-10 md:h-12 md:w-12 flex items-center justify-center">
          LP
        </div>
        <span className="font-serif font-bold text-lg md:text-xl leading-tight text-[#1e2336]">
          Libros<br/>Para Ti
        </span>
      </Link>

      {/* Enlaces de Navegación (Escritorio) */}
      <div className="hidden md:flex gap-6 font-medium text-sm text-gray-700">
        <Link href="/" className="hover:text-black transition">Inicio</Link>
        <Link href="/catalogo" className="hover:text-black transition">Catálogo</Link>
        <Link href="/explorar" className="hover:text-black transition">Explorar</Link>
        <Link href="/colecciones" className="hover:text-black transition">Colecciones</Link>
        <Link href="/nosotros" className="hover:text-black transition">Acerca de nosotros</Link>
      </div>

      {/* Acciones y Menú Hamburguesa */}
      <div className="flex items-center gap-3 md:gap-4">
        {/* Buscador (Oculto en móvil muy pequeño, visible en desktop) */}
        <div className="relative hidden lg:block">
          <input 
            type="text" 
            placeholder="Buscar..." 
            className="pl-4 pr-10 py-2 border rounded-full text-sm bg-gray-50 focus:outline-none focus:ring-1 focus:ring-[#ffb020] w-48 lg:w-64"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>

        <button className="text-gray-600 hover:text-black"><User size={22} /></button>
        <div className="relative">
          <button className="text-gray-600 hover:text-black"><ShoppingCart size={22} /></button>
          <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">0</span>
        </div>

        {/* Botón Hamburguesa */}
        <button className="md:hidden text-gray-700 z-50" onClick={() => setMenuAbierto(!menuAbierto)}>
          {menuAbierto ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú Móvil Desplegable */}
      {menuAbierto && (
        <div className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-8 text-lg font-medium md:hidden z-40">
          <Link href="/" onClick={() => setMenuAbierto(false)}>Inicio</Link>
          <Link href="/catalogo" onClick={() => setMenuAbierto(false)}>Catálogo</Link>
          <Link href="/explorar" onClick={() => setMenuAbierto(false)}>Explorar</Link>
          <Link href="/colecciones" onClick={() => setMenuAbierto(false)}>Colecciones</Link>
          <Link href="/nosotros" onClick={() => setMenuAbierto(false)}>Acerca de nosotros</Link>
        </div>
      )}
    </nav>
  )
}
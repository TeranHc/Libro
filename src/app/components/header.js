// src/app/components/header.js
'use client'

import Link from 'next/link' // Importamos el componente Link de Next.js
import { Search, User, ShoppingCart } from 'lucide-react'

export default function Header() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-100 bg-white font-sans">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 cursor-pointer">
        <div className="bg-[#1e2336] text-yellow-500 p-2 rounded-full font-serif font-bold text-xl h-12 w-12 flex items-center justify-center">
          LP
        </div>
        <span className="font-serif font-bold text-xl leading-tight text-[#1e2336]">
          Libros<br/>Para Ti
        </span>
      </Link>

      {/* Enlaces de Navegación */}
      <div className="hidden md:flex gap-6 font-medium text-sm text-gray-700">
        <Link href="/" className="hover:text-black transition">
          Inicio
        </Link>
        {/* Cambiamos <a> por <Link> y actualizamos el href */}
        <Link href="/catalogo" className="hover:text-black transition">
          Catálogo
        </Link>
        <Link href="/explorar" className="hover:text-black transition">
          Explorar
        </Link>
        <Link href="/colecciones" className="hover:text-black transition">
          Colecciones
        </Link>
        <Link href="/nosotros" className="hover:text-black transition">
          Acerca de nosotros
        </Link>
      </div>

      {/* Buscador e Iconos */}
      <div className="flex items-center gap-4">
        <div className="relative hidden lg:block">
          <input 
            type="text" 
            placeholder="Buscar libros..." 
            className="pl-4 pr-10 py-2 border rounded-full text-sm bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-300 w-64"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>
        <button className="text-gray-600 hover:text-black"><User size={24} /></button>
        <div className="relative">
          <button className="text-gray-600 hover:text-black"><ShoppingCart size={24} /></button>
          <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
            0
          </span>
        </div>
      </div>
    </nav>
  )
}
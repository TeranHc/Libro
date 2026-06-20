'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, User, ShoppingCart, Menu, X } from 'lucide-react'

export default function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  return (
    <nav className="relative flex items-center justify-between px-4 md:px-8 py-4 border-b border-gray-100 bg-white font-sans">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <div className="bg-[#1e2336] text-yellow-500 rounded-full font-serif font-bold text-lg h-10 w-10 flex items-center justify-center">
          LP
        </div>

        <span className="font-serif font-bold text-sm md:text-xl leading-tight text-[#1e2336]">
          Libros
          <br />
          Para Ti
        </span>
      </Link>

      {/* Menú escritorio */}
      <div className="hidden md:flex gap-6 font-medium text-sm text-gray-700">
        <Link href="/" className="hover:text-black transition">
          Inicio
        </Link>

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

      {/* Acciones */}
      <div className="flex items-center gap-3 md:gap-4">
        {/* Buscador desktop */}
        <div className="relative hidden lg:block">
          <input
            type="text"
            placeholder="Buscar..."
            className="pl-4 pr-10 py-2 border rounded-full text-sm bg-gray-50 focus:outline-none focus:ring-1 focus:ring-[#ffb020] w-64"
          />
          <Search
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
        </div>

        {/* Usuario */}
        <button className="text-gray-600 hover:text-black transition">
          <User size={22} />
        </button>

        {/* Carrito */}
        <div className="relative">
          <button className="text-gray-600 hover:text-black transition">
            <ShoppingCart size={22} />
          </button>

          <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
            0
          </span>
        </div>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden text-[#1e2336]"
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label="Abrir menú"
        >
          {menuAbierto ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú móvil */}
      {menuAbierto && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-lg md:hidden z-50">
          <div className="flex flex-col">
            <Link
              href="/"
              onClick={() => setMenuAbierto(false)}
              className="px-6 py-4 text-[#1e2336] font-medium hover:bg-gray-100 transition"
            >
              Inicio
            </Link>

            <Link
              href="/catalogo"
              onClick={() => setMenuAbierto(false)}
              className="px-6 py-4 text-[#1e2336] font-medium hover:bg-gray-100 transition"
            >
              Catálogo
            </Link>

            <Link
              href="/explorar"
              onClick={() => setMenuAbierto(false)}
              className="px-6 py-4 text-[#1e2336] font-medium hover:bg-gray-100 transition"
            >
              Explorar
            </Link>

            <Link
              href="/colecciones"
              onClick={() => setMenuAbierto(false)}
              className="px-6 py-4 text-[#1e2336] font-medium hover:bg-gray-100 transition"
            >
              Colecciones
            </Link>

            <Link
              href="/nosotros"
              onClick={() => setMenuAbierto(false)}
              className="px-6 py-4 text-[#1e2336] font-medium hover:bg-gray-100 transition"
            >
              Acerca de nosotros
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
// src/app/catalogo/page.js
'use client'

import { useState } from 'react'
import { 
  ShoppingCart, 
  ChevronDown, 
  ChevronUp,
  RotateCcw,
  LayoutGrid,
  List,
  ChevronLeft,
  ChevronRight,
  Filter,
  Search // <- Importado para la barra de búsqueda
} from 'lucide-react'

export default function CatalogoPage() {
  // --- ESTADOS PARA LA UI ---
  const [categoriasAbiertas, setCategoriasAbiertas] = useState(true)
  const [generosAbiertos, setGenerosAbiertos] = useState(true)
  const [filtrosVisibles, setFiltrosVisibles] = useState(false) 

  // --- DATOS DE PRUEBA (Fieles a la imagen) ---
  const categorias = ['Novelas', 'Fantasía', 'Crecimiento personal', 'Historia', 'Ciencia', 'Infantil', 'Poesía', 'Negocios']
  const generos = ['Ficción', 'No ficción', 'Aventura', 'Romance', 'Ciencia ficción', 'Histórico', 'Biografía']
  
  const libros = [
    { id: 1, titulo: 'El Alquimista', autor: 'Paulo Coelho', precio: 299.00 },
    { id: 2, titulo: 'Hábitos Atómicos', autor: 'James Clear', precio: 349.00 },
    { id: 3, titulo: 'Una corte de rosas y espinas', autor: 'Sarah J. Maas', precio: 399.00 },
    { id: 4, titulo: 'Sapiens', autor: 'Yuval Noah Harari', precio: 369.00 },
    { id: 5, titulo: 'El Principito', autor: 'Antoine de Saint-Exupéry', precio: 259.00 },
    { id: 6, titulo: 'Ikigai', autor: 'Héctor García & Francesc Miralles', precio: 289.00 },
    { id: 7, titulo: '1984', autor: 'George Orwell', precio: 299.00 },
    { id: 8, titulo: 'Orgullo y Prejuicio', autor: 'Jane Austen', precio: 279.00 },
    { id: 9, titulo: 'Los pilares de la tierra', autor: 'Ken Follett', precio: 399.00 },
    { id: 10, titulo: 'El poder del ahora', autor: 'Eckhart Tolle', precio: 319.00 },
    { id: 11, titulo: 'El club de los 5 de la mañana', autor: 'Robin Sharma', precio: 299.00 },
    { id: 12, titulo: 'Cómo hacer que te pasen cosas buenas', autor: 'Marian Rojas Estapé', precio: 319.00 },
  ]

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-[#1e2336]">
    
      {/* --- CABECERA DE PÁGINA (Título y Breadcrumbs) --- */}
      <div className="bg-white px-4 sm:px-8 py-6 flex flex-col sm:flex-row sm:items-end justify-between border-b border-gray-100 mb-6 sm:mb-8 gap-3">
        <h1 className="text-3xl sm:text-4xl font-serif text-[#1e2336]">Catálogo</h1>
        <div className="text-xs sm:text-sm text-gray-500 flex items-center gap-2">
          <span className="hover:text-gray-900 cursor-pointer">Inicio</span>
          <span>›</span>
          <span className="text-gray-900 font-medium">Catálogo</span>
        </div>
      </div>

      {/* --- CONTENEDOR PRINCIPAL --- */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 pb-20 flex flex-col lg:flex-row gap-6 lg:gap-12">
        
        {/* --- BOTÓN MOSTRAR FILTROS (Solo visible en Móvil) --- */}
        <button 
          onClick={() => setFiltrosVisibles(!filtrosVisibles)}
          className="lg:hidden flex items-center justify-center gap-2 w-full bg-white border border-gray-200 py-3 rounded-lg font-medium text-sm text-gray-700 shadow-sm hover:bg-gray-50 transition-colors"
        >
          <Filter size={18} />
          {filtrosVisibles ? 'Ocultar filtros' : 'Mostrar filtros'}
        </button>

        {/* --- BARRA LATERAL (Filtros y Búsqueda) --- */}
        <aside className={`w-full lg:w-64 flex-shrink-0 ${filtrosVisibles ? 'block' : 'hidden lg:block'}`}>
          <div className="flex items-center justify-between mb-6 lg:mb-8 bg-white p-4 lg:p-0 rounded-lg lg:bg-transparent shadow-sm lg:shadow-none border lg:border-none border-gray-100">
            <h2 className="font-bold text-lg text-[#1e2336]">Filtrar por</h2>
            <button className="flex items-center gap-1 text-xs text-[#ffb020] font-medium hover:text-yellow-600 transition-colors">
              <RotateCcw size={12} /> Limpiar
            </button>
          </div>

          <div className="bg-white p-5 lg:p-0 rounded-lg lg:bg-transparent shadow-sm lg:shadow-none border lg:border-none border-gray-100">
            
            {/* Barra de Búsqueda */}
            <div className="mb-6 border-b border-gray-100 lg:border-gray-200 pb-6">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Buscar título, autor..." 
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ffb020] text-sm transition-colors text-gray-700"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>

            {/* Categoría */}
            <div className="mb-6 border-b border-gray-100 lg:border-gray-200 pb-6">
              <button 
                onClick={() => setCategoriasAbiertas(!categoriasAbiertas)}
                className="flex justify-between items-center w-full font-semibold text-sm mb-4"
              >
                Categoría
                {categoriasAbiertas ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {categoriasAbiertas && (
                <ul className="space-y-3">
                  {categorias.map(cat => (
                    <li key={cat} className="flex items-center gap-3">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#ffb020] focus:ring-[#ffb020]" />
                      <label className="text-sm text-gray-600 cursor-pointer hover:text-gray-900 transition-colors">{cat}</label>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Género */}
            <div className="mb-6 border-b border-gray-100 lg:border-gray-200 pb-6">
              <button 
                onClick={() => setGenerosAbiertos(!generosAbiertos)}
                className="flex justify-between items-center w-full font-semibold text-sm mb-4"
              >
                Género
                {generosAbiertos ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {generosAbiertos && (
                <ul className="space-y-3">
                  {generos.map(gen => (
                    <li key={gen} className="flex items-center gap-3">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#ffb020] focus:ring-[#ffb020]" />
                      <label className="text-sm text-gray-600 cursor-pointer hover:text-gray-900 transition-colors">{gen}</label>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Rango de Precio */}
            <div>
              <h3 className="font-semibold text-sm mb-4">Rango de precio</h3>
              <div className="relative pt-2">
                <input 
                  type="range" 
                  className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#ffb020]" 
                  min="0" max="1500" defaultValue="1500" 
                />
              </div>
              <div className="flex justify-between text-xs text-gray-600 mt-3 font-medium">
                <span>$0</span>
                <span>$1,500+</span>
              </div>
            </div>
          </div>
        </aside>

        {/* --- ÁREA DE PRODUCTOS --- */}
        <main className="flex-1 w-full">
          
          {/* Barra de herramientas */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4">
            <p className="text-xs sm:text-sm text-gray-600 font-medium">
              Mostrando 1–24 de 356 libros
            </p>
            
            <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <div className="flex-1 sm:flex-none flex items-center justify-between gap-2 text-xs sm:text-sm border border-gray-200 rounded-md px-3 py-2 bg-white cursor-pointer hover:border-gray-300 transition-colors">
                <span className="text-gray-500 hidden sm:inline">Ordenar por:</span>
                <span className="font-medium text-[#1e2336]">Más vendidos</span>
                <ChevronDown size={16} className="text-gray-500 sm:ml-2" />
              </div>

              <div className="flex items-center border border-gray-200 rounded-md bg-white overflow-hidden flex-shrink-0">
                <button className="p-2 text-gray-400 hover:text-[#1e2336] bg-gray-50 border-r border-gray-200 transition-colors">
                  <LayoutGrid size={18} />
                </button>
                <button className="p-2 text-gray-400 hover:text-[#1e2336] transition-colors">
                  <List size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Grid de Libros */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-x-4 sm:gap-x-6 gap-y-8 sm:gap-y-10">
            {libros.map((libro) => (
              <div key={libro.id} className="group flex flex-col h-full cursor-pointer bg-white p-3 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                
                {/* Portada del libro */}
                <div className="w-full aspect-[2/3] bg-[#2a2d34] rounded-md mb-4 shadow-sm group-hover:shadow transition-shadow flex items-center justify-center p-4 text-center overflow-hidden relative">
                   <span className="text-white/60 text-xs font-serif leading-tight z-10">{libro.titulo}</span>
                   {/* Capa de brillo sutil en hover */}
                   <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                
                {/* Información del libro */}
                <div className="flex flex-col flex-grow">
                  <h3 className="font-bold text-[#1e2336] text-sm leading-tight mb-1 group-hover:text-yellow-600 transition-colors line-clamp-2">{libro.titulo}</h3>
                  <p className="text-gray-500 text-xs mb-3 truncate">{libro.autor}</p>
                  
                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-50">
                    <span className="font-bold text-[#1e2336] text-sm sm:text-base">${libro.precio.toFixed(2)}</span>
                    <button className="bg-gray-50 hover:bg-[#ffb020] text-[#1e2336] hover:text-white p-2 rounded-lg transition-colors shadow-sm" title="Agregar al carrito">
                      <ShoppingCart size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Paginación */}
          <div className="flex justify-center items-center gap-1 sm:gap-2 mt-12 sm:mt-16 flex-wrap">
            <button className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full text-gray-400 border border-gray-200 hover:bg-white hover:text-gray-600 hover:border-gray-300 transition-all">
              <ChevronLeft size={16} />
            </button>
            
            <button className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-[#ffb020] text-white font-medium text-sm shadow-sm">1</button>
            <button className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full text-gray-600 hover:bg-white border border-transparent hover:border-gray-200 font-medium text-sm transition-all">2</button>
            <button className="hidden sm:flex w-10 h-10 items-center justify-center rounded-full text-gray-600 hover:bg-white border border-transparent hover:border-gray-200 font-medium text-sm transition-all">3</button>
            <button className="hidden md:flex w-10 h-10 items-center justify-center rounded-full text-gray-600 hover:bg-white border border-transparent hover:border-gray-200 font-medium text-sm transition-all">4</button>
            
            <span className="text-gray-400 mx-1">...</span>
            
            <button className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full text-gray-600 hover:bg-white border border-transparent hover:border-gray-200 font-medium text-sm transition-all">15</button>

            <button className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full text-gray-600 border border-gray-200 hover:bg-white hover:border-gray-300 transition-all">
              <ChevronRight size={16} />
            </button>
          </div>

        </main>
      </div>
    </div>
  )
}
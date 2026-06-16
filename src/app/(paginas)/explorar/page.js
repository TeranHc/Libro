// src/app/explorar/page.js
'use client'

import { 
  Truck,
  BookHeart,
  Swords,
  Rocket,
  Compass,
  Landmark,
  BrainCircuit,
  Baby,
  Briefcase,
  ChevronRight,
  ShoppingCart, 
  Sparkles, 
  ArrowRight,
  Star
} from 'lucide-react'

export default function ExplorarPage() {
  // --- DATOS DE PRUEBA: Géneros ---
  const listaGeneros = [
    { id: 1, nombre: 'Romance', desc: 'Historias de amor, pasión y relaciones inolvidables.', icono: <BookHeart size={32} />, color: 'bg-rose-50 text-rose-600', hover: 'hover:border-rose-300' },
    { id: 2, nombre: 'Fantasía', desc: 'Magia, criaturas míticas y mundos completamente nuevos.', icono: <Swords size={32} />, color: 'bg-indigo-50 text-indigo-600', hover: 'hover:border-indigo-300' },
    { id: 3, nombre: 'Ciencia Ficción', desc: 'El futuro, viajes espaciales y tecnología avanzada.', icono: <Rocket size={32} />, color: 'bg-cyan-50 text-cyan-600', hover: 'hover:border-cyan-300' },
    { id: 4, nombre: 'Aventura', desc: 'Viajes épicos, misterios y acción sin descanso.', icono: <Compass size={32} />, color: 'bg-emerald-50 text-emerald-600', hover: 'hover:border-emerald-300' },
    { id: 5, nombre: 'Novela Histórica', desc: 'Revive los eventos y épocas que marcaron a la humanidad.', icono: <Landmark size={32} />, color: 'bg-amber-50 text-amber-700', hover: 'hover:border-amber-300' },
    { id: 6, nombre: 'Crecimiento Personal', desc: 'Herramientas y reflexiones para mejorar tu vida diaria.', icono: <BrainCircuit size={32} />, color: 'bg-yellow-50 text-yellow-600', hover: 'hover:border-yellow-400' },
    { id: 7, nombre: 'Infantil y Juvenil', desc: 'Las primeras lecturas que formarán a los lectores del mañana.', icono: <Baby size={32} />, color: 'bg-sky-50 text-sky-500', hover: 'hover:border-sky-300' },
    { id: 8, nombre: 'Negocios', desc: 'Finanzas, liderazgo y estrategias para el éxito profesional.', icono: <Briefcase size={32} />, color: 'bg-slate-100 text-slate-700', hover: 'hover:border-slate-400' },
  ]

  // --- DATOS DE PRUEBA: Últimos lanzamientos ---
  const librosNuevos = [
    { id: 101, titulo: 'Alas de Sangre', autor: 'Rebecca Yarros', precio: 450.00, rating: 5.0 },
    { id: 102, titulo: 'La Armadura de la Luz', autor: 'Ken Follett', precio: 520.00, rating: 4.8 },
    { id: 103, titulo: 'El Problema Final', autor: 'Arturo Pérez-Reverte', precio: 380.00, rating: 4.7 },
    { id: 104, titulo: 'Lecciones de Química', autor: 'Bonnie Garmus', precio: 340.00, rating: 4.9 },
    { id: 105, titulo: 'La Vencedora', autor: 'Shirley Jackson', precio: 299.00, rating: 4.6 },
    { id: 106, titulo: 'Hábitos Atómicos (Ed. Especial)', autor: 'James Clear', precio: 410.00, rating: 5.0 },
    { id: 107, titulo: 'Holly', autor: 'Stephen King', precio: 460.00, rating: 4.8 },
    { id: 108, titulo: 'El Cuco de Cristal', autor: 'Javier Castillo', precio: 350.00, rating: 4.7 },
  ]

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-[#1e2336]">

      {/* --- CONTENEDOR PRINCIPAL --- */}
      <main className="max-w-[1400px] mx-auto px-4 sm:px-8 py-8 md:py-12 space-y-16 md:space-y-24 pb-16 md:pb-20">
        
        {/* =========================================
            SECCIÓN 1: GÉNEROS
        ========================================= */}
        <section>
          <div className="flex flex-col items-center justify-center mb-8 sm:mb-10 text-center">
            <div className="text-xs sm:text-sm text-gray-500 flex items-center gap-2 mb-3 sm:mb-4">
              <span className="hover:text-gray-900 cursor-pointer">Inicio</span>
              <span>›</span>
              <span className="text-gray-900 font-medium">Explorar</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1e2336] mb-3 sm:mb-4 px-2">Explora por Géneros</h1>
            <p className="text-gray-500 text-sm sm:text-base max-w-xl px-4">
              ¿No sabes qué leer a continuación? Navega por nuestras categorías temáticas y encuentra tu próxima gran historia.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {listaGeneros.map((genero) => (
              <div 
                key={genero.id} 
                className={`bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-sm transition-all duration-300 cursor-pointer group flex flex-col h-full ${genero.hover}`}
              >
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6 transition-transform group-hover:scale-110 duration-300 flex-shrink-0 ${genero.color}`}>
                  {genero.icono}
                </div>
                
                <h2 className="text-lg sm:text-xl font-bold text-[#1e2336] mb-2">{genero.nombre}</h2>
                <p className="text-gray-500 text-xs sm:text-sm flex-grow mb-5 sm:mb-6">{genero.desc}</p>
                
                <div className="mt-auto flex items-center text-[#ffb020] font-medium text-xs sm:text-sm group-hover:text-yellow-600 transition-colors">
                  Ver libros <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Separador Visual */}
        <hr className="border-gray-200" />

        {/* =========================================
            SECCIÓN 2: NOVEDADES
        ========================================= */}
        <section>
          <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between mb-8 sm:mb-10 gap-4 text-center sm:text-left">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#1e2336] flex items-center justify-center sm:justify-start gap-2 sm:gap-3">
                Novedades <Sparkles className="text-[#ffb020]" size={24} />
              </h2>
              <p className="text-gray-500 text-sm mt-2 px-4 sm:px-0">Los títulos más recientes que acaban de llegar a nuestras estanterías.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {librosNuevos.map((libro) => (
              <div key={libro.id} className="bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-gray-100 hover:shadow-xl transition-all group flex flex-col relative cursor-pointer w-full max-w-[280px] sm:max-w-none mx-auto">
                
                {/* Etiqueta de Nuevo */}
                <div className="absolute top-3 left-3 bg-[#ffb020] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md z-10 shadow-sm">
                  Nuevo
                </div>

                {/* Portada Placeholder */}
                <div className="w-full aspect-[2/3] bg-[#2a2d34] rounded-md mb-4 sm:mb-5 flex items-center justify-center text-xs text-white/50 text-center px-4 relative overflow-hidden">
                  <span className="font-serif leading-tight z-10">{libro.titulo}</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="flex flex-col flex-grow">
                  <h3 className="font-bold text-[#1e2336] text-sm sm:text-base leading-tight mb-1 group-hover:text-[#ffb020] transition-colors line-clamp-2">{libro.titulo}</h3>
                  <p className="text-gray-500 text-xs sm:text-sm mb-3 truncate">{libro.autor}</p>
                  
                  <div className="flex items-center gap-1 mb-3 sm:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className={i < Math.floor(libro.rating) ? "text-yellow-400 fill-current" : "text-gray-300"} />
                    ))}
                    <span className="text-xs text-gray-400 ml-1 font-medium">({libro.rating})</span>
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-3 sm:pt-4 border-t border-gray-50">
                    <span className="font-bold text-base sm:text-lg text-[#1e2336]">${libro.precio.toFixed(2)}</span>
                    <button className="bg-gray-50 hover:bg-[#ffb020] hover:text-white text-[#1e2336] p-2 sm:p-2.5 rounded-lg transition-colors shadow-sm" title="Agregar al carrito">
                      <ShoppingCart size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Inferior */}
          <div className="mt-12 sm:mt-16 bg-[#1e2336] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-white shadow-lg text-center md:text-left">
            <div>
              <h3 className="text-xl sm:text-2xl font-serif mb-2">¿Buscas algo más específico?</h3>
              <p className="text-gray-400 text-xs sm:text-sm">Explora nuestro catálogo completo con miles de historias esperando por ti.</p>
            </div>
            <button className="bg-[#ffb020] hover:bg-yellow-500 text-white font-medium px-6 py-3 rounded-full transition flex items-center justify-center gap-2 whitespace-nowrap w-full md:w-auto">
              Ver todo el catálogo <ArrowRight size={18} />
            </button>
          </div>
        </section>

      </main>
    </div>
  )
}
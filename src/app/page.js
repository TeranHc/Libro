// src/app/page.js
'use client'

import { 
  ShoppingCart, 
  Truck, 
  ShieldCheck, 
  Award, 
  Package, 
  ArrowRight, 
  Star 
} from 'lucide-react'

export default function HomeLibreria() {
  // --- MOCK DATA (Datos de prueba para renderizar las secciones) ---
  
  const categorias = [
    { nombre: 'Novelas', icono: '🌿' },
    { nombre: 'Fantasía', icono: '🏰' },
    { nombre: 'Crecimiento personal', icono: '☀️' },
    { nombre: 'Historia', icono: '🏛️' },
    { nombre: 'Ciencia', icono: '🪐' },
    { nombre: 'Infantil', icono: '🎈' },
    { nombre: 'Poesía', icono: '🪶' },
    { nombre: 'Negocios', icono: '💼' },
  ]

  const librosDestacados = [
    { id: 1, titulo: 'El Alquimista', autor: 'Paulo Coelho', precio: 299.00, rating: 4.9 },
    { id: 2, titulo: 'Hábitos Atómicos', autor: 'James Clear', precio: 349.00, rating: 4.8 },
    { id: 3, titulo: 'Una corte de rosas y espinas', autor: 'Sarah J. Maas', precio: 399.00, rating: 4.9 },
    { id: 4, titulo: 'Sapiens', autor: 'Yuval Noah Harari', precio: 369.00, rating: 4.8 },
    { id: 5, titulo: 'El Principito', autor: 'Antoine de Saint-Exupéry', precio: 259.00, rating: 4.9 },
  ]

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      
      {/* --- HERO SECTION --- */}
      <section className="bg-[#FBF8F1] py-12 md:py-16 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-16 flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
          
          {/* Textos Hero */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 space-y-5 md:space-y-6 z-10 relative text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#1e2336] leading-tight">
              Grandes historias, <br />
              <span className="text-yellow-500">para nuevas</span> <br />
              perspectivas.
            </h1>
            <p className="text-gray-600 max-w-md mx-auto md:mx-0 text-base md:text-lg">
              Descubre nuestra selección cuidadosamente elegida y encuentra el libro que estás buscando.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-full flex items-center transition shadow-lg w-max mx-auto md:mx-0">
              <ShoppingCart className="mr-2" size={20} />
              Explorar catálogo
            </button>
          </div>

          {/* Imagen representativa */}
          <div className="w-full md:w-1/2 relative flex justify-center items-center mt-6 md:mt-0">
            <div className="absolute bg-[#F0E6D8] rounded-full h-[280px] w-[280px] sm:h-[350px] sm:w-[350px] md:h-[450px] md:w-[450px] -z-10"></div>
            <div className="h-[250px] sm:h-[300px] md:h-[350px] w-full max-w-xs sm:max-w-md bg-gray-300 rounded-xl shadow-2xl flex items-center justify-center text-gray-500 italic text-sm text-center px-4">
              [Imagen de estantería de libros y lámpara]
            </div>
          </div>

        </div>
      </section>

      {/* --- BANNER DE BENEFICIOS --- */}
      <section className="bg-[#1e2336] text-white py-8 md:py-6">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm md:text-base">
          <div className="flex items-center gap-4 sm:justify-start">
            <Truck className="text-gray-300 flex-shrink-0" size={28} />
            <div>
              <p className="font-semibold">Envíos a todo el país</p>
              <p className="text-gray-400 text-xs mt-0.5">Rápidos y seguros</p>
            </div>
          </div>
          <div className="flex items-center gap-4 sm:justify-start">
            <ShieldCheck className="text-gray-300 flex-shrink-0" size={28} />
            <div>
              <p className="font-semibold">Pagos 100% seguros</p>
              <p className="text-gray-400 text-xs mt-0.5">Compra con confianza</p>
            </div>
          </div>
          <div className="flex items-center gap-4 sm:justify-start">
            <Award className="text-gray-300 flex-shrink-0" size={28} />
            <div>
              <p className="font-semibold">Libros 100% originales</p>
              <p className="text-gray-400 text-xs mt-0.5">Calidad garantizada</p>
            </div>
          </div>
          <div className="flex items-center gap-4 sm:justify-start">
            <Package className="text-gray-300 flex-shrink-0" size={28} />
            <div>
              <p className="font-semibold">Empacamos con cuidado</p>
              <p className="text-gray-400 text-xs mt-0.5">Protegemos tu pedido</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN CATEGORÍAS --- */}
      <section className="py-12 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-16 flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-10">
          
          {/* Izquierda: Título y Textos */}
          <div className="w-full lg:w-1/4 flex-shrink-0 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-serif text-[#1e2336] mb-3 leading-tight">Explora por<br className="hidden lg:block"/> categorías</h2>
            <div className="w-12 h-1 bg-yellow-500 mb-4 rounded-full mx-auto lg:mx-0"></div>
            <p className="text-gray-500 text-sm mb-2 lg:mb-0 max-w-sm mx-auto lg:mx-0">
              Navega entre nuestras temáticas y encuentra tu próxima aventura literaria favorita.
            </p>
          </div>

          {/* Derecha: Scroll de Categorías */}
          <div className="w-full lg:w-3/4 flex gap-4 md:gap-6 overflow-x-auto pb-4 pt-2 scrollbar-hide px-2">
            {categorias.map((cat, index) => (
              <div key={index} className="flex flex-col items-center gap-3 min-w-[90px] sm:min-w-[100px] md:min-w-[110px] cursor-pointer group">
                <div className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-3xl group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300">
                  {cat.icono}
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-700 text-center group-hover:text-yellow-600 transition-colors">{cat.nombre}</span>
              </div>
            ))}
            
            {/* Botón Ver Todas */}
            <div className="flex flex-col items-center justify-start gap-3 min-w-[90px] sm:min-w-[100px] md:min-w-[110px] cursor-pointer group">
              <div className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-yellow-50 border border-yellow-100 flex items-center justify-center group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300">
                 <ArrowRight className="text-yellow-600" size={28} />
              </div>
              <span className="text-xs sm:text-sm font-medium text-yellow-600 text-center mt-1">Ver todas</span>
            </div>
          </div>

        </div>
      </section>

      {/* --- SECCIÓN LOS MÁS VENDIDOS --- */}
      <section className="bg-gray-50/50 py-12 md:py-16 pb-20 md:pb-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-16">
          
          <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between mb-8 sm:mb-10 gap-4">
            <div className="text-center sm:text-left">
              <h2 className="text-3xl md:text-4xl font-serif text-[#1e2336] mb-3">Los más vendidos</h2>
              <div className="w-12 h-1 bg-yellow-500 rounded-full mx-auto sm:mx-0"></div>
            </div>
            <button className="flex items-center text-sm font-semibold text-gray-700 hover:text-yellow-600 transition-colors">
              Ver todo <ArrowRight className="ml-1" size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {librosDestacados.map((libro) => (
              <div key={libro.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col mx-auto w-full max-w-[280px] sm:max-w-none">
                {/* Portada Placeholder */}
                <div className="w-full aspect-[2/3] bg-slate-800 rounded-xl mb-4 flex items-center justify-center text-xs text-white/50 text-center px-4 relative overflow-hidden">
                  <span className="z-10 font-serif leading-tight">{libro.titulo}</span>
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                
                <h3 className="font-bold text-[#1e2336] text-sm md:text-base leading-tight mb-1 truncate group-hover:text-yellow-600 transition-colors" title={libro.titulo}>
                  {libro.titulo}
                </h3>
                <p className="text-gray-500 text-xs mb-3">{libro.autor}</p>
                
                <div className="flex flex-grow items-start">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className={i < Math.floor(libro.rating) ? "text-yellow-400 fill-current" : "text-gray-300"} />
                    ))}
                    <span className="text-xs text-gray-400 ml-1 font-medium">({libro.rating})</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-2 pt-4 border-t border-gray-50">
                  <span className="font-bold text-[#1e2336] text-lg">${libro.precio.toFixed(2)}</span>
                  <button className="bg-gray-50 hover:bg-yellow-500 text-[#1e2336] hover:text-white p-2.5 rounded-lg transition-colors shadow-sm" title="Agregar al carrito">
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  )
}
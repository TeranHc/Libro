// src/app/colecciones/page.js
'use client'

import { 
  Truck,
  Leaf,
  Sparkles,
  LibraryBig,
  Sun,
  Heart,
  Globe,
  ArrowRight,
  Award,
  ShieldCheck,
  Package,
  Headphones,
  Bookmark
} from 'lucide-react'

export default function ColeccionesPage() {
  
  // Datos de las colecciones para renderizarlas de forma limpia
  const colecciones = [
    { 
      id: 1,
      titulo: 'Esenciales de siempre', 
      desc: 'Clásicos que han marcado generaciones y siguen inspirando hoy.', 
      icono: <Leaf size={24} className="text-[#4a5c4e]" />, 
      bg: 'bg-[#F2F6F3]' 
    },
    { 
      id: 2,
      titulo: 'Nuevos favoritos', 
      desc: 'Descubre historias contemporáneas que ya están conquistando lectores.', 
      icono: <Sparkles size={24} className="text-[#a48466]" />, 
      bg: 'bg-[#FCF7F3]' 
    },
    { 
      id: 3,
      titulo: 'Joyas de la literatura', 
      desc: 'Obras maestras de la literatura universal en ediciones seleccionadas.', 
      icono: <LibraryBig size={24} className="text-[#7c82a5]" />, 
      bg: 'bg-[#F3F4FB]' 
    },
    { 
      id: 4,
      titulo: 'Historias que inspiran', 
      desc: 'Libros que motivan, transforman y te acompañan en tu crecimiento personal.', 
      icono: <Sun size={24} className="text-[#c89855]" />, 
      bg: 'bg-[#FEF9ED]' 
    },
    { 
      id: 5,
      titulo: 'Para regalar', 
      desc: 'Selecciones especiales para sorprender a quienes más quieres.', 
      icono: <Heart size={24} className="text-[#c98a8a]" />, 
      bg: 'bg-[#FDF3F3]' 
    },
    { 
      id: 6,
      titulo: 'Mundos de fantasía', 
      desc: 'Viaja a lugares increíbles donde la imaginación no tiene límites.', 
      icono: <Globe size={24} className="text-[#647c94]" />, 
      bg: 'bg-[#F1F5F9]' 
    }
  ]

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-[#1e2336]">

      {/* --- CONTENIDO PRINCIPAL --- */}
      <main className="max-w-[1600px] mx-auto px-4 sm:px-8 py-8 md:py-12 space-y-10 md:space-y-16">
        
        {/* --- SECCIÓN HERO (Banner Colecciones) --- */}
        <section className="bg-white rounded-[1.5rem] md:rounded-[2rem] overflow-hidden flex flex-col lg:flex-row items-stretch border border-gray-100 shadow-sm">
          {/* Texto Izquierda */}
          <div className="w-full lg:w-1/3 p-6 sm:p-8 lg:p-16 flex flex-col justify-center items-center text-center lg:items-start lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-serif text-[#1e2336] mb-4 sm:mb-6">Colecciones</h1>
            <div className="w-12 h-1 bg-[#ffb020] mb-4 sm:mb-6"></div>
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg max-w-md lg:max-w-none">
              Explora nuestras colecciones especiales, seleccionadas para inspirar, emocionar y acompañarte en cada etapa de tu vida.
            </p>
          </div>

          {/* Imagen Derecha (Placeholder interactivo) */}
          <div className="w-full lg:w-2/3 min-h-[250px] sm:min-h-[300px] lg:min-h-[400px] bg-[#E8E1D5] relative flex items-center justify-center border-t lg:border-t-0 lg:border-l border-gray-100 p-6">
             {/* Placeholder para el cuadro y los libros */}
             <div className="text-center bg-black/5 p-6 sm:p-8 rounded-xl border border-black/10 max-w-xs sm:max-w-sm w-full">
               <p className="font-serif text-[#1e2336] text-lg sm:text-xl mb-3 sm:mb-4 italic">"Los libros son puertas a mundos infinitos."</p>
               <span className="text-xs sm:text-sm text-gray-500 font-sans">[Imagen de estantería y decoración]</span>
             </div>
          </div>
        </section>

        {/* --- SECCIÓN GRID DE COLECCIONES --- */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#1e2336] text-center mb-8 sm:mb-12">Nuestras colecciones destacadas</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {colecciones.map((col) => (
              <div key={col.id} className={`${col.bg} rounded-2xl p-6 flex flex-col items-center text-center h-[380px] sm:h-[420px] relative overflow-hidden group cursor-pointer transition-transform hover:-translate-y-1 hover:shadow-lg mx-auto w-full max-w-sm sm:max-w-none`}>
                
                {/* Icono */}
                <div className="bg-white/60 w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm backdrop-blur-sm flex-shrink-0">
                  {col.icono}
                </div>
                
                {/* Textos */}
                <h3 className="font-serif font-bold text-lg text-[#1e2336] mb-2 sm:mb-3 leading-tight">{col.titulo}</h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-6 px-1 sm:px-2">{col.desc}</p>
                
                {/* Imagen Placeholder de la colección */}
                <div className="w-full flex-grow bg-black/10 rounded-lg mt-auto flex items-center justify-center text-[10px] text-gray-500 mb-10 overflow-hidden">
                  [Imagen de {col.titulo}]
                </div>

                {/* Botón Flotante */}
                <button className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white text-[#1e2336] font-medium text-xs px-5 py-2.5 rounded-full shadow-md flex items-center justify-center gap-2 group-hover:bg-[#1e2336] group-hover:text-white transition-colors w-max">
                  Ver colección <ArrowRight size={14} />
                </button>

              </div>
            ))}
          </div>
        </section>

        {/* --- BARRA DE BENEFICIOS HORIZONTAL --- */}
        <section className="py-8 sm:py-10 border-t border-gray-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="flex items-center gap-4">
              <Award size={36} className="text-[#1e2336] flex-shrink-0" strokeWidth={1.5} />
              <div>
                <h4 className="font-bold text-sm text-[#1e2336]">Selección curada</h4>
                <p className="text-xs text-gray-500 mt-0.5">Elegimos cada libro con cuidado y pasión.</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <ShieldCheck size={36} className="text-[#1e2336] flex-shrink-0" strokeWidth={1.5} />
              <div>
                <h4 className="font-bold text-sm text-[#1e2336]">Calidad garantizada</h4>
                <p className="text-xs text-gray-500 mt-0.5">Libros 100% originales y en excelentes condiciones.</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Package size={36} className="text-[#1e2336] flex-shrink-0" strokeWidth={1.5} />
              <div>
                <h4 className="font-bold text-sm text-[#1e2336]">Envíos seguros</h4>
                <p className="text-xs text-gray-500 mt-0.5">Empaques resistentes para que tu libro llegue perfecto.</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Headphones size={36} className="text-[#1e2336] flex-shrink-0" strokeWidth={1.5} />
              <div>
                <h4 className="font-bold text-sm text-[#1e2336]">Atención personalizada</h4>
                <p className="text-xs text-gray-500 mt-0.5">Estamos aquí para ayudarte a encontrar tu próximo libro favorito.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- BANNER INFERIOR (CTA) --- */}
        <section className="bg-[#37493A] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md mb-8">
          <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4 text-white">
            <div className="bg-white/10 p-3 rounded-lg border border-white/20 flex-shrink-0">
              <Bookmark size={24} className="text-[#ffb020]" />
            </div>
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold mb-1">¿No sabes por dónde empezar?</h3>
              <p className="text-xs sm:text-sm text-gray-300">Déjanos recomendarte la colección perfecta para ti.</p>
            </div>
          </div>
          
          <button className="bg-white hover:bg-gray-50 text-[#37493A] font-semibold text-sm px-6 sm:px-8 py-3 rounded-md transition shadow-sm flex items-center justify-center gap-2 whitespace-nowrap w-full md:w-auto">
            Cuéntanos tus gustos <ArrowRight size={16} />
          </button>
        </section>

      </main>
    </div>
  )
}
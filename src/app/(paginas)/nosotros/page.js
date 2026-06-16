// src/app/nosotros/page.js
'use client'

import { 
  Truck,
  BookOpen,
  Award,
  Package,
  ShieldCheck,
  Heart,
  Lock,
  Mail,
  Phone,
  MapPin,
  Send
} from 'lucide-react'

export default function AcercaDeNosotrosPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-[#1e2336]">

      {/* --- CONTENIDO PRINCIPAL --- */}
      <main className="max-w-[1400px] mx-auto px-4 sm:px-8 py-10 md:py-16 space-y-16 md:space-y-24 pb-16 md:pb-24">
        
        {/* --- SECCIÓN HERO (Nuestra Historia) --- */}
        <section className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Texto Izquierda */}
          <div className="w-full lg:w-1/2 space-y-5 sm:space-y-6 flex flex-col items-center text-center lg:items-start lg:text-left">
            <p className="text-[10px] sm:text-xs font-bold text-[#ffb020] tracking-widest uppercase">
              Nuestra Historia
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1e2336] leading-tight">
              Más que libros, <br />
              historias que <span className="text-[#ffb020]">conectan.</span>
            </h1>
            <div className="space-y-4 text-gray-600 leading-relaxed max-w-lg text-sm sm:text-base px-2 sm:px-0">
              <p>
                Libros Para Ti nació con la misión de acercar a más personas a los libros que transforman vidas. Creemos que cada libro tiene el poder de abrir nuevas perspectivas, inspirar decisiones y acompañar momentos únicos.
              </p>
              <p>
                Seleccionamos cuidadosamente cada título para ofrecerte obras de calidad, de diferentes géneros y voces, con la confianza de que encontrarás ese libro que estás buscando.
              </p>
            </div>
            <button className="bg-[#ffb020] hover:bg-yellow-500 text-white font-medium py-3 px-6 sm:px-8 rounded-full flex items-center gap-2 transition shadow-md w-full sm:w-max justify-center mt-2 sm:mt-4">
              <BookOpen size={18} />
              Conoce nuestro catálogo
            </button>
          </div>

          {/* Imagen Derecha (Placeholder) */}
          <div className="w-full lg:w-1/2 h-[350px] sm:h-[400px] md:h-[500px] bg-[#1d2d26] rounded-2xl overflow-hidden relative flex items-center justify-center text-white/50 border border-gray-200 shadow-lg mt-6 lg:mt-0">
             <div className="text-center p-6 sm:p-8 bg-black/20 rounded-lg backdrop-blur-sm border border-white/10 m-6 sm:m-8 max-w-sm">
               <p className="font-serif text-lg sm:text-xl text-white mb-2 leading-snug">"Un libro es un sueño que tienes en tus manos."</p>
               <p className="text-xs sm:text-sm text-gray-300">- Neil Gaiman</p>
             </div>
             <span className="absolute bottom-4 text-[10px] sm:text-xs text-white/40">[Espacio para imagen de biblioteca/planta]</span>
          </div>
        </section>

        {/* --- SECCIÓN DE BENEFICIOS --- */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 py-10 md:py-12 border-t border-gray-200">
          
          <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FDF4E7] flex items-center justify-center text-[#1e2336] mb-1 sm:mb-2 flex-shrink-0">
              <Award size={28} className="sm:w-8 sm:h-8" strokeWidth={1.5} />
            </div>
            <h3 className="font-bold text-base sm:text-lg text-[#1e2336]">Calidad garantizada</h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-[250px]">
              Todos nuestros libros son 100% originales y seleccionados cuidadosamente.
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#EAF0EB] flex items-center justify-center text-[#1e2336] mb-1 sm:mb-2 flex-shrink-0">
              <Package size={28} className="sm:w-8 sm:h-8" strokeWidth={1.5} />
            </div>
            <h3 className="font-bold text-base sm:text-lg text-[#1e2336]">Envíos seguros</h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-[250px]">
              Enviamos a todo el país con empaques resistentes para que tu libro llegue perfecto.
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#F0EBF4] flex items-center justify-center text-[#1e2336] mb-1 sm:mb-2 flex-shrink-0">
              <ShieldCheck size={28} className="sm:w-8 sm:h-8" strokeWidth={1.5} />
            </div>
            <h3 className="font-bold text-base sm:text-lg text-[#1e2336]">Compra confiable</h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-[250px]">
              Pagos 100% seguros y protección en cada compra para tu total tranquilidad.
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FCEAE8] flex items-center justify-center text-[#1e2336] mb-1 sm:mb-2 flex-shrink-0">
              <Heart size={28} className="sm:w-8 sm:h-8" strokeWidth={1.5} />
            </div>
            <h3 className="font-bold text-base sm:text-lg text-[#1e2336]">Apoyo a la lectura</h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-[250px]">
              Promovemos la lectura y apoyamos a autores y editoriales con historias increíbles.
            </p>
          </div>

        </section>

        {/* --- SECCIÓN CONTACTO (NUEVA) --- */}
        <section className="bg-white rounded-[2rem] p-6 sm:p-10 lg:p-16 border border-gray-100 shadow-sm flex flex-col lg:flex-row gap-12 lg:gap-20 relative overflow-hidden">
          {/* Círculo decorativo de fondo */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-yellow-50 rounded-full opacity-50 pointer-events-none"></div>

          {/* Información de Contacto */}
          <div className="w-full lg:w-1/3 space-y-8 relative z-10">
            <div>
              <p className="text-[10px] sm:text-xs font-bold text-[#ffb020] tracking-widest uppercase mb-2">Estamos para ti</p>
              <h2 className="text-3xl md:text-4xl font-serif text-[#1e2336] mb-4">Contáctanos</h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                ¿Tienes alguna duda sobre tu pedido o buscas una recomendación especial? Escríbenos, estaremos felices de ayudarte.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#FEF9ED] text-[#ffb020] p-3 rounded-xl flex-shrink-0">
                  <Mail size={22} />
                </div>
                <div className="pt-1">
                  <h4 className="font-bold text-[#1e2336] text-sm mb-0.5">Email</h4>
                  <a href="mailto:hola@librosparati.com" className="text-gray-500 text-sm hover:text-[#ffb020] transition-colors">hola@librosparati.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-[#FEF9ED] text-[#ffb020] p-3 rounded-xl flex-shrink-0">
                  <Phone size={22} />
                </div>
                <div className="pt-1">
                  <h4 className="font-bold text-[#1e2336] text-sm mb-0.5">Teléfono</h4>
                  <a href="tel:+525551234567" className="text-gray-500 text-sm hover:text-[#ffb020] transition-colors">+52 (55) 5123-4567</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#FEF9ED] text-[#ffb020] p-3 rounded-xl flex-shrink-0">
                  <MapPin size={22} />
                </div>
                <div className="pt-1">
                  <h4 className="font-bold text-[#1e2336] text-sm mb-0.5">Ubicación</h4>
                  <p className="text-gray-500 text-sm">Envios desde CDMX a<br />toda la República Mexicana.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de Contacto */}
          <div className="w-full lg:w-2/3 relative z-10">
            <form className="space-y-4 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-600 ml-1">Nombre completo</label>
                  <input type="text" placeholder="Ej. Ana García" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-[#ffb020] focus:bg-white transition text-sm" required />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-600 ml-1">Correo electrónico</label>
                  <input type="email" placeholder="ana@ejemplo.com" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-[#ffb020] focus:bg-white transition text-sm" required />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-600 ml-1">Asunto</label>
                <input type="text" placeholder="¿Sobre qué nos escribes?" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-[#ffb020] focus:bg-white transition text-sm" required />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-600 ml-1">Mensaje</label>
                <textarea rows="4" placeholder="Escribe tu mensaje aquí..." className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-[#ffb020] focus:bg-white transition resize-none text-sm" required></textarea>
              </div>
              <button type="submit" className="bg-[#1e2336] hover:bg-black text-white font-medium px-8 py-3.5 rounded-xl transition flex items-center justify-center gap-2 w-full sm:w-max shadow-md">
                Enviar mensaje <Send size={16} />
              </button>
            </form>
          </div>
        </section>

        {/* --- SECCIÓN NEWSLETTER (Comunidad Lectora) --- */}
        <section className="bg-[#FAF6F0] rounded-[2rem] overflow-hidden flex flex-col md:flex-row items-stretch border border-[#f0e6d5]">
          
          {/* Imagen Izquierda Newsletter (Placeholder) */}
          <div className="w-full md:w-[40%] h-48 sm:h-64 md:h-auto md:min-h-[300px] bg-[#e6ddd0] flex items-center justify-center text-gray-500 text-xs sm:text-sm p-4 text-center">
            [Imagen de libros apilados o leyendo un libro]
          </div>

          {/* Formulario Derecha */}
          <div className="w-full md:w-[60%] p-6 sm:p-10 lg:p-16 space-y-6 flex flex-col justify-center">
            <div className="space-y-3 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-serif text-[#1e2336] leading-tight">
                Sé parte de nuestra comunidad <br className="hidden xl:block" /> lectora
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm max-w-md mx-auto md:mx-0">
                Recibe novedades, recomendaciones y promociones exclusivas directamente en tu correo.
              </p>
            </div>

            <form className="space-y-3 w-full max-w-md mx-auto md:mx-0" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center bg-transparent sm:bg-white rounded-2xl sm:rounded-full p-0 sm:p-1 border-0 sm:border sm:border-gray-200 shadow-none sm:shadow-sm gap-3 sm:gap-0">
                <input 
                  type="email" 
                  placeholder="Tu correo electrónico" 
                  className="flex-1 px-5 py-3.5 sm:py-2 rounded-full sm:rounded-none border sm:border-none border-gray-200 outline-none text-sm bg-white sm:bg-transparent w-full focus:ring-2 sm:focus:ring-0 focus:ring-[#ffb020]"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-[#1e2336] hover:bg-black text-white font-medium text-sm px-6 py-3.5 sm:py-3 rounded-full transition whitespace-nowrap w-full sm:w-auto shadow-md sm:shadow-none"
                >
                  Suscribirme
                </button>
              </div>
              <div className="flex items-start sm:items-center justify-center md:justify-start gap-1.5 text-[10px] sm:text-xs text-gray-500 sm:pl-4 mt-2">
                <Lock size={12} className="flex-shrink-0 mt-0.5 sm:mt-0" />
                <p>No compartimos tu información. Consulta nuestro <a href="#" className="underline hover:text-gray-800">Aviso de privacidad</a>.</p>
              </div>
            </form>
          </div>

        </section>

      </main>
    </div>
  )
}
import React from 'react';
import { Database, Layers, Search, BarChart3, Terminal, Headphones } from 'lucide-react';

export default function LandingZantia() {
  const servicios = [
    { title: "Arquitectura de Datos", desc: "Diseñamos la estructura donde se organizan los datos del negocio.", icon: <Database className="text-yellow-400" /> },
    { title: "Captura de Datos", desc: "Integramos y centralizamos datos dispersos en una única base confiable.", icon: <Layers className="text-yellow-400" /> },
    { title: "Preparación de Datos", desc: "Limpiamos y ordenamos la información para que sea consistente y usable.", icon: <Search className="text-yellow-400" /> },
    { title: "Análisis y Tableros", desc: "Construimos indicadores y tableros claros para la gestión del negocio.", icon: <BarChart3 className="text-yellow-400" /> },
    { title: "Proyectos de Datos", desc: "Ejecutamos proyectos de datos de punta a punta, con alcance definido.", icon: <Terminal className="text-yellow-400" /> },
    { title: "Soporte Mensual", desc: "Acompañamiento continuo para análisis, reportes y mejora del sistema de datos.", icon: <Headphones className="text-yellow-400" /> }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-yellow-400/30">
      
      {/* Background Global con Perspectiva */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          transform: 'perspective(1000px) rotateX(60deg) translateY(-100px)',
          transformOrigin: 'top'
        }}>
      </div>

      {/* Navbar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl bg-black/40 backdrop-blur-xl z-50 py-3 px-6 rounded-full border border-white/10 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-yellow-400 flex items-center justify-center rounded">
            <div className="w-4 h-4 border-2 border-black rotate-45" />
          </div>
          <span className="font-black tracking-tighter text-xl uppercase">Zantia</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm text-gray-400 uppercase tracking-widest font-bold">
          <a href="#" className="hover:text-yellow-400 transition">Inicio</a>
          <a href="#" className="text-white border-b-2 border-yellow-400">Servicios</a>
          <a href="#" className="hover:text-yellow-400 transition">Nosotros</a>
        </div>
        <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-black text-xs uppercase hover:scale-105 transition">
          Contáctanos
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
          <div>
            <p className="text-gray-500 font-bold tracking-[0.3em] uppercase text-xs mb-4">Datos y Analítica para PyMEs</p>
            <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter mb-8">
              Datos confiables <br />
              para <span className="text-yellow-400">decidir mejor</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-lg leading-relaxed">
              Diseñamos e implementamos sistemas de datos para PyMEs: arquitectura, análisis y soporte mensual.
            </p>
          </div>
          
          {/* El Isométrico (Placeholder Mejorado) */}
          <div className="relative flex justify-center">
             <div className="absolute w-[300px] h-[300px] bg-yellow-400/20 blur-[120px] rounded-full animate-pulse" />
             {/* Aquí DEBES poner una imagen exportada para que se vea bien */}
             <div className="relative w-80 h-80 border-2 border-yellow-400/50 rotate-[35deg] skew-x-[-20deg] flex items-center justify-center bg-yellow-400/5 shadow-[0_0_50px_rgba(250,204,21,0.2)]">
                <div className="w-40 h-40 bg-yellow-400 shadow-[0_0_30px_#facc15]" />
             </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="relative py-32 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 relative">
            <h2 className="text-[12rem] font-black text-white/[0.03] absolute left-1/2 -translate-x-1/2 -top-32 pointer-events-none uppercase">Servicios</h2>
            <h3 className="text-5xl md:text-6xl font-bold mb-6">Servicios</h3>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Diseñamos, implementamos y mantenemos sistemas de datos que permiten ordenar la información y tomar mejores decisiones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicios.map((s, i) => (
              <div key={i} className="group bg-[#0F0F0F] border border-white/5 rounded-2xl overflow-hidden hover:border-yellow-400/50 transition-all duration-500">
                {/* Cabecera con Rejilla Isométrica */}
                <div className="h-40 bg-[#161616] relative overflow-hidden flex items-center justify-center border-b border-white/5">
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `linear-gradient(30deg, #444 1px, transparent 1px), linear-gradient(-30deg, #444 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                  }} />
                  <div className="relative z-10 w-16 h-16 bg-black/50 border border-white/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 group-hover:border-yellow-400">
                    {React.cloneElement(s.icon, { size: 32 })}
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">{s.title}</h4>
                  <p className="text-gray-500 leading-relaxed text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
import React from 'react';
import { Database, Workflow, CheckCircle2, ArrowRight } from 'lucide-react';

export default function LandingZantia() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-gray-200 selection:bg-yellow-400/30">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Label ZANTIA */}
          <span className="inline-block text-yellow-400 font-black tracking-[0.5em] uppercase text-sm mb-4">
            ZANTIA
          </span>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
            Ordenamos tus datos. <br />
            <span className="text-yellow-400">Potenciamos tus decisiones.</span>
          </h1>
          
          <p className="text-gray-400 text-lg md:xl max-w-2xl mx-auto mb-10">
            Consultoría en Datos, Procesos e IA para PyMEs. 
            Funcionamos como tu equipo externo para transformar el desorden en información confiable.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-yellow-400 text-black font-bold uppercase tracking-widest text-sm hover:bg-yellow-300 transition">
              Agendar Diagnóstico
            </button>
            <button className="px-8 py-4 border border-white/10 text-white font-bold uppercase tracking-widest text-sm hover:bg-white/5 transition">
              Nuestros Servicios
            </button>
          </div>
        </div>
      </section>

      {/* Servicios Breve */}
      <section className="py-20 bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="p-10 border border-white/5 bg-white/[0.02] rounded-2xl">
            <Database className="text-yellow-400 mb-6" size={32} />
            <h3 className="text-2xl font-bold text-white mb-4">Proyecto Integral</h3>
            <p className="text-gray-400">Integración de sistemas, arquitectura escalable y tableros de control en tiempo real.</p>
          </div>
          <div className="p-10 border border-white/5 bg-white/[0.02] rounded-2xl">
            <Workflow className="text-yellow-400 mb-6" size={32} />
            <h3 className="text-2xl font-bold text-white mb-4">Data as a Service</h3>
            <p className="text-gray-400">Mantenimiento mensual, actualización de indicadores y acompañamiento estratégico continuo.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

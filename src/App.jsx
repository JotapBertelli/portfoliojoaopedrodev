
import React from 'react';
import { motion } from 'framer-motion';

export default function App() {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-xl text-gray-800">João Bertelli</h1>
          <div className="space-x-6 text-gray-600">
            <a href="#about" className="hover:text-gray-900">Sobre</a>
            <a href="#skills" className="hover:text-gray-900">Skills</a>
            <a href="#projects" className="hover:text-gray-900">Projetos</a>
            <a href="#experience" className="hover:text-gray-900">Experiência</a>
            <a href="#contact" className="hover:text-gray-900">Contato</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-50 to-blue-100 text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-gray-800"
        >
          João Pedro da Silva Bertelli
        </motion.h2>
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          Desenvolvedor Júnior • Python • Flask • React • JavaScript
        </p>
        <div className="mt-6 space-x-4">
          <a href="#projects" className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700">Ver Projetos</a>
          <a href="/Curriculo_Joao_Bertelli.docx" download className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300">Download CV</a>
        </div>
      </section>

      {/* Sobre */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Sobre Mim</h3>
        <p className="text-gray-600 leading-relaxed">
          Sou estudante de Engenharia de Software e concluí curso técnico em ADS. Possuo experiência em desenvolvimento de sistemas internos, APIs REST e projetos de inovação. 
          Tenho proatividade, facilidade em aprender novas tecnologias e foco no trabalho em equipe para entregar soluções de impacto.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Habilidades</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            <div className="p-4 bg-gray-100 rounded-lg">Python</div>
            <div className="p-4 bg-gray-100 rounded-lg">JavaScript</div>
            <div className="p-4 bg-gray-100 rounded-lg">React / React Native</div>
            <div className="p-4 bg-gray-100 rounded-lg">Flask</div>
            <div className="p-4 bg-gray-100 rounded-lg">MySQL / SQLite</div>
            <div className="p-4 bg-gray-100 rounded-lg">Git & GitHub</div>
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-bold text-gray-800 mb-8">Projetos Relevantes</h3>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-6 bg-white rounded-lg shadow">
            <h4 className="font-semibold text-lg">Sistema de Gerenciamento de Estoque</h4>
            <p className="text-sm text-gray-600 mt-2">Cadastro, controle e relatórios — Python, Flask, SQLite.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h4 className="font-semibold text-lg">CRUDs e APIs REST em Flask</h4>
            <p className="text-sm text-gray-600 mt-2">Integrações de dados com bancos relacionais.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h4 className="font-semibold text-lg">Portfólio em React</h4>
            <p className="text-sm text-gray-600 mt-2">Site responsivo com deploy em Vercel.</p>
          </div>
        </div>
      </section>

      {/* Experiência */}
      <section id="experience" className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Experiência Profissional</h3>
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-lg shadow">
              <h4 className="font-semibold">Estagiário do Espaço Maker — SESI-SP</h4>
              <p className="text-sm text-gray-500">2025 – Atual</p>
              <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
                <li>Auxílio em robótica, programação e modelagem 3D.</li>
                <li>Suporte em impressoras 3D e cortadora a laser.</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h4 className="font-semibold">Programador de Sistemas — Ferro e Aço Rossetti</h4>
              <p className="text-sm text-gray-500">2023 – 2024</p>
              <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
                <li>Desenvolvimento e manutenção de sistemas internos.</li>
                <li>Integração de soluções para controle de dados.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Entre em Contato</h3>
        <p className="text-gray-600">📧 jpbertelli10@gmail.com</p>
        <p className="text-gray-600">📱 (18) 99812-7737</p>
        <div className="mt-4 space-x-4">
          <a href="https://github.com/JotapBertelli" target="_blank" rel="noreferrer" className="text-indigo-600 underline">GitHub</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-500">
        © 2025 João Pedro Bertelli — Feito com React & Tailwind
      </footer>
    </div>
  );
}

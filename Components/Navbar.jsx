"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // controla a visibilidade do menu lateral

  return (
    <>
      {/* Barra principal de navegação */}
      <div className="flex  items-center justify-between  md:justify-around px-4 py-3 bg-white shadow-md">
        <h1 className="text-xl font-semibold">Todo APP</h1>

        {/* Ícone do menu hamburguer - apenas em mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Menu horizontal - visível apenas em telas médias para cima (>=768px) */}
        <ul className="hidden md:flex gap-10 text-base">
          <li className="hover:text-blue-500 cursor-pointer">Home</li>
          <li className="hover:text-blue-500 cursor-pointer">Products</li>
          <li className="hover:text-blue-500 cursor-pointer">About</li>
          <li className="hover:text-blue-500 cursor-pointer">Contact</li>
        </ul>
      </div>

      {/* Side menu - desliza da direita para a esquerda */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Cabeçalho do menu */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setMenuOpen(false)}>
            <FiX size={24} />
          </button>
        </div>

        {/* Itens do menu */}
        <ul className="flex flex-col p-4 gap-4 text-base">
          <li className="hover:text-blue-500 cursor-pointer">Home</li>
          <li className="hover:text-blue-500 cursor-pointer">Products</li>
          <li className="hover:text-blue-500 cursor-pointer">About</li>
          <li className="hover:text-blue-500 cursor-pointer">Contact</li>
        </ul>
      </div>

      {/* Fundo escurecido (overlay) - aparece quando o menu está aberto */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;

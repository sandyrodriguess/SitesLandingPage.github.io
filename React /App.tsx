import { useState } from 'react';
import logoImage from 'figma:asset/66f61a87284e70e04606aeab821852490316298c.png';
import boloImage from 'figma:asset/cd6c2f56555deb3fd3a1345f38d0212377da7380.png';
import boloPoteImage from 'figma:asset/811b217041c7443459c7f51b335916105908880b.png';
import boloAniversarioImage from 'figma:asset/233f408b55f85be5845e35bb877f0caa7f650696.png';
import brigadeiroImage from 'figma:asset/8062c6a5d511b070d9992f12538abc1a0ea35726.png';
import copoFelicidadeImage from 'figma:asset/110bf50d18557cb1fa9c6bf7269c80200888fc17.png';
import brigadeiroNinhoImage from 'figma:asset/41a81a60e9d321cd13e706fd40a0701658d98b54.png';
import tortaImage from 'figma:asset/5ed7eade012eb6d973b455dfe3e38b9c97cfea20.png';
import boloTravessaImage from 'figma:asset/bc91b4d17256cf66b508d27a0bbadb4285393f2a.png';
import miniBoloVulcaoImage from 'figma:asset/6178e41c35cb1655f9e43070fb98951113dd65b4.png';
import {
  Menu,
  X,
  Phone,
  Instagram,
  MapPin,
  Clock,
  Heart,
  Star,
  ChevronRight,
  ShoppingBag,
  Package,
} from "lucide-react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const whatsappNumber = "+5521985328301";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\+/g, "")}`;
  const instagramHandle = "@confeitossimone";

  const produtos = [
    {
      nome: "Bolo de Pote",
      descricao:
        "Deliciosos bolos em potinhos individuais, perfeitos para qualquer ocasião.",
      preco: "Sob consulta",
      categoria: "destaque",
      gradient: "from-pink-400 to-pink-600",
    },
    {
      nome: "Bolo de Aniversário",
      descricao:
        "Bolos personalizados para tornar seu aniversário inesquecível.",
      preco: "Sob consulta",
      categoria: "destaque",
      gradient: "from-purple-400 to-purple-600",
    },
    {
      nome: "Brigadeiro Gourmet",
      descricao:
        "Brigadeiros tradicionais e especiais em diversos sabores irresistíveis.",
      preco: "Sob consulta",
      categoria: "docinhos",
      gradient: "from-amber-700 to-amber-900",
    },
    {
      nome: "Brigadeiro de Ninho",
      descricao:
        "Leite em pó de Ninho, feitos com muito carinho.",
      preco: "Sob consulta",
      categoria: "docinhos",
      gradient: "from-pink-300 to-pink-500",
    },
    {
      nome: "Copo da Felicidade",
      descricao:
        "Sobremesas em copinhos com camadas de brigadeiro, paçoca e muito mais.",
      preco: "Sob consulta",
      categoria: "especial",
      gradient: "from-yellow-400 to-yellow-600",
    },
    {
      nome: "Bolo na Travessa",
      descricao:
        "Bolos deliciosos na travessa, perfeitos para compartilhar com a família.",
      preco: "Sob consulta",
      categoria: "especial",
      gradient: "from-red-400 to-red-600",
    },
    {
      nome: "Tortas",
      descricao:
        "Tortas artesanais doces e salgadas para todas as ocasiões.",
      preco: "Sob consulta",
      categoria: "especial",
      gradient: "from-green-400 to-green-600",
    },
    {
      nome: "Mini Bolo Vulcão",
      descricao:
        "Mini bolos com recheio cremoso que derrete na boca.",
      preco: "Sob consulta",
      categoria: "especial",
      gradient: "from-rose-400 to-rose-600",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <img
                src={logoImage}
                alt="Simone Rodrigues Confeitos"
                className="h-14 w-14 object-contain"
              />
              <div>
                <h1 className="text-xl font-serif text-[#B8986A]">
                  Simone Rodrigues
                </h1>
                <p className="text-xs text-gray-600">
                  Confeitos Artesanais
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-[#B8986A] transition"
              >
                Início
              </a>
              <a
                href="#sobre"
                className="text-gray-700 hover:text-[#B8986A] transition"
              >
                Sobre
              </a>
              <a
                href="#produtos"
                className="text-gray-700 hover:text-[#B8986A] transition"
              >
                Produtos
              </a>
              <a
                href="#servicos"
                className="text-gray-700 hover:text-[#B8986A] transition"
              >
                Serviços
              </a>
              <a
                href="#contato"
                className="text-gray-700 hover:text-[#B8986A] transition"
              >
                Contato
              </a>
            </nav>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block bg-[#B8986A] text-white px-6 py-2 rounded-full hover:bg-[#A08558] transition"
            >
              Fazer Pedido
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700"
            >
              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 border-t">
              <a
                href="#home"
                className="block py-2 text-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </a>
              <a
                href="#sobre"
                className="block py-2 text-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </a>
              <a
                href="#produtos"
                className="block py-2 text-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Produtos
              </a>
              <a
                href="#servicos"
                className="block py-2 text-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </a>
              <a
                href="#contato"
                className="block py-2 text-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 bg-[#B8986A] text-white px-6 py-2 rounded-full text-center"
              >
                Fazer Pedido
              </a>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-24 pb-16 bg-gradient-to-b from-[#FAF8F5] to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-[#FFF5F0] text-[#B8986A] px-4 py-2 rounded-full text-sm font-medium">
                ✨ 2 Anos Adoçando Vidas no Rio de Janeiro
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 leading-tight">
                Sabor e Amor em Cada Receita
              </h2>
              <p className="text-lg text-gray-600">
                Bolos, docinhos e sobremesas artesanais feitas
                com ingredientes premium na Zona Oeste do Rio de
                Janeiro. Pronta entrega e encomendas
                personalizadas.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <ShoppingBag
                    className="text-[#B8986A]"
                    size={20}
                  />
                  <span className="text-sm font-medium">
                    Pronta Entrega
                  </span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Package
                    className="text-[#B8986A]"
                    size={20}
                  />
                  <span className="text-sm font-medium">
                    Sob Encomenda
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#B8986A] text-white px-8 py-4 rounded-full hover:bg-[#A08558] transition flex items-center justify-center space-x-2 text-lg font-semibold"
                >
                  <Phone size={22} />
                  <span>Pedir no WhatsApp</span>
                </a>
                <a
                  href={`https://instagram.com/${instagramHandle.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-[#B8986A] text-[#B8986A] px-8 py-4 rounded-full hover:bg-[#B8986A] hover:text-white transition flex items-center justify-center space-x-2 text-lg font-semibold"
                >
                  <Instagram size={22} />
                  <span>Ver Instagram</span>
                </a>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-600 pt-4">
                <div className="flex items-center space-x-1">
                  <Star
                    className="text-yellow-500 fill-yellow-500"
                    size={18}
                  />
                  <span className="font-semibold">5.0</span>
                  <span>(150+ avaliações)</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Heart
                    className="text-red-500 fill-red-500"
                    size={18}
                  />
                  <span>300+ clientes felizes</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#FFF5F0] to-[#FFE5E0] rounded-3xl blur-2xl opacity-30"></div>
              <img
                src={boloImage}
                alt="Bolo Confeitos Simone"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl hidden lg:block">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#B8986A]">
                    2 Anos
                  </div>
                  <div className="text-sm text-gray-600">
                    de Experiência
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
              Conheça a Simone Rodrigues
            </h3>
            <p className="text-lg text-gray-600">
              Com 2 anos de dedicação na confeitaria artesanal,
              Simone Rodrigues transforma ingredientes simples
              em momentos inesquecíveis. Localizada na Zona
              Oeste do Rio de Janeiro, cada receita é preparada
              com amor e atenção aos detalhes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#FAF8F5] p-8 rounded-2xl text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-[#FFF5F0] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-[#B8986A]" size={32} />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Feito com Amor
              </h4>
              <p className="text-gray-600">
                Cada doce e bolo é preparado artesanalmente com
                dedicação e paixão para tornar seu momento
                especial.
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-8 rounded-2xl text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-[#FFF5F0] rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-[#B8986A]" size={32} />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Ingredientes de Qualidade
              </h4>
              <p className="text-gray-600">
                Selecionamos apenas ingredientes frescos e de
                primeira qualidade para garantir o melhor sabor.
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-8 rounded-2xl text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-[#FFF5F0] rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-[#B8986A]" size={32} />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Zona Oeste - RJ
              </h4>
              <p className="text-gray-600">
                Atendemos toda a Zona Oeste do Rio de Janeiro
                com entrega rápida e produtos sempre
                fresquinhos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos Section */}
      <section
        id="produtos"
        className="py-20 bg-gradient-to-b from-white to-[#FAF8F5]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
              Nossos Produtos
            </h3>
            <p className="text-lg text-gray-600">
              Uma variedade deliciosa de bolos, docinhos e
              sobremesas para todos os momentos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {produtos.map((produto, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition group"
              >
                {index === 0 ? (
                  // Bolo de Pote com imagem real
                  <div className="h-48 relative overflow-hidden">
                    <img
                      src={boloPoteImage}
                      alt="Bolo de Pote"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 text-[#B8986A] px-3 py-1 rounded-full text-xs font-semibold">
                        ⭐ Destaque
                      </span>
                    </div>
                  </div>
                ) : index === 1 ? (
                  // Bolo de Aniversário com imagem real
                  <div className="h-48 relative overflow-hidden">
                    <img
                      src={boloAniversarioImage}
                      alt="Bolo de Aniversário"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 text-[#B8986A] px-3 py-1 rounded-full text-xs font-semibold">
                        ⭐ Destaque
                      </span>
                    </div>
                  </div>
                ) : index === 2 ? (
                  // Brigadeiro Gourmet com imagem real
                  <div className="h-48 relative overflow-hidden">
                    <img
                      src={brigadeiroImage}
                      alt="Brigadeiro Gourmet"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 text-[#B8986A] px-3 py-1 rounded-full text-xs font-semibold">
                        🍫 Docinhos
                      </span>
                    </div>
                  </div>
                ) : index === 3 ? (
                  // Brigadeiro de Ninho com imagem real
                  <div className="h-48 relative overflow-hidden">
                    <img
                      src={brigadeiroNinhoImage}
                      alt="Brigadeiro de Ninho"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 text-[#B8986A] px-3 py-1 rounded-full text-xs font-semibold">
                        🍫 Docinhos
                      </span>
                    </div>
                  </div>
                ) : index === 4 ? (
                  // Copo da Felicidade com imagem real
                  <div className="h-48 relative overflow-hidden">
                    <img
                      src={copoFelicidadeImage}
                      alt="Copo da Felicidade"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 text-[#B8986A] px-3 py-1 rounded-full text-xs font-semibold">
                        ✨ Especial
                      </span>
                    </div>
                  </div>
                ) : index === 5 ? (
                  // Bolo na Travessa com imagem real
                  <div className="h-48 relative overflow-hidden">
                    <img
                      src={boloTravessaImage}
                      alt="Bolo na Travessa"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 text-[#B8986A] px-3 py-1 rounded-full text-xs font-semibold">
                        ✨ Especial
                      </span>
                    </div>
                  </div>
                ) : index === 6 ? (
                  // Tortas com imagem real
                  <div className="h-48 relative overflow-hidden">
                    <img
                      src={tortaImage}
                      alt="Tortas"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 text-[#B8986A] px-3 py-1 rounded-full text-xs font-semibold">
                        ✨ Especial
                      </span>
                    </div>
                  </div>
                ) : index === 7 ? (
                  // Mini Bolo Vulcão com imagem real
                  <div className="h-48 relative overflow-hidden">
                    <img
                      src={miniBoloVulcaoImage}
                      alt="Mini Bolo Vulcão"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 text-[#B8986A] px-3 py-1 rounded-full text-xs font-semibold">
                        ✨ Especial
                      </span>
                    </div>
                  </div>
                ) : (
                  <div
                    className={`h-48 bg-gradient-to-br ${produto.gradient} relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>
                    {produto.categoria === "destaque" && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-white/90 text-[#B8986A] px-3 py-1 rounded-full text-xs font-semibold">
                          ⭐ Destaque
                        </span>
                      </div>
                    )}
                    {produto.categoria === "docinhos" && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-white/90 text-[#B8986A] px-3 py-1 rounded-full text-xs font-semibold">
                          🍫 Docinhos
                        </span>
                      </div>
                    )}
                    {produto.categoria === "especial" && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-white/90 text-purple-600 px-3 py-1 rounded-full text-xs font-semibold">
                          ✨ Especial
                        </span>
                      </div>
                    )}
                  </div>
                )}
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {produto.nome}
                  </h4>
                  <p className="text-gray-600 mb-4 text-sm">
                    {produto.descricao}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#B8986A] font-semibold">
                      {produto.preco}
                    </span>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#B8986A] hover:text-[#A08558] font-medium flex items-center"
                    >
                      Pedir <ChevronRight size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
              Como Funcionam Nossos Serviços
            </h3>
            <p className="text-lg text-gray-600">
              Oferecemos duas modalidades para melhor atender
              você
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-[#B8986A] to-[#A08558] p-8 rounded-2xl text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <ShoppingBag className="text-white" size={32} />
              </div>
              <h4 className="text-2xl font-semibold mb-4">
                Pronta Entrega
              </h4>
              <p className="text-white/90 mb-6">
                Produtos selecionados disponíveis para retirada
                imediata ou entrega rápida na Zona Oeste do Rio
                de Janeiro.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <ChevronRight
                    className="flex-shrink-0 mt-0.5"
                    size={20}
                  />
                  <span>Bolos de pote</span>
                </li>
                <li className="flex items-start space-x-2">
                  <ChevronRight
                    className="flex-shrink-0 mt-0.5"
                    size={20}
                  />
                  <span>Docinhos tradicionais</span>
                </li>
                <li className="flex items-start space-x-2">
                  <ChevronRight
                    className="flex-shrink-0 mt-0.5"
                    size={20}
                  />
                  <span>Trufas e copinhos</span>
                </li>
              </ul>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block w-full bg-white text-[#B8986A] px-6 py-3 rounded-full hover:bg-gray-100 transition text-center font-semibold"
              >
                Consultar Disponibilidade
              </a>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-8 rounded-2xl text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <Package className="text-white" size={32} />
              </div>
              <h4 className="text-2xl font-semibold mb-4">
                Sob Encomenda
              </h4>
              <p className="text-white/90 mb-6">
                Personalize completamente seu pedido para
                aniversários, chás revelação e eventos
                especiais.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <ChevronRight
                    className="flex-shrink-0 mt-0.5"
                    size={20}
                  />
                  <span>Bolos personalizados</span>
                </li>
                <li className="flex items-start space-x-2">
                  <ChevronRight
                    className="flex-shrink-0 mt-0.5"
                    size={20}
                  />
                  <span>Chá revelação</span>
                </li>
                <li className="flex items-start space-x-2">
                  <ChevronRight
                    className="flex-shrink-0 mt-0.5"
                    size={20}
                  />
                  <span>Kits personalizados</span>
                </li>
              </ul>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block w-full bg-white text-purple-600 px-6 py-3 rounded-full hover:bg-gray-100 transition text-center font-semibold"
              >
                Fazer Orçamento
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#B8986A] to-[#A08558]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-serif text-white mb-6">
            Pronto para Adoçar seu Dia?
          </h3>
          <p className="text-xl text-white/90 mb-8">
            Entre em contato agora pelo WhatsApp e faça seu
            pedido
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#B8986A] px-8 py-4 rounded-full hover:bg-gray-100 transition flex items-center justify-center space-x-2 font-semibold text-lg shadow-lg"
            >
              <Phone size={24} />
              <span>Fazer Pedido Agora</span>
            </a>
            <a
              href={`https://instagram.com/${instagramHandle.replace("@", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-[#B8986A] transition flex items-center justify-center space-x-2 font-semibold text-lg"
            >
              <Instagram size={24} />
              <span>Seguir no Instagram</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
              Entre em Contato
            </h3>
            <p className="text-lg text-gray-600">
              Estamos prontos para atender você e tornar seu
              evento ainda mais especial
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-[#FAF8F5] p-8 rounded-2xl text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-[#B8986A]" size={28} />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                WhatsApp
              </h4>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B8986A] hover:text-[#A08558] font-medium text-lg"
              >
                {whatsappNumber}
              </a>
              <p className="text-sm text-gray-600 mt-2">
                Clique para conversar
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-8 rounded-2xl text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Instagram
                  className="text-[#B8986A]"
                  size={28}
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Instagram
              </h4>
              <a
                href={`https://instagram.com/${instagramHandle.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B8986A] hover:text-[#A08558] font-medium text-lg"
              >
                {instagramHandle}
              </a>
              <p className="text-sm text-gray-600 mt-2">
                Veja nossos trabalhos
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-8 rounded-2xl text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-[#B8986A]" size={28} />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Localização
              </h4>
              <p className="text-gray-700 font-medium">
                Zona Oeste
              </p>
              <p className="text-gray-600">
                Rio de Janeiro, RJ
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-[#FFF5F0] p-6 rounded-2xl inline-block">
              <div className="flex items-center justify-center space-x-2 text-[#B8986A]">
                <Clock size={20} />
                <span className="font-medium">
                  Atendimento: Segunda a Sábado | 9h às 19h
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src={logoImage}
                  alt="Simone Rodrigues Confeitos"
                  className="h-12 w-12 object-contain"
                />
                <div>
                  <h1 className="text-xl font-serif text-[#B8986A]">
                    Simone Rodrigues
                  </h1>
                  <p className="text-xs text-gray-400">
                    Confeitos Artesanais
                  </p>
                </div>
              </div>
              <p className="text-gray-400">
                Doces e bolos artesanais feitos com amor na Zona
                Oeste do Rio de Janeiro há 2 anos.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">
                Links Rápidos
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-gray-400 hover:text-[#B8986A] transition"
                  >
                    Início
                  </a>
                </li>
                <li>
                  <a
                    href="#sobre"
                    className="text-gray-400 hover:text-[#B8986A] transition"
                  >
                    Sobre
                  </a>
                </li>
                <li>
                  <a
                    href="#produtos"
                    className="text-gray-400 hover:text-[#B8986A] transition"
                  >
                    Produtos
                  </a>
                </li>
                <li>
                  <a
                    href="#servicos"
                    className="text-gray-400 hover:text-[#B8986A] transition"
                  >
                    Serviços
                  </a>
                </li>
                <li>
                  <a
                    href="#contato"
                    className="text-gray-400 hover:text-[#B8986A] transition"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">
                Contato
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2 text-gray-400">
                  <Phone size={18} />
                  <span>{whatsappNumber}</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-400">
                  <Instagram size={18} />
                  <span>{instagramHandle}</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-400">
                  <MapPin size={18} />
                  <span>Zona Oeste - Rio de Janeiro, RJ</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Simone Rodrigues
              Confeitos. Todos os direitos reservados.
            </p>
            <p className="mt-2 text-sm">
              Feito com ❤️ e muito chocolate | 2 anos adoçando
              vidas
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

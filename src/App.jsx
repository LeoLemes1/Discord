import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import banner1 from "./assets/banner1.png";
import smile from "./assets/smile.png";
import fort from "./assets/fort.png";
import gartic from "./assets/gartic.pbg.png";
import little from "./assets/little.png";
import lol from "./assets/lol.png";
import mine from "./assets/mine.png";
import stop from "./assets/stop.png";
import tft from "./assets/tft.png";
import vava from "./assets/vava.png";
import logoAqua from "./assets/logo_aqua.png";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-950 text-white font-sans overflow-x-hidden">
      {/* Menu Hamburguer para mobile */}
      <div className="md:hidden flex justify-between p-4">
        {/* <img src={logoAqua} alt="Logo Aqua" className="h-12 w-auto" /> */}
        <button onClick={toggleMenu} className="text-3xl">
          {isOpen ? <FaTimes /> : <FaBars />}{" "}
        </button>
      </div>

      {/* Menu no Mobile */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-blue-900 py-4">
          <a href="#hero" className="py-2 text-lg" onClick={toggleMenu}>
            Home
          </a>
          <a href="#sobre" className="py-2 text-lg" onClick={toggleMenu}>
            Sobre
          </a>
          <a href="#jogos" className="py-2 text-lg" onClick={toggleMenu}>
            Jogos
          </a>
          <a href="#beneficios" className="py-2 text-lg" onClick={toggleMenu}>
            Benefícios
          </a>
          <a href="#testemunhos" className="py-2 text-lg" onClick={toggleMenu}>
            Testemunhos
          </a>
        </div>
      )}

      {/* FIRST IMPRESSION */}
      <section id="hero" className="py-16 px-4 md:px-12 mt-[-60px]">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="text-center md:text-left">
            <h1
              className="text-5xl font-bold font-['Press_Start_2P'] mb-6 text-blue-300"
              data-aos="fade-right"
            >
              Axis Cult 2.0
            </h1>
            <p
              className="text-lg mb-6"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              Um espaço para rir de tudo, sem frescura e com respeito. Aqui, o
              caos é sagrado.🚀
            </p>
            <a
              href="https://discord.gg/VQGhyXNsQM"
              className="relative inline-block px-8 py-4 rounded-full text-lg font-bold text-white bg-blue-400 overflow-hidden transition-all duration-300 hover:text-blue-900 hover:bg-white hover:shadow-[0_0_20px_#38bdf8] border border-blue-500"
              data-aos="zoom-in"
            >
              <span className="relative z-10">Entrar no Discord</span>
              <span className="absolute inset-0 bg-blue-300 opacity-0 hover:opacity-20 transition-opacity duration-300 rounded-full"></span>
            </a>
          </div>
          <img
            src={banner1}
            alt="Banner"
            className="w-full md:w-xl h-auto object-cover rounded-2xl shadow-2xl mt-4"
            data-aos="fade-left"
          />
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="bg-blue-800 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl font-bold mb-4 text-blue-300"
            data-aos="fade-up"
          >
            O Axis Cult 2.0
          </h2>
          <p
            className="text-lg text-gray-200"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            O Axis Cult 2.0 é um espaço onde o caos é nossa essência, a diversão
            é a nossa filosofia e o Discord é o nosso refúgio. Junte-se a nós
            para participar de eventos dinâmicos, interagir com bots divertidos
            e fazer parte de uma comunidade unida pela busca constante por
            entretenimento sem limites.
          </p>
        </div>
      </section>

      {/* IMAGEM SMILE */}
      <section className="py-16 bg-white text-blue-900 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" data-aos="fade-up">
            Entre no espírito do culto
          </h2>
          <p className="mb-6" data-aos="fade-up" data-aos-delay="200">
            Porque aqui, até as risadas mais intensas fazem parte da
            experiência.💙
          </p>

          <img
            src={smile}
            alt="Cultista sorrindo"
            className="mx-auto rounded-xl shadow-lg w-60"
            data-aos="zoom-in"
          />
        </div>
      </section>

      {/* JOGOS */}
      <section id="jogos" className="bg-blue-900 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-300 mb-8">
            Jogos do Culto
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
            {[vava, lol, mine, gartic, stop, little, tft, fort].map(
              (img, i) => (
                <div
                  key={i}
                  className="w-24 h-24 flex justify-center items-center"
                >
                  <img
                    src={img}
                    alt={`Jogo ${i}`}
                    className="w-20 h-20 object-contain rounded-lg shadow-md hover:scale-105 transition"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section
        id="beneficios"
        className="bg-gradient-to-r from-blue-700 to-blue-900 py-16 px-6"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2
            className="text-4xl font-bold text-blue-300 mb-8"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Benefícios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {[
              "Eventos Loucos",
              "Aguenta X1?",
              "Sala de Filmes/Séries",
              "Salas Personalizadas",
              "Campeonatos diversos",
              "Culto Semanal (meme)",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white text-blue-900 rounded-xl shadow-xl p-6 font-bold transition-transform transform hover:scale-105 hover:shadow-2xl"
                data-aos="zoom-in"
                data-aos-delay={i * 100}
                data-aos-duration="1000"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTEMUNHOS */}
      <section id="testemunhos" className="bg-blue-900 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl font-bold mb-10 text-blue-300"
            data-aos="fade-up"
          >
            O que dizem os cultistas?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-100">
            <div
              className="bg-blue-800 p-6 rounded-lg shadow-md"
              data-aos="fade-up"
            >
              “Nunca pensei que rir tanto fosse algo espiritual, mas agora sou
              devoto.” Kazuma#7777
            </div>
            <div
              className="bg-blue-800 p-6 rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              “O único lugar onde ser aleatório é um dom divino.” –
              MeguminLover#aqua
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 px-6 bg-blue-700 text-blue-300 text-center">
        <h2 className="text-4xl font-bold mb-6">Junte-se ao caos!</h2>
        <a
          href="https://discord.gg/VQGhyXNsQM"
          className="text-xl bg-blue-500 py-3 px-8 rounded-full text-white font-bold"
        >
          Entrar no Discord
        </a>
      </section>
    </div>
  );
}

export default App;

import Navbar from "./components/Navbar";
import Badge from "./components/Badge";
import TextSection from "./components/TextSection"; // Importando o novo componente
import BlobAnimation from "./components/BlobAnimation"; // Importando a animação

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Fundo preto cobrindo toda a tela */}
      <div className="fixed inset-0 bg-black z-0" /> {/* Usando fixed para cobrir toda a tela, independentemente da rolagem */}

      {/* Blob animado que segue o cursor */}
      <BlobAnimation />

      {/* Conteúdo acima do blob */}
      <div className="relative z-20 flex flex-col min-h-screen">
        <Navbar />
        <Badge />
        <TextSection /> {/* Usando o novo componente de texto */}
      </div>
    </div>
  );
}

export default App;

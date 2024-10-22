// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const TextSection = () => {
  // Estado para controlar a imagem expandida
  const [expandedImage, setExpandedImage] = useState(null);
  // Estados para controlar a visibilidade dos botões de cada imagem
  const [showButtonAntes, setShowButtonAntes] = useState(false);
  const [showButtonDepois, setShowButtonDepois] = useState(false);
  const [showButtonRestore, setShowButtonRestore] = useState(false);

  // Função para alternar entre expandir e reduzir a imagem
  const handleImageClick = (image) => {
    setExpandedImage(expandedImage === image ? null : image);
  };

  return (
    <div className="absolute top-0 left-0 w-full h-screen ">
      <div className="absolute top-[20%] left-[15%] w-[70%]">
        <div
          className="text-purple-500 text-2xl font-bold md:text-3xl"
          style={{ userSelect: "none" }}
        >
          #LE
        </div>
        <div
          className="text-white text-xl font-bold md:text-2xl mt-2"
          style={{ userSelect: "none" }}
        >
          Verificar se o Ambiente já existe no ATC:
        </div>
        <div
          className="text-purple-500 text-lg font-semibold md:text-xl mt-2 ml-2"
          style={{ userSelect: "none" }}
        >
          Se não existe:
        </div>
        <div
          className="flex items-center text-gray-300 md:text-xl mt-1 ml-4"
          style={{ userSelect: "none" }}
        >
          <div className="mr-2">Crie uma pasta com o nome do cliente ex:</div>
          <span className="inline-block border-2 select-text z-50 bg-gray-700 bg-opacity-30 backdrop-blur-lg rounded-full border-none px-3 py-0.5 text-gray-300 md:text-xl mr-1">
            _fealq
          </span>
          no caminho
          <span className="inline-block border-2 select-text z-50 bg-gray-700 bg-opacity-30 backdrop-blur-lg rounded-full border-none px-3 py-0.5 text-gray-300 md:text-xl ml-2">
            C:\inetpub\wwwroot\homolog\legaletica
          </span>
        </div>
        <div
          className="flex items-center text-gray-300 md:text-xl mt-2 ml-4"
          style={{ userSelect: "none" }}
        >
          Copie as pastas{" "}
          <strong className="text-purple-500 mr-1 ml-1"> client </strong> e{" "}
          <strong className="text-purple-500 mr-1 ml-1"> manager </strong> do{" "}
          <span className="text-white font-semibold mr-1 ml-1">app1 </span>e
          cole na pasta que você criou ex:
          <span className="inline-block border-2 select-text z-50 bg-gray-700 bg-opacity-30 backdrop-blur-lg rounded-full border-none px-3 py-0.5 text-gray-300 md:text-xl ml-2">
            C:\inetpub\wwwroot\homolog\legaletica\_fealq
          </span>
        </div>
        <div
          className="ml-4 text-gray-300 text-lg md:text-xl mt-2"
          style={{ userSelect: "none" }}
        >
          Abre o <span className="text-white font-semibold">webconfig </span> do
          manager e client e muda o{" "}
          <strong className="text-purple-500">nome do banco</strong> na
          connectionstring, o
          <strong className="text-purple-500"> nome da empresa</strong> e a{" "}
          <strong className="text-purple-500">url</strong>
        </div>
        {/* Imagens com funcionalidade de clique para expandir */}
        <div
          className="flex justify-center mt-6"
          style={{ userSelect: "none" }}
        >
          <div className="flex flex-col items-center mr-4">
            <h3 className="text-purple-500 text-2xl font-bold mb-2">Antes</h3>
            <div
              className="relative"
              onMouseEnter={() => setShowButtonAntes(true)} // Mostra o botão ao passar o mouse
              onMouseLeave={() => setShowButtonAntes(false)} // Esconde o botão ao sair
            >
              <img
                src="../public/Antes_app1.png"
                alt="Antes"
                className={`${
                  expandedImage === "Antes"
                    ? "w-[90vw] h-[90vh] fixed top-0 left-0 right-0 bottom-0 m-auto z-50"
                    : "max-w-md h-auto transition-transform duration-300 transform hover:scale-105"
                } rounded object-cover cursor-pointer`}
                onClick={() => handleImageClick("Antes")}
              />
              {/* Mostra o botão apenas se o mouse estiver sobre a imagem */}
              {showButtonAntes && (
                <button
                  className="absolute inset-0 flex justify-center items-center text-white bg-gray-700 bg-opacity-30 py-2 px-4 rounded z-50"
                  onClick={() => handleImageClick("Antes")}
                >
                  Clique para Ampliar
                </button>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-purple-500 text-2xl font-bold mb-2">Depois</h3>
            <div
              className="relative"
              onMouseEnter={() => setShowButtonDepois(true)} // Mostra o botão ao passar o mouse
              onMouseLeave={() => setShowButtonDepois(false)} // Esconde o botão ao sair
            >
              <img
                src="../public/Depois_fealq.png"
                alt="Depois"
                className={`${
                  expandedImage === "Depois"
                    ? "w-[90vw] h-[90vh] fixed top-0 left-0 right-0 bottom-0 m-auto z-50"
                    : "max-w-md h-auto transition-transform duration-300 transform hover:scale-105"
                } rounded object-cover cursor-pointer`}
                onClick={() => handleImageClick("Depois")}
              />
              {/* Mostra o botão apenas se o mouse estiver sobre a imagem */}
              {showButtonDepois && (
                <button
                  className="absolute inset-0 flex justify-center items-center text-white bg-gray-700 bg-opacity-30 py-2 px-4 rounded z-50"
                  onClick={() => handleImageClick("Depois")}
                >
                  Clique para Ampliar
                </button>
              )}
            </div>
          </div>
        </div>
        {/* Texto contínuo abaixo das imagens */}
        <div
          className="text-gray-300 text-lg md:text-xl mt-8 ml-4 z-50"
          style={{ userSelect: "none" }}
        >
          <strong className="text-purple-500">Atenção: </strong>
          Fique atento em algumas chaves, pois podem mudar de acordo com o
          cliente, então sempre conferir em produção. As principais são
          <span className="inline-block border-1 select-text z-50 text-purple-500 font-semibold bg-gray-700 bg-opacity-30 backdrop-blur-lg rounded-full border-none px-3 py-0  md:text-xl ml-2">
            Resource, NomeEmpresa, clientID
          </span>
          .<br />
          Em caso de clientes mais antigos, as vezes é necessário adicionar as
          seguintes chaves:
          <span className="inline-block border-1 select-text z-50 text-purple-500 font-semibold bg-gray-700 bg-opacity-30 backdrop-blur-lg rounded-full border-none px-3 py-0  md:text-xl ml-2">
            0800, 0800b, email, whatsapp
          </span>{" "}
          sempre verifique o webconfig do cliente em produção.
          {/* Você pode adicionar o texto das chaves aqui, caso precise */}
        </div>
        <div
          className="flex items-center text-gray-300 md:text-xl mt-6 ml-4"
          style={{ userSelect: "none" }}
        >
          <div className="mr-2">
            Navegue até esse caminho:
            <span className="inline-block border-2 select-text z-50 bg-gray-700 bg-opacity-30 backdrop-blur-lg rounded-full border-none px-3 py-0 text-gray-300 md:text-xl ml-2">
              D:\DocumentFile\Homologacao\LegalEtica
            </span>{" "}
            copie a pasta
            <span className="inline-block border-2 select-text z-50 bg-gray-700 bg-opacity-30 backdrop-blur-lg rounded-full border-none px-3 py-0 text-gray-300 md:text-xl ml-2">
              _newclient
            </span>{" "}
            e renomei com o nome do cliente{" "}
            <span className="text-white font-semibold">sem o underline</span>{" "}
            ex:{" "}
            <span className="inline-block border-2 select-text z-50 bg-gray-700 bg-opacity-30 backdrop-blur-lg rounded-full border-none px-3 py-0 text-gray-300 md:text-xl ml-1 mt-2">
              fealq
            </span>
          </div>
        </div>
        <div
          className="text-white text-xl font-bold md:text-2xl mt-9"
          style={{ userSelect: "none" }}
        >
          Restaurar Banco:
        </div>
        <div
          className="flex items-center text-gray-300 md:text-xl mt-2 ml-4"
          style={{ userSelect: "none" }}
        >
          Entre no servidor de Produção e faça backup do banco do client ex:{" "}
          <span className="inline-block border-2 select-text z-50 bg-gray-700 bg-opacity-30 backdrop-blur-lg rounded-full border-none px-3 py-0 text-gray-300 md:text-xl ml-2">
            fealq_1210_prod.bak
          </span>{" "}
          copie e cole no servidor do ATC.
        </div>
        <div
          className="flex items-center text-gray-300 md:text-xl mt-2 ml-4"
          style={{ userSelect: "none" }}
        >
          Entre no SSMS, caso o cliente já existir no ATC, exclua o banco e
          restaure, ao contrario apenas restaure o banco.
        </div>
        <div
          className="flex flex-col items-center mt-4"
          style={{ userSelect: "none" }}
        >
          <h3 className="text-purple-500 text-2xl font-semibold mb-4">
          não se esqueça de marcar esta opção na hora de restaurar
          </h3>
          <div
            className="relative"
            onMouseEnter={() => setShowButtonRestore(true)} // Mostra o botão ao passar o mouse
            onMouseLeave={() => setShowButtonRestore(false)} // Esconde o botão ao sair
          >
            <img
              src="../public/restore_database.png" // Caminho da imagem
              alt="Exemplo de Restaurar Banco"
              className={`${
                expandedImage === "Exemplo"
                  ? "w-[90vw] h-[90vh] fixed top-0 left-0 right-0 bottom-0 m-auto z-50"
                  : "w-[50vw] h-auto transition-transform duration-300 transform hover:scale-105"
              } rounded object-cover cursor-pointer`}
              onClick={() => handleImageClick("Exemplo")}
            />
            {/* Mostra o botão apenas se o mouse estiver sobre a imagem */}
            {showButtonRestore && (
              <button
                className="absolute inset-0 flex justify-center items-center text-white bg-gray-700 bg-opacity-30 py-2 px-4 rounded z-50"
                onClick={() => handleImageClick("Exemplo")}
              >
                Clique para Ampliar
              </button>
            )}
          </div>
        </div>
        {/* Background overlay when image is expanded */}
        {expandedImage && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-10 z-50" // Ajustando a opacidade para 70%
            onClick={() => setExpandedImage(null)} // Fecha a imagem se clicar fora
          ></div>
        )}
      </div>
    </div>
  );
};

export default TextSection;

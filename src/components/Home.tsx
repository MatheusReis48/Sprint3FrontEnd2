const ContaUsuario = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <header className="bg-blue-500 text-white w-full py-4 px-6 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/logo.png" alt="PortoFix Logo" className="w-12 h-12 mr-4" />
            <h1 className="text-lg font-bold">PortoFix</h1>
          </div>
          <nav className="flex items-center space-x-4">
            <a href="/" className="hover:underline">Minha conta</a>
            <a href="/" className="hover:underline">Configurações e privacidade</a>
            <div className="flex items-center space-x-2">
              <input type="text" placeholder="Pesquisa" className="p-2 rounded" />
            </div>
            <button className="flex items-center">Sair</button>
          </nav>
        </header>
  
        <div className="grid grid-cols-3 gap-6 w-full max-w-6xl mt-10">
          {/* Dados do usuário */}
          <div className="col-span-1 bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-bold mb-4">Modelo do carro:</h2>
            <p className="text-gray-700">Jeep Compass 2023 Branco</p>
  
            <h2 className="text-xl font-bold mt-6 mb-4">Nome completo:</h2>
            <p className="text-gray-700">José Fernando da Silva Torres</p>
  
            <h2 className="text-xl font-bold mt-6 mb-4">Notificações recentes:</h2>
            <ul className="list-disc ml-5">
              <li>Falta de combustível</li>
              <li>Freio de mão está acionado</li>
              <li>Pneu precisa ser calibrado</li>
            </ul>
          </div>
  
          {/* Mapa com iframe */}
          <div className="col-span-2 bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-bold mb-4">Localização do veículo</h2>
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=-46.57421%2C-23.68153%2C-46.57421%2C-23.68153&layer=mapnik&marker=-23.68153%2C-46.57421"
              style={{ border: 0, width: '100%', height: '400px' }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContaUsuario;
  
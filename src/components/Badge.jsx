const Badge = () => {
    return (
      <div className="absolute top-[25%] left-[10%] flex flex-col items-center z-50">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-700 text-white rounded-full text-xl font-bold">
          <span>1</span>
        </div>
        <div className="mt-1 w-0.5 h-[700px] bg-gray-700" /> {/* Reta abaixo do primeiro Badge */}
        {/* Segunda bolinha */}
        <div className=" flex items-center justify-center w-12 h-12 bg-gray-700 text-white rounded-full text-xl font-bold mt-2"> {/* Ajuste a margem superior se necessário */}
          <span>2</span>
        </div>
        <div className="mt-1 w-0.5 h-[900px] bg-gray-700" /> {/* Reta abaixo do segundo Badge */}
      </div>
    );
  };
  
  export default Badge;
  
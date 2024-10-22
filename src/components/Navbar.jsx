const Navbar = () => {
  return (
    <div>
      <div className="fixed top-4 left-6 text-purple-500 text-4xl font-bold cursor-pointer">
        Wiki!
      </div>
      <div className="absolute top-12 left-0 right-0 bg-gray-700 bg-opacity-30 backdrop-blur-lg z-50 p-1 rounded-full w-1/5 mx-auto">
        <div className="flex justify-center">
          <ul className="flex space-x-4">
            <li>
              <p
                className="text-white font-semibold rounded-lg p-2 transition-colors duration-300 hover:text-purple-500"
                style={{ userSelect: "none" }}
              >
                Atualizar o ATC para Master
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

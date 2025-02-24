
export const MovieFilters = () => {
  return (
    <div>
    <h2 className='font-sans font-bold text-[28px] m-0 mb-[20px] pl-[50px] pt-[50px]'>Películas Populares</h2>
    <div className='flex flex-col items-center gap-[18px]'>
        <button className='w-[80%] p-[19px_18px] bg-white rounded-lg border-none shadow-[1px_1px_10px_rgba(0,0,0,0.3)] cursor-pointer flex justify-between items-center text-[19px] font-bold'>
          <span>Ordenar</span> <span className="inline-block w-[22px] h-[22px] bg-[url('/src/assets/images/flecha.svg')] bg-no-repeat bg-[100%_100%]"></span>
        </button>
        <button className='w-[80%] p-[19px_18px] bg-white rounded-lg border-none shadow-[1px_1px_10px_rgba(0,0,0,0.3)] cursor-pointer flex justify-between items-center text-[19px] font-bold'>
          <span>Dónde se puede ver</span> <span className="inline-block w-[22px] h-[22px] bg-[url('/src/assets/images/flecha.svg')] bg-no-repeat bg-[100%_100%]"></span>
        </button>
        <button className='w-[80%] p-[19px_18px] bg-white rounded-lg border-none shadow-[1px_1px_10px_rgba(0,0,0,0.3)] cursor-pointer flex justify-between items-center text-[19px] font-bold'>
          <span>Filtros</span> <span className="inline-block w-[22px] h-[22px] bg-[url('/src/assets/images/flecha.svg')] bg-no-repeat bg-[100%_100%]"></span>
        </button>

        <button className='w-[80%] py-4 border-none bg-[#ECECEC] text-[21px] font-bold text-[#767676] rounded-[30px]'>
          Buscar
        </button>
    </div>
  </div>
  );
};

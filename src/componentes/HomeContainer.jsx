import React from 'react'

const HomeContainer = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full' id='home'>
      <div className='py-2 flex-1 flex flex-col items-start justify-center gap-4'>
        <div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full'>
          <p className='text-base text-orange-500 font-semibold'>
            Ordena y Recoge
          </p>
          <div>

          </div>
        </div>

        <p className='text-[2.5rem] lg:text-[3rem] font-bold tracking-wide text-headingColor'>
          La Mejor manera de pedir comida dentro de
          <span className='text-orange-500 text-[3rem] lg:text-[4rem]'>la Universidad</span>
        </p>
        <p className='text-base text-textColor text-center md:text-left'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <button type='button' className='bg-gradient-to-br md:mt-20 from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100'>Ordena Ahora</button>
      </div>
      <div className='py-2 md:mt-10 flex-1 bg-gradient-to-b from-orange-400 to-primary rounded-3xl'></div>
    </section>
  )
}

export default HomeContainer
import './styles/main.css'
import logoESports from './assets/Logo-nlw-esport.svg'
import { MagnifyingGlassPlus } from 'phosphor-react';

function App() {

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={ logoESports } alt="Logo da eSports" />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='text-transparent bg-clip-text bg-nlwGradient'>duo</span> esta aqui
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="./image1.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-gameGradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>League of Legends</strong>
            <span className='text-zinc-300 text-sm block'>anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="./image2.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-gameGradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Dota 2</strong>
            <span className='text-zinc-300 text-sm block'>anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="./image3.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-gameGradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>CS GO</strong>
            <span className='text-zinc-300 text-sm block'>anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="./image4.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-gameGradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Apex Leg</strong>
            <span className='text-zinc-300 text-sm block'>anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="./image5.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-gameGradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Fortnite</strong>
            <span className='text-zinc-300 text-sm block'>anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="./image6.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-gameGradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>World of Craft</strong>
            <span className='text-zinc-300 text-sm block'>anúncios</span>
          </div>
        </a>
      </div>

      <div className='pt-1 bg-nlwGradient self-stretch rounded-lg mt-8 overflow-hidden'>
        <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
    
          <div>
            <strong className='text-2xl text-white font-black block'>Nao encontrou seu duo?</strong>
            <span className='text-zinc-400 block'>Publique um anúncio para encontrar novos players!</span>
          </div>
    
          <button className='py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600 flex gap-3 items-center'>
            <MagnifyingGlassPlus size={24}/>
            Publicar anuncio
          </button>

        </div>
      </div>
    
    </div>
  )
}

export default App

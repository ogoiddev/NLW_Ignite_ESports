import * as Dialog from '@radix-ui/react-dialog';
import logoESports from './assets/Logo-nlw-esport.svg';
import CreateAdBanner from './components/CreateAdBanner';
import { CreateAdModal } from './components/CreateAdModal';
import GameBanner from './components/GameBanner';
import './styles/main.css';

export default function App() {
  return (
    <div className='max-w-[1344px] min-w-[1024px] h-vw mx-auto flex flex-col items-center mt-20'>
      <img src={ logoESports } alt="Logo da eSports" />

      <h1 className='text-6xl text-white font-black mt-16'>
        Seu <span className='text-transparent bg-clip-text bg-nlwGradient'>duo</span> esta aqui
      </h1>
      
      <GameBanner />
      <div className='grid grid-cols-6 gap-6 mt-16 overflow-hidden min-w-full'>

      </div>

        <Dialog.Root>
          <CreateAdBanner/>
          <CreateAdModal/>
        </Dialog.Root>
    
    </div>
  )
}

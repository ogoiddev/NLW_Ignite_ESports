import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog'

export default function CreateAdBanner() {
  return (
    <div className='pt-1 bg-nlwGradient self-stretch rounded-lg mt-8 overflow-hidden'>
    <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>

      <div>
        <strong className='text-2xl text-white font-black block'>Nao encontrou seu duo?</strong>
        <span className='text-zinc-400 block'>Publique um anúncio para encontrar novos players!</span>
      </div>

      <Dialog.Trigger className='py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600 flex gap-3 items-center'>
        <MagnifyingGlassPlus size={24}/>
        Publicar anuncio
      </Dialog.Trigger>

    </div>
  </div>

  );
}

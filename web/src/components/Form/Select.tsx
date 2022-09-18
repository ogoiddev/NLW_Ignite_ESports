import * as Select from '@radix-ui/react-select';
import { CaretDoubleDown, CaretDoubleUp, Check } from 'phosphor-react';
import { useContext } from 'react';
import { APIContext } from '../../context/Provider';


export default () => {
  const { games, gameSelected, setGameSelected } = useContext(APIContext);
  
    return (
    <div className='flex flex-col gap-2'>
      <label htmlFor="Game" className='font-semibold'>Qual o game?</label>
        <Select.Root
          name='Game'
          value={gameSelected}
          onValueChange={setGameSelected}
          >
          <Select.Trigger 
              aria-label="game"
              className='bg-zinc-900 py-3 px-4 rounded flex justify-between items-center'>
            <Select.Value placeholder="Seleciona o game que deseja jogar"/>
            <CaretDoubleDown size={20} className="text-zinc-400"/>
          </Select.Trigger>

          <Select.Portal>
            <Select.Content className='w-[80%] bg-violet-200 p-2 rounded gap-1 overflow-hidden'>

              <Select.ScrollUpButton>
                <CaretDoubleUp size={20}/>
              </Select.ScrollUpButton>

              <Select.Viewport>

                <Select.Group>
                  <Select.Label className="text-xl p-2 font-bold" > Escolha o seu Game </Select.Label>
                    { games.map(game => {
                      return (
                        <Select.SelectItem 
                          key={game.id} 
                          value={game.id} 
                          className="relative rounded p-2 flex justify-start items-center hover:bg-violet-600 hover:text-white hover:font-bold">
                          
                            <Select.ItemIndicator className='absolute mx-1'>
                              <Check weight="bold" size={16} />
                            </Select.ItemIndicator>
                          
                          <Select.ItemText className="block">{game.title}</Select.ItemText>
                        </Select.SelectItem>
                      )})}                
                </Select.Group>

                <Select.Separator />
              </Select.Viewport>

              <Select.ScrollDownButton>
                <CaretDoubleDown />
              </Select.ScrollDownButton>

            </Select.Content>
          </Select.Portal>
        </Select.Root>
    </div>
  )
}


// import * as Select from '@radix-ui/react-select';
// import { CaretDoubleDown } from 'phosphor-react';
// import { useContext } from 'react';
// import { APIContext } from '../../context/APIProvider';

// export function Select() {


//   return (
//     <div className='flex flex-col gap-2'>
//               <label htmlFor="game" className='font-semibold'>Qual o game?</label>

//               <Select.Root>
//                 <Select.Trigger className='bg-zinc-900 py-3 px-4 rounded flex justify-between items-center'>
//                   <Select.Value placeholder="Seleciona o game que deseja jogar"/>
//                   <CaretDoubleDown />
//                 </Select.Trigger>

//                 <Select.Portal >
//                   <Select.Content >
//                     <Select.ScrollUpButton />
//                     <Select.Viewport className='w-[80%] bg-violet-200 p-2 rounded gap-1 h-2'>
                    
//                       <Select.Group >
//                         <Select.Label className="text-xl p-2 font-bold">Escolha o seu Game</Select.Label>
//                           { games.map(game => {
//                             return (
//                               <Select.Item key={game.id} value={game.title} className="rounded p-2 flex justify-start items-center hover:bg-violet-600 hover:text-white hover:font-bold">
                                
//                                   <Select.ItemIndicator className='absolute' className="mx-1">
//                                     <Check weight="bold" size={16} />
//                                   </Select.ItemIndicator className='absolute'>
                                
//                                 <Select.ItemText className="block">{game.title}</Select.ItemText>
//                               </Select.Item>
//                             )})}
//                       </Select.Group>
//                       <Select.SelectSeparator />
//                     </Select.Viewport>
//                     <Select.ScrollDownButton />
//                   </Select.Content>
//                 </Select.Portal>
//               </Select.Root>
              
//             
//   );
// }

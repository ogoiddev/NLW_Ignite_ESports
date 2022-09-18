import * as Checkbox from '@radix-ui/react-checkbox';
import * as Dialog from "@radix-ui/react-dialog";
import * as ToggleGroup from '@radix-ui/react-toggle-group';

import Select from './Form/Select'

import { Check, GameController } from "phosphor-react";
import { Input } from "./Form/Input";
import { FormEvent, useState, useContext } from 'react';
import { APIContext } from '../context/Provider';
import axios from 'axios';

export function CreateAdModal() {
  const [weekDays, setWeekDays] = useState<string[]>([])
  const [useVoiceChannel, setUseVoiceChannel] = useState(false)
  const { gameSelected } = useContext(APIContext)

  async function handleCreateAd(event: FormEvent) {
    // event.preventDefault();
    
    
    const formData = new FormData(event.target as HTMLFormElement)
    const data = Object.fromEntries(formData);
    console.log(data);
    console.log(gameSelected);
    try {
      
      await axios.post(`http://localhost:3333/games/${gameSelected}/ads`, {
        
        name: data.name,
        yearsPlaying: Number(data.yearsPlaying),
        discord: data.discord,
        weekDays: weekDays.map(Number),
        hourStart: data.hourStart,
        hourEnd: data.hourEnd,
        useVoiceChannel: useVoiceChannel
        
      });

      console.log(weekDays.map(Number));
      alert('Anuncio criado com sucesso')
    } catch(err) {
      console.log(err);      
      alert('Erro ao criar o anuncio')
    }
  }
    
  return (
    <Dialog.Portal>
    <Dialog.Overlay 
      className='bg-black/60 inset-0 fixed'
    >
      <Dialog.Content
        className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25' 
      >
        <Dialog.Title
          className='text-3xl font-black'
        >Publique um anuncio</Dialog.Title>

        
          <form onSubmit={handleCreateAd} className='mt-8 flex flex-col gap-4'>

          <Select/>

            <div className='flex flex-col gap-2'>
              <label htmlFor="name" >Nome ou nickname?</label>
              <Input name='name' id="name" placeholder="Teu nick game name"/>
            </div>

            <div className='grid grid-cols-2 gap-6'>
              <div className='flex flex-col gap-2'>
                <label htmlFor="yearsPlaying" >Joga ha quantos anos?</label>
                <Input name='yearsPlaying' id="yearsPlaying" placeholder="tudo bem ser 3"/>
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="discord" >Qual o seu discord?</label>
                <Input name='discord' id="discord" placeholder="Usuário"/>
              </div>
            </div>

            <div className='flex gap-6'>
              <div className='flex flex-col gap-2'>
                <label htmlFor="weekDays" >Quando costuma jogar?</label>

                
                <ToggleGroup.Root 
                  type='multiple' 
                  className='grid grid-cols-4 gap-2'
                  value={weekDays}
                  onValueChange={setWeekDays}

                >
                  <ToggleGroup.Item
                    value='0' 
                    title="Domingo"
                    className={`w-8 h-8 rounded ${weekDays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                  >
                    D
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value='1'
                    title="Segunda"
                    className={`w-8 h-8 rounded ${weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                  >
                    S
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value='2' 
                    title="Terça"
                    className={`w-8 h-8 rounded ${weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                  >
                    T
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value='3' 
                    title="Quarta"
                    className={`w-8 h-8 rounded ${weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                  >
                    Q
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value='4' 
                    title="Quinta"
                    className={`w-8 h-8 rounded ${weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                  >
                    Q
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value='5'
                    title="Sexta"
                    className={`w-8 h-8 rounded ${weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                  >
                    S
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    value='6' 
                    title="Sábado"
                    className={`w-8 h-8 rounded ${weekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                  >
                    S
                  </ToggleGroup.Item>
                </ToggleGroup.Root>

              </div>
              <div className='flex flex-col gap-2 flex-1'>
                <label htmlFor="hourStart" >Qual horário do dia?</label>
                <div className='grid grid-cols-2 gap-2'>
                  <Input name='hourStart' id="hourStart" type="time" placeholder="De"/>
                  <Input name='hourEnd' id="hourEnd" type="time" placeholder="Ate"/>
                </div>
              </div>
            </div>

            <label className='mt-2 flex items-center gap-2 text-sm'>
              <Checkbox.Root 
                className="w-6 h-6 p-1 rounded bg-zinc-900"
                checked={useVoiceChannel}
                onCheckedChange={ (checked) => {
                  checked 
                  ? setUseVoiceChannel(true) 
                  : setUseVoiceChannel(false)
                }}  
              >
                
                <Checkbox.Indicator >
                  <Check className="w-4 h-4 text-emerald-400"/>
                </Checkbox.Indicator>

              </Checkbox.Root>
              Costume me conectar ao VoiceChannel
            </label>

            <footer className='mt-4 flex justify-end gap-4'>
              <Dialog.Close 
                className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'
                type='button'
              >
                Cancelar
              </Dialog.Close>
              <button 
                className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600'
                type='submit'
              >
                <GameController size={24}/>
                Encontrar duo
              </button>
            </footer>

          </form>
      

      </Dialog.Content>
    </Dialog.Overlay>
  </Dialog.Portal>
  );
}

import { FormEvent } from 'react'
import { X, User, Mail } from 'lucide-react'

import { Button } from '../../components/button'
import { Input } from '../../components/input'
import { ButtonIcon } from '../../components/button-icon'

interface ConfirmTripProps {
  closeConfirmTripModal: () => void
  createTrip: (event: FormEvent<HTMLFormElement>) => void
}

export function ConfirmTrip({closeConfirmTripModal, createTrip }: ConfirmTripProps) {
  return(
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 bg-zinc-900 shadow-shape space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Confirmar criação de viagem</h2>
            <ButtonIcon
              type="button"
              onClick={closeConfirmTripModal}
            >
              <X/>
            </ButtonIcon>
          </div>

          <p className="text-sm text-zinc-400">
            Para concluir a criação da viagem para <span className="text-zinc-100 font-semibold">Florianópolis, Brasil</span> nas datas de <span className="text-zinc-100 font-semibold">16 a 27 de Agosto de 2024</span> preencha seus dados abaixo:
          </p>
        </div>

        <form 
          action=""
          onSubmit={createTrip}
          className="space-y-3" 
        >

        <Input
          type="text"
          name="name"
          placeholder="Seu nome completo"
          icon={<User/>}
          variant="secondary"
          />
         
        <Input
          type="text"
          name="email"
          placeholder="Seu e-mail pessoal"
          icon={<Mail/>}
          variant="secondary"
        />

        <Button 
          type="submit"
          variant="primary"
          size="full"
        >
          Confirmar criação da viagem
        </Button>
      </form>
    </div>
  </div>
  )
}
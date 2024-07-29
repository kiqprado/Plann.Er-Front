import { FormEvent } from 'react'

import { X, AtSign, Plus } from 'lucide-react'

import { Button } from '../../components/button'
import { Input } from '../../components/input'
import { ButtonIcon } from '../../components/button-icon'

interface InviteGuestProps {
  closeGuestsModal: () => void
  emailsToInvite: string[]
  addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void
  removeEmailsFromInvites: (email: string) => void
}

export function InviteGuest({
  addNewEmailToInvite,
  closeGuestsModal, 
  emailsToInvite,
  removeEmailsFromInvites
}: InviteGuestProps) {

  return(
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 bg-zinc-900 shadow-shape space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Selecionar Convidados</h2>
          <ButtonIcon
            onClick={closeGuestsModal}
          >
            {<X/>}
          </ButtonIcon>
        </div>

          <p className="text-sm text-zinc-400 my-2">
            Os convidados irão receber e-mails para confirmar a participação na viagem.
          </p>

        <div className="flex flex-wrap gap-2">
          {emailsToInvite.map(email => {
            return(
              <div key={email} className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2">
                <span className="text-zinc-300">{email}</span>
                <ButtonIcon 
                  type="button"
                  onClick={() => removeEmailsFromInvites(email)}
                  size="small"
                >
                  <X/>
                </ButtonIcon>
              </div>
            )
           })}
        </div>

        <div className="w-full h-px bg-zinc-800"/>

          <form 
            action="" 
            onSubmit={addNewEmailToInvite} 
            className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2"
          >
            <Input
              type="email"
              name="email"
              icon={<AtSign/>}
              placeholder="Digite o e-mail do convidado"
              variant="primary"
            />

            <Button 
              type="submit"
            >
              Convidar
              <Plus className="size-5"/>
            </Button>
          </form>
        </div>
    </div>
  )
}
import { User, Mail, X } from "lucide-react"

import { Button } from "../../components/button"
import { ButtonIcon } from "../../components/button-icon"
import { Input } from "../../components/input"

interface ConfirmMembershipProps {
  closeConfirmMembership: () => void
}

export function ConfirmMembership({ closeConfirmMembership }: ConfirmMembershipProps ) {
  return(
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 bg-zinc-900 shadow-shape space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Confirmar participação</h2>
            <ButtonIcon 
              type="button"
              onClick={closeConfirmMembership}
            >
              <X/>
            </ButtonIcon>
          </div>

          <p className="text-sm text-zinc-400">
            Você foi convidado(a) para participar de uma viagem para <span className="font-bold text-zinc-100">Florianópolis, Brasil</span> nas datas de <span className="font-bold text-zinc-100">16 a 27 de Agosto de 2024</span>.
          </p>

          <p className="text-sm text-zinc-400">
            Para confirmar sua presença na viagem, preencha os dados abaixo:
          </p>
        </div>

        <form 
          action=""
          className="space-y-3" 
        >

          <div className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Input
              type="text"
              name="name"
              placeholder="Seu nome completo"
              icon={<User/>}
            />
          </div>

          <div className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Input
              type="url"
              name="email"
              placeholder="Seu e-mail"
              icon={<Mail/>}
            />
          </div>

          <Button 
            type="submit"
            size="full"
          >
            Confirmar minha presença
          </Button>
        </form>
      </div>
    </div>
  )
}
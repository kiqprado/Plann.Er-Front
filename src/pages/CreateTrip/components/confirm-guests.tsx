import { ArrowRight, UserRoundPlus } from 'lucide-react'

import { Button } from '../../../components/button'

interface ConfirmGuestsProps {
  openGuestsModal: () => void
  emailsToInvite: string[]
  openConfirmTripModal: () => void
}

export function ConfirmGuests({
  openGuestsModal,
  emailsToInvite,
  openConfirmTripModal
}: ConfirmGuestsProps) {

  return(
    <div className="h-16 bg-zinc-900 pr-4 rounded-xl flex items-center shadow-shape gap-3">
      <Button 
        onClick={openGuestsModal}
        variant="tertiary"
      >
        <UserRoundPlus className="size-5 text-zinc-400"/>
        {
          emailsToInvite.length > 0 ? (
            <span className="text-zinc-100 text-lg flex-1"> {emailsToInvite.length} pessoas convidadas</span>
          ) : (
            <span className="text-zinc-400 text-lg flex-1">Quem estará na viagem?</span>
          )
        }
      </Button>

      <Button
        onClick={openConfirmTripModal}
        variant="primary"
        size="default"
      >
        Confirmar viagem
        <ArrowRight className="size-5"/>
      </Button>
    </div>
  )
}
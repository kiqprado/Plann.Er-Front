import { MapPin, Calendar, ArrowRight, Settings2 } from 'lucide-react'

import { Button } from '../../../components/button'
import { Input } from '../../../components/input'

interface DestinationAndDateProps {
  hasGuestsInput: boolean
  closeGuestsInput: () => void
  openGuestsInput: () => void
}

export function DestinationAndDate( {
  hasGuestsInput,
  closeGuestsInput,
  openGuestsInput,
}: DestinationAndDateProps) {
  
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <Input
        placeholder="Para onde você vai?"
        type="text"
        disabled={hasGuestsInput}
        icon={<MapPin/>}
      />
      

      <Input
        placeholder="Quando?"
        type="text"
        disabled={hasGuestsInput}
        icon={<Calendar/>}
        variant="tertiary"
      />

      <div className="w-px h-6 bg-zinc-800"/>

      {hasGuestsInput ? (
        <Button
          onClick={closeGuestsInput}
          variant="secondary"
        >
          Alterar Local/Data <Settings2 className="size-5"/>
          </Button>) : 
        (
          <Button 
            onClick={openGuestsInput}
            variant="primary"
          >
            Continuar
            <ArrowRight className="size-5"/>
          </Button>
        )}
    </div>
  )
}
import { useState } from 'react'
import { DateRange, DayPicker } from 'react-day-picker'
import "react-day-picker/dist/style.css"
import { format } from 'date-fns'

import { MapPin, Calendar, ArrowRight, Settings2, X } from 'lucide-react'

import { Button } from '../../../components/button'
import { ButtonIcon } from '../../../components/button-icon'
import { Input } from '../../../components/input'


interface DestinationAndDateProps {
  hasGuestsInput: boolean
  closeGuestsInput: () => void
  openGuestsInput: () => void

  setDestination: (destination: string) => void
  startsAndFinishes: DateRange | undefined
  setStartsAndFinishes: (dates: DateRange | undefined) => void
}

export function DestinationAndDate( {
  hasGuestsInput,
  closeGuestsInput,
  openGuestsInput,
  setDestination,
  startsAndFinishes,
  setStartsAndFinishes,
}: DestinationAndDateProps) {

  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)

  function openDatePicker() {
    return setIsDatePickerOpen(true)
  }

  function closeDatePicker() {
    return setIsDatePickerOpen(false)
  }

  const displayedDate = startsAndFinishes && startsAndFinishes.from && startsAndFinishes.to
    ? format(startsAndFinishes.from, "d' de 'LLL").concat(' até ').concat(format(startsAndFinishes.to, "d' de 'LLL"))
    : null
  
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <Input
        placeholder="Para onde você vai?"
        type="text"
        disabled={hasGuestsInput}
        icon={<MapPin/>}
        onChange={event => setDestination(event.target.value)}
      />
      

      <Button
        disabled={hasGuestsInput}
        variant="specialCase"
        size="specialCase"
        onClick={openDatePicker}
      >
        <Calendar className="size-5"/>
        { displayedDate || 'Quando?' }
      </Button>

      {
        isDatePickerOpen && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="rounded-xl py-5 px-6 bg-zinc-900 shadow-shape space-y-5">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Selecione a data</h2>
                  <ButtonIcon
                    type="button"
                    onClick={closeDatePicker}
                  >
                    <X/>
                  </ButtonIcon>
                </div>

                <DayPicker 
                  mode="range"
                  selected={startsAndFinishes}
                  onSelect={setStartsAndFinishes}
                />
              </div>
            </div>
          </div>
        )
      }

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
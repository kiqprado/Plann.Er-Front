import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { api } from '../../lib/axios'

import { CircleDashed, CircleCheck, UserCog } from 'lucide-react'

import { Button } from '../../components/button'

interface GuestListProps {
  openConfirmMembership: () => void
}

interface Participant {
  id: string
  name: string | null
  email: string
  is_confirmed: boolean
}

export function GuestsList({ openConfirmMembership }: GuestListProps ) {
  const { tripId } = useParams()
  const [ participants, setParticipants ] = useState<Participant[]>([])

  useEffect(() => {
    api.get(`/trips/${tripId}/participants`).then(response => setParticipants(response.data.participants))
  }, [tripId])

  return(
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>

      {participants.map((participant, index) => {
        return(
          <div key={participant.id} className="flex items-center justify-between gap-6">
            <div className="flex flex-col gap-1.5">
              <span className="font-medium text-zinc-100">{participant?.name ?? `Convidado ${index}`}</span>
              <span className="text-sm text-zinc-400 truncate">{participant?.email}</span>
            </div>

            {
              participant.is_confirmed ? (
                <CircleCheck className="size-5 text-lime-400 shrink-0" />
              ) : (
                <CircleDashed className="size-5 text-zinc-400 shrink-0" />
              )
            }
          </div>
        )
      })}

      <Button
        variant="secondary"
        size="full"
        onClick={openConfirmMembership}
      >
        <UserCog className="size-5"/>
        Gerenciar convidados
      </Button>
    </div>
  )
}
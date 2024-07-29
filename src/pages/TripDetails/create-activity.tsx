import { FormEvent } from 'react'
import { api } from '../../lib/axios'
import { useParams } from 'react-router-dom'

import { Calendar, Tag, X } from 'lucide-react'

import { Button } from '../../components/button'
import { Input } from '../../components/input'
import { ButtonIcon } from '../../components/button-icon'

interface CreateCalendarProps {
  closeCreateActivity: () => void
}

export function CreateActivity({closeCreateActivity}: CreateCalendarProps) {

  const { tripId } = useParams()

  async function createActivity(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)

    const activity = data.get('activity')?.toString()
    const occurs_at = data.get('occurs_at')?.toString()

    await api.post(`/trips/${tripId}/activities`, {
      title: activity,
      occurs_at
    })

    window.document.location.reload()
  }
  
  return(
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 bg-zinc-900 shadow-shape space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
            <ButtonIcon 
              type="button"
              onClick={closeCreateActivity}
            >
              <X/>
            </ButtonIcon>
          </div>

          <p className="text-sm text-zinc-400">
            Todos os convidados podem visualizar as atividades.
          </p>
        </div>

        <form 
          action=""
          className="space-y-3"
          onSubmit={createActivity} 
        >

          <div className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Input
              type="text"
              name="activity"
              placeholder="Qual a atividade?"
              icon={<Tag/>}
            />
          </div>

          <div className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Input
              type="datetime-local"
              name="occurs_at"
              placeholder="Data e horário da atividade"
              icon={<Calendar/>}
            />
          </div>

          <Button 
            type="submit"
            size="full"
          >
            Salvar atividade
          </Button>
        </form>
      </div>
    </div>
  )
}
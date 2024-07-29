import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { CircleCheck } from 'lucide-react'

interface Activity {
  date: string
  activities: {
    id: string
    title: string
    occurs_at: string
  }[]
}

export function Activities() {
  const { tripId } = useParams()
  const [ activities, setActivities ] = useState<Activity[]>([])

  useEffect(() => {
    api.get(`/trips/${tripId}/activities`).then(response => setActivities(response.data.activities) )
  }, [tripId])

  return(
    <div className="space-y-8">

      {activities.map(activity => {
        return(
          <div key={activity.date} className="space-y-2.5">
            <div className=" flex items-baseline gap-2">
              <h3 className="text-xl font-semibold text-zinc-300">Dia {format(activity.date, 'd')}</h3>
              <span className="text-xs text-zinc-500">{format(activity.date, 'EEEE', { locale: ptBR })}</span>
            </div>
            {activity.activities.length === 0 ? (
              <p className="text-xs text-zinc-500">Nenhuma atividade cadastrada nesta data.</p>
             ): (
              <div className='space-y-3'>
                {activity.activities.map(nameOf => {
                  return(
                    <div key={nameOf.id} className="space-y-2.5">
                      <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                        <CircleCheck className="text-lime-300"/>
                        <span className="text-zinc-100">{nameOf.title}</span>  
                        <span className=" text-sm text-zinc-400 ml-auto">{format(nameOf.occurs_at, 'HH:mm')} hrs</span>
                      </div>
                    </div>
                  )
                })}
              </div>
              )
            }
          </div>
        )
      })}
      
      </div>
  )
}
import { CircleCheck } from 'lucide-react'

export function Activities() {
  return(
    <div className="space-y-8">
      <div className="space-y-2.5">
        <div className=" flex items-baseline gap-2">
          <h3 className="text-xl font-semibold text-zinc-300">Dia 17</h3>
          <span className="text-xs text-zinc-500">Sábado</span>
        </div>

        <p className="text-xs text-zinc-500">Nenhuma atividade cadastrada nesta data.</p>
        </div>

        <div className="space-y-2.5">
          <div className=" flex items-baseline gap-2">
            <h3 className="text-xl font-semibold text-zinc-300">Dia 18</h3>
            <span className="text-xs text-zinc-500">Domingo</span>
          </div>

          <div className="space-y-2.5">
            <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
              <CircleCheck className="text-lime-300"/>
              <span className="text-zinc-100">Corrida de Kart</span>  
              <span className=" text-sm text-zinc-400 ml-auto">14:00h</span>
            </div>
          </div>

          <div className="space-y-2.5">
            <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
              <CircleCheck className="text-lime-300"/>
              <span className="text-zinc-100">Corrida de Kart</span> 
              <span className=" text-sm text-zinc-400 ml-auto">14:00h</span>
            </div>
          </div>
        </div>
      </div>
  )
}
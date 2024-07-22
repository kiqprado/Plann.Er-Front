import { Plus } from 'lucide-react'

import { Button } from '../../../components/button'

interface PinActivityProps {
  openCreateActivity: () => void
}

export function PinActivity({openCreateActivity}: PinActivityProps) {
  return(
    <div className="flex items center justify-between">
      <h2 className=" text-3xl text-zinc-50 font-semibold">Atividades</h2>
      <Button 
        onClick={openCreateActivity}
      >
        <Plus className="size-5"/>
        Cadastrar atividade
      </Button>
    </div>
  )
}
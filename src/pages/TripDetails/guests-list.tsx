import { CircleDashed, CircleCheck, UserCog } from 'lucide-react'

import { Button } from '../../components/button'

interface GuestListProps {
  openConfirmMembership: () => void
}

export function GuestsList({ openConfirmMembership }: GuestListProps ) {
  return(
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>

      <div className="flex items-center justify-between gap-6">
        <div className="flex flex-col gap-1.5">
          <span className="font-medium text-zinc-100">Jéssica White</span>
          <span className="text-sm text-zinc-400 truncate">jessica.white44@yahoo.com</span>
        </div>

        <CircleDashed className="size-5 text-zinc-400 shrink-0"/>
      </div>

      <div className="flex items-center justify-between gap-6">
        <div className="flex flex-col gap-1.5">
          <span className="font-medium text-zinc-100">Dra. Rita Pacocha</span>
          <span className="text-sm text-zinc-400 truncate">lacy.stiedemann@gmail.com</span>
        </div>

        <CircleCheck className="size-5 text-lime-300 shrink-0"/>
      </div>

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
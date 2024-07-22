import { Link2, Plus } from 'lucide-react'

import { Button } from '../../components/button'

interface ImportantLinksProps {
  openNewImportantLink: () => void
}


export function ImportantLinks({openNewImportantLink}: ImportantLinksProps) {
  
  return(
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links importantes</h2>

      <div className="flex items-center justify-between gap-6">
        <div className="flex flex-col gap-1.5">
          <span className="font-medium text-zinc-100">Reserva do AirBnB</span>
          <a href="#" className="text-xs text-zinc-400 truncate hover:text-zinc-200">https://www.airbnb.com.br/rooms/1047000113434</a>
        </div>

        <Link2 className="size-5 text-zinc-400 shrink-0"/>
      </div>

      <div className="flex items-center justify-between gap-6">
        <div className="flex flex-col gap-1.5">
          <span className="font-medium text-zinc-100">Reserva do AirBnB</span>
          <a href="#" className="text-xs text-zinc-400 truncate hover:text-zinc-200">https://www.notion.com/pages/1047000112354648336?adults=13&children=0&infants=0&pets=0&wishlist_item_id=11003621872995&check_in=2024-08-17&check_out=2024-08-26&source_impression_id=p3_1717600906_P3DL0E-bJZzguEci&previous_page_section_name=1000
          </a>
        </div>

        <Link2 className="size-5 text-zinc-400 shrink-0"/>
      </div>

      <Button
        variant="secondary"
        size="full"
        onClick={openNewImportantLink}
      >
        <Plus className="size-5"/>
        Cadastrar novo link
      </Button>
    </div>
  )
}
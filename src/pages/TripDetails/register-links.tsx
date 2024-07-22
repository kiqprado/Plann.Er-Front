import { X, Tag, Link2 } from 'lucide-react'

import { ButtonIcon } from '../../components/button-icon'
import { Button } from '../../components/button'
import { Input } from '../../components/input'

interface RegisterLinksProps {
  closeNewImportantLink: () => void
}

export function RegisterLinks({closeNewImportantLink}: RegisterLinksProps) {
  return(
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 bg-zinc-900 shadow-shape space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Cadastrar link</h2>
            <ButtonIcon 
              type="button"
              onClick={closeNewImportantLink}
            >
              <X/>
            </ButtonIcon>
          </div>

          <p className="text-sm text-zinc-400">
            Todos os convidados podem visualizar os links importantes.
          </p>
        </div>

        <form 
          action=""
          className="space-y-3" 
        >

          <div className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Input
              type="text"
              name="title"
              placeholder="Título do link"
              icon={<Tag/>}
            />
          </div>

          <div className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Input
              type="url"
              name="url"
              placeholder="URL"
              icon={<Link2/>}
            />
          </div>

          <Button 
            type="submit"
            size="full"
          >
            Salvar link
          </Button>
        </form>
      </div>
    </div>
  )
}
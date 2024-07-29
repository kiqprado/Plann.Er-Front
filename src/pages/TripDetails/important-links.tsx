import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { api } from '../../lib/axios'

import { Link2, Plus } from 'lucide-react'

import { Button } from '../../components/button'

interface Links {
  id: string
  title: string
  url: string
}
interface ImportantLinksProps {
  openNewImportantLink: () => void
}

export function ImportantLinks({openNewImportantLink}: ImportantLinksProps) {
  const { tripId } = useParams()
  const [ links, setLinks] = useState<Links[]>([])

  useEffect(() => {
    api.get(`/trips/${tripId}/links`).then(response => setLinks(response.data.links))
  }, [tripId])
  
  return(
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links importantes</h2>
      {links.map(link => {
        return(
          <div key={link.id} className="flex items-center justify-between gap-6">
            <div className="flex flex-col gap-1.5">
              <span className="font-medium text-zinc-100">{link.title}</span>
              <a href={link.url} target="_blank" className="text-xs text-zinc-400 truncate hover:text-zinc-200">{link.url}</a>
            </div>

            <Link2 className="size-5 text-zinc-400 shrink-0"/>
          </div>
        )
      })}

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
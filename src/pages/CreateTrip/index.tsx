import { api } from '../../lib/axios'

import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DateRange } from 'react-day-picker'

import { InviteGuest } from './invite-guest'
import { ConfirmTrip } from './confirm-trip'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { DestinationAndDate } from './components/destination-and-date'
import { ConfirmGuests } from './components/confirm-guests'


export function CreateTrip() {
  const navigate = useNavigate()

  const [ hasGuestsInput, setHasGuestsInput ] = useState(false)
  const [ guestsModalOpen, setGuestsModalOpen ] = useState(false)

  const [ emailsToInvite, setEmailsToInvite ] = useState([
    'ainzedamanga@mangadoze.com'
  ])

  const [ confirmTripModal, setConfirmTripModal ] = useState(false)

  const [ destination, setDestination ] = useState('')
  const [ ownerName, setOwnerName ] = useState('')
  const [ ownerEmail, setOwnerEmail ] = useState('')
  const [ startsAndFinishes, setStartsAndFinishes ] = useState<DateRange | undefined>()

  function openGuestsInput() {
    setHasGuestsInput(true)
  }

  function closeGuestsInput() {
    setHasGuestsInput(false)
  }

  function openGuestsModal() {
    setGuestsModalOpen(true)
  }

  function closeGuestsModal() {
    setGuestsModalOpen(false)
  }

  function openConfirmTripModal() {
    setConfirmTripModal(true)
  }

  function closeConfirmTripModal() {
    setConfirmTripModal(false)
  } 

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()

    if(!email) {
      return
    }

    if(emailsToInvite.includes(email)) {
      return alert('Este E-mail já está convidado!')
    }

    setEmailsToInvite([
      ...emailsToInvite,
      email
    ])

    event.currentTarget.reset()
  }

  function removeEmailsFromInvites(emailToRemove: string) {
    const newEmailsList = emailsToInvite.filter(email=> email !== emailToRemove)

    setEmailsToInvite(newEmailsList)
  }

  async function createTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if(!destination) {
      return alert('Defina um rumo a sua viagem.')
    }
  
    if(!startsAndFinishes?.from || !startsAndFinishes?.to) {
      return alert('Defina as datas de sua viagem!')
    }
  
    if(!ownerName || !ownerEmail) {
      return alert('Digite os campos com seus dados para continuar a sua viagem.')
    }
  
    const response = await api.post('/trips', {
      destination,
      starts_at: startsAndFinishes.from,
      ends_at: startsAndFinishes.to,
      emails_to_invite: emailsToInvite,
      owner_name: ownerName,
      owner_email: ownerEmail
    })
  
    const { tripId } = response.data

    navigate(`/trips/${tripId}`)
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">

      <div className="w-full max-w-3xl px-6 text-center space-y-10">
        <Header/>

        <div className='space-y-4'>
          <DestinationAndDate
            closeGuestsInput={closeGuestsInput}
            hasGuestsInput={hasGuestsInput}
            openGuestsInput={openGuestsInput}
            setDestination={setDestination}
            startsAndFinishes={startsAndFinishes}
            setStartsAndFinishes={setStartsAndFinishes}
          />

          {
            hasGuestsInput && (
              <ConfirmGuests
                emailsToInvite={emailsToInvite}
                openConfirmTripModal={openConfirmTripModal}
                openGuestsModal={openGuestsModal}
              />
            )
          }
        </div>
       

        <Footer/>
      </div>

      {
        guestsModalOpen && (
          <InviteGuest
          addNewEmailToInvite={addNewEmailToInvite}
          closeGuestsModal={closeGuestsModal}
          emailsToInvite={emailsToInvite}
          removeEmailsFromInvites={removeEmailsFromInvites}
          />
        )
      }

      {
        confirmTripModal && (
          <ConfirmTrip
          closeConfirmTripModal={closeConfirmTripModal}
          createTrip={createTrip}
          setOwnerName={setOwnerName}
          setOwnerEmail={setOwnerEmail}
          />
        )
      }
    </div>
  )
}
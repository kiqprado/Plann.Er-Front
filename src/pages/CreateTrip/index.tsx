import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { InviteGuest } from './invite-guest'
import { ConfirmTrip } from './confirm-trip'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { DestinationAndDate } from './components/destination-and-date'
import { ConfirmGuests } from './components/confirm-guests'


export function CreateTrip() {
  const navigate = useNavigate()

  const [hasGuestsInput, setHasGuestsInput] = useState(false)
  const [guestsModalOpen, setGuestsModalOpen] = useState(false)

  const [emailsToInvite, setEmailsToInvite] = useState([
    'ainzedamanga@mangadoze.com'
  ])

  const [confirmTripModal, setConfirmTripModal] = useState(false)

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

  function createTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    navigate(`/trips/123`)
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
          />
        )
      }
    </div>
  )
}
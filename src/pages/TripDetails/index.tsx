import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { CreateActivity } from './create-activity'
import { TripLocation } from './trip-location'
import { ImportantLinks } from './important-links'
import { RegisterLinks } from './register-links'
import { GuestsList } from './guests-list'
import { ConfirmMembership } from './confirm-membership'
import { Activities } from './activities'
import { PinActivity } from './components/pin-activity'

export function TripDetails() {
  const navigate = useNavigate()

  const [createActivityPlan, setCreateActivityPlan] = useState(false)

  const [newIMportantLink, setNewImportantLink] = useState(false)

  const [isMemberShip, setIsMemberShip] = useState(false)

  function handleHomeNavigate() {
    navigate("/")
  }

  function openCreateActivity() {
    setCreateActivityPlan(true)
  }

  function closeCreateActivity() {
    setCreateActivityPlan(false)
  }

  function openNewImportantLink() {
    setNewImportantLink(true)
  }

  function closeNewImportantLink() {
    setNewImportantLink(false)
  }

  function openConfirmMembership() {
    setIsMemberShip(true)
  }

  function closeConfirmMembership() {
    setIsMemberShip(false)
  }

  return(
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <TripLocation
        handleHomeNavigate={handleHomeNavigate}
      />

      <main className="flex gap-16 px-4">

        <div className="flex-1 space-y-6">
          <PinActivity
            openCreateActivity={openCreateActivity}
          />

          <Activities/>
        </div>

        <div className="w-80 space-y-6">
          <ImportantLinks
            openNewImportantLink={openNewImportantLink}
          />
          
          <div className="w-full h-px bg-zinc-800"/>

          <GuestsList
            openConfirmMembership={openConfirmMembership}
          />
        </div>
      </main>

      { 
        createActivityPlan && (
         <CreateActivity
          closeCreateActivity={closeCreateActivity}
         />
        )
      }

      {
        newIMportantLink && (
          <RegisterLinks
            closeNewImportantLink={closeNewImportantLink}
          />
        )
      }

      {
        isMemberShip && (
          <ConfirmMembership
            closeConfirmMembership={closeConfirmMembership}
          />
        )
      }

    </div>
  )
}
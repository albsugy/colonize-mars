import { useState } from 'react'
import { useDisclosure } from '@chakra-ui/react'

import Container from 'components/Container'
import Navigation from 'components/Navigation'
import TemplateGroupTable from 'components/TemplateGroupTable'
import Modal from 'components/Modal'
import { ModalContext, ModalContextType } from 'context/modal-context'
import { fetchTemplateGroups } from 'api/services/template-groups'

import { NormalizedTemplateGroup } from 'types/template-group'
import { IndexProps } from 'types/pages'

const Index = ({ templateGroups }: IndexProps) => {
  const [activeTemplate, setActiveTemplate] =
    useState<NormalizedTemplateGroup | null>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const modalContext: ModalContextType = {
    isOpen,
    onOpen,
    onClose,
    activeTemplate,
    setActiveTemplate
  }

  return (
    <>
      <ModalContext.Provider value={modalContext}>
        <Container>
          <Navigation />
          <TemplateGroupTable data={templateGroups} />
          <Modal />
        </Container>
      </ModalContext.Provider>
    </>
  )
}

export async function getServerSideProps() {
  return fetchTemplateGroups()
}

export default Index

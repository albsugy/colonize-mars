import { createContext } from 'react'

import { NormalizedTemplateGroup } from 'types/template-group'

export interface ModalContextType {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  activeTemplate: NormalizedTemplateGroup | null
  setActiveTemplate: (tempalte: NormalizedTemplateGroup) => void
}

export const ModalContext = createContext<ModalContextType | null>(null)

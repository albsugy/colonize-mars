import { useContext, FC } from 'react'
import {
  Modal as ModalWrapper,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Box,
  Text,
  ListItem,
  List
} from '@chakra-ui/react'

import { TokenParameter } from 'types/template-group'

import { ModalContext } from 'context/modal-context'

const Modal: FC = () => {
  const modalContext = useContext(ModalContext)

  if (!modalContext) return null
  const { isOpen, onClose, activeTemplate } = modalContext

  if (!activeTemplate) return null
  const { name, inputs, outputs } = activeTemplate

  const hasInputs: boolean = inputs && inputs.length > 0
  const hasOutputs: boolean = outputs && outputs.length > 0

  const inputList = inputs?.map((input: TokenParameter, index) => (
    <ListItem
      key={input.token.id}
      display="flex"
      justifyContent="space-between"
      borderColor="dark.border"
      borderBottomWidth={index + 1 === inputs.length ? '0' : '1px'}
      py="2"
    >
      <Text>{input.token.name}</Text>
      <Text color="alert">- {input.inputAmountPerEarningPower} / hr</Text>
    </ListItem>
  ))

  const outputList = outputs?.map((input: TokenParameter, index) => (
    <ListItem
      key={input.token.id}
      display="flex"
      justifyContent="space-between"
      borderColor="dark.border"
      borderBottomWidth={index + 1 === outputs.length ? '0' : '1px'}
      py="2"
    >
      <Text>{input.token.name}</Text>
      <Text color="success">+ {input.outputAmountPerEarningPower} / hr</Text>
    </ListItem>
  ))

  return (
    <>
      <ModalWrapper onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent bg="dark.bg" border="1px solid #3E3E3E">
          <ModalHeader bg="#4d4d4d" fontSize="22px" borderTopRadius="5">
            {name}
          </ModalHeader>
          <ModalCloseButton fontSize="16px" mt="2" />
          <ModalBody px="3" py="4">
            {hasInputs && (
              <Box
                rounded="8"
                borderColor="dark.border"
                borderWidth="1px"
                mb={hasOutputs ? '4' : '0'}
              >
                <Box
                  bg="dark.border"
                  textAlign="center"
                  py="1"
                  borderTopRadius="5"
                >
                  <Text
                    fontSize="10px"
                    fontWeight="bold"
                    textTransform="uppercase"
                    color="#969696"
                  >
                    Consumption
                  </Text>
                </Box>
                <Box px="3" py="1">
                  <List>{inputList}</List>
                </Box>
              </Box>
            )}
            {hasOutputs && (
              <Box rounded="8" borderColor="dark.border" borderWidth="1px">
                <Box
                  bg="dark.border"
                  textAlign="center"
                  py="1"
                  borderTopRadius="5"
                >
                  <Text
                    fontSize="10px"
                    fontWeight="bold"
                    textTransform="uppercase"
                    color="#969696"
                  >
                    Production
                  </Text>
                </Box>
                <Box px="3" py="1">
                  <List>{outputList}</List>
                </Box>
              </Box>
            )}
          </ModalBody>
        </ModalContent>
      </ModalWrapper>
    </>
  )
}

export default Modal

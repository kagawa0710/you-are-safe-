import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button
} from '@chakra-ui/react'

export function Modal({
  buttonTitle,
  secondaryButtonTitle,
  backButtonTitle,
  modalTitle,
  modalBody,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>{buttonTitle}</Button>

      <ChakraModal isOpen={isOpen} onClose={onClose} size='full'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {modalBody}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              {backButtonTitle}
            </Button>
            <Button variant='ghost'>{secondaryButtonTitle}</Button>
          </ModalFooter>
        </ModalContent>
      </ChakraModal>
    </>
  )
}

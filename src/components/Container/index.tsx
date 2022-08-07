import { Container as Wrapper, ContainerProps } from '@chakra-ui/react'

const Container = (props: ContainerProps) => {
  return <Wrapper maxW="8xl" px={[6, '30.5px']} color="white" {...props} />
}

export default Container

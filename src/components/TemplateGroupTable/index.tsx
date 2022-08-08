import { useContext, FC, Fragment } from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
  Box,
  Text
} from '@chakra-ui/react'

import { ModalContext } from 'context/modal-context'
import { NormalizedTemplateGroup, TokenParameter } from 'types/template-group'
import { openSFX, hoverSFX } from 'utils/sound-effects'

import { TemplateGroupTableProps } from './types'

const TableTitle: FC = () => (
  <Text fontSize="2xl" mt="12px" mb="23px" as="h1">
    Resources
  </Text>
)

const TemplateGroupTable: FC<TemplateGroupTableProps> = ({ data }) => {
  const modalContext = useContext(ModalContext)

  if (!data || data.length < 1)
    return (
      <Box>
        <TableTitle />
        <Text textAlign="center">No resources available.</Text>
      </Box>
    )

  if (!modalContext) return null
  const { onOpen, setActiveTemplate } = modalContext

  return (
    <Fragment>
      <TableTitle />
      <Flex w="full" justifyContent="center" as="main">
        <Box
          overflowY="auto"
          tabIndex={0}
          w="full"
          h="75vh"
          css={{
            '&::-webkit-scrollbar': {
              width: '4px'
            },
            '&::-webkit-scrollbar-track': {
              width: '6px'
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'grey',
              borderRadius: '24px'
            }
          }}
        >
          <Table
            w="full"
            bg="white"
            position="relative"
            _dark={{
              bg: 'gray.800'
            }}
            display={{
              base: 'block',
              md: 'table'
            }}
            sx={{
              '@media print': {
                display: 'table'
              }
            }}
          >
            <Thead
              display={{
                base: 'none',
                md: 'table-header-group'
              }}
              position={{ md: 'sticky' }}
              top={{ md: 0 }}
              bg="dark.bg"
              sx={{
                '@media print': {
                  display: 'table-header-group'
                }
              }}
            >
              <Tr>
                <Th
                  color="white"
                  fontSize="12"
                  fontWeight="400"
                  textTransform="none"
                  w={{ md: '74%' }}
                  p="0"
                  borderColor="dark.border"
                >
                  Name
                </Th>
                <Th
                  color="white"
                  fontSize="12"
                  fontWeight="400"
                  textTransform="none"
                  borderColor="dark.border"
                >
                  Inputs (Consumption)
                </Th>
                <Th
                  color="white"
                  fontSize="12"
                  fontWeight="400"
                  textTransform="none"
                  borderColor="dark.border"
                >
                  Outputs (Production)
                </Th>
              </Tr>
            </Thead>
            <Tbody
              display={{
                base: 'block',
                md: 'table-row-group',
                lg: 'table-row-group'
              }}
              sx={{
                '@media print': {
                  display: 'table-row-group'
                }
              }}
            >
              {data.map((template: NormalizedTemplateGroup, tid) => {
                return (
                  <Tr
                    key={tid}
                    onMouseEnter={() => hoverSFX.play()}
                    onClick={() => {
                      setActiveTemplate(template)
                      onOpen()
                      openSFX.play()
                    }}
                    display={{
                      base: 'grid',
                      md: 'table-row'
                    }}
                    sx={{
                      '@media print': {
                        display: 'table-row'
                      },
                      gridTemplateColumns: 'minmax(0px, 30%) minmax(0px, 70%)',
                      gridGap: '0px'
                    }}
                    cursor="pointer"
                    _hover={{
                      background: '#1d1d1d'
                    }}
                  >
                    <Fragment>
                      <Td
                        display={{
                          base: 'table-cell',
                          md: 'none'
                        }}
                        sx={{
                          '@media print': {
                            display: 'none'
                          },
                          color: 'white',
                          fontSize: 'xs',
                          letterSpacing: 'wider',
                          fontFamily: 'heading',
                          border: 'none',
                          padding: '2',
                          verticalAlign: 'middle'
                        }}
                      >
                        {'Name'}
                      </Td>
                      <Td
                        color={'white'}
                        pl={{ base: '6', md: '0' }}
                        borderColor="dark.border"
                        fontSize="14"
                        fontWeight="500"
                        borderBottomWidth={{ base: '0', md: '1px' }}
                        p="3"
                      >
                        {template.name}
                      </Td>
                    </Fragment>
                    <Fragment>
                      <Td
                        display={{
                          base: 'table-cell',
                          md: 'none'
                        }}
                        sx={{
                          '@media print': {
                            display: 'none'
                          },
                          color: 'white',
                          fontSize: 'xs',
                          letterSpacing: 'wider',
                          fontFamily: 'heading',
                          border: 'none',
                          padding: '2'
                        }}
                      >
                        Inputs
                      </Td>
                      <Td
                        borderColor="dark.border"
                        borderBottomWidth={{ base: '0', md: '1px' }}
                        p={{ base: '3', md: '4' }}
                        pl={{ base: '3', md: '6' }}
                      >
                        <Flex gap="2px">
                          {template.inputs && template.inputs.length > 0 ? (
                            template.inputs.map((input: TokenParameter) => (
                              <Box
                                key={input.token.id}
                                display="inline-block"
                                bgColor="alert"
                                w="18px"
                                h="18px"
                                borderRadius="50%"
                              />
                            ))
                          ) : (
                            <Text fontSize="sm">No Inputs</Text>
                          )}
                        </Flex>
                      </Td>
                    </Fragment>
                    <Td
                      display={{
                        base: 'table-cell',
                        md: 'none'
                      }}
                      sx={{
                        '@media print': {
                          display: 'none'
                        },
                        color: 'white',
                        fontSize: 'xs',
                        letterSpacing: 'wider',
                        fontFamily: 'heading',
                        padding: '2'
                      }}
                      borderColor="dark.border"
                    >
                      Outputs
                    </Td>
                    <Td
                      borderColor="dark.border"
                      p={{ base: '3', md: '4' }}
                      pl={{ base: '3', md: '6' }}
                    >
                      <Flex gap="2px">
                        {template.outputs && template.outputs.length > 0 ? (
                          template.outputs.map((input: TokenParameter) => (
                            <Box
                              key={input.token.id}
                              display="inline-block"
                              bgColor="success"
                              w="18px"
                              h="18px"
                              borderRadius="50%"
                            />
                          ))
                        ) : (
                          <Text fontSize="sm">No Outputs</Text>
                        )}
                      </Flex>
                    </Td>
                  </Tr>
                )
              })}
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Fragment>
  )
}

export default TemplateGroupTable

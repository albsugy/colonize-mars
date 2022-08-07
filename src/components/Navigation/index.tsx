import { ReactNode } from 'react'
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image
} from '@chakra-ui/react'
import { SkipNavLink } from '@chakra-ui/skip-nav'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

import { navLinks } from './config'

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    fontSize="18"
    color={useColorModeValue('black', 'white')}
    _hover={{
      textDecoration: 'none',
      opacity: '60%'
    }}
    href={'#'}
  >
    {children}
  </Link>
)

export default function Navigation() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box pt="5px" as="header">
      <SkipNavLink>Skip to content</SkipNavLink>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={'center'}>
          <Image src="/img/colonize-mars-logo.svg" alt="Colonize Mars logo" />
        </HStack>
        <Flex alignItems={'center'}>
          <Menu>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
              mr="15px"
            >
              {navLinks.map((link) => (
                <NavLink key={link.text}>
                  <Image
                    display="inline-block"
                    verticalAlign="top"
                    mr="13px"
                    src={link.iconPath}
                    alt={`${link.text} icon`}
                  />
                  {link.text}
                </NavLink>
              ))}
            </HStack>
            <MenuButton
              as={Button}
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
              minW={0}
              aria-label="Your Account"
            >
              <Box
                bg="white"
                py="2"
                px="1"
                w="20px"
                h="16px"
                color="black"
                fontSize="8"
                borderRadius="5"
                lineHeight="0"
                position="absolute"
                bottom="-4px"
                right="10px"
                zIndex="2"
                css={{
                  clipPath: 'polygon(0% 0%, 100% 0, 100% 75%, 49% 93%, 0% 75%)'
                }}
                boxShadow="-1px 2px 8px 5px rgb(0 0 0 / 30%)"
              >
                01
              </Box>
              <Avatar
                w="40px"
                h="40px"
                border="2px solid white"
                name="Medhat Albsugy"
                bg="success"
              />
              <Box
                css={{
                  width: '15px',
                  height: '14px',
                  boxShadow: ' -1px 2px 8px 5px rgb(0 0 0 / 30%)',
                  position: 'absolute',
                  bottom: '-4px',
                  right: '12px',
                  zIndex: 1
                }}
              />
            </MenuButton>
            <MenuList bg="gray.800">
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuDivider />
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {navLinks.map((link) => (
              <NavLink key={link.text}>
                <Image
                  display="inline-block"
                  verticalAlign="top"
                  mr="13px"
                  src={link.iconPath}
                  alt={link.text}
                />
                {link.text}
              </NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  )
}

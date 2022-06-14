import React from 'react';
import {
    Box,
    Flex,
    // Avatar,
    HStack,
    IconButton,
    /* Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider, */
    useDisclosure,
    useColorModeValue,
    Stack,
    Heading,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Links } from './links';
import { useNavigate } from 'react-router-dom';
import NavLink from './NavLink';
import { ColorModeSwitcher } from '../components/ColorSwitcher/ColorModeSwitcher';
const Layout = ({ children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    let navigate = useNavigate();

    const handleClickLogo = () => {
        navigate("/");
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                overflow: 'hidden',
                position: 'relative',
            }}
        >
            <ColorModeSwitcher />
            <div
                style={{
                    width: '100%',
                    minHeight: '4em',
                    marginBottom: "1px",
                    zIndex: 2,
                }}
            >


                <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} py={0}>
                    <Flex h={16} alignItems={'center'} justifyContent={'space-between'} py={0}>
                        <IconButton
                            size={'md'}
                            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                            aria-label={'Open Menu'}
                            display={{ md: 'none' }}
                            onClick={isOpen ? onClose : onOpen}
                        />
                        <HStack py={0} spacing={8} alignItems={'center'} style={{ height: "100%", padding: "0px", zIndex: "1" }}>
                            <Box
                                onClick={handleClickLogo}
                                style={{
                                    cursor: 'pointer',
                                    marginRight: "10vw"
                                }}
                            >
                                <Heading size='lg'>
                                    Weather App
                                </Heading>
                            </Box>
                            <HStack
                                as={'nav'}
                                spacing={4}
                                height={'100%'}
                                display={{ base: 'none', md: 'flex' }}>

                                {/* {Links.map((link) => (
                                    <NavLink
                                        key={link.name}
                                        link={link}
                                    />
                                ))} */}

                            </HStack>
                        </HStack>
                    </Flex>

                    {isOpen ? (
                        <Box pb={4} display={{ md: 'none' }} style={{ zIndex: 10 }} >
                            <Stack as={'nav'} spacing={4}>
                                {Links.map((link) => (
                                    <NavLink
                                        key={link.name}
                                        link={link}
                                    />
                                ))}
                            </Stack>
                        </Box>
                    ) : null}
                </Box>
            </div>
            <div
                className="myBody"
                style={{
                    zIndex: 1,
                    width: "100%",
                    minHeight: "calc(100% - 4em)",
                    maxHeight: "calc(100% - 4em)",
                    padding: "1em",
                    margin: "0px",
                }}
            >
                {children}
            </div>
        </div>
    );
}
export default Layout;
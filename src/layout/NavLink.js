import React, { useState } from 'react';
import {
    Link,
    useColorModeValue,

} from '@chakra-ui/react';
import { NavLink as RouterLink } from 'react-router-dom';

const NavLink = ({ link }) => {
    const [ isActive, setIsActive ] = useState(false);
    return (
        <RouterLink
            to={link.path}
            className={(navData) => ( setIsActive(navData?.isActive))}
        >
            <Link
                px={2}
                py={3}
                by={0}
                rounded={'xs'}
                _hover={{
                    textDecoration: 'none',
                    bg: useColorModeValue( 'gray.200', 'gray.700'),
                }}
                
                    bg={ useColorModeValue( isActive ?'gray.200': '', isActive? 'gray.700' :'') }
                
                text={link.name}
            >
                {link.name}
            </Link>
        </RouterLink>
    )
}

export default NavLink;

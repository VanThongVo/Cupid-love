import styled from 'styled-components';
import {makeStyles} from '@material-ui/core';

const Link = styled.a`
`;
const Button1 = styled.button`
background: #80c6e3;
color: white;
border: 0;
padding: 7px 10px;
border-radius: 4px;
margin-right: 5px;

`;
const NavRight = styled.div`
display: flex;
align-items: center;
`;
const GroupButton = styled.div`

`;
const useStyles = makeStyles(() => ({
    description: {
        width: 250,
        
    },
    container: {
        position: 'relative',
    },
    navFilter: {
        display: 'flex',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        border: '1px solid rgba(0,0,0,0.1)',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
        zIndex: 2,
        background: '#48a9d0ad',
        padding: 10,
        margin: '0 20%',
        width: '-webkit-fill-available',
        bottom: 0,
        color: '#ffffff',
    },
    img: {
        height: 376,
        right: '20%',
    },
    logo: {
        width: 150,
    },
    title: {
        fontSize: 26,
        marginBottom: 10,
    },
    content: {
        color: '#fff',
        display: 'flex',
        padding: '0 20%',
        position: 'relative',
        justifyContent: 'space-between',
        alignItems: "center",
    },
    leftFilter: {
        display: 'flex',
        alignItems: 'center'
    },
    text: {
        margin: '0 10px',
    },
    isActive: {
        background: '#80c6e3',
        color: 'white',
        border: '0',
        padding: '7px 10px',
        borderRadius: '4px',
        marginRight: '5px',
        textDecoration: 'none'
    },
}))

export {Link, Button1,GroupButton,NavRight, useStyles}
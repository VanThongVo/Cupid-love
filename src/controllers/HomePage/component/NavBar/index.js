import React, { useEffect, useState } from 'react';
import {useRouteMatch} from 'react-router-dom'
import './styles.css';
import {Link, Button1,GroupButton,NavRight, useStyles} from './styles';
import Selection from '../../../../components/selection';

const URLs = [
    {title: 'Home', path: '/home'},
    {title: 'Profiles', path: '/profiles'},
    {title: 'Stories', path: '/stories'},
    {title: 'Blog', path: '/blog'},
    {title: 'About', path: '/about'},
]

export default function NavBar(props) {
    console.log("NavBar -> props", props)
    const xxxx = props.name;
    const leuleu = props.status
    console.log("NavBar -> xxxx", xxxx)
    const classes = useStyles();

    const [urlSelected, setUrl] = useState('/home')

    useEffect(() => {
    const path = window.location.pathname
    setUrl(path)
    }, [setUrl])
  
    
    return (
    <div className={classes.container}>
        <div className='nav-container'>
            <div>
                <img src='./images/logo.png' alt='' className={classes.logo} />
            </div>
            <NavRight>
                <div>
                    {/* {URLs.map(url => <Link className='nav-link' href={url.path}>{url.title}</Link>)} */}
                {URLs.map(url => <Link className={ urlSelected === url.path ? classes.isActive : 'nav-link'} href={url.path} key={url.path}>{url.title}</Link>)}
                </div>
                <GroupButton>
                    <Button1>Sign Out</Button1>
                    <Button1 className='btn-pink'>My Profile</Button1>
                </GroupButton>
            </NavRight>
        </div>
        <div className={classes.content}>
            <div className={classes.description}>
                <p className={classes.title}>Write Your Love Story.</p>
                <p>Maecenas lobortis mauris in metus faucibus nec vulputate ante hendrerit. Aliquam vulputate feugiat enim et fringilla. Pellentesque bibendum dignissim sollicitudin. Ut ornare condimentum, a vestibulum dui malesuada.</p>
                <Button1>Sign Out</Button1>
            </div>
            <img src='./images/image-1.png' className={classes.img} />
        </div>
        <div className={classes.navFilter}>
            <div className={classes.leftFilter}><div className={classes.text}>Hello i am a </div> <Selection /><div className={classes.text}> seeking a </div> <Selection /> <div className={classes.text}> from </div> <Selection /><div className={classes.text}> to </div><Selection /></div>
            <div> <Button1>Sign Out</Button1></div>
        </div>
        </div>
    )
}


import { makeStyles } from '@material-ui/core';
import React from 'react';

export default function Selection() {
    const classes = useStyles();

    return (
        <select id="cars" name="cars" className={classes.selection}>
    <option className={classes.option} value="volvo">Volvo</option>
    <option className={classes.option} value="saab">Saab</option>
    
  </select>
    )
}

const useStyles = makeStyles(() => ({
    selection: {
        background: 'none',
        border: '1px solid #d4d4d4',
        color: '#ffffff',
    },
    option: {
        color: '#1a1a1a',
    }
}))
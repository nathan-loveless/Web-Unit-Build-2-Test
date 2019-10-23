import React from 'react';
import { parent } from '../data';
import {volunteer } from '../data';
import Parent from '../Parent/Parent';
import Volunteer from '../Volunteer/Volunteer';

export default function Dashboard() {
    const display = 0;
    if(display === 0) { return ( <Parent user={parent}/> ); }
    else { return ( <Volunteer user={volunteer}/> ); }
}
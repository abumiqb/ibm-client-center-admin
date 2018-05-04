import React from 'react';
import { Route } from 'react-router-dom';
import BlueHourCalendar from './Calendars/BlueHourCalendar';
import EquinoxCalendar from './Calendars/EquinoxCalendar';
import GreenGlowCalendar from './Calendars/GreenGlowCalendar';
import MidnightSunCalendar from './Calendars/MidnightSunCalendar';
import NorthernLightCalendar from './Calendars/NorthernLightCalendar';
import SuperMoonCalendar from './Calendars/SuperMoonCalendar';


export default [
    <Route exact path="/blue-hour/calendar" component={BlueHourCalendar} />,
    <Route exact path="/equinox/calendar" component={EquinoxCalendar} />,
    <Route exact path="/green-glow/calendar" component={GreenGlowCalendar} />,
    <Route exact path="/midnight-sun/calendar" component={MidnightSunCalendar} />,
    <Route exact path="/northern-light/calendar" component={NorthernLightCalendar} />,
    <Route exact path="/super-moon/calendar" component={SuperMoonCalendar} />,
];
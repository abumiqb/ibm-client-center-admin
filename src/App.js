import React from 'react';
import { Admin, Resource, Delete, jsonServerRestClient,fetchUtils } from 'admin-on-rest';
import { BookingEdit, BookingList, BookingShow } from './booking';
import { BriefingEdit, BriefingList, BriefingShow } from './briefing';
import {UserList, UserShow, UserEdit, UserCreate} from './loginn';
import { RomList } from "./rom";
import Menu from './Menu';
import authClient from './authClient';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import myTheme from './myTheme';
import customRoutes from './customRoutes';


const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('token');
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
}
const App = () => (
    <Admin title="IBM Client Center Admin" authClient={authClient} menu={Menu} customRoutes={customRoutes} theme={getMuiTheme(myTheme)}  restClient={jsonServerRestClient('http://localhost:3001', httpClient)}>
        <Resource name="booking" options={{ label: 'Booking' }} list={BookingList} edit={BookingEdit} show={BookingShow} remove={Delete}/>
        <Resource name="briefing" options={{ label: 'Briefing' }} list={BriefingList} edit={BriefingEdit} show={BriefingShow} remove={Delete}/>
        <Resource name="rom" list={RomList} options={{ label: 'Room' }}/>
        <Resource name="loginn" options={{ label: 'User' }} list={UserList} edit={UserEdit} show={UserShow} create={UserCreate} remove={Delete} />
    </Admin>
);

export default App;


import React from 'react';
import { SimpleList, Responsive, ShowButton, TextInput, Show, SimpleShowLayout, List, Edit, Datagrid, TextField, SimpleForm, EmailField, BooleanField} from 'admin-on-rest';
import ApproveButton from './ApproveButton';
import DisApproveButton from './DisApproveButton';

export const BookingList = (props) => (
    <List title="Booking" {...props}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.navn}
                    secondaryText={record => record.firma}
                    tertiaryText={record => record.dato}
                />
            }
        medium={
        <Datagrid>
            <TextField source="navn"/>
            <TextField source="firma"/>
            <EmailField source="email"/>
            <TextField source="phone"/>
            <TextField source="dato"/>
            <TextField source="starttid"/>
            <TextField source="slutttid"/>
            <BooleanField source="approved"/>
            <ShowButton/>
        </Datagrid>
    }
    />
    </List>
);

const BookingTitle = ({ record }) => {
    return <span>Booking {record ? `${record.navn}` : ''}</span>;
};

export const BookingEdit = (props) => (
    <Edit title={<BookingTitle />} {...props}>
        <SimpleForm>
            <TextInput source="navn" />
            <TextInput source="firma" />
            <TextInput source="email" />
            <TextInput source="phone" />
            <TextInput source="antall" />
            <TextInput source="dato" />
            <TextInput source="starttid" />
            <TextInput source="slutttid" />
            <TextInput source="opportunityNr" />
            <TextInput source="room" />
            <TextInput source="approved" />
        </SimpleForm>
    </Edit>
);

export const BookingShow = (props) => (
    <Show title={<BookingTitle />} {...props}>
        <SimpleShowLayout>
            <TextField source="navn" />
            <TextField source="firma" />
            <TextField source="email" />
            <TextField source="phone" />
            <TextField source="antall" />
            <TextField source="dato" />
            <TextField source="starttid" />
            <TextField source="slutttid" />
            <TextField source="opportunityNr" />
            <TextField source="room" />
            <BooleanField source="approved" /> 
            <ApproveButton />
            <DisApproveButton/>
        </SimpleShowLayout>
    </Show>
);


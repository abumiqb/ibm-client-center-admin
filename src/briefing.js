import React from 'react';
import { RichTextField, SimpleList, Responsive, ShowButton, TextInput, Show, SimpleShowLayout, List, Edit, Datagrid, TextField, SimpleForm, EmailField, BooleanField} from 'admin-on-rest';
import ApproveButton from './ApproveButton';
import DisApproveButton from './DisApproveButton';

export const BriefingList = (props) => (
    <List title="Briefing" {...props}>
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
            <BooleanField source="approved"/>
            <ShowButton/>
        </Datagrid>
    }
    />
    </List>
);

const BriefingTitle = ({ record }) => {
    return <span>Booking {record ? `${record.navn}` : ''}</span>;
};

export const BriefingEdit = (props) => (
    <Edit title={<BriefingTitle />} {...props}>
        <SimpleForm>
            <TextInput source="navn" />
            <TextInput source="firma" />
            <TextInput source="email" />
            <TextInput source="phone" />
            <TextInput source="antall" />
            <TextInput source="dato" />
            <TextInput source="starttid" />
            <TextInput source="briefing"/>
            <TextInput source="approved" />
        </SimpleForm>
    </Edit>
);

export const BriefingShow = (props) => (
    <Show title={<BriefingTitle />} {...props}>
        <SimpleShowLayout>
            <TextField source="navn" />
            <TextField source="firma" />
            <TextField source="email" />
            <TextField source="phone" />
            <TextField source="antall" />
            <TextField source="dato" />
            <TextField source="starttid" />
            <RichTextField source="briefing" />
            <BooleanField source="approved" /> 
            <ApproveButton />
            <DisApproveButton/>
        </SimpleShowLayout>
    </Show>
);


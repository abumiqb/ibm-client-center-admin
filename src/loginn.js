import React from 'react';
import { SimpleList, Responsive, ShowButton, TextInput, Show, SimpleShowLayout, List, Edit, Create, Datagrid, TextField, SimpleForm } from 'admin-on-rest';


export const UserList = (props) => (
    <List title={<UserTitle />} {...props}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.brukernavn}
                    secondaryText={record => record.passord}
                />
            }

        medium={
        <Datagrid>
            <TextField source="brukernavn" />
            <TextField source="passord" />
            <ShowButton/>
            <Create/>
        </Datagrid>
    }
        />
    </List>
);

const UserTitle = ({ record }) => {
    return <span>User {record ? `${record.brukernavn}` : ''}</span>;
};

export const UserEdit = (props) => (
    <Edit title={<UserTitle />} {...props}>
        <SimpleForm>
            <TextInput source="brukernavn" />
            <TextInput source="passord" />
        </SimpleForm>
    </Edit>
);

export const UserShow = (props) => (
    <Show title={<UserTitle />} {...props}>
        <SimpleShowLayout>
            <TextField source="brukernavn" />
            <TextField source="passord" />
        </SimpleShowLayout>
    </Show>
);


export const UserCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="brukernavn" />
            <TextInput source="passord" />
        </SimpleForm>
    </Create>
);

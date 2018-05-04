import React from 'react';
import { List, Datagrid, TextField, SimpleList, Responsive } from 'admin-on-rest';

export const RomList = (props) => (
    <List title="Rom" {...props}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.navn}
                />
            }
        medium={
        <Datagrid>
            <TextField source="navn" />
        </Datagrid>
    }
        />
    </List>
);

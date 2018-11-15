import React from 'react';
import { List, Datagrid, TextField, TextInput, SimpleForm, Edit, DisabledInput, Create } from 'react-admin';

export const BacteriaList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="name" />
            <TextField source="id" />  
        </Datagrid>
    </List>
);

export const BacteriaEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
           <TextInput source="name" />
        </SimpleForm>
    </Edit>
);

export const BacteriaCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id" />
           <TextInput source="name" />
        </SimpleForm>
    </Create>
);
import React from 'react';
import { List, Datagrid, TextField, TextInput, SimpleForm, Edit, DisabledInput, Create } from 'react-admin';


export const BackgroundList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="name" />
            <TextField source="id" />  
        </Datagrid>
    </List>
);

export const BackgroundEdit = props => (
    <Edit {...props}>
        <SimpleForm>
          <DisabledInput source="id" />
           <TextInput source="name" />
        </SimpleForm>
    </Edit>
);

export const BackgroundCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id"/>
           <TextInput source="name" />
        </SimpleForm>
    </Create>
);
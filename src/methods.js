import React from 'react';
import { List, Datagrid, TextField, TextInput, SimpleForm, Edit, DisabledInput, Create, NumberField, NumberInput } from 'react-admin';

export const MethodList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="name" />
            <TextField source="id" />  
            <NumberField source="cfu" />
        </Datagrid>
    </List>
);

export const MethodEdit = props => (
    <Edit {...props}>
        <SimpleForm>
          <DisabledInput source="id" />
           <TextInput source="name" />
           <NumberInput source="cfu" />
        </SimpleForm>
    </Edit>
);

export const MethodCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id" />
           <TextInput source="name" />
           <NumberInput source="cfu" defaultValue={0}/>
        </SimpleForm>
    </Create>
);
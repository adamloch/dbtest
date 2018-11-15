import React from 'react';
import { RichTextField,List, Datagrid, TextField, TextInput, SimpleForm, Edit, DisabledInput, Create , BooleanInput, DateInput, BooleanField, DateField, ImageInput, ImageField} from 'react-admin';
import RichTextInput from 'ra-input-rich-text'

function CurrentDate() {
    var curr = new Date();
    curr.setDate(curr.getDate() + 3);
    var date = curr.toISOString().substr(0,10);
    return date;
}

export const PhotoList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <BooleanField source="cover" />  
            <DateField source="created" />
            <RichTextField source="comment" />
        </Datagrid>
    </List>
);

export const PhotoEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="name" />
            <ImageField source="url" />
            <ImageInput source="pictures" label="Related pictures" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
            <BooleanInput source="cover" />  
            <DateInput source="created" />
            <RichTextInput source="comment" />
        </SimpleForm>
    </Edit>
);

export const PhotoCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <ImageInput source="pictures" label="Related pictures" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
            <BooleanInput source="cover" defaultValue={false} />  
            <DateInput source="created" defaultValue={CurrentDate()} />
            <RichTextInput source="comment" />
        </SimpleForm>
    </Create>
);
import React from 'react';
import { Admin, Resource} from 'react-admin';
import dataProvider from './dataProvider';

import { BacteriaList, BacteriaEdit, BacteriaCreate } from './bacterias';
import { BackgroundList, BackgroundEdit, BackgroundCreate} from './backgrounds';
import { MethodList, MethodEdit, MethodCreate} from './methods';
import { PhotoList, PhotoEdit, PhotoCreate} from './photos';


const App = () => (
  <Admin dataProvider={dataProvider} >
        <Resource name="bacterias" list={BacteriaList} edit={BacteriaEdit} create={BacteriaCreate} />
        <Resource name="backgrounds" list={BackgroundList} edit={BackgroundEdit} create={BackgroundCreate} />
        <Resource name="methods" list={MethodList} edit={MethodEdit} create={MethodCreate} />
        <Resource name="photos" list={PhotoList} edit={PhotoEdit} create={PhotoCreate} />
    </Admin>
);
export default App;

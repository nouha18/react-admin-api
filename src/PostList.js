import React from 'react';
import { FilterComponent } from "./filter";
import {List,Datagrid,TextField,ReferenceField,EditButton} from 'react-admin';
export const PostList = props => (
    <List filters={<FilterComponent/>} {...props}>
      <Datagrid>
        <TextField source="id" />
        <ReferenceField source="userId" reference="users">
          <TextField source="name" />
        </ReferenceField>
        <TextField source="title" />
        <EditButton />
      </Datagrid>
    </List>
  );
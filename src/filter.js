import React from "react";
import { Filter, ReferenceInput, TextInput, SelectInput } from "react-admin";

export const FilterComponent = props =>(
    <Filter {...props}>
        <TextInput label="Search post" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput reference="name" />
       </ReferenceInput>
       </Filter>
)
import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const CourseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="modules" source="modules" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};

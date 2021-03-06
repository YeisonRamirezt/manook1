import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const CourseCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="modules" source="modules" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};

import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const CourseModuleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" source="content" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="quizz" source="quizz" />
        <TextInput label="resources" source="resources" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};

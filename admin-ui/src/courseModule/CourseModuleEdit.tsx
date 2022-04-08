import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const CourseModuleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" source="content" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="quizz" source="quizz" />
        <TextInput label="resources" source="resources" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};

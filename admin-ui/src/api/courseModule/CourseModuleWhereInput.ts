import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CourseModuleWhereInput = {
  content?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  quizz?: StringNullableFilter;
  resources?: StringNullableFilter;
  title?: StringNullableFilter;
};

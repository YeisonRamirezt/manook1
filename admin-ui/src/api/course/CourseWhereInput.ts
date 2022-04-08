import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CourseWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  modules?: StringNullableFilter;
  name?: StringNullableFilter;
};

import { SortOrder } from "../../util/SortOrder";

export type CourseModuleOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  quizz?: SortOrder;
  resources?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};

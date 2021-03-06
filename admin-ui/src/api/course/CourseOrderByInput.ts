import { SortOrder } from "../../util/SortOrder";

export type CourseOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  modules?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};

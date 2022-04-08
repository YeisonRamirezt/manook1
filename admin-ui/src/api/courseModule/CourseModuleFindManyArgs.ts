import { CourseModuleWhereInput } from "./CourseModuleWhereInput";
import { CourseModuleOrderByInput } from "./CourseModuleOrderByInput";

export type CourseModuleFindManyArgs = {
  where?: CourseModuleWhereInput;
  orderBy?: Array<CourseModuleOrderByInput>;
  skip?: number;
  take?: number;
};

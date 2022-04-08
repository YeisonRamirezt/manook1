import { CourseModule as TCourseModule } from "../api/courseModule/CourseModule";

export const COURSEMODULE_TITLE_FIELD = "title";

export const CourseModuleTitle = (record: TCourseModule): string => {
  return record.title || record.id;
};

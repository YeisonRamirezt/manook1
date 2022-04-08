import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CourseModuleService } from "./courseModule.service";
import { CourseModuleControllerBase } from "./base/courseModule.controller.base";

@swagger.ApiTags("courseModules")
@common.Controller("courseModules")
export class CourseModuleController extends CourseModuleControllerBase {
  constructor(
    protected readonly service: CourseModuleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

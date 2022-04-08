import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { CourseModuleResolverBase } from "./base/courseModule.resolver.base";
import { CourseModule } from "./base/CourseModule";
import { CourseModuleService } from "./courseModule.service";

@graphql.Resolver(() => CourseModule)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CourseModuleResolver extends CourseModuleResolverBase {
  constructor(
    protected readonly service: CourseModuleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

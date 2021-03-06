/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CreateCourseModuleArgs } from "./CreateCourseModuleArgs";
import { UpdateCourseModuleArgs } from "./UpdateCourseModuleArgs";
import { DeleteCourseModuleArgs } from "./DeleteCourseModuleArgs";
import { CourseModuleFindManyArgs } from "./CourseModuleFindManyArgs";
import { CourseModuleFindUniqueArgs } from "./CourseModuleFindUniqueArgs";
import { CourseModule } from "./CourseModule";
import { CourseModuleService } from "../courseModule.service";

@graphql.Resolver(() => CourseModule)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CourseModuleResolverBase {
  constructor(
    protected readonly service: CourseModuleService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "CourseModule",
    action: "read",
    possession: "any",
  })
  async _courseModulesMeta(
    @graphql.Args() args: CourseModuleFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [CourseModule])
  @nestAccessControl.UseRoles({
    resource: "CourseModule",
    action: "read",
    possession: "any",
  })
  async courseModules(
    @graphql.Args() args: CourseModuleFindManyArgs
  ): Promise<CourseModule[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => CourseModule, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "CourseModule",
    action: "read",
    possession: "own",
  })
  async courseModule(
    @graphql.Args() args: CourseModuleFindUniqueArgs
  ): Promise<CourseModule | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CourseModule)
  @nestAccessControl.UseRoles({
    resource: "CourseModule",
    action: "create",
    possession: "any",
  })
  async createCourseModule(
    @graphql.Args() args: CreateCourseModuleArgs
  ): Promise<CourseModule> {
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CourseModule)
  @nestAccessControl.UseRoles({
    resource: "CourseModule",
    action: "update",
    possession: "any",
  })
  async updateCourseModule(
    @graphql.Args() args: UpdateCourseModuleArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<CourseModule | null> {
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => CourseModule)
  @nestAccessControl.UseRoles({
    resource: "CourseModule",
    action: "delete",
    possession: "any",
  })
  async deleteCourseModule(
    @graphql.Args() args: DeleteCourseModuleArgs
  ): Promise<CourseModule | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}

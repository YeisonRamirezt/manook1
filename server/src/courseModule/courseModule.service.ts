import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CourseModuleServiceBase } from "./base/courseModule.service.base";

@Injectable()
export class CourseModuleService extends CourseModuleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

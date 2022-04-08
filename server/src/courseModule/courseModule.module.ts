import { Module } from "@nestjs/common";
import { CourseModuleModuleBase } from "./base/courseModule.module.base";
import { CourseModuleService } from "./courseModule.service";
import { CourseModuleController } from "./courseModule.controller";
import { CourseModuleResolver } from "./courseModule.resolver";

@Module({
  imports: [CourseModuleModuleBase],
  controllers: [CourseModuleController],
  providers: [CourseModuleService, CourseModuleResolver],
  exports: [CourseModuleService],
})
export class CourseModuleModule {}

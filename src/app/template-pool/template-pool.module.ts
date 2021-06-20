import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  TEMPLATE_POOL_REPOSITORY,
  TemplatePoolService,
} from "./template-pool.service";
import { SharedTemplateRepository } from "../shared-template-repository/shared-template-repository.component";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    TemplatePoolService,
    { provide: TEMPLATE_POOL_REPOSITORY, useValue: SharedTemplateRepository },
  ],
})
export class TemplatePoolModule {}

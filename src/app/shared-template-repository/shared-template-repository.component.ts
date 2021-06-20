import { Component, TemplateRef, ViewChild } from "@angular/core";
import { DropdownItem } from "../dropdown/dropdown.component";

export interface CustomItemTemplateContext {
  $implicit: {
    item: DropdownItem;
  };
}

@Component({
  templateUrl: "./shared-template-repository.component.html",
})
export class SharedTemplateRepository {
  @ViewChild("countryItemTemplate")
  countryItemTemplate!: TemplateRef<CustomItemTemplateContext>;

  // More TemplateRefs similar to the top one can be added here.
}

import { Component } from "@angular/core";
import { DropdownItem } from "./dropdown/dropdown.component";
import { SharedTemplateRepository } from "./shared-template-repository/shared-template-repository.component";
import { TemplatePoolService } from "./template-pool/template-pool.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  selectedItem: DropdownItem = null;
  items: DropdownItem[] = [
    {
      id: "de",
      label: "Germany",
    },
    {
      id: "fr",
      label: "France",
    },
    {
      id: "cz",
      label: "Czechia",
    },
  ];

  constructor(
    public templatePool: TemplatePoolService<SharedTemplateRepository>
  ) {}

  itemSelected($event: DropdownItem): void {
    this.selectedItem = $event;
  }
}

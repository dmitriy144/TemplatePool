import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from "@angular/core";
import { CustomItemTemplateContext } from "../shared-template-repository/shared-template-repository.component";

export interface DropdownItem {
  id: string;
  label: string;
}

@Component({
  selector: "app-dropdown",
  templateUrl: "./dropdown.component.html",
})
export class DropdownComponent {
  @Input() label: string;
  @Input() items: DropdownItem[] = [];
  @Input() customItemTemplate: TemplateRef<CustomItemTemplateContext>;
  @Output() itemSelected = new EventEmitter<DropdownItem>();

  itemClicked(item: DropdownItem): void {
    this.itemSelected.emit(item);
  }
}

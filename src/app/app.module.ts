import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { DropdownComponent } from "./dropdown/dropdown.component";
import { TemplatePoolModule } from "./template-pool/template-pool.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [AppComponent, DropdownComponent],
  imports: [BrowserModule, TemplatePoolModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

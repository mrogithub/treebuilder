import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TreeModel, TreeModule} from "angular-tree-component";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VirtualscrollComponent } from './virtualscroll/virtualscroll.component';

@NgModule({
  declarations: [
    AppComponent,
    VirtualscrollComponent
  ],
  imports: [
    BrowserModule,
    TreeModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    TreeModel
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

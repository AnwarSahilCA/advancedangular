import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { RetrieveComponent } from './retrieve/retrieve.component';
import { CreateComponent } from './components/create/create.component';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './components/update/update.component';
import { DeleteComponent } from './components/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    RetrieveComponent,
    CreateComponent,
    UpdateComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

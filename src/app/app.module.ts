import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { EntriesService } from './entries.service';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  declarations: [AppComponent, BlogComponent, FormularioComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [EntriesService],
  bootstrap: [AppComponent],
})
export class AppModule {}

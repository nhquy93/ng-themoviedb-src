import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from 'shared/shared.module';
import { HomeModule } from 'features/home/home.module';
import { CatalogModule } from 'features/catalog/catalog.module';
import { DetailModule } from 'features/detail/detail.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,

    HomeModule,
    CatalogModule,
    DetailModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

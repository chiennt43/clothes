import { Routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './share/component/header/header.component';
import { FooterComponent } from './share/component/footer/footer.component';
import { SearchComponent } from './share/component/search/search.component';
import { BannerComponent } from './share/component/banner/banner.component';
import { BodyComponent } from './body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    BannerComponent,
    BodyComponent
  ],
  imports: [
    Routing,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

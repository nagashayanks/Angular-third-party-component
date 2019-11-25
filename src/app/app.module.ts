import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DropdownModule} from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LightboxModule} from 'primeng/lightbox';
import {AccordionModule} from 'primeng/accordion';
import {SliderModule} from 'primeng/slider';
import {RatingModule} from 'primeng/rating';
import {ChartModule} from 'primeng/chart';
import {CarouselModule} from 'primeng/carousel';
import {CalendarModule} from 'primeng/calendar';
import {TreeTableModule} from 'primeng/treetable';
import { DataService } from './services/data.service';
import { UrlService } from './services/url.service';
import {  HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    BrowserAnimationsModule,
    LightboxModule,
    AccordionModule,
    RatingModule,
    SliderModule,
    ChartModule,
    CarouselModule,
    CalendarModule,
    TreeTableModule,
    HttpClientModule
  ],
  providers: [UrlService,DataService],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }

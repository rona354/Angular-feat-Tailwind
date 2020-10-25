import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoratCoretComponent } from './corat-coret/corat-coret.component';
import { BlueButtonComponent } from './elements/blue-button/blue-button.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { FloatingKeyBtnComponent } from './floating-key-btn/floating-key-btn.component';
import { CenteredWithBottomBorderComponent } from './headers/centered-with-bottom-border/centered-with-bottom-border.component';
import { SelectMenuComponent } from './elements/select-menu/select-menu.component';
import { TealBackNavComponent } from './headers//teal-back-nav/teal-back-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    CoratCoretComponent,
    BlueButtonComponent,
    HeroSectionComponent,
    FloatingKeyBtnComponent,
    CenteredWithBottomBorderComponent,
    SelectMenuComponent,
    TealBackNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [CoratCoretComponent, BlueButtonComponent, FloatingKeyBtnComponent, CenteredWithBottomBorderComponent, SelectMenuComponent, TealBackNavComponent]
})
export class AppModule { }

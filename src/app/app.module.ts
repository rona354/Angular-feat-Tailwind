import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoratCoretComponent } from './page-sections/corat-coret/corat-coret.component';
import { BlueButtonComponent } from './elements/blue-button/blue-button.component';
import { HeroSectionComponent } from './page-sections/hero-section/hero-section.component';
import { FloatingKeyBtnComponent } from './floating-key-btn/floating-key-btn.component';
import { CenteredWithBottomBorderComponent } from './headers/centered-with-bottom-border/centered-with-bottom-border.component';
import { SelectMenuComponent } from './elements/select-menu/select-menu.component';
import { TealBackNavComponent } from './headers//teal-back-nav/teal-back-nav.component';
import { DarkNavFeatWhiteHeaderComponent } from './app-shells/dark-nav-feat-white-header/dark-nav-feat-white-header.component';
import { FeatureSectionsComponent } from './page-sections/feature-sections/feature-sections.component';
import { CtaSectionsComponent } from './page-sections/cta-sections/cta-sections.component';
import { HeaderBannerComponent } from './elements/header-banner/header-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    CoratCoretComponent,
    BlueButtonComponent,
    HeroSectionComponent,
    FloatingKeyBtnComponent,
    CenteredWithBottomBorderComponent,
    SelectMenuComponent,
    TealBackNavComponent,
    DarkNavFeatWhiteHeaderComponent,
    FeatureSectionsComponent,
    CtaSectionsComponent,
    HeaderBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [CoratCoretComponent, BlueButtonComponent, FloatingKeyBtnComponent, CenteredWithBottomBorderComponent, SelectMenuComponent, TealBackNavComponent, DarkNavFeatWhiteHeaderComponent, FeatureSectionsComponent, CtaSectionsComponent, HeaderBannerComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProspectComponent } from './prospect/prospect.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NouveauProspectComponent } from './nouveau-prospect/nouveau-prospect.component';
import { AffichageProspectComponent } from './affichage-prospect/affichage-prospect.component';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import {
  MatDialogModule,
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatTooltipModule,
  MatDatepickerModule,
  MatCheckboxModule,
  MatSelectModule,
  MatRadioModule,
  MatGridListModule, MatSnackBar, MAT_SNACK_BAR_DATA
} from '@angular/material';
import { UpdateProspectComponent } from './update-prospect/update-prospect.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { EmailComponent } from './email/email.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { HomeUserComponent } from './home-user/home-user.component';
import {BasicAuthHtppInterceptorService} from '../services/basic-auth-htpp-interceptor.service';
import { LogoutComponent } from './logout/logout.component';
import { RdvComponent } from './rdv/rdv.component';
import { MesEmailsComponent } from './mes-emails/mes-emails.component';
import { MesRdvComponent } from './mes-rdv/mes-rdv.component';
import { NouveauContactComponent } from './nouveau-contact/nouveau-contact.component';
import { ContactsComponent } from './contacts/contacts.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { AffichageContactComponent } from './affichage-contact/affichage-contact.component';
import { ContactRdvComponent } from './contact-rdv/contact-rdv.component';
import { ContactEmailComponent } from './contact-email/contact-email.component';
import { NouveauAffaireComponent } from './nouveau-affaire/nouveau-affaire.component';
import { EmailPopupComponent } from './email-popup/email-popup.component';
import { RdvPopupComponent } from './rdv-popup/rdv-popup.component';
import { RdvPopupContactComponent } from './rdv-popup-contact/rdv-popup-contact.component';
import { EmailPopupContactComponent } from './email-popup-contact/email-popup-contact.component';
import { ProductComponent } from './product/product.component';
import { NouveauProductComponent } from './nouveau-product/nouveau-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { AffairePopupComponent } from './affaire-popup/affaire-popup.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AgendaComponent } from './agenda/agenda.component';
@NgModule({
  declarations: [
    AppComponent,
    ProspectComponent,
    NouveauProspectComponent,
    AffichageProspectComponent,
    UpdateProspectComponent,
    LoginPageComponent,
    EmailComponent,
    HomeAdminComponent,
    HomeUserComponent,
    LogoutComponent,
    RdvComponent,
    MesEmailsComponent,
    MesRdvComponent,
    NouveauContactComponent,
    ContactsComponent,
    UpdateContactComponent,
    AffichageContactComponent,
    ContactRdvComponent,
    ContactEmailComponent,
    NouveauAffaireComponent,
    EmailPopupComponent,
    RdvPopupComponent,
    RdvPopupContactComponent,
    EmailPopupContactComponent,
    ProductComponent,
    NouveauProductComponent,
    UpdateProductComponent,
    AffairePopupComponent,
    CartItemComponent,
    ProductDetailComponent,
    AgendaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, ReactiveFormsModule, FormsModule, ReactiveFormsModule
    // tslint:disable-next-line:max-line-length
    , BrowserAnimationsModule, MatDialogModule, BrowserAnimationsModule, MatIconModule, MatFormFieldModule, MatDatepickerModule, MatCheckboxModule, MatSelectModule, MatRadioModule, MatGridListModule, MatToolbarModule, MatButtonModule,
  MatSnackBarModule ,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: BasicAuthHtppInterceptorService, multi: true
    }
  ],
  bootstrap: [AppComponent],
  // tslint:disable-next-line:max-line-length
  entryComponents: [EmailComponent , ContactEmailComponent , EmailPopupComponent , RdvPopupComponent , RdvPopupContactComponent , EmailPopupContactComponent ,
    AffairePopupComponent]
})
export class AppModule { }

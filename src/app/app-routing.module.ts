import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProspectComponent} from './prospect/prospect.component';
import {NouveauProspectComponent} from './nouveau-prospect/nouveau-prospect.component';
import {UpdateProspectComponent} from './update-prospect/update-prospect.component';
import {AffichageProspectComponent} from './affichage-prospect/affichage-prospect.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {HomeAdminComponent} from './home-admin/home-admin.component';
import {HomeUserComponent} from './home-user/home-user.component';
import {AuthGuardServiceService} from '../services/auth-guard-service.service';
import {LogoutComponent} from './logout/logout.component';
import {RdvComponent} from './rdv/rdv.component';
import {MesEmailsComponent} from './mes-emails/mes-emails.component';
import {MesRdvComponent} from './mes-rdv/mes-rdv.component';
import {NouveauContactComponent} from './nouveau-contact/nouveau-contact.component';
import {ContactsComponent} from './contacts/contacts.component';
import {UpdateContactComponent} from './update-contact/update-contact.component';
import {AffichageContactComponent} from './affichage-contact/affichage-contact.component';
import {ContactRdvComponent} from './contact-rdv/contact-rdv.component';
import {ContactEmailComponent} from './contact-email/contact-email.component';
import {NouveauAffaireComponent} from './nouveau-affaire/nouveau-affaire.component';
import {EmailPopupComponent} from './email-popup/email-popup.component';
import {ProductComponent} from './product/product.component';
import {NouveauProductComponent} from './nouveau-product/nouveau-product.component';
import {UpdateProductComponent} from './update-product/update-product.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {CartItemComponent} from './cart-item/cart-item.component';
import {AgendaComponent} from './agenda/agenda.component';

const appRoutes: Routes = [
  {path : 'prospect', component : ProspectComponent , canActivate: [AuthGuardServiceService] },
  {path : 'contact', component : ContactsComponent , canActivate: [AuthGuardServiceService] },
  {path : 'nouveauProspect', component : NouveauProspectComponent, canActivate: [AuthGuardServiceService]  },
  {path : 'nouveauContact', component : NouveauContactComponent, canActivate: [AuthGuardServiceService]  },
  {path : 'nouveauAffaire', component : NouveauAffaireComponent, canActivate: [AuthGuardServiceService]  },
  {path : 'affichageProspect/:id', component : AffichageProspectComponent, canActivate: [AuthGuardServiceService] },
  {path : 'affichageContact/:id', component : AffichageContactComponent, canActivate: [AuthGuardServiceService] },
  {path : 'updateProspect/:id', component : UpdateProspectComponent , canActivate: [AuthGuardServiceService] },
  {path : 'updateContact/:id', component : UpdateContactComponent , canActivate: [AuthGuardServiceService] },
  {path : 'login', component : LoginPageComponent },
  {path : 'logout', component : LogoutComponent },
  {path : 'mesEmails', component : MesEmailsComponent },
  {path : 'emailPopup', component : EmailPopupComponent },
  {path : 'mesRdv', component : MesRdvComponent },
  {path : 'homeAdmin', component : HomeAdminComponent , canActivate: [AuthGuardServiceService] },
  {path : 'home', component : HomeUserComponent , canActivate: [AuthGuardServiceService] },
  {path : 'rdv', component : RdvComponent , canActivate: [AuthGuardServiceService] },
  {path : 'contactEmail', component : ContactEmailComponent , canActivate: [AuthGuardServiceService] },
  {path : 'contactRdv', component : ContactRdvComponent , canActivate: [AuthGuardServiceService] },
  {path : 'product', component : ProductComponent , canActivate: [AuthGuardServiceService] },
  {path : 'nouveauProduct', component : NouveauProductComponent , canActivate: [AuthGuardServiceService] } ,
  {path : 'admin/edit', component : UpdateProductComponent , canActivate: [AuthGuardServiceService] },
  {path: 'home/product/:id', component: ProductDetailComponent , canActivate: [AuthGuardServiceService] } ,
  {path: 'home/product/:id', component: ProductDetailComponent , canActivate: [AuthGuardServiceService] } ,
  {path: 'home/cart', component: CartItemComponent , canActivate: [AuthGuardServiceService] } ,
  {path: 'agenda', component: AgendaComponent , canActivate: [AuthGuardServiceService] } ,
  {path : '' , redirectTo : '/login' , pathMatch : 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

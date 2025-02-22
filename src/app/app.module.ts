import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from './Componentes/header/header.component';
import { PesquisarComponent } from './Componentes/pesquisar/pesquisar.component';
import { ListarComponent } from './Componentes/listar/listar.component';
import { AtualizarComponent } from './Componentes/atualizar/atualizar.component';
import { CorretoraService } from './Service/corretora.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { provideHttpClient } from '@angular/common/http';

 


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PesquisarComponent,
    ListarComponent,
    AtualizarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideAnimationsAsync(),
    CorretoraService,
    provideHttpClient()

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

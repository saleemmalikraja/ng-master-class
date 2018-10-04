import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '@hcl-ers/material';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { DataServicesModule, DogService } from '@hcl-ers/data-services';
import { LoginComponent, LoginModel } from './login/login.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MaterialModule,
    DataServicesModule
  ],
  declarations: [
    ToolbarComponent,
    AboutComponent,
    ProductsComponent,
    LoginComponent,
    CheckOutComponent,
    AlertComponent,
    SnackBarComponent
  ],
  exports: [
    ToolbarComponent,
    AboutComponent,
    ProductsComponent,
    LoginComponent,
    CheckOutComponent,
    AlertComponent,
    SnackBarComponent
  ],
  providers: [DogService]
})
export class CoreUiModule {}

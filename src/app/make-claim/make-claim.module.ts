import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MakeClaimRoutingModule } from './make-claim-routing.module';
import { ClaimComponent } from './claim/claim.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    ClaimComponent
  ],
  imports: [
    CommonModule,
    MakeClaimRoutingModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class MakeClaimModule { }

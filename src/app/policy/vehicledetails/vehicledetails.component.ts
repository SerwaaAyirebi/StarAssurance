
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import {ThemePalette} from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';

@Component({
  selector: 'app-vehicledetails',
  templateUrl: './vehicledetails.component.html',
  styleUrls: ['./vehicledetails.component.scss']
})
export class VehicledetailsComponent {
    color: ThemePalette = 'primary';
    mode: ProgressBarMode = 'determinate';
    value = 66.66;
    bufferValue = 75;
    determinate!: ProgressBarMode;
  }





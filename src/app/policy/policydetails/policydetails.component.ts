import { Component } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';



@Component({
  selector: 'app-policydetails',
  templateUrl: './policydetails.component.html',
  styleUrls: ['./policydetails.component.scss']
})
export class PolicydetailsComponent {
selected: any;
picker: any;
color: ThemePalette = 'primary';
    mode: ProgressBarMode = 'determinate';
    percent = 33.33;
    determinate!: ProgressBarMode;

}

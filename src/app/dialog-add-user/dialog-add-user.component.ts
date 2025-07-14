import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogModule } from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-add-user',
  imports: [MatDialogActions, MatDialogModule, MatButtonModule],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {

}

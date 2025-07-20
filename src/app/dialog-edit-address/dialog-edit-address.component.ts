import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { User } from '../../models/user.class';
import { FormsModule } from '@angular/forms';
import { Firestore } from '@angular/fire/firestore';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { doc, updateDoc } from 'firebase/firestore';

@Component({
  selector: 'app-dialog-edit-address',
  imports: [CommonModule, MatProgressBarModule, MatDialogActions, MatDialogModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, FormsModule],
  templateUrl: './dialog-edit-address.component.html',
  styleUrl: './dialog-edit-address.component.scss'
})
export class DialogEditAddressComponent {
  loading = false;
  user!: User;
  userId!: string;

  readonly dialogRef = inject(MatDialogRef<DialogEditAddressComponent>);
  readonly firestore = inject(Firestore);

  saveUser() {
    this.loading = true;
    if (!this.userId) return;

    const userDocRef = doc(this.firestore, 'users', this.userId);
    updateDoc(userDocRef, this.user.toJSON())
      .then(() => {
        this.loading = false;
        this.dialogRef.close();
      })
      .catch((error) => {
        console.error('Error updating user:', error);
      });
  }
}

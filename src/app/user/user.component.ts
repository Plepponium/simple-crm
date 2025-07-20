import { Component, inject, OnInit, runInInjectionContext, Injector } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../../models/user.class';
import { MatCardModule } from '@angular/material/card';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {
  user = new User();
  allUsers: User[] = [];

  readonly dialog = inject(MatDialog);
  readonly firestore = inject(Firestore);
  readonly injector = inject(Injector);

  ngOnInit(): void {
    this.subscribeToUsers();
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }

  private subscribeToUsers(): void {


    runInInjectionContext(this.injector, () => {
      const usersRef = collection(this.firestore, 'users');
      const users$ = collectionData(usersRef, { idField: 'id' }) as Observable<User[]>;

      users$.subscribe((changes: User[]) => {
        console.log('Received changes from DB:', changes);
        this.allUsers = changes;
      });
    });
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  @Input() user: User | null = null; // Accept user for editing
  @Output() submitUser = new EventEmitter<User>();
  @Output() cancel = new EventEmitter<void>(); // Emit when canceled

  // Add the dropdown list array for "Assigned To"
  users = ['User 1', 'User 2', 'User 3', 'User 4', 'User 5', 'User 6', 'User 7', 'User 8', 'User 9', 'User 10'];

  onSubmit(form: any) {
    if (this.user) {
      this.submitUser.emit({ ...this.user, ...form.value }); // Emit updated user
    } else {
      this.submitUser.emit(form.value); // Emit new user
    }
  }

  cancelForm() {
    this.cancel.emit(); // Emit cancel event
  }
}

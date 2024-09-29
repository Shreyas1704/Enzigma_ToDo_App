import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // For form handling

import { AppComponent } from './app.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserService } from './services/user.service';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent, // Declare the UserFormComponent here
    UserListComponent, // Declare the UserListComponent here
    ConfirmationDialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [UserService], // Add the UserService here
  bootstrap: [AppComponent]
})
export class AppModule { }

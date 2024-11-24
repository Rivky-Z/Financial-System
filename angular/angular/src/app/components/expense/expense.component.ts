import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-expense',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent {
  receiptForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.receiptForm = this.formBuilder.group({
      customer: ['', Validators.required],
      date: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(0)]],
      paymentMethod: ['', Validators.required],
      details: [''],
      receiptNumber: [''] // You can generate this programmatically
    });
  }

  onSubmit() {
    if (this.receiptForm.valid) {
      // Handle form submission, save receipt data to the server
      console.log(this.receiptForm.value);
    } else {
      // Display error messages or prevent form submission
      console.log('Form is invalid. Please fill in all required fields.');
    }
  }
}
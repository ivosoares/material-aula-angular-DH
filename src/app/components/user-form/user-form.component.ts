import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  userId: string;

  constructor(
    private fb: FormBuilder,
    private userService: UsersService,
    private router: Router,
    private actRoute: ActivatedRoute,
  ) {
    this.userForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      idade: ['', Validators.required],
      profissao: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe(params => {
      this.userId = params.get('id');
      if(this.userId !== null) {
        this.userService.getUser(this.userId).subscribe(result => {
          this.userForm.patchValue({
            nome: result.nome,
            sobrenome: result.sobrenome,
            idade: result.idade,
            profissao: result.profissao,
          })
        })
      }
    })
  }

  createUser() {
    this.userService.postUser(this.userForm.value).subscribe(result => {})
    this.router.navigate(['/users']);
  }

  updateUser() {
    this.userService.updateUser(this.userId, this.userForm.value).subscribe(
      result => console.log('usuario atualizado', result)
    )
    this.router.navigate(['/users']);
  }

  actionButton() {
    if(this.userId !== null) {
      this.updateUser();
    }else {
      this.createUser();
    }
  }

  cancel() {
    this.router.navigate(['/users']);
  }
}

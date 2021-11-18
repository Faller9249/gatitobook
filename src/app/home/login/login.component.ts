import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mensagem = [
    {
      user: 'Usuário obrigatótrio',
      password: 'Senha obrigatótrio'
    }
  ]
  user = ''
  password = ''

  constructor(
    private authService: AutenticacaoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.autenticar(this.user, this.password).subscribe(()=>{
      this.router.navigate(['animais'])
      console.log('Logado com sucesso')
    },
    (err)=>{
      alert('Falha ao logar');
      console.log(err);
    }
    )
  }

}

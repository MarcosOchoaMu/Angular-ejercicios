import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ titulo }}</h1>
        <h3>La base es: <strong> {{base}} </strong></h3>

        <span> {{numero}} </span>

        <hr>
        <button (click)="acumular(-base)"> - {{base}} </button>
        <button (click)="acumular(base)"> + {{base}} </button>
    `
})

export class ContadorComponent{
    titulo: string = 'Contador';
    numero: number = 10;
    base  : number = 5;

    acumular(valor: number){
        this.numero += valor;
    }
}
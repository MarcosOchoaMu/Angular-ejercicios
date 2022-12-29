import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    nombre: string = 'SuperMan';
    edad  : number = 33

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    obtenernombre(): string {
        return `${ this.nombre } - ${ this.edad }`;
    }

    cambiarnombre(): void {
        this.nombre = 'SpiderMan';
    }

    cambiaredad(): void {
        this.edad = 19;
    }
}


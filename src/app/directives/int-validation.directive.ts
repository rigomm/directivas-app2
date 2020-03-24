import { Directive, ElementRef, HostListener, Input, OnInit  } from '@angular/core';

@Directive({
  selector: '[appIntValidation]'
})
export class IntValidationDirective implements OnInit {

  @Input() valorValidar: string;

  constructor(public elementRef: ElementRef) {


  }

  ngOnInit(): void {
    // Hacer el  elemento de tipo number
    this.elementRef.nativeElement.setAttribute('type', 'number');
  }


  @HostListener('keyup', ['$event']) onKeyUp(e) {


    this.validarInt();

  }
  validarInt() {
    const valor = parseInt(this.elementRef.nativeElement.value);
    const valorValidar = parseInt(this.valorValidar);
    if ( valor > valorValidar) {
      // Valido
      this.elementRef.nativeElement.style.setProperty('border-color', 'green');

    } else {
      // invalido
      this.elementRef.nativeElement.style.setProperty('border-color', 'red');
    }
  }

}

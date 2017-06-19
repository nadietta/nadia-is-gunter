import {Component} from '@angular/core';

export const MY_OBJ = {
  name: 'nadia',
  age: 'too much',
  sex: 'female'
};

@Component({
  selector: 'app-custom-list',
  templateUrl: './custom-list.component.html'
})
export class CustomListComponent {
  customText = 'Ciao, siamo nella pagina custom.';

  myBool = true;
  myObj = MY_OBJ;
}

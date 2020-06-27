import { AbstractControl, ValidationErrors } from '@angular/forms';


export class spaceValidator {

    static cannotContainSpaces(control : AbstractControl) : ValidationErrors | null{

        if((control.value as string).indexOf(" ") >= 0){
            return {space : true};
        }
        return null;
    }
    
}
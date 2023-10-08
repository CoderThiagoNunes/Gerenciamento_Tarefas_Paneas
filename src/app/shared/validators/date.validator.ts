import { AbstractControl } from "@angular/forms";
import * as moment from "moment";

export function DateValidator(control: AbstractControl) {
    let dateAtual = moment(new Date()).format('YYYYMMDD');
    let dateSelecionada = moment(control.value).format('YYYYMMDD');

    if(dateSelecionada < dateAtual) {
        return { dataValida: true };
    }

    return null; //se retornar null significa que passou no validador...
}
import { Component } from '@angular/core';
import { Response } from 'src/app/models/response';
import { ToastrService } from 'ngx-toastr';
import { ProfesionalesService } from 'src/app/shared/profesionales.service';
import { Profesional } from 'src/app/models/profesional';

@Component({
  selector: 'app-profesionales',
  templateUrl: './profesionales.component.html',
  styleUrls: ['./profesionales.component.css']
})

export class ProfesionalesComponent {

  constructor(public apiService: ProfesionalesService,
    private toast: ToastrService) {
    this.apiService.profesional = null;
    this.apiService.profesionales = null;
  }

  ngOnInit(): void {
    this.showAll();
  }

  findProfessional(newFirstName: HTMLInputElement, newLastName: HTMLInputElement) {
    const firstName = newFirstName.value;
    const lastName = newLastName.value;
    console.log(firstName);
    console.log(lastName);

    if (firstName && lastName) {
      this.apiService.getOne(firstName, lastName).subscribe((res: any) => {
        console.log(res);
        if (res.error) {
          this.toast.warning('El profesional no se ha encontrado', '', {positionClass: 'my-toast-position'});
          this.showAll();
        } else {
          this.apiService.profesionales = [res];
        }
      });
    } else {
      this.apiService.profesionales = [];
    }
  }

  showAll() {
    this.apiService.getAll().subscribe((res: any) => {
      console.log(res);
      if (res.error)
        this.toast.warning('No hay profesionales', '', {positionClass: 'my-toast-position'});
      else
        this.apiService.profesionales = res;
    });
  }

  createProfessional(event: Event, newFirstName: HTMLInputElement, newLastName: HTMLInputElement,
    newAge: HTMLInputElement, newWeight: HTMLInputElement, newHeight: HTMLInputElement,
    newIsRetired: HTMLInputElement, newNationality: HTMLInputElement, newOscarsNumber: HTMLInputElement,
    newProfession: HTMLInputElement) {
    event.preventDefault();
    const profesional: Profesional = {
      firstName: newFirstName.value,
      lastName: newLastName.value,
      age: parseInt(newAge.value),
      weight: parseInt(newWeight.value),
      height: parseInt(newHeight.value),
      isRetired: !!newIsRetired.value,
      nationality: newNationality.value,
      oscarsNumber: parseInt(newOscarsNumber.value),
      profession: newProfession.value
    };

    this.apiService.add(profesional).subscribe((res: Response) => {
      console.log(res);
      if (res.error)
        alert('Error al crear el profesional');
      else {
        this.apiService.profesional = null;
        this.apiService.profesionales = res.data;
        this.toast.success('Profesional creado exitosamente', '', { positionClass: 'my-toast-position' });
      }
    });

    newFirstName.value = '',
    newLastName.value = '',
    newAge.value = '',
    newWeight.value = '',
    newHeight.value = '',
    newIsRetired.value = '',
    newNationality.value = '',
    newOscarsNumber.value = '',
    newProfession.value = ''
  }

  updateProfessional(event: Event, newFirstName: HTMLInputElement, newLastName: HTMLInputElement,
    newAge: HTMLInputElement, newWeight: HTMLInputElement, newHeight: HTMLInputElement,
    newIsRetired: HTMLInputElement, newNationality: HTMLInputElement, newOscarsNumber: HTMLInputElement,
    newProfession: HTMLInputElement) {
    event.preventDefault();
    const profesional: Profesional = {
      firstName: newFirstName.value,
      lastName: newLastName.value,
      age: parseInt(newAge.value),
      weight: parseInt(newWeight.value),
      height: parseInt(newHeight.value),
      isRetired: !!newIsRetired.value,
      nationality: newNationality.value,
      oscarsNumber: parseInt(newOscarsNumber.value),
      profession: newProfession.value
    };

    this.apiService.edit(profesional).subscribe((res: Response) => {
      console.log(res);
      if (res.error)
        alert('Error al actualizar el profesional');
      else {
        this.apiService.profesional = null;
        this.apiService.profesionales = res.data;
        this.toast.success('Profesional actualizado exitosamente', '', { positionClass: 'my-toast-position' });
      }
    });

    newFirstName.value = '',
    newLastName.value = '',
    newAge.value = '',
    newWeight.value = '',
    newHeight.value = '',
    newIsRetired.value = '',
    newNationality.value = '',
    newOscarsNumber.value = '',
    newProfession.value = ''
  }

  deleteProfessional(event: Event, newFirstName: HTMLInputElement, newLastName: HTMLInputElement,
    newAge: HTMLInputElement, newWeight: HTMLInputElement, newHeight: HTMLInputElement,
    newIsRetired: HTMLInputElement, newNationality: HTMLInputElement, newOscarsNumber: HTMLInputElement,
    newProfession: HTMLInputElement) {
    event.preventDefault();
    const profesional: Profesional = {
      firstName: newFirstName.value,
      lastName: newLastName.value,
      age: parseInt(newAge.value),
      weight: parseInt(newWeight.value),
      height: parseInt(newHeight.value),
      isRetired: !!newIsRetired.value,
      nationality: newNationality.value,
      oscarsNumber: parseInt(newOscarsNumber.value),
      profession: newProfession.value
    };

    if (profesional) {
      this.apiService.delete(profesional).subscribe((res: Response) => {
        console.log(res);
        if (res.error) {
          alert('Error al eliminar el profesional');
        } else {
          this.apiService.profesional = null;
          this.apiService.profesionales = res.data;
          this.toast.success('Profesional eliminado exitosamente', '', { positionClass: 'my-toast-position' });
        }
      });
    } else {
      this.toast.warning('Datos de profesional inválidos', '', { positionClass: 'my-toast-position' });
    }
  }

}

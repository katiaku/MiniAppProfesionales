export class Profesional {

  firstName: string;
  lastName: string;
  age: number;
  weight: number;
  height: number;
  isRetired: boolean;
  nationality: string;
  oscarsNumber: number;
  profession: string;

  constructor(firstName: string, lastName: string, age: number, weight: number, height: number,
    isRetired: boolean, nationality: string, oscarsNumber: number, profession: string) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.weight = weight;
      this.height = height;
      this.isRetired = isRetired;
      this.nationality = nationality;
      this.oscarsNumber = oscarsNumber;
      this.profession = profession
    }

}

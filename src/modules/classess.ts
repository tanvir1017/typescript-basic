import { isEmploy } from "../interface/interface";

export class Students {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly email: string,
    readonly department: string,
    private age: number,
    private phone: number,
    public parentsInfo: {
      readonly fatherName: string;
      readonly motherName: string;
      readonly parentsPhone: number | string;
    }
  ) {}
}

export class Employee implements isEmploy {
  constructor(
    private phoneNumber: number,
    public name: string,
    readonly profileInfo: {
      age: number;
      employId: string;
      joiningDate: string;
      photo: string;
    },
    public position: string,
    public department: string
  ) {}

  getPrivateProperty = () => {
    return this.phoneNumber;
  };
}

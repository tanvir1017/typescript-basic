export interface isEmploy {
  name: string;
  readonly profileInfo: {
    age: number;
    employId: string;
    joiningDate: string;
    photo: string;
  };
  position: string;
  department: string;

  getPrivateProperty(): string | number;
}

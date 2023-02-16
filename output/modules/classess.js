export class Students {
    constructor(id, name, email, department, age, phone, parentsInfo) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.department = department;
        this.age = age;
        this.phone = phone;
        this.parentsInfo = parentsInfo;
    }
}
export class Employee {
    constructor(phoneNumber, name, profileInfo, position, department) {
        this.phoneNumber = phoneNumber;
        this.name = name;
        this.profileInfo = profileInfo;
        this.position = position;
        this.department = department;
        this.getPrivateProperty = () => {
            return this.phoneNumber;
        };
    }
}

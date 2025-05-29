class AbstractEntity {
    id!: number;
    createdAt!: Date;
    updatedAt!: Date;
    deletedAt!: Date;
}
export class Address extends AbstractEntity{
    line1!: string;
    pincode!: string;
    line2!: string;
    houseNo!: string;
    employee!: Employee;
}
export class Department extends AbstractEntity{
    name!: string;
}       


class Employee extends AbstractEntity {
  email!: string;
  name!: string;
  age!: number;
  address!: Address;
  department!: Department;

  password!: string;

  employeeId!: string;
  dateOfJoining!: string;
  experience!: number;

  status!: string;

  role!: string;

  
}
                                                                                                                                                                                                                                                                                                                                                                                         
    

export default Employee;

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
    employee!: EmployeeEntity;
}
export class Department extends AbstractEntity{
    name!: string;
}       


class EmployeeEntity extends AbstractEntity {
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
                                                                                                                                                                                                                                                                                                                                                                                         
    

export default EmployeeEntity;

export class CreateAddressDto {
  line1!: string;
  line2!: string;
  houseNo!: string;
  pincode!: string;
}

export class CreateEmployeeDto {
  email!: string;

  name!: string;

  age!: number;

  address!: CreateAddressDto;

  departmentId!: Number;

  password!: string;

  employeeId!: string;

  dateOfJoining!: Date;

  experience!: number;

  status!:string;

  role!: string;
}

export function employeeToCreateEmployeeDto(employee: EmployeeEntity): CreateEmployeeDto {
  const createEmployeeDto = new CreateEmployeeDto();
  
  createEmployeeDto.email = employee.email;
  createEmployeeDto.name = employee.name;
  createEmployeeDto.age = employee.age;
  createEmployeeDto.password = employee.password;
  createEmployeeDto.employeeId = employee.employeeId;
  createEmployeeDto.experience = employee.experience;
  createEmployeeDto.status = employee.status;
  createEmployeeDto.role = employee.role;
  
  createEmployeeDto.dateOfJoining = new Date(employee.dateOfJoining);
  
  const createAddressDto = new CreateAddressDto();
  createAddressDto.line1 = employee.address.line1;
  createAddressDto.line2 = employee.address.line2;
  createAddressDto.houseNo = employee.address.houseNo;
  createAddressDto.pincode = employee.address.pincode;
  createEmployeeDto.address = createAddressDto;
  
  createEmployeeDto.departmentId = employee.department.id;
  
  return createEmployeeDto;
}

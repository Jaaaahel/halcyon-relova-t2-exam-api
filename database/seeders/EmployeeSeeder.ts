import { faker } from '@faker-js/faker'

import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Employee, { MaritalStatus, Department, EmploymentStatus } from 'App/Models/Employee'
import { DateTime } from 'luxon'

export default class EmployeeSeederSeeder extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    const employees = new Array(30).fill(null).map(() => {
      return {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        gender: faker.name.gender(true),
        birthDate: DateTime.fromJSDate(faker.date.past()),
        maritalStatus: faker.random.arrayElement(Object.values(MaritalStatus)),
        department: faker.random.arrayElement(Object.values(Department)),
        position: faker.random.arrayElement(['Manager', 'Assistant', 'Team Lead', 'Secretary']),
        dateHired: DateTime.fromJSDate(faker.date.past()),
        employmentStatus: faker.random.arrayElement(Object.values(EmploymentStatus)),
        contactNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        address: faker.address.streetAddress(),
        city: faker.address.cityName(),
        province: faker.address.state(),
        nationality: faker.random.arrayElement([
          'Filipino',
          'Chinese',
          'American',
          'Korean',
          'Russian',
          'Indian',
        ]),
      }
    })

    await Employee.createMany(employees)
  }
}

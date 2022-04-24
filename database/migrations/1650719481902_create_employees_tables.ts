import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import { Department, EmploymentStatus, MaritalStatus } from 'App/Models/Employee'

export default class CreateEmployeesTables extends BaseSchema {
  protected tableName = 'employees'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('first_name')
      table.string('last_name')
      table.string('gender')
      table.timestamp('birth_date')
      table.enum('marital_status', Object.values(MaritalStatus))
      table.enum('department', Object.values(Department))
      table.string('position')
      table.timestamp('date_hired')
      table.enum('employment_status', Object.values(EmploymentStatus))
      table.string('contact_number')
      table.string('email').nullable()
      table.string('address').nullable()
      table.string('city').nullable()
      table.string('province').nullable()
      table.string('nationality').nullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}

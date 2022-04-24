import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { Department, EmploymentStatus, MaritalStatus } from 'App/Models/Employee'

export default class UpdateEmployeeValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({
    firstName: schema.string.optional(),
    lastName: schema.string.optional(),
    gender: schema.string.optional(),
    birthDate: schema.date.optional(),
    maritalStatus: schema.enum.optional(Object.values(MaritalStatus)),
    department: schema.enum.optional(Object.values(Department)),
    position: schema.string.optional(),
    dateHired: schema.date.optional(),
    employmentStatus: schema.enum.optional(Object.values(EmploymentStatus)),
    contactNumber: schema.string.optional(),
    email: schema.string.optional([rules.email()]),
    address: schema.string.optional(),
    city: schema.string.optional(),
    province: schema.string.optional(),
    nationality: schema.string.optional(),
  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages = {}
}

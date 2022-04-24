import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { Department, EmploymentStatus, MaritalStatus } from 'App/Models/Employee'

export default class CreateEmployeeValidator {
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
    firstName: schema.string({}, [rules.maxLength(15)]),
    lastName: schema.string({}, [rules.maxLength(15)]),
    gender: schema.string({}, [rules.maxLength(15)]),
    birthDate: schema.date({}, [rules.beforeOrEqual('today')]),
    maritalStatus: schema.enum(Object.values(MaritalStatus)),
    department: schema.enum(Object.values(Department)),
    position: schema.string({}, [rules.maxLength(15)]),
    dateHired: schema.date({}, [rules.beforeOrEqual('today')]),
    employmentStatus: schema.enum(Object.values(EmploymentStatus)),
    contactNumber: schema.string({}, [
      rules.maxLength(15),
      rules.mobile({
        locale: ['en-PH'],
      }),
    ]),
    email: schema.string.optional([rules.email()]),
    address: schema.string.optional({}, [rules.minLength(50)]),
    city: schema.string.optional({}, [rules.maxLength(15)]),
    province: schema.string.optional({}, [rules.maxLength(15)]),
    nationality: schema.string.optional({}, [rules.maxLength(15)]),
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

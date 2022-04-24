import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Employee from 'App/Models/Employee'
import CreateEmployeeValidator from 'App/Validators/CreateEmployeeValidator'
import UpdateEmployeeValidator from 'App/Validators/UpdateEmployeeValidator'

export default class EmployeesController {
  public async index({}: HttpContextContract) {
    return Employee.all()
    // const page = request.input('page', 1)
    // return Employee.query().orderBy('last_name', 'asc').paginate(page, 10)
  }

  public async store({ request }: HttpContextContract) {
    const payload = await request.validate(CreateEmployeeValidator)

    return Employee.create(payload)
  }

  public async show({ request }: HttpContextContract) {
    const id = request.param('id')

    return Employee.findOrFail(id)
  }

  public async update({ request }: HttpContextContract) {
    const id = request.param('id')

    const employee = await Employee.findOrFail(id)

    const payload = await request.validate(UpdateEmployeeValidator)

    employee.merge(payload)

    return employee.save()
  }

  public async destroy({ request }: HttpContextContract) {
    const id = request.param('id')

    const employee = await Employee.findOrFail(id)

    return employee.delete()
  }
}

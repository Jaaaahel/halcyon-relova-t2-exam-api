import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import CamelCaseNamingStrategy from 'App/Strategies/CamelCaseNamingStrategy'

export enum MaritalStatus {
  Single = 'Single',
  Married = 'Married',
  Widowed = 'Widowed',
  Divorced = 'Divorced',
}

export enum Department {
  Admin = 'Admin',
  Engineering = 'Engineering',
  Finance = 'Finance',
}

export enum EmploymentStatus {
  Casual = 'Casual',
  Probationary = 'Probationary',
  Regular = 'Regular',
}

export default class Employee extends BaseModel {
  public static namingStrategy = new CamelCaseNamingStrategy()

  @column({ isPrimary: true })
  public id: number

  @column()
  public firstName: string

  @column()
  public lastName: string

  @column()
  public gender: string

  @column.date({ serialize: (value: DateTime) => value.toISODate() })
  public birthDate: DateTime

  @column()
  public maritalStatus: MaritalStatus

  @column()
  public department: Department

  @column()
  public position: string

  @column.date({ serialize: (value: DateTime) => value.toISODate() })
  public dateHired: DateTime

  @column()
  public employmentStatus: EmploymentStatus

  @column()
  public contactNumber: string

  @column()
  public email?: string

  @column()
  public address?: string

  @column()
  public city?: string

  @column()
  public province?: string

  @column()
  public nationality?: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

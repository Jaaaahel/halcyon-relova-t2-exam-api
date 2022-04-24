import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AddAvatarColumnToEmployeesTables extends BaseSchema {
  protected tableName = 'employees'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('avatar').after('nationality')
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('avatar')
    })
  }
}

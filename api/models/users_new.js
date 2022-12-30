import { Model, raw } from 'objection'
import objectionSoftDelete from 'objection-js-soft-delete'
import Sections from './sectionss.js'

const softDelete = objectionSoftDelete.default({
  columnName: 'deleted_at',
  deletedValue: raw('CURRENT_TIMESTAMP'),
  notDeletedValue: null,
})

class Users_new extends softDelete(Model) {
  static get tableName() {
    return 'users_new'
  }

  static get idColumn() {
    return 'id'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 255 },
        surname: { type: 'string', minLength: 1, maxLength: 255 },
        pwd_hash: { type: 'string', minLength: 1, maxLength: 255 },
        admin: { type: 'boolean' },
      },
      required: ['name', 'surname', 'pwd_hash', 'admin'],
    }
  }

  static get relationMappings() {
    return {
        users_new: {
          relation: Model.HasManyRelation,
          modelClass: Sections,
          join: {
            from: 'users_new.id',
            to: 'sections.user_id',
          },
          filter: (f) => {
            f.whereNotDeleted()
          },
        },
    }
  }
}

export default Users_new
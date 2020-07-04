const { Model } = require('objection');

class User extends Model {
    static get tableName() {
        return 'users';
    }

    static get idColumn() {
        return 'user_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                user_id: { type: 'integer' },
                firstname: { type: 'string' },
                lastname: { type: 'string' },
                username: { type: 'string' },
                email: { type: 'string' },
                password: { type: 'string' },
                created_at: { type: 'timestamp' },
                updated_at: { type: 'timestamp' }
            }
        }
    }
}

module.exports = User;
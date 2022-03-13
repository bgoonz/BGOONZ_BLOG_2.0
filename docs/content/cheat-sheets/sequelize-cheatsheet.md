# Sequelize Cheatsheet

## Command Line

Sequelize provides utilities for generating migrations, models, and seed files. They are exposed through the `sequelize-cli` command.

### Init Project

```bash
$ npx sequelize-cli init
```

You must create a database user, and update the `config/config.json` file to match your database settings to complete the initialization process.

### Create Database

```bash
$ npx sequelize-cli db:create
```

### Generate a model and its migration

```bash
$ npx sequelize-cli model:generate --name <ModelName> --attributes <column1>:<type>,<column2>:<type>,...
```

### Run pending migrations

```bash
$ npx sequelize-cli db:migrate
```

### Rollback one migration

```bash
$ npx sequelize-cli db:migrate:undo
```

### Rollback all migrations

```bash
$ npx sequelize-cli db:migrate:undo:all
```

### Generate a new seed file

```bash
$ npx sequelize-cli seed:generate --name <descriptiveName>
```

### Run all pending seeds

```bash
$ npx sequelize-cli db:seed:all
```

### Rollback one seed

```bash
$ npx sequelize-cli db:seed:undo
```

### Rollback all seeds

```bash
$ npx sequelize-cli db:seed:undo:all
```

## Migrations

### Column Attribute Keywords

```js
<columnName>: {
    type: Sequelize.<type>,
    allowNull: <true|false>,
    unique: <true|false>,
    references: { model: <TableName> }, // This is the plural table name that the column references.
}
```

## Model Associations

### One to One between Student and Scholarship

`student.js`

```js
Student.hasOne(models.Scholarship, { foreignKey: 'studentId' });
```

`scholarship.js`

```js
Scholarship.belongsTo(models.Student, { foreignKey: 'studentId' });
```

### One to Many between Student and Class

`student.js`

```js
Student.belongsTo(models.Class, { foreignKey: 'classId' });
```

`class.js`

```js
Class.hasMany(models.Student, { foreignKey: 'classId' });
```

### Many to Many between Student and Lesson through StudentLessons table

`student.js`

```js
const columnMapping = {
    through: 'StudentLesson', // This is the model name referencing the join table.
    otherKey: 'lessonId',
    foreignKey: 'studentId'
};

Student.belongsToMany(models.Lesson, columnMapping);
```

`lesson.js`

```js
const columnMapping = {
    through: 'StudentLesson', // This is the model name referencing the join table.
    otherKey: 'studentId',
    foreignKey: 'lessonId'
};

Lesson.belongsToMany(models.Student, columnMapping);
```

## Query Format

### findOne

```js
<Model>.findOne({
  where: {
  	<column>: {
  		[Op.<operator>]: <value>
  	}
  },
});
```

### findAll

```js
<Model>.findAll({
  where: {
    <column>: {
    	[Op.<operator>]: <value>
    }
  },
  include: <include_specifier>,
  offset: 10,
  limit: 2
});
```

### findByPk

```js
<Model>.findByPk(<primary_key>, {
	include: <include_specifier>
});
```

### Common Where Operators

```js
const Op = Sequelize.Op

[Op.and]: [{a: 5}, {b: 6}] // (a = 5) AND (b = 6)
[Op.or]: [{a: 5}, {a: 6}]  // (a = 5 OR a = 6)
[Op.gt]: 6,                // > 6
[Op.gte]: 6,               // >= 6
[Op.lt]: 10,               // < 10
[Op.lte]: 10,              // <= 10
[Op.ne]: 20,               // != 20
[Op.eq]: 3,                // = 3
[Op.is]: null              // IS NULL
[Op.not]: true,            // IS NOT TRUE
[Op.between]: [6, 10],     // BETWEEN 6 AND 10
[Op.notBetween]: [11, 15], // NOT BETWEEN 11 AND 15
[Op.in]: [1, 2],           // IN [1, 2]
[Op.notIn]: [1, 2],        // NOT IN [1, 2]
[Op.like]: '%hat',         // LIKE '%hat'
[Op.notLike]: '%hat'       // NOT LIKE '%hat'
[Op.iLike]: '%hat'         // ILIKE '%hat' (case insensitive) (PG only)
[Op.notILike]: '%hat'      // NOT ILIKE '%hat'  (PG only)
[Op.startsWith]: 'hat'     // LIKE 'hat%'
[Op.endsWith]: 'hat'       // LIKE '%hat'
[Op.substring]: 'hat'      // LIKE '%hat%'
[Op.regexp]: '^[h|a|t]'    // REGEXP/~ '^[h|a|t]' (MySQL/PG only)
[Op.notRegexp]: '^[h|a|t]' // NOT REGEXP/!~ '^[h|a|t]' (MySQL/PG only)
[Op.iRegexp]: '^[h|a|t]'    // ~* '^[h|a|t]' (PG only)
[Op.notIRegexp]: '^[h|a|t]' // !~* '^[h|a|t]' (PG only)
[Op.like]: { [Op.any]: ['cat', 'hat']}
```

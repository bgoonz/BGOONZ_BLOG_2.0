# sequelize_cheatsheet

### Command Line <a href="#command-line" id="command-line"></a>

Sequelize provides utilities for generating migrations, models, and seed files. They are exposed through the `sequelize-cli` command.

```
npm install sequelize@^5.0.0
npm install sequelize-cli@^5.0.0
npm install pg@^8.0.0
```

```
$ npx sequelize-cli init
```

You must create a database user, and update the `config/config.json` file to match your database settings to complete the initialization process.

```
$ npx sequelize-cli db:create
$ npx sequelize-cli db:create --env="test"
```

#### Generate a model and its migration <a href="#generate-a-model-and-its-migration" id="generate-a-model-and-its-migration"></a>

```
$ npx sequelize-cli model:generate --name <ModelName> --attributes <column1>:<type>,<column2>:<type>,...
```

```
$ npx sequelize-cli db:migrate
```

```
$ npx sequelize-cli db:migrate:undo
```

```
$ npx sequelize-cli db:migrate:undo:all
```

```
$ npx sequelize-cli seed:generate --name <descriptiveName>
```

```
$ npx sequelize-cli db:seed:all
```

```
$ npx sequelize-cli db:seed:undo
```

```
$ npx sequelize-cli db:seed:undo:all
```

#### Column Attribute Keywords <a href="#column-attribute-keywords" id="column-attribute-keywords"></a>

```
<columnName>: {
    type: Sequelize.<type>,
    allowNull: <true|false>,
    unique: <true|false>,
    references: { model: <TableName> },
}
```

#### One to One between Student and Scholarship <a href="#one-to-one-between-student-and-scholarship" id="one-to-one-between-student-and-scholarship"></a>

`student.js`

```
    Student.hasOne(models.Scholarship, { foreignKey: 'studentId' });
```

`scholarship.js`

```
    Scholarship.belongsTo(models.Student, { foreignKey: 'studentId' });
```

#### One to Many between Student and Class <a href="#one-to-many-between-student-and-class" id="one-to-many-between-student-and-class"></a>

`student.js`

```
    Student.belongsTo(models.Class, { foreignKey: 'classId' });
```

`class.js`

```
    Class.hasMany(models.Student, { foreignKey: 'classId' });
```

#### Many to Many between Student and Lesson through StudentLessons table <a href="#many-to-many-between-student-and-lesson-through-studentlessons-table" id="many-to-many-between-student-and-lesson-through-studentlessons-table"></a>

`student.js`

```
    const columnMapping = {
        through: 'StudentLesson',
        otherKey: 'lessonId',
        foreignKey: 'studentId'
    }

    Student.belongsToMany(models.Lesson, columnMapping);
```

`lesson.js`

```
    const columnMapping = {
        through: 'StudentLesson',
        otherKey: 'studentId',
        foreignKey: 'lessonId'
    }

    Lesson.belongsToMany(models.Student, columnMapping);
```

```
<Model>.findOne({
  where: {
  	<column>: {
  		[Op.<operator>]: <value>
  	}
  },
});
```

```
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

```
<Model>.findByPk(<primary_key>, {
	include: <include_specifier>
});
```

```
const Op = Sequelize.Op

[Op.and]: [{a: 5}, {b: 6}]
[Op.or]: [{a: 5}, {a: 6}]
[Op.gt]: 6,
[Op.gte]: 6,
[Op.lt]: 10,
[Op.lte]: 10,
[Op.ne]: 20,
[Op.eq]: 3,
[Op.is]: null
[Op.not]: true,
[Op.between]: [6, 10],
[Op.notBetween]: [11, 15],
[Op.in]: [1, 2],
[Op.notIn]: [1, 2],
[Op.like]: '%hat',
[Op.notLike]: '%hat'
[Op.iLike]: '%hat'
[Op.notILike]: '%hat'
[Op.startsWith]: 'hat'
[Op.endsWith]: 'hat'
[Op.substring]: 'hat'
[Op.regexp]: '^[h|a|t]'
[Op.notRegexp]: '^[h|a|t]'
[Op.iRegexp]: '^[h|a|t]'
[Op.notIRegexp]: '^[h|a|t]'
[Op.like]: { [Op.any]: ['cat', 'hat']}
```

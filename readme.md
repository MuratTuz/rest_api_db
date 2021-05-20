# Movie REST API using swagger

After cloning the repository install the dependencies:

```bash
$ npm install
```

Use the command below to generate the documentation (swagger.json) at project startup, if it doesn't exist:

```bash
$ npm run swagger-autogen
```

Use the command below to start the project without generating the documentation:

```bash
$ npm start
```

The commands below are for generating a model (table) and a bulk data for the application. It is important not to leave space between attributes. If not, it gives error. model:generate create also migration file for database.

```bash
sequelize model:generate --name table_name --attributes movieId:integer,duration:integer,person:string
sequelize seed:generate --name initial_bulk_data_file_name
```

Use the command below for initializing the database for the first time with bulk datas. There must be a Mysql database started in order to use this command.

```bash
NODE_ENV=test sequelize db:seed:all
```

Should any error, use the debug mode for finding the problem.

```bash
NODE_ENV=test sequelize db:seed:all --debug
```

Run the project and access the documentation at:

[http://localhost:3000/doc](http://localhost:3000/doc)

## Screenshots
See the result after construction:

![image](https://github.com/MuratTuz/movie-rest-api-with-swagger/blob/main/public/view_1.png)
![image](https://github.com/MuratTuz/movie-rest-api-with-swagger/blob/main/public/view_2.png)
![image](https://github.com/MuratTuz/movie-rest-api-with-swagger/blob/main/public/view_3.png)
![image](https://github.com/MuratTuz/movie-rest-api-with-swagger/blob/main/public/view_4.png)


## License
[MIT](LICENSE) License
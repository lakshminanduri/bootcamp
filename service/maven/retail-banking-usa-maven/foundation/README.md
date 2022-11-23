# Backbase Foundation

The Backbase Foundation services are required to run Banking Services and IAM on your local machine and is composed of the following services:

- Eureka Service Registry
- Edge Service Router
- Remote Config
- Push Integration Service


## Docker Compose for MySQL, ActiveMQ and Reverse Proxy (NGINX)

Run `docker-compose up -d` to start MySQL, Active MQ and NGINX.


## Running Backbase Foundation Services

```bash
mvn blade:run
```

## Running Edge Service

You may deploy the Edge Service by executing the following:
```bash
mvn -pl edge package -Prun-edge
```

Alternatively, depending on the operating system, you may run either
```bash
bash run_edge.sh
```
or
```bash
run_edge.cmd
```


### Native MySQL

* Install MySQL 5.7.x or higher
* Configure MySQL according to settings stored in `mysql/config/my.cnf`


### Native ActiveMQ

Install [Active MQ 5.14.x](http://activemq.apache.org/activemq-5145-release.html)


# Local Development Setup Foundation

To run Foundation you will need at minimum the following software and hardware requirements:

* Java JDK 11
* Maven 3.5
* Intel Core i5 or higher
* 16 GB RAM (32 GB preferred)
* Access to repo.backbase.com
* Maven Settings File Setup with Backbase Repositories

## Setup Infrastructure Requirements

Foundation requires MySQL and ActiveMQ to be running as services. For your convenience, the foundation project also comes 
with a docker-compose that starts these services and binds them to localhost. 

Note: Running Content Approvals (Space Controller) is necessary to configure a Reverse Proxy in order to have spaces draft and final.

Only Docker Compose version 3.2 and up are supported. More information regarding docker-compose versions can be found 
[here](https://docs.docker.com/compose/compose-file/compose-versioning/#compatibility-matrix)

This project template is tested with:

* [Docker for Mac](https://www.docker.com/docker-mac)
* [Docker for Windows](https://www.docker.com/docker-windows)

If your environment does not support Docker for Mac/Windows, then you must use the native MySQL and ActiveMQ instructions.

### Docker Option:

## Docker Compose for MySQL, ActiveMQ and Reverse Proxy (NGINX)
Open a new terminal, go to your project folder, navigate to the `foundation` folder, where the docker-compose.yml file is
located and run `docker-compose up -d` to start MySQL, Active MQ and NGINX. Schemas are automatically created the first time
it starts.
Don't close this terminal.

### Native Option:

#### Native MySQL

* Install MySQL 5.7.x or higher
* Configure MySQL according to settings stored in `mysql/config/my.cnf`
* Execute script on: `mysql/scripts/drop_create_cx_schemas.sql`

#### Native ActiveMQ

Install [Active MQ 5.14.x](http://activemq.apache.org/activemq-5145-release.html)

## Start Blade

Make sure that you have access to repo.backbase.com


## Create databases

To create the needed databases and tables, go to `foundation/` folder and execute:

```bash
mvn clean install -Pclean-database
```

## Start Foundation Services

Refer to [foundation documentation](../foundation/README.md) for starting up Foundation Services.


## Docker Compose for Remote Config Web App

Open a new terminal, go to your project folder, navigate to the `foundation/remote-config` folder and run:

```bash
docker-compose up
```

Login into remote config web app in the following URL: `http://localhost:9191`

There are three different users for Remote Config:

| Username     | Password     |
|---           |---           |
| rc_admin     | rc_admin     |
| rc_manager   | rc_manager   |
| rc_developer | rc_developer |


## Reset Database
If you like to reset the database when using docker-compose, you need to shutdown MySQL and ActiveMQ and remove the volume. 

Do do this make sure blade is not running and execute in CX 6

```bash
docker-compose down -v
```

The `-v` option removes the attached MySQL storage volume allowing you to restart

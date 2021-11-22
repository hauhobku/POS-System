create table customers (
    email varchar(100) not null,
    name varchar(100),
	phone varchar(15),
	username varchar(100) not null,
    password varchar(100) not null,
    primary key (email)
);

create table admins (
	email varchar(100) not null,
    name varchar(100),
	phone varchar(15),
	username varchar(100) not null,
    password varchar(100) not null,
    primary key (email)
);

create table employees (
	email varchar(100) not null,
    name varchar(100),
	phone varchar(15),
    salary float not null,
	username varchar(100) not null,
    password varchar(100) not null,
    primary key (email)
);

create table foods (
	id int not null auto_increment,
    name varchar(100) not null,
    img varchar(500) not null,
    price float not null,
    primary key (id)
);
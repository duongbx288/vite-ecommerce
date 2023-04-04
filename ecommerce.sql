create database ecommerce;
use ecommerce;

create table user (
	id int auto_increment primary key,
    username varchar(50),
    password varchar(50)
);

create table user_info (
	id int auto_increment primary key,
	users_code varchar(50) unique,
    user_id int,
    status varchar(20),
    created_at timestamp,
    last_modified_at timestamp,
    foreign key (user_id) references user(id)
);

create table roles (
	id int auto_increment primary key,
    role_name varchar(50)
);

create table user_roles (
	id int auto_increment primary key,
    role_id int,
    user_id int,
    foreign key (role_id) references roles(id),
    foreign key (user_id) references user(id)
);

create table product (
	id int auto_increment primary key,
    product_code varchar(50) unique,
    name varchar(100),
    status varchar(20),
    quantity int,
    description varchar(300),
	created_at timestamp,
    last_modified_at timestamp
);


create table favorite_product (
	id int auto_increment primary key,
    user_id int,
    product_id int,
    foreign key (user_id) references user(id),
    foreign key (product_id) references product(id)
);


create table type (
	id int auto_increment primary key,
    name varchar(50)
);

create table product_type (
	id int auto_increment primary key,
    product_id int,
    type_id int,
    foreign key(product_id) references product(id),
    foreign key(type_id) references type(id)
);

create table rating (
	id int auto_increment primary key,
    product_id int,
    user_id int,
    rating int,
    content int,
    created_at timestamp,
    last_modified_at timestamp,
    foreign key(product_id) references product(id),
    foreign key(user_id) references user(id)
);

create table upvote (
	id int auto_increment primary key,
    rating_id int,
    user_id int,
    created_at timestamp,
    last_modified_at timestamp,
    foreign key(rating_id) references rating(id),
    foreign key(user_id) references user(id)
);

create table invoice (	
	id int auto_increment primary key,
    invoice_code varchar(50) unique,
    user_id int,
    promotion_code varchar(50),
	created_at timestamp,
    last_modified_at timestamp,
    foreign key(user_id) references user(id)
);

create table invoice_product (
	id int auto_increment primary key,
    invoice_id int,
    product_id int,
	created_at timestamp,
    last_modified_at timestamp,
    foreign key(invoice_id) references invoice(id),
    foreign key(product_id) references product(id)
);


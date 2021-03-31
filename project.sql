create database Checker
go
use Checker
go
create table Roles(role_id int identity primary key,role_name nvarchar(50) not null )
go 
create table Account (account_id int identity primary key,customer_name nvarchar(50) not null,username  nvarchar(50) unique not null ,
birthdate date ,password nvarchar(50) not null,idenity_number nvarchar(50) unique not null,phone_number nvarchar(50),email nvarchar(50)not null)
go
create table Account_Roles(role_id int not null foreign key references Roles(role_id), account_id int foreign key references Account (account_id) not null, primary key(role_id,account_id))
go
create table Service_Category(category_id nvarchar(50) primary key not null, category_name nvarchar(50))
go
create table Service(service_id nvarchar(50) primary key not null,
category_id nvarchar(50) foreign key references Service_Category(category_id),
service_name nvarchar(50) not null,price float,quantity int,description nvarchar(500))
go
create table RoomCategory(categoryroomid nvarchar(50) primary key not null,
categoryname nvarchar(50) not null,price money not null)
go
create table Room(room_id nvarchar(50) primary key not null, 
categoryroomid nvarchar(50) foreign key references RoomCategory(categoryroomid),
room_number nvarchar(10) not null,capacity int,status nvarchar(20) ,price money,
description nvarchar(500),constraint chk_room check (status = 'booked' and status = 'checked' or status = 'checked out'))	 
go
create table Booking(booking_id int identity primary key not null,
service_id nvarchar(50) foreign key references Service(service_id),
account_id int foreign key references Account(account_id)  ,
room_id nvarchar(50) foreign key references Room(room_id),
startdate date not null, enddate date not null)
go
create table Book_Service(book_ser_id int identity primary key,booking_id int foreign key references Booking(booking_id),service_id nvarchar(50) foreign key references Service(service_id)) 
--create  table Account_Service(id int identity primary key,account_id int foreign key references Account(account_id), service_id nvarchar(50) foreign key references Service(service_id),usedate date not null)
--create table Customer(customer_id nvarchar(50) primary key,customer_name nvarchar(50) not null,)
-------check 2

go
insert into Roles values ('1','admin'),('2','customer')
go
insert into Account values('Thong','admin','2000-03-02','admin','123456789','123456789','admin@gmail.com','1')
go
insert into Service_Category values ('1','cocacola'),('2','7up')
go
insert into Service values ('ser1','1','Drink',7000,3,'Done')
go
insert into RoomCategory values ('cate1','Single',20000)
go
insert into Room values ('room1','cate1','101',5,'checked in',500000,'Luxury Room')
go
insert into Booking values ('ser1',1,'room1',GETDATE(),GETDATE())
go 
insert into Book_Service values(4,'ser1')

select * from Roles
select * from Account
select * from Service_Category
select * from Service
select * from RoomCategory
select * from Room
select * from Booking
select * from Book_Service

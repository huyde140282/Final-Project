USE [master]
GO
/****** Object:  Database [Hotel]    Script Date: 4/4/2021 5:04:54 PM ******/
CREATE DATABASE [Hotel]
use [Hotel]
ALTER DATABASE [Hotel] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Hotel] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Hotel] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Hotel] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Hotel] SET ARITHABORT OFF 
GO
ALTER DATABASE [Hotel] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Hotel] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Hotel] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Hotel] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Hotel] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Hotel] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Hotel] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Hotel] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Hotel] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Hotel] SET  ENABLE_BROKER 
GO
ALTER DATABASE [Hotel] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Hotel] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Hotel] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Hotel] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Hotel] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Hotel] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Hotel] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Hotel] SET RECOVERY FULL 
GO
ALTER DATABASE [Hotel] SET  MULTI_USER 
GO
ALTER DATABASE [Hotel] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Hotel] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Hotel] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Hotel] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
ALTER DATABASE [Hotel] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'Hotel', N'ON'
GO
USE [Hotel]
GO
/****** Object:  Table [dbo].[Account]    Script Date: 4/4/2021 5:04:54 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Account](
	[account_id] [int] IDENTITY(1,1) NOT NULL,
	[customer_name] [nvarchar](50) NULL,
	[username] [nvarchar](50) NOT NULL,
	[birthdate] [date] NULL,
	[password] [nvarchar](100) NOT NULL,
	[idenity_number] [nvarchar](50) NOT NULL,
	[phone_number] [nvarchar](50) NULL,
	[email] [nvarchar](50) NULL,
 CONSTRAINT [PK__Account__46A222CDA5A6CF4B] PRIMARY KEY CLUSTERED 
(
	[account_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Account_roles]    Script Date: 4/4/2021 5:04:54 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Account_roles](
	[account_id] [int] NOT NULL,
	[role_id] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[role_id] ASC,
	[account_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Book_Service]    Script Date: 4/4/2021 5:04:54 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Book_Service](
	[book_ser_id] [int] IDENTITY(1,1) NOT NULL,
	[booking_id] [int] NULL,
	[service_id] [int] NULL,
	[quantity] [int] NULL,
 CONSTRAINT [PK__Book_Ser__6E84BF99299A38CE] PRIMARY KEY CLUSTERED 
(
	[book_ser_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Booking]    Script Date: 4/4/2021 5:04:54 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Booking](
	[booking_id] [int] IDENTITY(1,1) NOT NULL,
	[account_id] [int] NULL,
	[room_id] [int] NULL,
	[startdate] [date] NOT NULL,
	[enddate] [date] NOT NULL,
 CONSTRAINT [PK__Booking__5DE3A5B19C6CAA74] PRIMARY KEY CLUSTERED 
(
	[booking_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Roles]    Script Date: 4/4/2021 5:04:54 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Roles](
	[role_id] [int] IDENTITY(1,1) NOT NULL,
	[role_name] [nvarchar](50) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[role_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Room]    Script Date: 4/4/2021 5:04:54 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Room](
	[room_id] [int] IDENTITY(1,1) NOT NULL,
	[categoryroomid] [int] NULL,
	[room_number] [nvarchar](10) NOT NULL,
	[capacity] [int] NULL,
	[status] [nvarchar](20) NULL,
	[price] [money] NULL,
	[description] [nvarchar](500) NULL,
	[image] [nvarchar](200) NULL,
 CONSTRAINT [PK__Room__19675A8A1569BA04] PRIMARY KEY CLUSTERED 
(
	[room_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Room_Category]    Script Date: 4/4/2021 5:04:54 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Room_Category](
	[categoryroomid] [int] IDENTITY(1,1) NOT NULL,
	[categoryname] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK__RoomCate__7E472120B0D475A9] PRIMARY KEY CLUSTERED 
(
	[categoryroomid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Service]    Script Date: 4/4/2021 5:04:54 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Service](
	[service_id] [int] IDENTITY(1,1) NOT NULL,
	[category_id] [int] NULL,
	[service_name] [nvarchar](50) NOT NULL,
	[price] [money] NULL,
	[description] [nvarchar](500) NULL,
	[image] [nvarchar](200) NULL,
 CONSTRAINT [PK__Service__3E0DB8AF57CB715C] PRIMARY KEY CLUSTERED 
(
	[service_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Service_Category]    Script Date: 4/4/2021 5:04:54 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Service_Category](
	[category_id] [int] IDENTITY(1,1) NOT NULL,
	[category_name] [nvarchar](50) NULL,
 CONSTRAINT [PK__Service___D54EE9B4FCD6D17A] PRIMARY KEY CLUSTERED 
(
	[category_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET IDENTITY_INSERT [dbo].[Account] ON 

INSERT [dbo].[Account] ([account_id], [customer_name], [username], [birthdate], [password], [idenity_number], [phone_number], [email]) VALUES (1, N'Ha Minh Tri', N'admin', CAST(N'2000-03-02' AS Date), N'$2a$10$/RUbuT9KIqk6f8enaTQiLOXzhnUkiwEJRdtzdrMXXwU7dgnLKTCYG', N'201796004', N'0936038027', N'triprotri25@gmail.com')
INSERT [dbo].[Account] ([account_id], [customer_name], [username], [birthdate], [password], [idenity_number], [phone_number], [email]) VALUES (2, NULL, N'NhanVien1', NULL, N'$2a$10$JTa7S8h.IQL4TZ9bEpZKJOugaDfSd4IQgMoBu6YcJmXmkiNAMa0UC', N'111111111', NULL, NULL)
INSERT [dbo].[Account] ([account_id], [customer_name], [username], [birthdate], [password], [idenity_number], [phone_number], [email]) VALUES (4, NULL, N'NhanVien2', NULL, N'$2a$10$Otkh.lNQu/SK4ALLRdcv5uW0Gf9bFFvI1CUP5hoQgQpa2BN4s5ezC', N'222222222', NULL, NULL)
INSERT [dbo].[Account] ([account_id], [customer_name], [username], [birthdate], [password], [idenity_number], [phone_number], [email]) VALUES (5, NULL, N'NhanVien5', NULL, N'$2a$10$yN3so.vDPVhuhkfIsfkSBe2DKF1JomXkwluI9zHmToyROoKJeZdsa', N'777777777', NULL, NULL)
INSERT [dbo].[Account] ([account_id], [customer_name], [username], [birthdate], [password], [idenity_number], [phone_number], [email]) VALUES (6, NULL, N'NhanVien7', NULL, N'$2a$10$HONeUl5KwqT7SSWPhp9Pq.csMrR2CjwHJTmzwJEpKKb0Q7adnMSdO', N'888888888', NULL, NULL)
SET IDENTITY_INSERT [dbo].[Account] OFF
INSERT [dbo].[Account_roles] ([account_id], [role_id]) VALUES (1, 1)
INSERT [dbo].[Account_roles] ([account_id], [role_id]) VALUES (1, 2)
INSERT [dbo].[Account_roles] ([account_id], [role_id]) VALUES (2, 2)
INSERT [dbo].[Account_roles] ([account_id], [role_id]) VALUES (4, 2)
INSERT [dbo].[Account_roles] ([account_id], [role_id]) VALUES (5, 2)
INSERT [dbo].[Account_roles] ([account_id], [role_id]) VALUES (6, 2)
SET IDENTITY_INSERT [dbo].[Roles] ON 

INSERT [dbo].[Roles] ([role_id], [role_name]) VALUES (1, N'ADMIN')
INSERT [dbo].[Roles] ([role_id], [role_name]) VALUES (2, N'STAFF')
SET IDENTITY_INSERT [dbo].[Roles] OFF
SET IDENTITY_INSERT [dbo].[Room] ON 

INSERT [dbo].[Room] ([room_id], [categoryroomid], [room_number], [capacity], [status], [price], [description], [image]) VALUES (4, 1, N'A1001', 2, NULL, 10000000.0000, N'Ãªqedqede', NULL)
INSERT [dbo].[Room] ([room_id], [categoryroomid], [room_number], [capacity], [status], [price], [description], [image]) VALUES (5, 2, N'A1002', 3, NULL, 200000.0000, N'oooo', NULL)
INSERT [dbo].[Room] ([room_id], [categoryroomid], [room_number], [capacity], [status], [price], [description], [image]) VALUES (6, 2, N'B1001', 4, NULL, 200000.0000, N'aaa', NULL)
INSERT [dbo].[Room] ([room_id], [categoryroomid], [room_number], [capacity], [status], [price], [description], [image]) VALUES (7, 2, N'B2001', 4, NULL, 300000.0000, N'fsssa', NULL)
INSERT [dbo].[Room] ([room_id], [categoryroomid], [room_number], [capacity], [status], [price], [description], [image]) VALUES (8, 1, N'B2002', 2, NULL, 2000000.0000, N'eeee', NULL)
SET IDENTITY_INSERT [dbo].[Room] OFF
SET IDENTITY_INSERT [dbo].[Room_Category] ON 

INSERT [dbo].[Room_Category] ([categoryroomid], [categoryname]) VALUES (1, N'Giường đơn')
INSERT [dbo].[Room_Category] ([categoryroomid], [categoryname]) VALUES (2, N'Giường đôi')
INSERT [dbo].[Room_Category] ([categoryroomid], [categoryname]) VALUES (3, N'Vip')
SET IDENTITY_INSERT [dbo].[Room_Category] OFF
SET IDENTITY_INSERT [dbo].[Service_Category] ON 

INSERT [dbo].[Service_Category] ([category_id], [category_name]) VALUES (1, N'cocacola')
INSERT [dbo].[Service_Category] ([category_id], [category_name]) VALUES (2, N'7up')
SET IDENTITY_INSERT [dbo].[Service_Category] OFF
SET ANSI_PADDING ON

GO
/****** Object:  Index [UQ__Account__F3DBC5721AC0C9C5]    Script Date: 4/4/2021 5:04:54 PM ******/
ALTER TABLE [dbo].[Account] ADD  CONSTRAINT [UQ__Account__F3DBC5721AC0C9C5] UNIQUE NONCLUSTERED 
(
	[username] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [UQ__Account__F740DB5AD4BAEA9A]    Script Date: 4/4/2021 5:04:54 PM ******/
ALTER TABLE [dbo].[Account] ADD  CONSTRAINT [UQ__Account__F740DB5AD4BAEA9A] UNIQUE NONCLUSTERED 
(
	[idenity_number] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Account_roles]  WITH CHECK ADD  CONSTRAINT [FK__Account_r__accou__49C3F6B7] FOREIGN KEY([account_id])
REFERENCES [dbo].[Account] ([account_id])
GO
ALTER TABLE [dbo].[Account_roles] CHECK CONSTRAINT [FK__Account_r__accou__49C3F6B7]
GO
ALTER TABLE [dbo].[Account_roles]  WITH CHECK ADD FOREIGN KEY([role_id])
REFERENCES [dbo].[Roles] ([role_id])
GO
ALTER TABLE [dbo].[Book_Service]  WITH CHECK ADD  CONSTRAINT [FK__Book_Serv__booki__286302EC] FOREIGN KEY([booking_id])
REFERENCES [dbo].[Booking] ([booking_id])
GO
ALTER TABLE [dbo].[Book_Service] CHECK CONSTRAINT [FK__Book_Serv__booki__286302EC]
GO
ALTER TABLE [dbo].[Book_Service]  WITH CHECK ADD  CONSTRAINT [FK__Book_Serv__servi__29572725] FOREIGN KEY([service_id])
REFERENCES [dbo].[Service] ([service_id])
GO
ALTER TABLE [dbo].[Book_Service] CHECK CONSTRAINT [FK__Book_Serv__servi__29572725]
GO
ALTER TABLE [dbo].[Booking]  WITH CHECK ADD  CONSTRAINT [FK__Booking__account__24927208] FOREIGN KEY([account_id])
REFERENCES [dbo].[Account] ([account_id])
GO
ALTER TABLE [dbo].[Booking] CHECK CONSTRAINT [FK__Booking__account__24927208]
GO
ALTER TABLE [dbo].[Booking]  WITH CHECK ADD  CONSTRAINT [FK__Booking__room_id__25869641] FOREIGN KEY([room_id])
REFERENCES [dbo].[Room] ([room_id])
GO
ALTER TABLE [dbo].[Booking] CHECK CONSTRAINT [FK__Booking__room_id__25869641]
GO
ALTER TABLE [dbo].[Room]  WITH CHECK ADD  CONSTRAINT [FK__Room__categoryro__1FCDBCEB] FOREIGN KEY([categoryroomid])
REFERENCES [dbo].[Room_Category] ([categoryroomid])
GO
ALTER TABLE [dbo].[Room] CHECK CONSTRAINT [FK__Room__categoryro__1FCDBCEB]
GO
ALTER TABLE [dbo].[Service]  WITH CHECK ADD  CONSTRAINT [FK__Service__categor__1B0907CE] FOREIGN KEY([category_id])
REFERENCES [dbo].[Service_Category] ([category_id])
GO
ALTER TABLE [dbo].[Service] CHECK CONSTRAINT [FK__Service__categor__1B0907CE]
GO
ALTER TABLE [dbo].[Room]  WITH CHECK ADD  CONSTRAINT [chk_room] CHECK  (([status]='booked' AND [status]='checked' OR [status]='checked out'))
GO
ALTER TABLE [dbo].[Room] CHECK CONSTRAINT [chk_room]
GO
USE [master]
GO
ALTER DATABASE [Hotel] SET  READ_WRITE 
GO

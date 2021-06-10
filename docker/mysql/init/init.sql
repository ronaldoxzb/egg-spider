CREATE DATABASE  `user` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
grant all PRIVILEGES on user.* to user@'%' identified by '123456';
flush privileges;
CREATE DATABASE  `user` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
grant all PRIVILEGES on user.* to user@'%' identified by '123456';
flush privileges;

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(32) NOT NULL,
  `avatar` varchar(256) NOT NULL,
  `sex` enum('M','F') NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `version` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`username`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user`.`user`(`id`, `username`, `password`, `avatar`, `sex`, `created_at`, `updated_at`, `version`) VALUES ('6dd400a0c90211eb9458bf5ee39e58fa', 'admin', '21232f297a57a5a743894a0e4a801fc3', 'http://gank.io/images/25d3e3db2c1248bb917c09dc4f50a46f', 'F', '2021-06-09 17:09:43', '2021-06-09 17:09:43', 0);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
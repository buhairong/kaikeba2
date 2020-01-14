/*
 Navicat Premium Data Transfer

 Source Server         : js05
 Source Server Type    : MySQL
 Source Server Version : 50727
 Source Host           : localhost
 Source Database       : js05

 Target Server Type    : MySQL
 Target Server Version : 50727
 File Encoding         : utf-8

 Date: 01/13/2020 22:53:09 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '唯一标识符',
  `username` varchar(50) DEFAULT NULL,
  `pwd` varchar(50) DEFAULT NULL,
  `age` int(3) DEFAULT NULL,
  `sex` enum('男','女','保密') DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `users`
-- ----------------------------
BEGIN;
INSERT INTO `users` VALUES ('1', '李四', '123', '20', '男', null), ('3', '王五', '123', '23', '男', null), ('4', '王六', '123', '26', '男', null), ('5', '李五', '123', '30', '男', null), ('6', '王小二', '123', '21', '男', null), ('7', '李力', '123', '20', '男', null);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;

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

 Date: 01/13/2020 22:52:59 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `photo`
-- ----------------------------
DROP TABLE IF EXISTS `photo`;
CREATE TABLE `photo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `imgUrl` varchar(255) DEFAULT NULL,
  `imgName` varchar(100) DEFAULT NULL,
  `uid` int(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `photo`
-- ----------------------------
BEGIN;
INSERT INTO `photo` VALUES ('1', '/img/uploads/cat.jpeg', 'cat.jpeg', '1'), ('2', '/img/uploads/dog.jpg', 'dog.jpg', '1'), ('3', '/img/uploads/3.png', '3.png', '1'), ('4', '/img/uploads/2.jpg', '2.jpg', '1'), ('5', '/img/uploads/test.png', 'test.png', '3'), ('6', '/img/uploads/favorite.png', 'favorite.png', '3');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;

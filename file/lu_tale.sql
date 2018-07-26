/*
 Navicat Premium Data Transfer

 Source Server         : mycould
 Source Server Type    : MariaDB
 Source Server Version : 50556
 Source Host           : 118.25.36.41
 Source Database       : lu_tale

 Target Server Type    : MariaDB
 Target Server Version : 50556
 File Encoding         : utf-8

 Date: 05/03/2018 17:01:52 PM
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

INSERT INTO `backend`.`questions` (`question`, `options`, `groupId`, `type`) VALUES ('您想要去的国家或地区？（可多选）', '美国,英国,加拿大,澳大利亚,日本,香港地区,新加坡,马来西亚,希腊,葡萄牙', '1', 'mult');
INSERT INTO `backend`.`questions` (`question`, `options`, `groupId`, `type`) VALUES ('您为什么想移民？（可多选）', '子女教育,海外身份,海外职业,养老储备,税务筹划,旅游度假', '1', 'mult');
INSERT INTO `backend`.`questions` (`question`, `options`, `groupId`, `type`) VALUES ('您的家庭资产？（人民币）', '100万以内,100～300万,300～500万,500～1000万,1000～3000万,3000万以上', '1', 'mult');
INSERT INTO `backend`.`questions` (`question`, `options`, `groupId`, `type`) VALUES ('您可接受的海外居住时间？（部分移民项目在当地有一定的居住时间要求）', '每年入境一次,每年住7天,每年住30天,每年住6个月,住满2年,不方便前往', '1', 'mult');
INSERT INTO `backend`.`questions` (`question`, `options`, `groupId`, `type`) VALUES ('您的最高学历？', '高中以下,高中或者中专,大专,本科,硕士,博士', '1', 'mult');
INSERT INTO `backend`.`questions` (`question`, `options`, `groupId`, `type`) VALUES ('您的英语水平？', '完全不会,专业8级,雅思7分及以上,雅思6分,雅思4分,雅思3分,大学英语6级,大学英语4级,中学英语水平', '1', 'mult');
INSERT INTO `backend`.`questions` (`question`, `options`, `groupId`, `type`) VALUES ('您的工作年限？', '1年以内,1～3年,3～5年,5～8年,8年以上,在校学生', '1', 'mult');
INSERT INTO `backend`.`questions` (`question`, `options`, `groupId`, `type`) VALUES ('您想多久拿到身份？', '3个月,6个月,1年,3～5年,10年,不在意', '1', 'mult');
INSERT INTO `backend`.`questions` (`question`, `options`, `groupId`, `type`) VALUES ('您可接受的海外居住时间？（部分移民项目在当地有一定的居住时间要求）', '每年入境一次,每年住7天,每年住30天,每年住6个月,住满2年,不方便前往', '1', 'mult');

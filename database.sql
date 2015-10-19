/*
SQLyog Ultimate v8.32 
MySQL - 5.1.28-rc-community : Database - nodecms
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`nodecms` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `nodecms`;

/*Table structure for table `article` */

DROP TABLE IF EXISTS `article`;

CREATE TABLE `article` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `categoryId` int(11) DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(500) DEFAULT NULL,
  `author` varchar(50) DEFAULT NULL,
  `comeFrom` varchar(255) DEFAULT NULL,
  `keywords` varchar(200) DEFAULT NULL,
  `content` longtext,
  `publishTime` datetime DEFAULT NULL,
  `createTime` datetime DEFAULT NULL,
  `readNum` int(11) DEFAULT NULL,
  `picFileName` varchar(255) DEFAULT NULL,
  `seoTitle` varchar(255) DEFAULT NULL,
  `seoKeywords` varchar(255) DEFAULT NULL,
  `seoDescription` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=78 DEFAULT CHARSET=utf8;

/*Data for the table `article` */

LOCK TABLES `article` WRITE;

insert  into `article`(`id`,`categoryId`,`title`,`description`,`author`,`comeFrom`,`keywords`,`content`,`publishTime`,`createTime`,`readNum`,`picFileName`,`seoTitle`,`seoKeywords`,`seoDescription`) values (4,8,'中国人口报告上递决策层 建议立即放开全面二孩','中国人口报告上递决策层 建议立即放开全面二孩中国人口报告上递决策层 建议立即放开全面二孩中国人口报告上递决策层 建议立即放开全面二孩','李四','新浪','新浪','<p>这里是内容中国人口报告上递决策层 建议立即放开全面二孩中国人口报告上递决策层 建议立即放开全面二孩中国人口报告上递决策层 建议立即放开全面二孩</p>','2014-10-21 04:33:00','2015-10-09 12:23:32',1,'','中国人口报告上递决策层 建议立即放开全面二孩','中国,人口,报告 ,二孩','中国人口报告上递决策层 建议立即放开全面二孩中国人口报告上递决策层 建议立即放开全面二孩中国人口报告上递决策层 建议立即放开全面二孩'),(5,20,'敦煌回应踩踏遗址拍照：保证有游客就有人在岗','敦煌回应踩踏遗址拍照：保证有游客就有人在岗敦煌回应踩踏遗址拍照：保证有游客就有人在岗敦煌回应踩踏遗址拍照：保证有游客就有人在岗','李四','新浪','新浪','这里是内容','2015-10-11 10:40:00','2015-10-09 14:24:43',0,'','null','null','egegwgegw'),(6,8,'人民日报：前9个月149起扶人争议 诬陷扶人者84例','人民日报：前9个月149起扶人争议 诬陷扶人者84例人民日报：前9个月149起扶人争议 诬陷扶人者84例人民日报：前9个月149起扶人争议 诬陷扶人者84例','李四','新浪','新浪','这里是内容','2014-01-21 14:50:00','2015-10-09 15:56:46',3,'','null','null','null'),(18,8,'李登辉身体不适 取消出席“独派”大佬寿宴','李登辉身体不适 取消出席“独派”大佬寿宴李登辉身体不适 取消出席“独派”大佬寿宴李登辉身体不适 取消出席“独派”大佬寿宴','李四','新浪','新浪','这里是内容','2014-10-21 04:33:22','2015-10-09 12:23:32',1,'','null','null','这里是内容'),(19,20,'中共中央国务院决定择机放开成品油价格','中共中央国务院决定择机放开成品油价格中共中央国务院决定择机放开成品油价格中共中央国务院决定择机放开成品油价格','李四','新浪','新浪','这里是内容','2015-10-11 10:40:00','2015-10-09 14:24:43',0,'','null','null','egegwgegw'),(20,8,'媒体调查丽江酒托：整改后仍猖獗 索酒变千元陪睡','媒体调查丽江酒托：整改后仍猖獗 索酒变千元陪睡媒体调查丽江酒托：整改后仍猖獗 索酒变千元陪睡媒体调查丽江酒托：整改后仍猖獗 索酒变千元陪睡','李四','新浪','新浪','这里是内容','2014-01-21 14:50:00','2015-10-09 15:56:46',3,'','null','null','null'),(22,8,'媒体揭秘贪官内斗：雇凶杀人互相拆台','媒体揭秘贪官内斗：雇凶杀人互相拆台媒体揭秘贪官内斗：雇凶杀人互相拆台媒体揭秘贪官内斗：雇凶杀人互相拆台','李四','新浪','新浪','这里是内容','2014-10-21 04:33:22','2015-10-09 12:23:32',1,'','null','null','这里是内容'),(23,20,'山东邀青岛虾事件游客监督旅游 1名被宰游客拒绝','山东邀青岛虾事件游客监督旅游 1名被宰游客拒绝山东邀青岛虾事件游客监督旅游 1名被宰游客拒绝山东邀青岛虾事件游客监督旅游 1名被宰游客拒绝','李四','新浪','新浪','这里是内容','2015-10-11 10:40:00','2015-10-09 14:24:43',0,'','null','null','egegwgegw'),(24,8,'奥运冠军占旭刚挂职副县长：乡镇工作很辛苦','奥运冠军占旭刚挂职副县长：乡镇工作很辛苦奥运冠军占旭刚挂职副县长：乡镇工作很辛苦奥运冠军占旭刚挂职副县长：乡镇工作很辛苦','李四','新浪','新浪','这里是内容','2014-01-21 14:50:00','2015-10-09 15:56:46',3,'','null','null','null'),(27,8,'释永信昔日侍者：曾见师父桌上摆着酒和红烧肉','释永信昔日侍者：曾见师父桌上摆着酒和红烧肉释永信昔日侍者：曾见师父桌上摆着酒和红烧肉释永信昔日侍者：曾见师父桌上摆着酒和红烧肉','李四','新浪','新浪','这里是内容','2014-10-21 04:33:22','2015-10-09 12:23:32',1,'','null','null','这里是内容'),(28,20,'美媒：中国年轻人性态度开放 情趣用品商闷声发大财','美媒：中国年轻人性态度开放 情趣用品商闷声发大财美媒：中国年轻人性态度开放 情趣用品商闷声发大财美媒：中国年轻人性态度开放 情趣用品商闷声发大财','李四','新浪','新浪','这里是内容','2015-10-11 10:40:00','2015-10-09 14:24:43',0,'','null','null','egegwgegw'),(29,8,'地方养老金将归集至中央实现统一投资运营','地方养老金将归集至中央实现统一投资运营地方养老金将归集至中央实现统一投资运营地方养老金将归集至中央实现统一投资运营','李四','新浪','新浪','这里是内容','2014-01-21 14:50:00','2015-10-09 15:56:46',3,'','null','null','null'),(30,8,'教育部：\"逼格\"等低俗语言涌现 到了非治不可程度','教育部：\"逼格\"等低俗语言涌现 到了非治不可程度教育部：\"逼格\"等低俗语言涌现 到了非治不可程度教育部：\"逼格\"等低俗语言涌现 到了非治不可程度','李四','新浪','新浪','这里是内容','2014-10-21 04:33:22','2015-10-09 12:23:32',1,'','null','null','这里是内容'),(31,20,'国际财经：全球摩天楼租金香港最贵 伦敦涨幅最大','国际财经：全球摩天楼租金香港最贵 伦敦涨幅最大国际财经：全球摩天楼租金香港最贵 伦敦涨幅最大国际财经：全球摩天楼租金香港最贵 伦敦涨幅最大','李四','新浪','新浪','这里是内容','2015-10-11 10:40:00','2015-10-09 14:24:43',0,'','null','null','egegwgegw'),(32,8,'科技大事件：雅虎邮箱推出无密码登录体验','科技大事件：雅虎邮箱推出无密码登录体验科技大事件：雅虎邮箱推出无密码登录体验科技大事件：雅虎邮箱推出无密码登录体验','李四','新浪','新浪','这里是内容','2014-01-21 14:50:00','2015-10-09 15:56:46',3,'','null','null','null'),(35,8,'女住持与和尚假结婚 香港入境处：可取消居留权','女住持与和尚假结婚 香港入境处：可取消居留权女住持与和尚假结婚 香港入境处：可取消居留权女住持与和尚假结婚 香港入境处：可取消居留权','李四','新浪','新浪','这里是内容','2014-10-21 04:33:22','2015-10-09 12:23:32',1,'','null','null','这里是内容'),(36,20,'4男子酒后乘出租争付车费 百万现金落在后备箱(图)','4男子酒后乘出租争付车费 百万现金落在后备箱(图)4男子酒后乘出租争付车费 百万现金落在后备箱(图)4男子酒后乘出租争付车费 百万现金落在后备箱(图)','李四','新浪','新浪','这里是内容','2015-10-11 10:40:00','2015-10-09 14:24:43',0,'','null','null','egegwgegw'),(37,8,'武汉一高校外教定“霸王条款”：上课说中文罚钱','武汉一高校外教定“霸王条款”：上课说中文罚钱武汉一高校外教定“霸王条款”：上课说中文罚钱武汉一高校外教定“霸王条款”：上课说中文罚钱','李四','新浪','新浪','这里是内容','2014-01-21 14:50:00','2015-10-09 15:56:46',3,'','null','null','null'),(38,8,'《别让李嘉诚跑了》作者：地产独大是国之凶兆','《别让李嘉诚跑了》作者：地产独大是国之凶兆《别让李嘉诚跑了》作者：地产独大是国之凶兆《别让李嘉诚跑了》作者：地产独大是国之凶兆','李四','新浪','新浪','这里是内容','2014-10-21 04:33:22','2015-10-09 12:23:32',1,'','null','null','这里是内容'),(39,20,'15岁女孩厕所产子将其从5楼扔下 婴儿奇迹生还','15岁女孩厕所产子将其从5楼扔下 婴儿奇迹生还15岁女孩厕所产子将其从5楼扔下 婴儿奇迹生还15岁女孩厕所产子将其从5楼扔下 婴儿奇迹生还','李四','新浪','新浪','这里是内容','2015-10-11 10:40:00','2015-10-09 14:24:43',0,'','null','null','egegwgegw'),(40,8,'女司机开豪车追尾路虎 拍苍蝇时不慎踩下油门','女司机开豪车追尾路虎 拍苍蝇时不慎踩下油门女司机开豪车追尾路虎 拍苍蝇时不慎踩下油门女司机开豪车追尾路虎 拍苍蝇时不慎踩下油门','李四','新浪','新浪','这里是内容','2014-01-21 14:50:00','2015-10-09 15:56:46',3,'','null','null','null'),(43,8,'河南男子一天吃5斤辣椒 早上起床吃辣椒漱口','河南男子一天吃5斤辣椒 早上起床吃辣椒漱口河南男子一天吃5斤辣椒 早上起床吃辣椒漱口河南男子一天吃5斤辣椒 早上起床吃辣椒漱口','李四','新浪','新浪','这里是内容','2014-10-21 04:33:22','2015-10-09 12:23:32',1,'','null','null','这里是内容'),(44,20,'广东：女子睡梦中遭虫叮咬 晕倒摔至几近瘫痪(图)','广东：女子睡梦中遭虫叮咬 晕倒摔至几近瘫痪(图)广东：女子睡梦中遭虫叮咬 晕倒摔至几近瘫痪(图)广东：女子睡梦中遭虫叮咬 晕倒摔至几近瘫痪(图)','李四','新浪','新浪','这里是内容','2015-10-11 10:40:00','2015-10-09 14:24:43',0,'','null','null','egegwgegw'),(45,8,'福建：1斤多黄螺“吐出”42.7克拉大“龙珠”','福建：1斤多黄螺“吐出”42.7克拉大“龙珠”福建：1斤多黄螺“吐出”42.7克拉大“龙珠”福建：1斤多黄螺“吐出”42.7克拉大“龙珠”','李四','新浪','新浪','这里是内容','2014-01-21 14:50:00','2015-10-09 15:56:46',3,'','null','null','null'),(46,8,'王思聪身家已达40亿！不靠首富王健林都是自己赚的','王思聪身家已达40亿！不靠首富王健林都是自己赚的王思聪身家已达40亿！不靠首富王健林都是自己赚的王思聪身家已达40亿！不靠首富王健林都是自己赚的','李四','新浪','新浪','这里是内容','2014-10-21 04:33:22','2015-10-09 12:23:32',1,'','null','null','这里是内容'),(47,20,'背包小伙朝九晚五月入6000 原来干的是伪基站','背包小伙朝九晚五月入6000 原来干的是伪基站背包小伙朝九晚五月入6000 原来干的是伪基站背包小伙朝九晚五月入6000 原来干的是伪基站','李四','新浪','新浪','这里是内容','2015-10-11 10:40:00','2015-10-09 14:24:43',0,'','null','null','egegwgegw'),(48,8,'你的宽带提速降费真有戏了：国务院再对运营商动手','你的宽带提速降费真有戏了：国务院再对运营商动手你的宽带提速降费真有戏了：国务院再对运营商动手你的宽带提速降费真有戏了：国务院再对运营商动手','李四','新浪','新浪','这里是内容','2014-01-21 14:50:00','2015-10-09 15:56:46',3,'','null','null','null'),(51,8,'你被忽悠了吗？同款家电改个型号就能线上线下两种价','你被忽悠了吗？同款家电改个型号就能线上线下两种价你被忽悠了吗？同款家电改个型号就能线上线下两种价你被忽悠了吗？同款家电改个型号就能线上线下两种价','李四','新浪','新浪','这里是内容','2014-10-21 04:33:22','2015-10-09 12:23:32',1,'','null','null','这里是内容'),(52,20,'丢掉这项专利战 苹果可能会损失高达6亿美元','丢掉这项专利战 苹果可能会损失高达6亿美元丢掉这项专利战 苹果可能会损失高达6亿美元丢掉这项专利战 苹果可能会损失高达6亿美元','李四','新浪','新浪','这里是内容','2015-10-11 10:40:00','2015-10-09 14:24:43',0,'','null','null','egegwgegw'),(53,8,'独家:今年98家电商B2B获融资 农业钢铁B2B创业井喷','独家:今年98家电商B2B获融资 农业钢铁B2B创业井喷独家:今年98家电商B2B获融资 农业钢铁B2B创业井喷独家:今年98家电商B2B获融资 农业钢铁B2B创业井喷','李四','新浪','新浪','这里是内容','2014-01-21 14:50:00','2015-10-09 15:56:46',3,'','null','null','null'),(54,8,'云南西双版纳为50名被不实举报的党员干部澄清事实','云南西双版纳为50名被不实举报的党员干部澄清事实云南西双版纳为50名被不实举报的党员干部澄清事实云南西双版纳为50名被不实举报的党员干部澄清事实','李四','新浪','新浪','这里是内容','2014-10-21 04:33:22','2015-10-09 12:23:32',1,'','null','null','这里是内容'),(55,20,'被罚69000女司机认罚 涉事车辆属于国资控股企业','被罚69000女司机认罚 涉事车辆属于国资控股企业被罚69000女司机认罚 涉事车辆属于国资控股企业被罚69000女司机认罚 涉事车辆属于国资控股企业','李四','新浪','新浪','这里是内容','2015-10-11 10:40:00','2015-10-09 14:24:43',0,'','null','null','egegwgegw'),(56,8,'外交部：奉劝美方停止利用宗教问题干涉中国内政','外交部：奉劝美方停止利用宗教问题干涉中国内政外交部：奉劝美方停止利用宗教问题干涉中国内政外交部：奉劝美方停止利用宗教问题干涉中国内政','李四','新浪','新浪','这里是内容','2014-01-21 14:50:00','2015-10-09 15:56:46',3,'','null','null','null'),(59,8,'11落马省部级官员刑期集中于10至20年之间 无死刑','11落马省部级官员刑期集中于10至20年之间 无死刑11落马省部级官员刑期集中于10至20年之间 无死刑11落马省部级官员刑期集中于10至20年之间 无死刑','李四','新浪','新浪','这里是内容','2014-10-21 04:33:22','2015-10-09 12:23:32',1,'','null','null','这里是内容'),(60,20,'成都新机场考古发现目前中国最大体积\"狮王\"(图)','成都新机场考古发现目前中国最大体积\"狮王\"(图)成都新机场考古发现目前中国最大体积\"狮王\"(图)成都新机场考古发现目前中国最大体积\"狮王\"(图)','李四','新浪','新浪','这里是内容','2015-10-11 10:40:00','2015-10-09 14:24:43',0,'','null','null','egegwgegw'),(61,8,'日本等五国当选联合国安理会非常任理事国','日本等五国当选联合国安理会非常任理事国日本等五国当选联合国安理会非常任理事国日本等五国当选联合国安理会非常任理事国','李四','新浪','新浪','这里是内容','2014-01-21 14:50:00','2015-10-09 15:56:46',3,'','null','null','null'),(62,8,'最新数据显示美国富人比穷人平均寿命长11年','最新数据显示美国富人比穷人平均寿命长11年最新数据显示美国富人比穷人平均寿命长11年最新数据显示美国富人比穷人平均寿命长11年','李四','新浪','新浪','这里是内容','2014-10-21 04:33:22','2015-10-09 12:23:32',1,'','null','null','这里是内容'),(63,20,'菲律宾打击贩毒抓捕5名中国大陆人 最高可判无期','菲律宾打击贩毒抓捕5名中国大陆人 最高可判无期菲律宾打击贩毒抓捕5名中国大陆人 最高可判无期菲律宾打击贩毒抓捕5名中国大陆人 最高可判无期','李四','新浪','新浪','这里是内容','2015-10-11 10:40:00','2015-10-09 14:24:43',0,'','null','null','egegwgegw'),(64,8,'俄国防部：“伊斯兰国”开始在叙利亚撤退','俄国防部：“伊斯兰国”开始在叙利亚撤退俄国防部：“伊斯兰国”开始在叙利亚撤退俄国防部：“伊斯兰国”开始在叙利亚撤退','李四','新浪','新浪','这里是内容','2014-01-21 14:50:00','2015-10-09 15:56:46',3,'','null','null','null'),(67,8,'加拿大财长乘飞机公款升舱被踢爆','加拿大财长乘飞机公款升舱被踢爆加拿大财长乘飞机公款升舱被踢爆加拿大财长乘飞机公款升舱被踢爆','李四','新浪','新浪','这里是内容','2014-10-21 04:33:22','2015-10-09 12:23:32',1,'','null','null','这里是内容'),(68,20,'中国大使：中泰铁路有望年底动工','中国大使：中泰铁路有望年底动工中国大使：中泰铁路有望年底动工中国大使：中泰铁路有望年底动工','李四','新浪','新浪','这里是内容','2015-10-11 10:40:00','2015-10-09 14:24:43',0,'','null','null','egegwgegw'),(69,8,'伊朗载数百人波音客机发动机掉落 成功迫降无伤亡','伊朗载数百人波音客机发动机掉落 成功迫降无伤亡伊朗载数百人波音客机发动机掉落 成功迫降无伤亡伊朗载数百人波音客机发动机掉落 成功迫降无伤亡','李四','新浪','新浪','这里是内容','2014-01-21 14:50:00','2015-10-09 15:56:46',3,'','null','null','null'),(70,8,'韩媒：济州岛赌场发表声明 称未色诱中国赌客','韩媒：济州岛赌场发表声明 称未色诱中国赌客韩媒：济州岛赌场发表声明 称未色诱中国赌客韩媒：济州岛赌场发表声明 称未色诱中国赌客','李四','新浪','新浪','这里是内容','2014-10-21 04:33:22','2015-10-09 12:23:32',1,'','null','null','这里是内容'),(71,20,'美15岁少女因海洋供电发明获2.5万美元奖金','美15岁少女因海洋供电发明获2.5万美元奖金美15岁少女因海洋供电发明获2.5万美元奖金美15岁少女因海洋供电发明获2.5万美元奖金','李四','新浪','新浪','这里是内容','2015-10-11 10:40:00','2015-10-09 14:24:43',0,'','null','null','egegwgegw'),(72,8,'泰国丛林飞跃项目遇难中国游客至少可获赔23万元','泰国丛林飞跃项目遇难中国游客至少可获赔23万元泰国丛林飞跃项目遇难中国游客至少可获赔23万元泰国丛林飞跃项目遇难中国游客至少可获赔23万元','李四','新浪','新浪','这里是内容','2014-01-21 14:50:00','2015-10-09 15:56:46',3,'','null','null','null'),(75,8,'德管理机构要求大众强制召回240万辆尾气排放问题车','德管理机构要求大众强制召回240万辆尾气排放问题车德管理机构要求大众强制召回240万辆尾气排放问题车德管理机构要求大众强制召回240万辆尾气排放问题车','李四','新浪','新浪','这里是内容','2014-10-21 04:33:22','2015-10-09 12:23:32',1,'','null','null','这里是内容'),(76,20,'难民问题：默克尔吁从欧盟外围着手加强边界把关','难民问题：默克尔吁从欧盟外围着手加强边界把关难民问题：默克尔吁从欧盟外围着手加强边界把关难民问题：默克尔吁从欧盟外围着手加强边界把关','李四','新浪','新浪','这里是内容','2015-10-11 10:40:00','2015-10-09 14:24:43',0,'','null','null','egegwgegw'),(77,8,'超半数零售上市公司预计三季度净利下滑','超半数零售上市公司预计三季度净利下滑超半数零售上市公司预计三季度净利下滑超半数零售上市公司预计三季度净利下滑','李四','新浪','新浪','这里是内容','2014-01-21 14:50:00','2015-10-09 15:56:46',3,'','null','null','null');

UNLOCK TABLES;

/*Table structure for table `articlecategory` */

DROP TABLE IF EXISTS `articlecategory`;

CREATE TABLE `articlecategory` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `categoryName` varchar(100) DEFAULT NULL,
  `parentId` int(11) DEFAULT NULL,
  `sortNum` int(11) DEFAULT NULL,
  `innerCode` varchar(255) DEFAULT NULL,
  `seoTitle` varchar(255) DEFAULT NULL,
  `seoKeywords` varchar(255) DEFAULT NULL,
  `seoDescription` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

/*Data for the table `articlecategory` */

LOCK TABLES `articlecategory` WRITE;

insert  into `articlecategory`(`id`,`categoryName`,`parentId`,`sortNum`,`innerCode`,`seoTitle`,`seoKeywords`,`seoDescription`) values (8,'新闻中心',0,1,'001','新闻中心','新闻中心','新闻中心'),(9,'头条',8,2,'001.002','null','null','null'),(10,'读书',8,3,'001.003','null','null','null'),(11,'酷图',8,4,'001.004','null','null','null'),(12,'陆军',8,5,'001.005','null','null','null'),(13,'空军',14,6,'001.001.001',NULL,NULL,NULL),(14,'历史',8,1,'001.001','历史','历史,历史','历史历史历史历史历史'),(20,'产品展示',0,1,'002','产品展示','产品展示','产品展示');

UNLOCK TABLES;

/*Table structure for table `imgtxt` */

DROP TABLE IF EXISTS `imgtxt`;

CREATE TABLE `imgtxt` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `positionId` int(11) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `url` varchar(200) DEFAULT NULL,
  `picFileName` varchar(255) DEFAULT NULL,
  `remark` varchar(2000) DEFAULT NULL,
  `sortNum` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

/*Data for the table `imgtxt` */

LOCK TABLES `imgtxt` WRITE;

insert  into `imgtxt`(`id`,`positionId`,`title`,`url`,`picFileName`,`remark`,`sortNum`) values (1,1,'eetew','','etew',NULL,1),(3,1,'eeeew','egegwegew','',NULL,2);

UNLOCK TABLES;

/*Table structure for table `imgtxtposition` */

DROP TABLE IF EXISTS `imgtxtposition`;

CREATE TABLE `imgtxtposition` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `positionName` varchar(255) DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `sortNum` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

/*Data for the table `imgtxtposition` */

LOCK TABLES `imgtxtposition` WRITE;

insert  into `imgtxtposition`(`id`,`positionName`,`remark`,`sortNum`) values (1,'首页--轮播广告1','首页--轮播广告2',2);

UNLOCK TABLES;

/*Table structure for table `page` */

DROP TABLE IF EXISTS `page`;

CREATE TABLE `page` (
  `id` varchar(50) NOT NULL,
  `title` varchar(200) DEFAULT NULL,
  `content` longtext,
  `seoTitle` varchar(255) DEFAULT NULL,
  `seoKeywords` varchar(255) DEFAULT NULL,
  `seoDescription` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `page` */

LOCK TABLES `page` WRITE;

insert  into `page`(`id`,`title`,`content`,`seoTitle`,`seoKeywords`,`seoDescription`) values ('aboutus','关于我们','<p>关于我们的内容</p><p>关于我们的内容</p>','SEO优化标题','egewg','egewgwe'),('contactus','联系我们','联系我们','联系我们','','联系我们的seo描述');

UNLOCK TABLES;

/*Table structure for table `seo` */

DROP TABLE IF EXISTS `seo`;

CREATE TABLE `seo` (
  `id` int(50) NOT NULL AUTO_INCREMENT,
  `pageName` varchar(200) DEFAULT NULL,
  `seoTitle` varchar(255) DEFAULT NULL,
  `seoKeywords` varchar(255) DEFAULT NULL,
  `seoDescription` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

/*Data for the table `seo` */

LOCK TABLES `seo` WRITE;

insert  into `seo`(`id`,`pageName`,`seoTitle`,`seoKeywords`,`seoDescription`) values (1,'首页','NodeCMS官方网站','nodejs, cms, nodecms','NodeCMS内容管理系统是基于nodejs,Express,bootstrap,mysql实现的'),(2,'联系我们','联系我们','','联系我们的seo描述');

UNLOCK TABLES;

/*Table structure for table `site` */

DROP TABLE IF EXISTS `site`;

CREATE TABLE `site` (
  `id` int(11) NOT NULL,
  `content` longtext,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Data for the table `site` */

LOCK TABLES `site` WRITE;

insert  into `site`(`id`,`content`) values (1,'{\"DomainName\":\"baidu.com\",\"SiteName\":\"NodeCMS\",\"CompanyName\":\"meiixueshan\",\"Address\":\"44476511@qq.com\",\"Tel\":\"13100000000\",\"Fax\":\"0451-0000000\",\"Linkman\":\"meilixueshan\"}');

UNLOCK TABLES;

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(18) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `user` */

LOCK TABLES `user` WRITE;

insert  into `user`(`id`,`username`,`password`) values (1,'admin','21232f297a57a5a743894a0e4a801fc3');

UNLOCK TABLES;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

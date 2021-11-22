-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1:3306
-- Thời gian đã tạo: Th10 22, 2021 lúc 02:55 PM
-- Phiên bản máy phục vụ: 5.7.31
-- Phiên bản PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `mysql`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `foods`
--

DROP TABLE IF EXISTS `foods`;
CREATE TABLE IF NOT EXISTS `foods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `img` varchar(500) NOT NULL,
  `price` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `foods`
--

INSERT INTO `foods` (`id`, `name`, `img`, `price`) VALUES
(2, 'Bread', 'https://banhmipho.vn/wp-content/uploads/2021/03/ca-ngu.png', 10000),
(3, 'Coffee', 'https://cafedalat.net/wp-content/uploads/2020/10/cafe-den.png', 20000),
(4, 'Milk Tea', 'https://khothietke.net/wp-content/uploads/2021/03/taifree1392-tra-sua-tran-chau.png', 25000),
(5, 'Cocacola', 'https://freepngimg.com/thumb/categories/943.png', 10000),
(6, 'Fried Chips', 'https://inbaothuhcm.files.wordpress.com/2017/09/in-bao-bi-giay-dung-khoai-tay-chien.png?w=640', 15000),
(7, 'Fried Chicken', 'https://mcdonalds.vn/uploads/2018/2-ga-ran.png', 25000),
(9, 'Bun dau mam tom', 'https://bundau3mien.vn/images/product/20201118101829_PH%E1%BA%A6N%20B%C3%9AN%20%C4%90%E1%BA%ACU%20H%E1%BB%A6%20CH%E1%BA%A2%20C%E1%BB%90M%2038K%20T%C3%81CH%20N%E1%BB%80N.png', 30000),
(10, 'Spaghetti', 'https://jollibee.com.vn/uploads/dish/7b8e79a673f041-1840007_01myylon.png', 20000),
(11, 'Sting', 'https://cooponline.vn/wp-content/uploads/2020/05/nuoc-tang-luc-sting-dau-lon-cao-330ml.jpg', 10000),
(12, 'Filtered Water', 'https://lavieviva.vn/wp-content/uploads/2018/09/Nuoc-Lavie-500ml-1.png', 10000);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

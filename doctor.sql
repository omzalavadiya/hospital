-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 07, 2023 at 04:36 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `doctor`
--

-- --------------------------------------------------------

--
-- Table structure for table `adddoctor`
--

CREATE TABLE `adddoctor` (
  `id` int(11) NOT NULL,
  `fname` text NOT NULL,
  `lname` text NOT NULL,
  `phone` text NOT NULL,
  `email` text NOT NULL,
  `birth` text NOT NULL,
  `specialist` text NOT NULL,
  `image` text NOT NULL,
  `gender` text NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `adddoctor`
--

INSERT INTO `adddoctor` (`id`, `fname`, `lname`, `email`, `birth`, `phone`, `specialist`, `image`, `gender`, `create_at`) VALUES
(1, 'RBI', 'BADRUKHIYA', 'r@gmail.com', '12-2-1998', '123457890', 'neurosurgeon', 'member2.png', 'male', '2023-03-06 05:18:59'),
(2, 'parthiv', 'vora', 'p@gmail.com', '9-3-2004', '124567890', 'md', 'member4.png', 'male', '2023-03-06 05:18:59'),
(19, 'kapil', 'patel', 'kapil@gmail.com', '1-2-1990', '123456789', 'md', 'member3.png', 'male', '2023-03-06 05:18:59'),
(20, 'kapil', 'patel', 'kapil@gmail.com', '1-2-1990', '12356890', 'dentist', 'member3.png', 'male', '2023-03-06 05:18:59'),
(21, 'brijesh', 'pansheriya', 'brijesh@gmail.com', '1-3-1990', '1234567890', 'neck', 'member5.png', 'male', '2023-03-06 05:18:59'),
(22, 'RBI', 'BADRUKHIYA', 'ravi@gmail.com', '2023-03-07', '1234567890-', 'md', 'member1.png', 'male', '2023-03-06 05:18:59'),
(23, 'om', 'patel', 'om@gmail.com', '2023-03-30', '123456789', 'md', 'member1.png', 'male', '2023-03-06 05:19:55');

-- --------------------------------------------------------

--
-- Table structure for table `patient_details`
--

CREATE TABLE `patient_details` (
  `id` int(11) NOT NULL,
  `fname` text NOT NULL,
  `lname` text NOT NULL,
  `phone` text NOT NULL,
  `age` text NOT NULL,
  `email` text NOT NULL,
  `date` text NOT NULL,
  `image` text NOT NULL,
  `status` text NOT NULL,
  `gender` text NOT NULL,
  `doctor` text NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `patient_details`
--

INSERT INTO `patient_details` (`id`, `fname`, `lname`, `phone`, `age`, `email`, `date`, `image`, `status`, `gender`, `doctor`, `time`) VALUES
(1, 'brijesh', 'pansheriya', '123456789', '19', 'b@gmail.com', '12-3-2022', 'avatar7.jpg', '1', '', '', '2023-03-06 11:18:24'),
(3, 'a', 'b', '12345612347', '23', 'r@gmail.com', '12-2-2023', 'avatar2.jpg', '1', '', '', '2023-03-06 11:18:24'),
(7, '', '', '', '', '', '', '', '0', '', '', '2023-03-06 11:18:24'),
(8, '', '', '', '', '', '', '', '1', 'male', '', '2023-03-06 11:18:24'),
(9, '', '', '', '', '', '', '', '0', 'female', '', '2023-03-06 11:18:24'),
(10, 'RBI', 'BADRUKHIYA', '1234567890-', '33', 'r@gfmlsdn', '12-2-1990', 'member5.png', '0', 'male', '', '2023-03-06 11:18:24'),
(11, 'RBI', 'BADRUKHIYA', '', '', '', '', '', '0', 'male', 'parthiv', '2023-03-06 11:18:24'),
(12, '', '', '', '', '', '', '', '0', 'male', 'kapil', '2023-03-06 11:18:24'),
(13, 'RBI', 'BADRUKHIYA', '13456789', '13', 'ravi@gmail.com', '2023-03-08', 'avatar2.jpg', '0', 'male', 'kapil', '2023-03-06 11:42:31');

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`id`, `name`, `email`, `password`) VALUES
(1, 'ravi', 'ravi@gmail.com', '123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adddoctor`
--
ALTER TABLE `adddoctor`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `patient_details`
--
ALTER TABLE `patient_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `register`
--
ALTER TABLE `register`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `adddoctor`
--
ALTER TABLE `adddoctor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `patient_details`
--
ALTER TABLE `patient_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `register`
--
ALTER TABLE `register`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

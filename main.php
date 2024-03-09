<?php
require 'vendor/autoload.php';

// 引入可以讀取 .env 檔案的套件
use Dotenv\Dotenv;

// 載入 .env 檔案
$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();



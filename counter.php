<?php
// 计数器文件
$counterFile = "counter.csv";

// 检查 CSV 文件是否存在
if (!file_exists($counterFile)) {
    file_put_contents($counterFile, "views\n0"); // 初始化 CSV 文件
}

// 读取 CSV 文件
$data = array_map("str_getcsv", file($counterFile));
$views = isset($data[1][0]) ? (int)$data[1][0] : 0;

// 增加访问次数
$views++;

// 更新 CSV 文件
file_put_contents($counterFile, "views\n" . $views);

// 显示访问次数
echo "<h3>网站访问次数: $views</h3>";
?>

<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $message = htmlspecialchars($_POST['message']);
    $file = fopen('messages.txt', 'a');
    fwrite($file, $message . "\n");
    fclose($file);
    echo "<h1>Thank you for your beautiful message! 💖</h1>";
    echo "<a href='index.html' style='font-size: 1.2rem; color: #e63946;'>Go Back</a>";
}
?>
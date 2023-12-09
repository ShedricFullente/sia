<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $username = $_POST['usernameUser-login'];
    $password = $_POST['userPassword-login'];

    $conn = new mysqli('localhost', 'root', '', 'sia-db');

    if ($conn->connect_error) {

        die("Connection Failed: " . $conn->connect_error);
    }

    $sqlCheck = "SELECT * FROM `patient-account-login` WHERE username = ? AND password = ?";
    $stmt = $conn->prepare($sqlCheck);
    $stmt->bind_param("ss", $username, $password);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows == 1) {

        echo "<meta http-equiv='refresh' content='0;url=../extra/sidebar-patient.html'>";
        echo "<script>alert('Login Successful')</script>";

    } else {
        
        echo "<meta http-equiv='refresh' content='0;url=../index.html'>";
        echo "<script>alert('Invalid username or password')</script>";
    }

    $stmt->close();
    $conn->close();
}
?>
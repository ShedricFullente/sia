<?php

    $username = $_POST['usernameAdmin-register'];
    $password = $_POST['adminPassword-register'];

    $conn = new mysqli('localhost', 'root', '', 'sia-db');

    if ($conn->connect_error) {

        die("Connection Failed: " . $conn->connect_error);
    }

    $sqlCheck = "SELECT username FROM `admin-account-login` WHERE username = ?";
    $stmt = $conn->prepare($sqlCheck);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $resultCheck = $stmt->get_result();

    if ($resultCheck->num_rows > 0) {

        echo "<script>alert('Account Already Exists!')</script>";
        echo "<meta http-equiv='refresh' content='0;url=../index.html'>";

    } else {

        $stmt = $conn->prepare("INSERT INTO `admin-account-login` (username, password) VALUES (?, ?)");
        $stmt->bind_param("ss", $username, $password);
        $execVal = $stmt->execute();

        if ($execVal) {

            echo "<script>alert('Account Successfully Added')</script>";
            echo "<meta http-equiv='refresh' content='0;url=../extra/sidebar-admin.html'>";

        } else {
            
            echo "Error: " . $conn->error;
        }
    }

    $stmt->close();
    $conn->close();
?>
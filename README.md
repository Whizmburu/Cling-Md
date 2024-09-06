<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cling-MD</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Welcome To Cling-MD</h1>
        <p>Your all-in-one WhatsApp bot by Whiz</p>
        <div class="button-container">
            <a href="https://cling-md-vtf.onrender.com/" class="button session-id">Session Id</a>
            <a href="https://github.com/Whizmburu/Cling-Md/fork" class="button fork-repo">Fork Repository</a>
            <a href="https://dashboard.heroku.com/new?button-url=https://github.com/whizmburu/cling-md&template=https://github.com/whizmburu/cling-md.git" class="button deploy-heroku">Deploy on Heroku</a>
        </div>
    </div>
</body>
</html>
body {
    font-family: Arial, sans-serif;
    background: linear-gradient(to right, #00c6ff, #0072ff); /* Animated background gradient */
    color: white;
    text-align: center;
    margin: 0;
    padding: 0;
}

.container {
    padding: 50px;
}

h1 {
    font-size: 2.5em;
}

.button-container {
    margin-top: 20px;
}

.button {
    display: inline-block;
    padding: 10px 20px;
    margin: 10px;
    font-size: 1em;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    transition: background 0.3s;
}

.session-id {
    background-color: #ff6f61; /* Coral color */
}

.fork-repo {
    background-color: #4caf50; /* Green color */
}

.deploy-heroku {
    background-color: #1e88e5; /* Blue color */
}

.button:hover {
    opacity: 0.8;
}

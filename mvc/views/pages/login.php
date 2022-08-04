<script src=”https://unpkg.com/babel-standalone@6/babel.min.js”></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
<link rel="stylesheet" href="http://localhost:8080/T%E1%BB%B1%20h%E1%BB%8Dc%20PHP/otakuvn/public/css/modalChaitan.css">
<div class="modal">
  <a href="http://localhost:8080/T%E1%BB%B1%20h%E1%BB%8Dc%20PHP/otakuvn/home"><i class="fa-solid fa-xmark"></i></a>
  <div class="modal-container">
    <div class="modal-left">
      <h1 class="modal-title">Log In</h1>
      <form action="" method="Post">
        <div class="input-block">
          <label for="email" class="input-label">Email</label>
          <input type="text" name="email" id="email" required>
        </div>
        <div class="input-block">
          <label for="password" class="input-label">Password</label>
          <input type="password" name="password" id="password" required>
        </div>
        <h5 id="error"><?= $data["error"] ?></h5>
        <div class=" modal-buttons">
          <button class="input-button" name="login">Log In</button>
          <a href="http://localhost:8080/T%E1%BB%B1%20h%E1%BB%8Dc%20PHP/otakuvn/loginSignup/signup" class="input-button">Sign Up</a>
        </div>
      </form>
    </div>
    <div class="modal-right">
      <img src="http://localhost:8080/T%E1%BB%B1%20h%E1%BB%8Dc%20PHP/otakuvn/public/img/backgroud-login.PNG" alt="">
    </div>
  </div>
</div>
<script src="http://localhost:8080/T%E1%BB%B1%20h%E1%BB%8Dc%20PHP/otakuvn/public/js/modal.js"></script>
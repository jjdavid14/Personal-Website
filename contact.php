<!DOCTYPE html>
<html lang="en">
    <head>

        <meta charset="utf-8">

        <title>Jamie J David | Contact</title>

        <!-- Normalize CSS -->
        <link rel="stylesheet" type="text/css" href="vendors/css/normalize.css">
        <!-- Grid CSS -->
        <link rel="stylesheet" type="text/css" href="vendors/css/grid.css">
        <!-- Font Awesome -->
        <link href="vendors/fonts/font-awesome/css/font-awesome.min.css" rel="stylesheet">
        <!-- Animation CSS -->
        <link rel="stylesheet" type="text/css" href="vendors/css/animate.css">
        <!-- Google Font -->
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic,800,800italic" rel="stylesheet" type="text/css">
        <!-- Custom CSS -->
        <link rel="stylesheet" type="text/css" href="resources/css/styles.css">

    </head>
    <body>
        
        <nav class="sticky">
            <div class="row">
                <a class="logo" href="index.html">JamieJDavid</a>
                <ul class="main-nav">
                    <li><a href="about.html">About</a></li>
                    <li><a href="portfolio.html">Portfolio</a></li>
                    <li><a href="contact.php">Contact</a></li>
                </ul>
            </div>
        </nav>
        
        <section class="contact-me">
            <div class="row">
                <h2>I'm always open to meeting new people.</h2>
            </div>
            <div class="row">
                <div class="col span-1-of-2">
                    <p>If you would like to learn more about what I do or just simply want to chat, please don't hesitate to get in touch with me.</p>
                    <p>You can always reach me by sending an e-mail, reaching me through phone, or by using the form below.</p>
                    
                    <p>I'll get back to you as soon as I can!</p>
                </div>
                <div class="col span-1-of-2 contact-details">
                    <h4>Contact Details</h4>
                    <ul>
                        <li><a class="work-link" href="#">jjdavid14@email.arizona.edu</a></li>
                        <li>310-972-1432 (mobile)</li>
                        <li>
                            Jamie John David
                            <br>
                            University of Arizona
                            <br>
                            Tucson, AZ
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        
        <section class="intro-box">
            <div class="row">
                <h4>"The only way to do great work is to love what you do."</h4>
                <h3>- Steve Jobs</h3>
            </div>
        </section>
        
        <section class="section-form" id="form">
            <div class="row">
                <h2>Get In Touch!</h2>
            </div>
            <div class="row">
                <form method="post" action="mailer.php" class="contact-form">
                    <div class="row">
                        <?php
                            if($_GET['success'] == 1) {
                                echo "<div class=\"form-messages success\">
                                    Thank you! Your message has been sent.
                                </div>";
                            }
                            if($_GET['success'] == -1) {
                                echo "<div class=\"form-messages error\">
                                    Oops! Something went wrong. Please try again.
                                </div>";
                            }
                        ?>
                    </div>
                    <div class="row">
                        <div class="col span-1-of-3">
                            <label>Name</label>
                        </div>
                        <div class="col span-2-of-3">
                            <input type="text" name="name" id="name" placeholder="Your name" required>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col span-1-of-3">
                            <label>Email</label>
                        </div>
                        <div class="col span-2-of-3">
                            <input type="email" name="email" id="email" placeholder="Your email" required>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col span-1-of-3">
                            <label>How did you find me?</label>
                        </div>
                        <div class="col span-2-of-3">
                            <select name="find-us" id="find-us">
                                <option value="friends" selected>Friends</option>
                                <option value="search">Search engine</option>
                                <option value="ad">I contacted you</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col span-1-of-3">
                            <label>Drop me a line!</label>
                        </div>
                        <div class="col span-2-of-3">
                            <textarea name="message" placeholder="Your message"></textarea>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col span-1-of-3">
                            <label>&nbsp;</label>
                        </div>
                        <div class="col span-2-of-3">
                            <input type="submit" value="Send it!">
                        </div>
                    </div>
                </form>
            </div>
        
        </section>
        
        <footer>
            <div class="row">
                <div class="col span-1-of-2 footer-copy">
                    <p>
                        Copyright &copy; 2015 Jamie John David. Some rights reserved.
                    </p>
                </div>
                <div class="col span-1-of-2">
                    <ul class="social-links">
                        <li><a href="http://facebook.com/jamiejohn.david"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="http://twitter.com/jamiejd_"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="http://linkedin.com/in/jjdavid14"><i class="fa fa-linkedin"></i></a></li>
                        <li><a href="https://instagram.com/jamiejd_"><i class="fa fa-instagram"></i></a></li>
                        <li><a href="http://github.com/jjdavid14"><i class="fa fa-github-alt"></i></a></li>
                    </ul>
                </div>
            </div>
        </footer>
        
    </body>
</html>
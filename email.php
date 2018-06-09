<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link rel="shortcut icon" type="image/x-icon" href="img/Sicmeci-logo-icon.png">
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta name="description" content="Prestamos servicios de diseño, consultoría,  interventoría, construcción de obras civiles, eléctricas, 
  montajes mecánicos y control industrial enfocados en apoyar la estabilidad y crecimiento de nuestros clientes en el sector industrial 
  fortaleciendo su infraestructura para la efectiva gestión de sus servicios">
  <meta name="author" content="Curuba Inc. S.A.S.">
  <meta name="keywords" content="obras civiles, ingenieria industrial, montaje mecánico, instrumentación industrial, ingenieria eléctrica, ingenieria mecánica, diseño, consultoría, interventoría, "/>
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Sicmeci S.A.S.</title>
  <style>
    body{
      background-color: #F5F5F5; 
      width: 100%; 
      height: 100%;
      padding: 0;
      margin: 0;
      font-family: 'Roboto', sans-serif;
    }
    .message-sucessfull--content{
      position: absolute; 
      top: 50%; 
      left: 50%; 
      transform: translate(-50%, -50%); 
      padding: 1em; 
      background-color: #FAFAFA;
      box-shadow: 0 0 10px rgba(0,0,0,.5);
      width: 80%;
      text-align: center;
    }
  </style>
  
</head>
<body>
	<h1>Enviando email</h1>
  
  <?php

    $para = 'rianveal@hotmail.com';
    $titulo = 'Titulo';
    $mensaje = 'El mensaje';
    $cabecera = 'From: webmaster@example.com' . "\r\n" .
        'Reply-To: webmaster@example.com' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
    
    mail($para, $titulo, $mensaje, $cabecera)    

  ?>

	<script type="text/javascript">
    WebFontConfig = {
    google: { families: [ 'Roboto:300,400' } };
    (function() {
        var wf = document.createElement('script');
        wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
    })();
	</script>
</body>
</html>

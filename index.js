// Parametro para saber se o site esta em PT-BR ou EN-US
var verif = true;
// Função para abertura de uma janela com meu currículo
$(".curriculum").click(function(){
  if(verif===true){
    window.open('./assets/files/CurrículoBernardoLerisPTBR.pdf', '_blank');
  }else if(verif===false){
    window.open('./assets/files/CurrículoBernardoLerisENG.pdf', '_blank');
  }
});

// Função para transição suave para partes da página utilizando âncora
$(".nav-link").on('click', function (event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 700, function () {
            window.location.hash = hash;
        });
    }
});

// Função para abrir e fechar o menu mobile
function toggleMenu() {
    var menuItems = $('.menu-items');
    if (menuItems.is(':visible')) {
        menuItems.slideUp(250); 
    } else {
        menuItems.slideDown(250); 
    }
}

$(".menu-icon").on('click', function (event) {
    toggleMenu();
});
  
function toggleLanguage() {
    var languageIcon = document.getElementById('language-icon');
    document.body.classList.toggle('language-mode');
    languageIcon.textContent = document.body.classList.contains('language-mode') ? 'PT' : 'EN';
}

$('#chk, #chk2').on('change', function() {
    if ($(this).is(':checked')) {
        // dark 
        $('body, .navbar, .more, .mobile-menu, .menu-items').css("background-color", "#0B0C10"); // preto fundo
        $('.first-text').css("color", "#0B0C10"); // preto texto
        $('.navbar, .nav-elements a, .project, .small-titles, .menu-icon, .menu-items a').css("color", "#66FCF1"); // verde texto
        $('.idioma, .second-text, .linkhub, .telefone, .contact, .container-db, .container-frame, .container-tk, .container-prog, .project-text, .detail, .dot').css("color", "#ffffff"); //branco texto
        $('.first-text').css("-webkit-text-stroke", "2px #66FCF1"); //contorno texto HELLO
        $('.label').css("border", "0.1rem solid #66FCF1");

        $('.contact-links a').css("border", "0.15625rem solid #66FCF1");
        
        $('.contact-links a').hover(
            function() {
              // Código a ser executado quando o mouse entra (hover)
              $(this).css("background-color", "#66FCF1");
            },
            function() {
              // Código a ser executado quando o mouse sai
              $(this).css("background-color", ""); // Retorna ao estado original
            }
        );

        $('.project-link, .more').hover(
            function() {
              // Código a ser executado quando o mouse entra (hover)
              $(this).css("border-color", "#ffffff");
            },
            function() {
              // Código a ser executado quando o mouse sai
              $(this).css("border-color", "#66FCF1"); // Retorna ao estado original
            }
        );

        $('.project-link').css("background-color", "#0B0C10");
        $('.project-link').css("border", "0.0375rem solid #66FCF1");

        $('.curriculum').css("background-color", "#0B0C10");
        $('.curriculum').css("border", "0.15rem solid #66FCF1");
        $('.curriculum').hover(
          function() {
            // Código a ser executado quando o mouse entra (hover)
            $(this).css("border-color", "#ffffff");
          },
          function() {
            // Código a ser executado quando o mouse sai
            $(this).css("border-color", "#66FCF1"); // Retorna ao estado original
          }
        );

        $('.more').css("border", "0.15vw solid #66FCF1");

        $('.navbar').css("border-bottom", "0.1vw solid #494C4E");

        var styleElem = document.head.appendChild(document.createElement("style"));
        styleElem.innerHTML = ".nav-elements a:after {background-color: #66FCF1;}";
        
    } else {
        // light
        $('body, .navbar, .mobile-menu, .menu-items').css("background-color", "#E3E2DF"); //cinza fundo
        $('.idioma, .navbar, .nav-elements a, .second-text, .project, .container-db, .container-frame, .container-tk, .container-prog, .linkhub, .contact, .dot, .menu-icon').css("color", "#5D001E"); //vermelho texto
        $('.project, .small-titles, .linkhub, .telefone, .project-text, .detail, .menu-items a').css("color", "#9A1750"); // rosa texto
        $('.first-text').css("color", "#E3E2DF"); //cinza texto

        $('.first-text').css("-webkit-text-stroke", "2px #9A1750");

        $('.contact-links a').css("border", "0.15625rem solid #9A1750");
        
        $('.contact-links a').hover(
            function() {
              // Código a ser executado quando o mouse entra (hover)
              $(this).css("background-color", "#9A1750");
            },
            function() {
              // Código a ser executado quando o mouse sai
              $(this).css("background-color", ""); // Retorna ao estado original
            }
        );
        
        $('.project-link, .more').hover(
            function() {
              // Código a ser executado quando o mouse entra (hover)
              $(this).css("border-color", "#ffffff");
            },
            function() {
              // Código a ser executado quando o mouse sai
              $(this).css("border-color", "#9A1750"); // Retorna ao estado original
            }
        );

        $('.project-link').css("background-color", "");
        $('.project-link, .label').css("border", "");

        $('.curriculum, .more').css("background-color", "");
        $('.curriculum, .more').css("border", "");
        $('.curriculum').hover(
          function() {
            // Código a ser executado quando o mouse entra (hover)
            $(this).css("border-color", "#ffffff");
          },
          function() {
            // Código a ser executado quando o mouse sai
            $(this).css("border-color", "#9A1750"); // Retorna ao estado original
          }
        );

        $('.navbar').css("border-bottom", "");
        
        var styleElem = document.head.appendChild(document.createElement("style"));
        styleElem.innerHTML = ".nav-elements a:after {background-color: #5D001E;}";

    }
});

// Rosa #9A1750
// Vermelho #5D001E
// Cinza #E3E2DF
// Verde #66FCF1
// "Preto" #0B0C10

$(".language").on('click', function (event) {
    // Obtém a referência da imagem e do texto
    var flagImg = $('.flag');
    
    // Verifica qual imagem está atualmente exibida
    if (flagImg.attr('src') === './assets/images/estados-unidos.png') {
      // Se a imagem atual for dos Estados Unidos, troca para a do Brasil
        verif = false;
        flagImg.attr('src', './assets/images/brasil.png');
        $('.idioma').text('PT-BR');
        $('#projeto1').text('In this C++ project, we aim to solve an interference problem among Wi-Fi routers using graph coloring. We have developed a brute-force algorithm and also applied a heuristic to compare the efficiency and results of the two alternative.');
        $('#titulo1').text('Wi-Fi Routers Interference');
        $('#projeto2').text('A customer registration application developed in Java using the JavaFX platform for the graphical user interface, PostgreSQL for storing customer records, and Maven for dependency management.');
        $('#titulo2').text('Client Registry');
        $('#projeto3').text('Back-end software using Node, Express.js, and MongoDB that allows for the insertion, modification, and deletion of product-related data, as well as user registration and password recovery. It includes Swagger UI documentation.');
        $('#titulo3').text('CRUD Application in Express JS');
        $('#projeto4').text('Practical project for registering championships and purchasing tickets developed during the Object-Oriented Programming Practices course, using the Java language.');
        $('#contact').text('Contact');
        $('#other').text('OTHER PROJECTS');
        $('.project-link').text('View Details');
        $('#projeto').text('Projects');
        $('#tk').text('Technical Knowledge');
        $('#db').text('Databases');
        $('#fw').text('Frameworks & Technologies');
        $('#pl').text('Programming Languages');
        $('#tk1').text('Data Structure');
        $('#tk2').text('Graph Algorithms');
        $('#tk3').text('Computer Networks');
        $('#tk4').text('Object Oriented Programming');
        $('#skills2').text('Skills');
        $('#curriculum').css("width", "15rem");
        $('#curriculum').text('MY CURRICULUM');
        $('#hello').text('HELLO');
        $('.menu1').text('ABOUT ME');
        $('.menu2').text('SKILLS');
        $('.menu3').text('PROJECTS');
        $('.menu4').text('CONTACT');
        $('.second-text').text('My name is Bernardo Leris, I am 21 years old and I am currently on an academic journey, studying Information Systems at the Federal University of Lavras. Every day, I dive headfirst into the pursuit of new knowledge and project development. My current goal is to become a skilled full-stack developer, combining technical, practical, and interpersonal skills. I am following my path with dedication and giving my best, aiming to open up new opportunities in my career!');

      } else {
      // Caso contrário, troca para a imagem dos Estados Unidos
        verif = true;
        flagImg.attr('src', './assets/images/estados-unidos.png');
        $('.idioma').text('EN-US');
        $('#projeto1').text('Nesse projeto em C++, buscamos resolver um problema de interferência entre roteadores Wi-Fi utilizando a coloração em grafos. Desenvolvemos um algoritmo de força bruta e também aplicamos uma heurística para comparar a eficiência e os resultados dessas duas alternativas.');
        $('#titulo1').text('Interferência entre roteadores Wi-Fi');
        $('#projeto2').text('Uma aplicação de registro de clientes desenvolvida em Java utilizando a plataforma JavaFX para a interface gráfica do usuário, PostgreSQL para armazenar registros de clientes, e Maven para o gerenciamento de dependências.');
        $('#titulo2').text('Registro de Clientes');
        $('#projeto3').text('Um software back-end utilizando Node, Express.js e MongoDB que permite a inserção, modificação e exclusão de dados relacionados a produtos, além do registro de usuários e recuperação de senha. Inclui documentação Swagger UI.');
        $('#titulo3').text('CRUD utilizando Express JS');
        $('#projeto4').text('Um projeto prático para registrar campeonatos e comprar ingressos desenvolvido durante o curso de Práticas de Programação Orientada a Objetos, utilizando a linguagem Java.');
        $('#contact').text('Contato');
        $('#other').text('OUTROS PROJETOS');
        $('.project-link').text('Ver Detalhes');
        $('#projeto').text('Projetos');
        $('#tk').text('Conhecimentos técnicos');
        $('#db').text('Bancos de dados');
        $('#fw').text('Frameworks & Tecnologias');
        $('#pl').text('Linguagens de Programação');
        $('#tk1').text('Estrutura de Dados');
        $('#tk2').text('Algoritmos em Grafos');
        $('#tk3').text('Redes de Computadores');
        $('#tk4').text('Programação Orientada a Objetos');
        $('#skills2').text('Habilidades');
        $('#curriculum').css("width", "");
        $('#curriculum').text('MEU CURRÍCULO');
        $('#hello').text('OLÁ');
        $('.menu1').text('SOBRE MIM');
        $('.menu2').text('HABILIDADES');
        $('.menu3').text('PROJETOS');
        $('.menu4').text('CONTATO');
        $('.second-text').text('Me chamo Bernardo Leris, tenho 21 anos e atualmente estou na jornada acadêmica, cursando Sistemas de Informação na Universidade Federal de Lavras. Diariamente, mergulho de cabeça na busca por novos conhecimentos e no desenvolvimento de projetos. Tenho como atual objetivo me tornar um desenvolvedor full-stack hábil, combinando habilidades técnicas, práticas e interpessoais. Sigo minha trajetória com empenho e entregando o melhor de mim, a fim de abrir espaço para novas oportunidades em minha carreira!');
    }
});
  
  
  
  



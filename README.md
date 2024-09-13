# Desafio técnico Quatro Patas - (Angular)

Olá, bem vindo ao repositório deste projeto que simula um sistema de adoção de animais.

# Tecnologias utilizadas: 

Framework Angular 18, Tailwindcss(CSS-inline) e Sweet Alerts(Alerts)

# Requisitos para compilar o projeto
O projeto atualizado se encontra na branch **master**, voce pode realizar o download através do
``git clone https://github.com/humbertoconstantinong/stefanini4patas.git``.

Assim que baixar o projeto, abra um terminal na pasta do mesmo e envie o seguinte comando:
``npm install`` e logo após que concluir, digite o comando ``npm install -g json-server`` <br>

Este último, é responsável por disponibilizar localmente os animais, simulando uma API.
<br>
Para iniciar o projeto angular, se dirija até a raiz do projeto e  rode ``npm start`` ou ``ng serve``, fica a sua preferencia e ambos tem o mesmo resultado.
<br>
Para finalizar as configurações, entre no diretório  ``/apifake``pelo terminal e digite ``json-server --watch db.json``.
Nossa API-FAKE estará ligada e  rodando na porta 3000.


## Home

Ao acessar a página inicial ``localhost:4200/`` você vai se deparar com a seguinte tela:![Tela Inicial](https://i.imgur.com/WP80acO.png)
1- Ao clicar em "Nossas Regras", o sistema vai redirecionar para a página de regras.  

![Nossas Regras](https://i.imgur.com/6UAx5GZ.png)

2- Ao clicar em "Adote Agora", o sistema vai redirecionar para a página de adoção.  
![Alerta de deck criado](https://i.imgur.com/JxHPP3i.png)

Depois que escolher seu bixinho, o alerta confirmando a adoção será exibido.
Você também pode favoritar um bixinho <3!




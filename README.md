Monitoring Health System for IDQBRN.
OBS: Para executar, deve-se ter instalado o "node" e o "npm".

Primeiramente, deve ser utilizado o seguinte comando:
npm install react

Uma vez terminado o download, para iniciar a execução do código, utilize:
npm start

Após isso, abra um novo terminal na pasta "idqbrn" e execute os seguintes comandos:
cd backend
node server.js

Este comando irá iniciar a conexão com o Banco de Dados no Atlas MongoDB.
Feito isso, será iniciada a sessão na tela com o Mapa, a partir da qual existem diversas interações.
Entretanto, existe uma sessão dedicada ao uso exclusivo de administradores.
Para acessar a área de login, adicione "/login" ao final do URL de origem.
O único login já existente é:

Usuário: admin
Senha: idqbrnadmin

Uma vez iniciada a sessão, é possível realizar diversas outras interações que irão afetar diretamente os dados armazenados no banco de dados.
Vale ressaltar que dentro da pasta "backend" existe a planilha dados.csv que serve de modelo para arquivos utilizados no upload para o banco de dados.
Assim, após quaisquer alterações, basta realizar o upload deste arquivo, utilizando a área dedicada no projeto, para resetar o estado do banco de dados.

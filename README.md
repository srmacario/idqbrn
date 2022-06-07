
# Monitoring Health System for IDQBRN.

## Configurações
Para executar, deve-se ter instalado o "node" e o "npm".

Primeiramente, deve ser utilizado o seguinte comando:
> npm install react

## Funcionamento
Uma vez terminado o download, para iniciar a execução do código, utilize:
> npm start

Após isso, abra um novo terminal na pasta "idqbrn" e execute os seguintes comandos:
> cd backend
> node server.js

Este comando irá iniciar a conexão com o Banco de Dados no Atlas MongoDB.
Feito isso, será iniciada a sessão na tela com o Mapa, a partir da qual existem diversas interações.

![image](https://user-images.githubusercontent.com/74505147/172268799-6deba692-472b-467e-8f96-fbf7e350b93a.png)
![image](https://user-images.githubusercontent.com/74505147/172268819-ca692de3-35b8-4164-8566-667564f15c70.png)


## Área Privada
Existe uma sessão dedicada ao uso exclusivo de administradores.
Para acessar a área de login, adicione "/login" ao final do URL de origem.

![image](https://user-images.githubusercontent.com/74505147/172268871-f1b6d041-67f0-450f-aa16-ba119e929f47.png)

O único login já existente é:

>Usuário: admin
>Senha: idqbrnadmin
![image](https://user-images.githubusercontent.com/74505147/172268910-cfe72da7-bb8f-4002-b1c1-004a3575a89c.png)

Uma vez iniciada a sessão, é possível realizar diversas outras interações que irão afetar diretamente os dados armazenados no banco de dados.
Vale ressaltar que dentro da pasta "backend" existe a planilha dados.csv que serve de modelo para arquivos utilizados no upload para o banco de dados.
Assim, após quaisquer alterações, basta realizar o upload deste arquivo, utilizando a área dedicada no projeto, para resetar o estado do banco de dados.
![image](https://user-images.githubusercontent.com/74505147/172268946-004461e1-3db1-45aa-8e06-077d5e013ac7.png)
![image](https://user-images.githubusercontent.com/74505147/172269016-75b7856e-dcf4-4e68-8089-79181a7688c2.png)
![image](https://user-images.githubusercontent.com/74505147/172269047-fc45a4eb-b568-47ee-a8aa-0f31ba3ff4a2.png)
![image](https://user-images.githubusercontent.com/74505147/172269099-07747de2-9335-45e9-ac40-13905c5ba838.png)
![image](https://user-images.githubusercontent.com/74505147/172269134-bdfdf33b-8439-4a4e-b519-9285673fb22b.png)
![image](https://user-images.githubusercontent.com/74505147/172269215-a77ec6b9-b10a-47ba-8fdd-7ba8bedff30f.png)
![image](https://user-images.githubusercontent.com/74505147/172269245-5764448a-de5f-4ebd-932f-2cd97abae2ff.png)
![image](https://user-images.githubusercontent.com/74505147/172269273-acd5c639-2388-4ce2-b620-d5766071a87f.png)

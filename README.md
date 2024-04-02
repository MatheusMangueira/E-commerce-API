# E-commerce API

Este projeto de e-commerce foi desenvolvido como parte de um estudo prático sobre o desenvolvimento de aplicativos web modernos. A iniciativa surge da necessidade de aprimorar habilidades em desenvolvimento de software, especialmente no contexto de comércio eletrônico.

### O projeto utiliza tecnologias como:
<br/>

  <img src="https://skillicons.dev/icons?i=git,docker,ts,nodejs,postgres" />

### Dúvidas e solicitações relacionadas a integração e API, devem ser enviadas para o [linkedin](https://www.linkedin.com/in/matheusmangueira/)

Recursos disponíveis para acesso via API:
* [**Produtos**](#Produtos)
* [**Catagorias**](#Catagorias)
* [**Usuário**](#Usuário)
* [**Pedidos**](#Pedidos)

## URLs de acesso

1)  Para testar a API, Faça um clone do repósitorio https://github.com/MatheusMangueira/Ecommerce-API.git
2)  Configure o docker conforme o especificado no arquivo <strong> docker-compose.yml </strong>
3)  Configure as variaveis de ambiente de acordo com o arquivo <strong> .env.example </strong>
4)  Acesse http://localhost:3000/api-docs para ver o <strong>swagger</strong> 


## Como rodar ?
```
npm docker:local
npm start
```

## Métodos

Requisições para a API devem seguir os padrões:
| Método | Descrição |
|---|---|
| `GET` | Retorna informações de um ou mais registros. |
| `POST` | Utilizado para criar um novo registro. |
| `PUT` | Atualiza dados de um registro ou altera sua situação. |
| `DELETE` | Remove um registro do sistema. |


## Respostas

| Código | Descrição |
|---|---|
| `200` | Requisição executada com sucesso (success).|
| `400` | Erros de validação ou os campos informados não existem no sistema.|
| `401` | Dados de acesso inválidos.|
| `404` | Registro pesquisado não encontrado (Not found).|
| `405` | Método não implementado.|
| `410` | Registro pesquisado foi apagado do sistema e não esta mais disponível.|
| `422` | Dados informados estão fora do escopo definido para o campo.|
| `429` | Número máximo de requisições atingido. (*aguarde alguns segundos e tente novamente*)|
| `500` | Internal Sesrver Error.|

## Listar
As ações de `listar` permitem o envio dos seguintes parâmetros:

| Parâmetro | Descrição |
|---|---|
| `limit` | Filtra dados pelo valor informado. |
| `page` | Informa qual página deve ser retornada. |


# Produtos

### Listar (List) [GET /produtos]

+ Request (application/json)

  + Parameters
      - page: 1
      - limit: 10
    
+ Response 200 (application/json)

          {
            "id": "3570a613-83bc-42a3-99d2-eb0b1c477c1c",
            "name": "bermuda ",
            "stock": 50,
            "price": "80.99",
            "description": "bermuda masculina",
            "productImage": "testando.jpeg"
          }

+ Response 500 (application/json)

          {
             message: 'Internal Server Error'
          }


### Detalhar (List) [GET /produtos/{id}]

+ Request (application/json)

+ Response 200 (application/json)

          {
            "id": "3570a613-83bc-42a3-99d2-eb0b1c477c1c",
            "name": "bermuda ",
            "stock": 50,
            "price": "80.99",
            "description": "bermuda masculina",
            "productImage": "testando.jpeg"
          }

+ Response 500 (application/json)

          {
             message: 'Internal Server Error'
          }


### Atualizar (update) [PUT /produtos/{id}]

+ Request (application/json)

+ Body
    
          {
            "name": "Bermuda atualizada ",
            "stock": 30,
          }

+ Response 200 (application/json)

          {
            "id": "3570a613-83bc-42a3-99d2-eb0b1c477c1c",
            "name": "Bermuda atualizada ",
            "stock": 30,
            "price": "80.99",
            "description": "bermuda masculina",
            "productImage": "testando.jpeg"
          }

+ Response 500 (application/json)

          {
             message: 'Internal Server Error'
          }


### Criar (create) [POST /produtos]

+ Request (application/json)

+ Body

          {
            "name": "BLUSA FEMININA PRETA",
            "stock": 10,
            "price": 80.99,
            "description": "BOLA FUTEBOL",
            "productImage": "testando.jpeg",
            "category": {
              "id": "e6fac464-335c-4456-9216-0b586952cb9c"
            }
          }
    
+ Response 200 (application/json)
  
          {
            "message": "Product created",
            "product": {
              "name": "BLUSA FEMININA PRETA",
              "stock": 10,
              "price": 80.99,
              "description": "BOLA FUTEBOL",
              "productImage": "testando.jpeg",
              "category": {
                "id": "e6fac464-335c-4456-9216-0b586952cb9c"
                }
              }
           "id": "7638bd9c-9a0d-4259-8ec3-c110c84c92ee"
        }


+ Response 500 (application/json)

          {
             message: 'Internal Server Error'
          }


### Deletar (delete) [DELETE /produtos/{id}]

+ Request (application/json)

+ Response 200 (application/json)

          {
             message: "Product deleted"
          }

+ Response 500 (application/json)

          {
             message: 'Internal Server Error'
          }



# Catagorias

### Listar (List) [GET /categorias]

+ Request (application/json)

  + Parameters
      - page: 1
      - limit: 10
    
+ Response 200 (application/json)

          {
           "message": "Categories found"
           "category": [
              {
                "id": "e6fac464-335c-4456-9216-0b586952cb9c",
                "name": "MASCULINO"
              }
            ]
          }

+ Response 500 (application/json)

          {
             message: 'Internal Server Error'
          }



### Detalhar (List) [GET /categorias/{id}]

+ Request (application/json)

+ Response 200 (application/json)

          {
           "message": "Categories found"
           "category": [
              {
                "id": "e6fac464-335c-4456-9216-0b586952cb9c",
                "name": "MASCULINO"
              }
            ]
          }

+ Response 500 (application/json)

          {
             message: 'Internal Server Error'
          }



### Criar (create) [POST /categorias]

+ Request (application/json)

+ Body

          {
            "name": "MASCULINO"
          }

+ Response 200 (application/json)
  
          {
            "message": "Category created",
            "category": {
              "name": "MASCULINO",
              "id": "8743578f-15ce-4243-85c8-549ba21e5d8e"
            }
          }

+ Response 500 (application/json)

          {
             message: 'Internal Server Error'
          }


### Atualizar (update) [PUT /categorias/{id}]

+ Request (application/json)

+ Body
    
          {
            "name": "FEMININO",
          }

+ Response 200 (application/json)
  
          {
            "message": "Category updated",
            "category": {
              "name": "FEMININO",
              "id": "8743578f-15ce-4243-85c8-549ba21e5d8e"
            }
          }

+ Response 500 (application/json)

          {
             message: 'Internal Server Error'
          }


### Deletar (delete) [DELETE /categorias/{id}]

+ Request (application/json)

+ Response 200 (application/json)

          {
             message: "Category deleted"
          }

+ Response 500 (application/json)

          {
             message: 'Internal Server Error'
          }



# Usuário

### Listar (List) [GET /usuario]

+ Request (application/json)

  + Parameters
      - page: 1
      - limit: 10
    
+ Response 200 (application/json)

          {
           "message": "Users found",
           "user": [
              {
                "id": "839497e5-8080-4c44-9294-a8782810a7ec",
                "fullName": "Matheus Mangueira ",
                "email": "matheus@testando.com",
                "createdAt": "2024-03-22T20:04:51.713Z"
              }
            ]
          }

+ Response 500 (application/json)

          {
             message: 'Internal Server Error'
          }


### Criar (create) [POST /usuario]

+ Request (application/json)

+ Body

          {
           "fullName":"teste Mangueira ",
            "email": "teste@testando.com"
          }

+ Response 200 (application/json)
  
          {
            "message": "Category created",
            "user": [
              {
                "id": "839497e5-8080-4c44-9294-a8782810a7ec",
                "fullName": "teste Mangueira" ,
                "email": "teste@testando.com",
                "createdAt": "2024-03-22T20:04:51.713Z"
              }
            ]
          }

+ Response 500 (application/json)

          {
             message: 'Internal Server Error'
          }


### Deletar (delete) [DELETE /usuario/{id}]

+ Request (application/json)

+ Response 200 (application/json)

          {
             message: "User deleted"
          }

+ Response 500 (application/json)

          {
             message: 'Internal Server Error'
          }


# Pedidos

### Criar (create) [POST /pedido]

+ Request (application/json)

+ Body

          {
           "userId": "98979b4b-975f-4744-99fa-c1b8ffa59d4b",
            "orderItem": [
            {
		        "product":"5b6322e2-2f9a-4a40-9f36-c44ca1e4f5a6",
		        "quantity": 10
	          }
          ]
          }

+ Response 200 (application/json)
  
          {
            "message": "Order created",
            "order": {
               "orderDate": "2024-04-02T18:51:29.570Z",
                "user": {
                  "id": "98979b4b-975f-4744-99fa-c1b8ffa59d4b",
                  "fullName": "MONISE Mangueira ",
                  "email": "MONISE@testando.com",
                  "createdAt": "2024-03-28T01:40:53.791Z"
                },
            "orderItem": [
              {
                "id": "763944c3-69ae-431b-8661-2216017052eb",
                "quantity": 10,
                "product": "5b6322e2-2f9a-4a40-9f36-c44ca1e4f5a6"
              }
            ],
            "id": "ce5dee2b-db28-4664-9b0c-f11dcbec2d13"
            }
          }

+ Response 500 (application/json)

          {
             message: 'Internal Server Error'
          }



  

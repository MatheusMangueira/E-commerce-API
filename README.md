# Ecommerce API

Dúvidas e solicitações relacionadas a integração e API, devem ser enviadas para o [linkedin](https://www.linkedin.com/in/matheusmangueira/)

Recursos disponíveis para acesso via API:
* [**Úsuario**](#reference/recursos/empresa)

## URLs de acesso

1)  Para testar a API, Faça um clone do repósitorio https://github.com/MatheusMangueira/Ecommerce-API.git
2)  Configure o docker conforme o especificado no arquivo <strong> docker-compose.yml </strong>
3)  Acesse http://localhost:3000/api-docs para ver o <strong>swagger</strong> 

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
             message: 'Internal Sesrver Error'
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
             message: 'Internal Sesrver Error'
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
             message: 'Internal Sesrver Error'
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
             message: 'Internal Sesrver Error'
          }


### Deletar (delete) [DELETE /produtos/{id}]

+ Request (application/json)

+ Response 200 (application/json)

          {
             message: "Product deleted"
          }

+ Response 500 (application/json)

          {
             message: 'Internal Sesrver Error'
          }



    


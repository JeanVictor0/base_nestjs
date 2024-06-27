# Base nest js

## Tecnologias:

- Nodejs ( v.20 )
- Postgresql
- terraform
- localstack

## Como executar o projeto?

### Dependencias:

Primeiro, instale o node 20 ou use nvm. Depois instale docker e pip, com seguinte comando:

```shell
apt install docker.io docker docker-compose-v2 python3-pip -y
```

Após isso, precisaria de arquivo de configuração, pois as configurações vem dela. Sem isso, dar erro no nestjs


```shell
<!-- Crie arquivo chamado .env e adicione isso -->
DB_HOST=postgres
DB_PORT=5432
DB_USER=node
DB_PASSWORD=node
DB_NAME=loja
```

Se quiser mexer com terraform, instale tflocal e executa docker compose. Com os seguintes comandos:

```shell
<!-- Iniciar estrutura do projeto, e o docker ja instala as depedencias -->
docker compose up -d

<!-- Instalar tflocal para funcionar com localstack -->
pip install terraform-local

<!-- Iniciar o projeto -->
cd terraform
tflocal init
tflocal plan
```

Após isso, todas dependencias de node, infraestrutura e outros estará funcionando. Tambem, ja rodandno aplicação

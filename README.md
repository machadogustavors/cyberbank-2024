# CyberBank 2024

Este é um projeto de teste para demonstração de uma aplicação bancária simples, utilizando as tecnologias Angular, Java Spring Boot e PostgreSQL.

## Tecnologias Utilizadas

- **Frontend**: Angular 18 com PrimeNG para componentes UI
- **Backend**: Java 17 com Spring Boot 3.3.2, JPA/Hibernate para ORM
- **Banco de Dados**: PostgreSQL em container Docker
- **ORM**: JPA com Hibernate para mapeamento objeto-relacional

## Funcionalidades

- Cadastro de usuários com informações completas (nome, email, telefone, endereço, data de nascimento, login, senha)
- Sistema de login
- Gerenciamento de contas correntes
- Transações PIX
- Extrato de transações

## Como Executar

### Pré-requisitos

- JDK 17
- Node.js e npm
- Docker

### Passos

1. **Instalar dependências do backend**:
   ```bash
   cd api
   ./mvnw.cmd clean install
   ```

2. **Iniciar o banco de dados**:
   ```bash
   cd docker
   docker-compose up -d
   ```

3. **Executar o backend**:
   ```bash
   cd api
   ./mvnw.cmd spring-boot:run
   ```

4. **Instalar dependências do frontend**:
   ```bash
   cd front
   npm install
   ```

5. **Executar o frontend**:
   ```bash
   cd front
   npm start
   ```

O frontend estará disponível em `http://localhost:4200` e o backend em `http://localhost:8081`.

## Estrutura do Projeto

- `api/`: Backend Java Spring Boot
- `front/`: Frontend Angular
- `docker/`: Configuração do banco PostgreSQL

## Observações

Este projeto foi desenvolvido como um teste de integração entre Angular, Java e PostgreSQL, utilizando boas práticas de desenvolvimento com ORM para gerenciamento profissional do banco de dados.
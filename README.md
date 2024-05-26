# LUMI
Desenvolvido por Marcelo

## Descrição
Nós iremos fornecer algumas faturas de energia elétrica. Seu objetivo será desenvolver um 
código que seja capaz de: 
▪ Extrair os dados relevantes dessas faturas. 
▪ Organizar esses dados de maneira estruturada em um banco de dados PostgreSQL. 
▪ Apresentar esses dados em uma aplicação web, por meio de uma API.  
Tecnologias a serem utilizadas: Typescript/JavaScript ou Python, Node.js e React.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Git](https://git-scm.com/)

## Instalação

Siga as etapas abaixo para configurar e executar o projeto localmente.

### 1. Clone o Repositório

Primeiro, clone o repositório para a sua máquina local usando o comando abaixo:

```bash
git clone https://github.com/marceloroot/RBRDigital.git
```
### 2. Acesse o Diretório do Projeto

Navegue até o diretório do projeto clonado:

```bash
cd lumi
```
### 3. Suba o Docker

Para iniciar os contêineres Docker, execute o seguinte comando:

```bash
docker-compose up --build -d
```

Nota: Esse processo pode demorar alguns minutos, então seja paciente enquanto os contêineres estão sendo configurados.

### 4. Acesse o sistema

Para acessar o projeto vai em:

```bash
http://localhost:3000
```

### 5. Acesse a base de dados vai em:

Para acessar o projeto vai em:

```bash
http://localhost:8081
```
Usuario: admin@example.com
Senha: example

### 6. A API se em contra :

Para acessar o projeto vai em:

```bash
http://localhost:3001
```

### 6. Para rodar  :

Para rodar os tests tem que endividualmente em cada diretorio e executar:

```bash
npm install
```



# Docker Setup for Node.js and PostgreSQL

This project uses Docker to set up a Node.js server with a PostgreSQL database. Follow the instructions below to get started.

## Prerequisites

**Docker**: Make sure Docker is installed on your system. If you haven't installed it yet, you can download it [here](https://www.docker.com/get-started).

## Setup Instructions

1. **Start Docker**: Ensure Docker is running on your machine.

2. **Install Server Dependencies**:

Run the following command to install the project's dependencies:

```bash
npm install
```

3. **Set Up PostgreSQL and the Server**:

Use Docker to start a PostgreSQL instance. Run the following command:

```bash
docker run --name my-postgres -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres
```

Ensure that the PostgreSQL server is running on port 5432.

4. **Generate the Prisma Client**:

Run the following command to generate the Prisma client based on your schema:

```bash
npx prisma generate
```

5. **Apply Migrations**:

Run the following command to apply the initial migrations to the database:

```bash
npx prisma migrate dev --name init
```

6. **Start the Project**:

Run the following command to start the development server:

```bash
npm run dev
```

## Pending Task

- [ ] Build the `docker-compose` file to replace the command in step 3.

## Issues and Feedback

If you encounter any issues or have feedback, please open an issue in the repository's [Issues](#) section.

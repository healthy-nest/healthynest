#!/bin/bash
set -e

# Install Docker Compose plugin if not present
sudo apt-get update
sudo apt-get install -y docker-compose-plugin

# Create a directory for the compose file
mkdir -p ~/postgres-compose
cd ~/postgres-compose

# Write a docker-compose.yml file
cat > docker-compose.yml <<EOF
version: '3.8'
services:
  postgres:
    image: postgres:latest
    restart: always
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: postgres
    ports:
      - "5432:5432"
    volumes:
      - pgdata:/var/lib/postgresql/data
volumes:
  pgdata:
EOF

# Start PostgreSQL using Docker Compose
sudo docker compose up -d

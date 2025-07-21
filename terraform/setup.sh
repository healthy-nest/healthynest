#!/bin/bash
set -e

# Update package list and install prerequisites
sudo apt-get update
sudo apt-get install -y \
    ca-certificates \
    curl \
#!/bin/bash
set -e
exec > /var/log/user-data.log 2>&1

# Update package list
sudo apt-get update

# Install Docker (using default Ubuntu repo for compatibility)
sudo apt-get install -y docker.io

# Enable and start Docker
sudo systemctl enable docker
sudo systemctl start docker

# (Optional) Add ubuntu user to docker group for non-root usage
sudo usermod -aG docker ubuntu

# Log Docker version for debugging
docker --version

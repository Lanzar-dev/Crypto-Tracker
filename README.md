# Crypto Tracker - Azure Kubernetes Deployment

### 🚀 A Kubernetes-based deployment of a React Crypto Tracker application using Azure DevOps, AKS, ACR, and ArgoCD

## 📌 Overview

### This project demonstrates the containerization and deployment of a React-based Crypto Tracker application on Azure Kubernetes Service (AKS) using Azure DevOps CI/CD pipelines and ArgoCD for GitOps.

> 📢 Stay tuned! A detailed article covering the entire process from development to deployment will be published soon! 🚀

## 🛠️ Technologies Used

- Frontend: React, Nginx
- Api: [CoinGecko](https://www.coingecko.com/en/api)
- Containerization: Docker
- Version Control & CI/CD: Git, Azure DevOps, ArgoCD
- Container Registry: Azure Container Registry (ACR)
- Orchestration & Deployment: Kubernetes (AKS)
- Infrastructure as Code: YAML, Bash scripts

## 📂 Project Structure

crypto-Tracker\
│── k8s-manifests\
│── public\
|── scripts\
|── src\
|── .dockerignore\
|── .gitignore\
|── Dockerfile\
│── azure-pipelines.yaml\
│── package-lock.json\
│── package.json\
│── README.md

## 🚀 Features

#### ✅ Containerized React App: Packaged with Nginx for optimized performance.

#### ✅ Automated Build & Deploy: Using Azure DevOps Pipelines for CI/CD.

#### ✅ Secure Image Storage: Pushing images to Azure Container Registry (ACR).

#### ✅ Scalable Kubernetes Deployment: Deploying on Azure Kubernetes Service (AKS).

#### ✅ GitOps Workflow: Managing Kubernetes deployments with ArgoCD.

## ⚡ Prerequisites

### Before setting up the project, ensure you have:

- An Azure account with AKS & ACR access
- Docker installed
- kubectl & ArgoCD configured
- Azure CLI installed

## 🔧 Setup & Deployment

### Clone the Repository

```
git clone https://github.com/Lanzar-dev/Crypto-Tracker.git
cd crypto-tracker
```

### Build and Run Locally

```
docker build -t crypto-tracker:latest .
docker run -p 3000:80 crypto-tracker:latest
```

#### Visit http://localhost:3000 in your browser.

### Push Docker Image to Azure Container Registry (ACR)

```
az acr login --name <your-acr-name>
docker tag crypto-tracker <your-acr-name>.azurecr.io/crypto-tracker:v1
docker push <your-acr-name>.azurecr.io/crypto-tracker:v1
```

### Deploy to Azure Kubernetes Service (AKS)

#### Create Kubernetes Deployment

```
kubectl apply -f k8s-manifests/
```

#### Verify Deployment

```
kubectl get pods
kubectl get services
```

### Set Up CI/CD with Azure DevOps

- Configure an Azure DevOps Pipeline using azure-pipelines.yaml.
- Set up service connections for ACR and AKS.
- Enable continuous deployment to AKS when new code is pushed.

### Deploy with ArgoCD (GitOps)

```
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
```

#### Sync the repository in ArgoCD UI to deploy updates automatically.

## 🌍 Live Demo

#### 🔗 Check out the site: [crypto-coins-tracker](https://crypto-coins-tracker.vercel.app/)

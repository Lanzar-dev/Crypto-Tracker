#!/bin/bash

# Variables
CONTAINER_REGISTRY=$1
IMAGE_REPOSITORY=$2
TAG=$3
K8S_MANIFEST_DIR="k8s-manifests"  # Directory containing Kubernetes manifests

# Construct new image tag
NEW_IMAGE_TAG="$CONTAINER_REGISTRY/$IMAGE_REPOSITORY:$TAG"

echo "Updating Kubernetes manifests with new image tag: $NEW_IMAGE_TAG"

# Ensure we are on the correct branch
git checkout master

# Pull the latest changes to avoid conflicts
git pull origin master --rebase

# Update image in Kubernetes manifests
sed -i "s|image: <Container registry>/<repository name>:.*|image: $NEW_IMAGE_TAG|g" $K8S_MANIFEST_DIR/*.yaml

echo "Committing and pushing changes to Git..."

# Commit and push changes
git add .
git commit -m "Update image tag to $NEW_IMAGE_TAG"
git push origin master

echo "Changes pushed successfully! ArgoCD will now deploy the update."
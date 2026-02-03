# --- Custom Jenkins Image with Node.js ---
# Use official Jenkins LTS image
FROM jenkins/jenkins:lts

USER root

# Install Node.js 20 LTS
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && apt-get clean

# Switch back to Jenkins user
USER jenkins

# --- Application Dockerfile (Commented out) ---
# The lines below appear to be for the application itself, but 
# were conflicting with the Jenkins setup above in a multi-stage build.
# To build the app, uncomment these and put them in a separate Dockerfile.app
# 
# FROM node:18
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# EXPOSE 3000
# CMD ["npm", "start"]

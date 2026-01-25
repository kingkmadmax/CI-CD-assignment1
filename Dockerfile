# Use official Jenkins LTS image
FROM jenkins/jenkins:lts

USER root

# Install Node.js 20 LTS
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && apt-get clean

# Switch back to Jenkins user
USER jenkins
# Use the official Node.js image.
FROM node:18

# Set the working directory.
WORKDIR /var/www/talent-trove-server

# Install wait-for-it
ADD https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh /usr/local/bin/wait-for-it
RUN chmod +x /usr/local/bin/wait-for-it

# Install bun
# RUN curl https://bun.sh/install | bash
#ENV PATH="/root/.bun/bin:$PATH"

# Copy package.json and package-lock.json to the working directory.
COPY package.json bun.lockb ./

# Copy all project files to the working directory, excluding those in .dockerignore.
COPY . .

# Copy the Docker-specific environment file.
COPY .env.docker .env

# Install app dependencies using Bun and clean cache.
#RUN rm -rf node_modules && npm install --force  
RUN npm install 

# Expose the application port.
EXPOSE 2000

# Set the entrypoint command to wait for the database and then start the application
CMD ["wait-for-it", "db:5432", "--", "npm", "run", "start:dev", "--preserveWatchOutput"]
# syntax=docker/dockerfile:1

# Base image with the specified version of Deno
FROM denoland/deno:2.0.6

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy application files to the working directory
COPY . .

# Set the environment to production (if needed for your app logic)
ENV DENO_ENV=production
ENV PORT=5000
ENV LOG_LEVEL=info
# Cache dependencies to optimize builds
RUN deno cache src/main.ts

# Expose the port your Deno application listens on
EXPOSE 5000

# Command to run the Deno application
CMD ["run", "--allow-net", "--allow-env", "--allow-sys" "--port=${PORT}", "--readonly","src/main.ts"]

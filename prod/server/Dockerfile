# Build Stage
FROM node:18.17.0 AS build

ARG BUILD_DIR=/home/build
ARG SRC_PATH=./docker/server

COPY ${SRC_PATH} ${BUILD_DIR}/server
# COPY ${SRC_PATH}/package.json ${BUILD_DIR}/server
# COPY ${SRC_PATH}/bun.lockb ${BUILD_DIR}/server
# COPY ${SRC_PATH}/tsconfig.json ${BUILD_DIR}/server
# COPY ${SRC_PATH}/index.ts ${BUILD_DIR}/server

WORKDIR ${BUILD_DIR}/server

RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="/root/.bun/bin:$PATH"
RUN /root/.bun/bin/bun add express @types/express typescript

RUN /root/.bun/bin/bun install
RUN /root/.bun/bin/bun run build

# --- Final Stage ---
FROM node:18.17.0

RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="/root/.bun/bin:$PATH"

RUN mkdir /app
COPY --from=build "/home/build/server/dist" /app

WORKDIR /app
EXPOSE 3000
ENTRYPOINT [ "bun", "run", "index.js" ]

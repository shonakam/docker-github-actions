FROM ubuntu:22.04

ARG USERNAME
ARG USER_GROUP_NAME
ARG USER_UID
ARG USER_GID

# general packages
ARG PKG="sudo git vim curl zip unzip locales ${TMP_PKG}"

SHELL ["/bin/bash", "-c"]

RUN apt-get update \
    && apt-get install -y ${PKG} \
    && groupadd --gid ${USER_GID} ${USER_GROUP_NAME} \
    && useradd --uid ${USER_UID} --shell /bin/bash --gid ${USER_GID} -m ${USERNAME} \
    && echo %${USER_GROUP_NAME} ALL=\(ALL\) NOPASSWD:ALL > /etc/sudoers.d/${USER_GROUP_NAME} \
    && chmod 0440 /etc/sudoers.d/${USER_GROUP_NAME}

# enable git
RUN su ${USERNAME} --command \
    'sudo git config --system --add safe.directory "/home/${USERNAME}/workspace"'

# ---------------------------------- sdkman ----------------------------------
# ARG JAVA_VERSION="17.0.4-amzn"
# ARG GRADLE_VERSION="7.5"

# USER ${USERNAME}
# RUN curl -s "https://get.sdkman.io" | bash \
#     && bash -c "source ${HOME}/.sdkman/bin/sdkman-init.sh \
#     && sdk install java ${JAVA_VERSION} \
#     && sdk install gradle ${GRADLE_VERSION}"

# Install Node.js and TypeScript
ARG NODE_VERSION="18.17.0"
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g typescript

# Install Bun
RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="/root/.bun/bin:$PATH"

# Set work directory
WORKDIR /home/${USERNAME}/workspace/server

# Initialize project and add dependencies
# RUN bun init -y && bun add express @types/express typescript

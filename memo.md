

### Docekrfileのビルド確認
  docker build -t node-server -f prod/server/Dockerfile .
  docker images
  docker run -d -p 3000:3000 --name node-server-container node-server
  curl http://localhost:3000
  docker stop node-server-container && docker rm node-server-container
  docker rmi node-server

docker stop node-server-container
docker rm node-server-container
docker run -d -p 3000:3000 --name node-server-container node-server
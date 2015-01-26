PROJECT_NAME=mytodo

CONTAINER_NAME=nginx_test
IMAGE_NAME=nginx_test_image

CONTAINER_ID=$( sudo docker ps -a | grep "$IMAGE_NAME":latest | awk '{print $1}' )
if [[ ! -z $CONTAINER_ID ]]; then
  echo "Removing container"
  sudo docker kill $CONTAINER_ID > /dev/null
  sleep 1
  sudo docker rm $CONTAINER_ID > /dev/null
  sleep 1
fi

sudo docker run --name $CONTAINER_NAME -p 80:80 --volume /vagrant/${PROJECT_NAME}/dist:/usr/share/nginx/html/ -d $IMAGE_NAME
#sudo docker run --name $CONTAINER_NAME -p 80:80 --volume /vagrant/containers/nginx-test/content/app:/usr/share/nginx/html/ -d $IMAGE_NAME

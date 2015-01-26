PROJECT_NAME=mytodo
TEST_CONFIG_FILE=test/e2e/protractor.conf.js

CONTAINER_NAME=protractor
#IMAGE_NAME=cfalguiere/protractor-firefox-headless
IMAGE_NAME=cfalguiere/protractor-test


CONTAINER_ID=$( sudo docker ps -a | grep "protractor" | awk '{print $1}' )
if [[ ! -z $CONTAINER_ID ]]; then
  echo "Removing container"
  sudo docker kill $CONTAINER_ID > /dev/null
  sleep 1
  sudo docker rm $CONTAINER_ID > /dev/null
  sleep 1
fi

echo "Starting protractor container"
#sudo docker run --name $CONTAINER_NAME --volume /vagrant/${PROJECT_NAME}:/opt/protractor/project --env TEST_FILE=$TEST_CONFIG_FILE --link nginx_test:web $IMAGE_NAME
sudo docker run --name $CONTAINER_NAME --volume /vagrant/${PROJECT_NAME}:/opt/protractor/project --env TEST_FILE=$TEST_CONFIG_FILE $IMAGE_NAME

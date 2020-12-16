#!/bin/zsh
sudo mongod --port 27017 --dbpath /mnt/BACKUP/data/db --auth --sslMode requireSSL --sslAllowInvalidHostnames --sslPEMKeyFile "/media/veracrypt58/workspace/spheenx.io/certs/localhost/linux-mongodb-cert-localhost.crt"

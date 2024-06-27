#  clog> test
# short> start the register locally
#   _                _
#  | |_   ___   ___ | |_
#  |  _| / -_) (_-< |  _|
#   \__| \___| /__/  \__|

source <(clog Inc)

# get the platform & image name
acc=mrmxf
repo=mrx-reg-svr
cpu="amd"
[ -n "$(uname -m | grep arm)" ] && cpu="arm"
IMG="$acc/$repo-$cpu:latest"

# pull the image if needed
docker pull $IMG

# run the server on port 12013
PORT=12013
docker run --detach --rm --publish $PORT:8070 $IMG

# run a quick test
curl localhost:$PORT/test

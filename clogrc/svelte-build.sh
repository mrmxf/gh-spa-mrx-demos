# usage> build
# short> build the svelte spa
# long>  build the svelte apps
#   _             _   _      _                          _   _
#  | |__   _  _  (_) | |  __| |  ___   ___ __ __  ___  | | | |_   ___
#  | '_ \ | || | | | | | / _` | |___| (_-< \ V / / -_) | | |  _| / -_)
#  |_.__/  \_,_| |_| |_| \__,_|       /__/  \_/  \___| |_|  \__| \___|

source <(clog Inc)
[ -f clogrc/_inc.sh   ] && source clogrc/_inc.sh # define params for project
[ -f clogrc/check.sh  ] && source clogrc/check.sh  "ignore-errors"

buildErrs=0

startFolder=$(pwd)
buildFolder="build"
CMD="rm -fr $buildFolder/*"
fInfo "purging old builds:  $ $cC$CMD$cX"
$CMD
[ $? -gt 0 ] && ((buildErrs++)) && fError "$PROJECT purging faild - continuing anyway"

[ -z "$vCODE" ] && vCODE=latest && fWarning "No version number: using tag$cE $vCODE$cX"

IMAGE="$dockerAcc/$dockerBase"
GREP_SEARCH="mrx"
OPTS="-q --force-rm"
DoPUSH="$1"

fInfo "checking the demo app:$cC yarn run check$cX"
yarn run check
[ $? -gt 0 ] && ((buildErrs++)) && fError "check failed, continuing anyway$cX"

fInfo "bulding the demo app: $cC yarn run build$cX"
yarn run build
[ $? -gt 0 ] && ((buildErrs++)) && fAbort "build failed, aborting$cX"

#fInfo "execute $cC docker buildx build --output=$cW$OUTPUT $cF$IMAGE:$cE$vCODE$cX\n"
fInfo "execute $cC docker build $cF$IMAGE:$cE$vCODE$cX\n"
AMDtarget="$IMAGE-amd:$vCODE"; msgAMD="$cW$IMAGE$cT-${cI}amd$cT:$cE$vCODE$cX"
ARMtarget="$IMAGE-arm:$vCODE"; msgARM="$cW$IMAGE$cT-${cS}arm$cT:$cE$vCODE$cX"

fInfo "Build image $msgAMD"
docker build $OPTS -t "$AMDtarget" --platform linux/amd64 .
[ $? -gt 0 ] && ((buildErrs++))

fInfo "Build image $msgARM"
docker build $OPTS -t "$ARMtarget" --platform linux/arm64 .
[ $? -gt 0 ] && ((buildErrs++))

fInfo "Inspecting Intel:"
docker buildx imagetools inspect "$AMDtarget"  | grep -E "Digest|Platform" | head -2
fInfo "Inspecting Arm:"
docker buildx imagetools inspect "$ARMtarget"  | grep -E "Digest|Platform" | head -2

BuildImageFound="$(docker images | grep "$GREP_SEARCH")"
[[ $buildErrs > 0 ]] || [ -z BuildImageFound ]  && \
   fError "Build failed or $cE $GREP_SEARCH$cT docker images not found locally\n" \
   fError"Aborting....\n" \
   exit 1

if [ -n "$DoPush" ] ; then
  fInfo "push:    docker push $msgARM"
  docker push "$ARMtarget"
  fInfo "push:    docker push $msgAMD"
  docker push "$AMDtarget"
fi

fInfo "1. start:   docker run --detach --rm --publish 11999:80 --name$cW $bEXE $msgAMD$cX"
fInfo "     or:    docker run --detach --rm --publish 11999:80 --name$cW $bEXE $msgARM$cX"
fInfo "2. stop:    docker stop$cW $bEXE$cX"
[ -z "$DoPUSH" ] && fInfo "3. push:    docker push $msgAMD"
[ -z "$DoPUSH" ] && fInfo "4. push:    docker push $msgARM"

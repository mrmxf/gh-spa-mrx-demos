#                                                  _                                                     _   _
#  __ __ __ __ __ __ __ __ __  ___   _ __    ___  | |_   __ _   _ _   ___  __ __  ___   _ __    ___   __| | (_)  __ _
#  \ V  V / \ V  V / \ V  V / |___| | '  \  / -_) |  _| / _` | | '_| / -_) \ \ / |___| | '  \  / -_) / _` | | | / _` |
#   \_/\_/   \_/\_/   \_/\_/        |_|_|_| \___|  \__| \__,_| |_|   \___| /_\_\       |_|_|_| \___| \__,_| |_| \__,_|
source <(clog Inc)
PROJECT=$(basename $(pwd))  # use the working folder as default
bEXE="$PROJECT"             # use the project name as default build exe
callingSCRIPT="${0##*/}"
vCodeType="svelte"
vCodeSrc="src/lib/data/history.yaml"  # file containing this version number
vCODE=$(cat $vCodeSrc | grep version | head -1 | grep -oE '[0-9]+\.[0-9]+\.[0-9]+')
bMSG=$(cat  $vCodeSrc | grep note    | head -1 | sed -nr "s/note: (.*)/\1/p" | xargs)
dockerAcc=metarexmedia
dockerBase=mrx-app-demos
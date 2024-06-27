# usage> svelte
# short> build www-metarex-media apps
# long>  build the svelte apps

startFolder=$(pwd)

folder=svelte/demos
deploy=static/app/demos

cd $folder
yarn run build
[ $? -gt 0 ] && cd $startFolder && exit 1

cd $startFolder
rm -r    $deploy/
mkdir -p $deploy/
cp    -r $folder/build/*  $deploy/

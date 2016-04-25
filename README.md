
UNA VEZ POR MÁQUINA

sudo npm install -g typescript typings
sudo npm install -g bower
sudo npm install -g webpack webpack-dev-server

-------------------------------

DESDE CERO

cd portal_test_00
atom .
touch README.md
git init
git add README.md

npm init
git add package.json
?? npm install jquery --save
npm install typescript typings --save
npm install webpack ts-loader --save

bower init
git add bower.json
bower install jquery --save

tsc --init
git add tsconfig.json
typings install --ambient jquery --save
git add typings.json


--------------------------------

DESDE REPOSITORIO BAJADO

git co XXXXXXXXXXXXXXXXX
cd portal_test_01
npm install
bower install

--------------------------------

webpack-dev-server --progress --colors

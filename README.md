Learn Gulp by building an awesome development environment

yarn golbal add gulp-cli
yarn add --dev gulp


03 scaffolding(구조 짜기)

04 babel을 이용한 import처리
craete .babelrc
[22:17:27] Failed to load external module @babel/register
[22:17:27] Error: Cannot find module '@babel/register' from 'C:\workspace\supergulp'
[22:17:27] Failed to load external module babel-register
[22:17:27] Error: Cannot find module 'babel-register' from 'C:\workspace\supergulp'
[22:17:27] Failed to load external module babel-core/register
[22:17:27] Error: Cannot find module 'babel-core/register' from 'C:\workspace\supergulp'
[22:17:27] Failed to load external module babel/register
[22:17:27] Error: Cannot find module 'babel/register' from 'C:\workspace\supergulp'
--> yarn add --dev @babel/register @babel/core
Error: Cannot find module '@babel/preset-env' from 'C:\workspace\supergulp'
--> yarn add --dev @babel/preset-env

yarn dev
--> gulp dev
--> [22:22:52] Task never defined: dev

1.0 gulp가 실행하기 위한 task만들기.

yarn add --dev gulp-pug

gulpfile.babel.js
create task pug

1.1 yarn add del
create gulp task clean();

task의 분리
prepare: 삭제
assets: 트랜스 파일.


2.0 gulp-webserver
yarn add --dev gulp-webserver


2.1 gulp.watch()
watch: (파일, 함수)를 전달하면, 해당 파일이 변경되면 지정된 동작을 자동으로 실행.

3.0 gulp-image
image파일을 조정해줌.
yarn add --dev gulp-image

4.0 gulp-sass
gulp-sass를 활용하기 위하여 추가적은 package가 더 펄요함.
node-sass
yarn add --dev node-sass gulp-sass
_**.scss: 컴파일하지 말고, 사용만 하는 경우 파일명으로 '_'를 추가.


4.1 gulp-autoprefixer
yarn add --dev gulp-autoprefixer
create file '.browserslistrc'
write options
ex)
last 2 versions
> 5%


css minify.
yarn add --dev gulp-csso


5.0 Javascript browserify
--> 브라우저에서 Node.js스타일의 모듈을 사용하기 위한 오픈소스
--> yarn add --dev gulp-bro

yarn add --dev babelify

yarn add --dev uglifyify
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
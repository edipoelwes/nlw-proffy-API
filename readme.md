<!-- 
    Thank you for reading this
    If you´re having any problem with this project please contact in the issues session
-->

<!-- VARS -->

[license-badge]: https://img.shields.io/github/license/pmqueiroz/proffy?color=%238257E5
[star-badge]: https://img.shields.io/github/stars/pmqueiroz/proffy?color=8257E5&logo=github
[last-commit-badge]: https://img.shields.io/github/last-commit/pmqueiroz/proffy?color=%238257E5
[netfly-badge]: https://img.shields.io/netlify/b4d3ee80-98f0-42d0-b3d0-13879c811a00?color=%238257E5
[codacy-badge]: https://app.codacy.com/project/badge/Grade/b2d32fa731984f3e9c3eaa814861c9db
[nlw-badge]: https://img.shields.io/badge/NLW-building-important?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAALVBMVEVHcExxWsF0XMJzXMJxWcFsUsD///9jRrzY0u6Xh9Gsn9n39fyMecy0qd2bjNJWBT0WAAAABHRSTlMA2Do606wF2QAAAGlJREFUGJVdj1cWwCAIBLEsRU3uf9xobDH8+GZwUYi8i6ucJwrxKE+7D0G9Q4vlYqtmCSjndr4CgCgzlyFgfKfKCVO0LrPKjmiqMxGXkJwNnXskqWG+1oSM+BSwD8f29YLNjvx/OQrn+g99oQSoNmt3PgAAAABJRU5ErkJggg==
[proffy-apk-badge]: https://img.shields.io/badge/Apk-download-important?logo=android&color=%238257E5
[proffy-apk-url]: https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40pmqueiroz/mobile-16c4dd082b2e4fc892b33b58a3a9e529-signed.apk
[netfly-url]: https://pmqueiroz-proffy.netlify.app
[license-url]: https://github.com/pmqueiroz/proffy/blob/master/LICENSE
[issues-url]: https://github.com/pmqueiroz/proffy/issues/
[node-url]: https://nodejs.org/en
[yarn-url]: https://classic.yarnpkg.com/
[npm-url]:  https://www.npmjs.com/
[expo-url]: https://expo.io/

<!-- VARS -->

<div align="center">  

<img width="500px" align="center" src="https://user-images.githubusercontent.com/54639269/89223832-dd796380-d5ad-11ea-9a39-fc852538ca13.png"></img>

</div>

<br>
<p align="center">
    Online teaching platform made with React Native using Typescript during the<a src="https://nextlevelweek.com"> NLW (Next Level Week) #02</a>🚀
</p>



<div align="center">  
    
[![License][license-badge]][license-url]
![Git Stars][star-badge]
[![Netfly Stats][netfly-badge]][netfly-url]
[![Netfly Stats][proffy-apk-badge]][proffy-apk-url]
![NLW Stats][nlw-badge]
![Codacy Quality][codacy-badge]


</div>


### Content
* [Getting Started](#Getting-Started-)
    * [Cloning](#Cloning)
    * [Requirements](#Requirements)
        * [Server](#Server)
    * [Running](#Running)
* [License](#License-)

### Getting Started 🚀

#### Cloning

```ps
# Clone the repository using git
$ git clone https://github.com/edipoferro/nlw-proffy-API.git

# Access the project folder
$ cd proffy
```

#### Requirements
* [Node.js][node-url]
* [Yarn][yarn-url] or [npm][npm-url]
* [Expo][expo-url]


##### Server 

This project use third party dependencies that need to be installed, use that command to install all needed dependencies

```ps
$ cd server
$ yarn install
```

>The above command will install all third party dependencies used. If you want to install manually all the dependencies follow the steps bellow

```ps
# Entering in server directory
$ cd server

# Installing depencies
$ yarn add @types/cors -D
$ yarn add @types/express -D
$ yarn add ts-node-dev -D
$ yarn add knex
$ yarn add sqlite3
```


#### Running


To start the Back Server run the command

```ps
# Entering in Server directory
$ cd server

# Run the Back Server
$ yarn start
```


### License 📝
This project is under the MIT license. See the [LICENSE][license-url] for more information.
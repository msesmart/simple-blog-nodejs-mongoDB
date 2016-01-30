## Introduction
This Simple Blog website is developed using Node.js, MongoDB. It is developed based on the work of [tianmaying](https://github.com/tianmaying/node-blog-demo)

** Dependencies: Node.js, redis, mongoDB

** Steps:

```bash
	git clone git://github.com/msesmart/simple-blog-nodejs-mongoDB.git

    cd simple-blog-nodejs-mongoDB

	npm install
```

## Configuration:
create configuration file 'config.js'，Here we provide a sample 'config.js.example'. You can modify it according to your needs.

```bash
	cp config.js.example config.js
	vim config.js
```

## Start service
```bash
	grunt server
```

## Run
```bash
	grunt dist
	npm start
```

Then visit http://localhost:3000 


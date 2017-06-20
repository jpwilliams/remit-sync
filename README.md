# @crugo/connection-remit

Connect to and maintain a _Remit_ connection.
Especially useful with [microboot](https://www.npmjs.com/package/microboot).

``` js
const remit = require('@crugo/connection-remit')

remit.emit('booted')
```

## Contents

* [Introduction](#introduction)
* [Environment variables](#environment-variables)

## Introduction

`@crugo/connection-remit` is a small helper designed to facilitate connecting to _Remit_ in a consistent, manageable fashion.

On top of the usual exports, this library also exports `reqAsync` and `treqAsync`, allowing `v1.x.x` of _Remit_ to support promises without having to further wrap the library.

## Environment variables

#### `REMIT_NAME` *required*
The API key to be used to connect.

#### `REMIT_URL` *defaults to `amqp://localhost`*
The _RabbitMQ_ URL to connect to.

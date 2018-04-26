#!/usr/bin/env node
var axios = require('axios')
var chalk = require('chalk')

var ipinfo = require('../index')

var ip = process.argv[2]

ipinfo(ip, data => {
  console.log('您所在地区：' + chalk.blue(data.data.region) + '，城市：' + chalk.blue(data.data.city) + '，国家：' + chalk.blue(data.data.country))
})



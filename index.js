#! /usr/bin/env node
var axios = require('axios')
var chalk = require('chalk')

module.exports = function ipinfo(ip, cb) {
  if(!ip) {
    console.log(chalk.red("请输入要查询的IP"))
    return
  }
  
  var pattern = /(((\d)|([1-9]\d)|(1\d{2})|(2[0-4]\d)|(25[0-5]))\.){3}((\d)|([1-9]\d)|(1\d{2})|(2[0-4]\d)|(25[0-5]))/g
  if(!pattern.test(ip)) {
    console.log(chalk.red("您输入的是无效IP"))
    return
  }
  axios.get('https://ipinfo.io/' + ip)
    .then(res => {
      cb(res)
    }).catch(error => {
      console.log(chalk.red("您输入的是无效IP"))
    })
}

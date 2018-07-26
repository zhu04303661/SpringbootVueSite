import request from '@/utils/request'

export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: '/login/login',
    method: 'post',
    data
  })
}

export function logout() {
  var full = location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '');
  window.location.replace(full+"/j_spring_cas_security_logout");
  // return request({
  //   url: '/j_spring_cas_security_logout',
  //   method: 'get'
  // })
}

export function getUserInfo(token) {
  return request({
    url: '/spring/user/current',
    method: 'get',
    params: { token }
  })
}


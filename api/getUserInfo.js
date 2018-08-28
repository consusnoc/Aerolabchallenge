import Fetch from 'isomorphic-unfetch'

export function getUserInfo() {
  return fetch('https://aerolab-challenge.now.sh/user/me', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Yjc0YjAzNzNmZjhhNjAwNTg4NDU2ZjMiLCJpYXQiOjE1MzQzNzM5NDN9.pGc67UQz_DqZpVrELmHHOePWyd8dhnQDUTdp5vdP2Hk'
    }
  })
}
import fetch from 'isomorphic-fetch';

type IHeaders = {
  'Content-Type': string,
  'Accept-Language': string,
}

type IConfig = {
  method: string,
  headers: IHeaders,
  body?: object,
  singal?: any
}

export const doFetch = (url: string, method = "GET" , body?: object | null, abortControl?: any) => {
  const config = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Accept-Language': 'ZN'
    }
  } as IConfig

  if(method!=='GET' && body !== null){
    config.body = body
  }

  if(abortControl) {
    config.singal = abortControl
  }

  return fetch(url, config)
    .then(res => {
      if(res.status>=400){
        throw new Error("Bad Request")
      }
      console.log(res.json)
      return res.json()
    })
    .catch(() => {
      throw new Error("Bad Request")
    })
}
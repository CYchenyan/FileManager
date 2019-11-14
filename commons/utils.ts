export const formatUrl = (_baseUrl:string, params:object):string =>{
  Object.keys(params).forEach((item: string) => {
    _baseUrl = _baseUrl.replace(`{:${item}}`, params[item] || "")
  })
  return _baseUrl;
}
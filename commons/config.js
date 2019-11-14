export const baseUrl = 'http://localhost:8080';

export const API = {
  files: `${baseUrl}/file/list?username={:username}&prefix={:prefix}&maxKeys={:maxKeys}`
};

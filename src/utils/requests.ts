import axios, { AxiosResponse } from 'axios';

export const request = async (
  urlProp: string,
  method: string,
): Promise<AxiosResponse<any>> => {
  const urlX = `${process.env.API_URL}/${urlProp}`;
  console.log('test', process.env.API_URL);

  // const urlX = `${urlProp}`;
  return await axios(urlX).then((res) => res);
};

export const base64 = (data: string): string =>
  new Buffer.from(data).toString('base64');

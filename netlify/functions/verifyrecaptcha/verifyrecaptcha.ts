import axios from 'axios';
import { HandlerEvent } from '@netlify/functions';

const RECAPTCHA_URL: string = 'https://www.google.com/recaptcha/api/siteverify';

const encode = (data: FormData | any): string =>
  // eslint-disable-next-line implicit-arrow-linebreak
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

exports.handler = async (event: HandlerEvent) => {
  const { token }: any = event.queryStringParameters;
  const { REACT_APP_SITE_RECAPTCHA_SECRET } = process.env;

  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      msg: 'Forbidden Method',
    };
  }

  try {
    const { data } = await axios.post(
      RECAPTCHA_URL,
      encode({
        secret: REACT_APP_SITE_RECAPTCHA_SECRET,
        response: token,
      }),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } },
    );
    return {
      statusCode: 200,
      body: JSON.stringify({ ...data }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err }),
    };
  }
};

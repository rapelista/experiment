import { ParamsType } from '~/types/core/uri';

export function generateApiUrl(path: string, params?: ParamsType) {
  const url = new URL(process.env.NEXT_PUBLIC_API_URL || '');
  const pathUrl = process.env.NEXT_PUBLIC_API_PATH || '';

  url.pathname = pathUrl + `/${path}`;
  url.pathname = url.pathname.replace(/\/+/g, '/');

  if (params) {
    url.search = generateParams(params);
  }

  return url.toString();
}

export function generateParams(params: ParamsType) {
  const query = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (typeof value === 'boolean' || value) {
      if (Array.isArray(value)) {
        value.forEach((v) => {
          query.append(key, String(value));
        });
      } else {
        query.append(key, String(value));
      }
    }
  });

  return query.toString();
}

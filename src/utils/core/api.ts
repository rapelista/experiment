import { QueryFunction } from '@tanstack/react-query';
import { ParamsType } from '~/types/core/uri';
import { request } from './request';
import { generateApiUrl } from './uri';

export const defaultApiFn: QueryFunction<unknown> = async ({
  queryKey,
  signal,
}) => {
  const [context, filters] = queryKey as [string, ParamsType | undefined];
  const url = generateApiUrl(context, filters || {});
  return request(url, { signal });
};

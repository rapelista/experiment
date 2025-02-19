type OptionsType = RequestInit & {
  withAuth?: boolean;
  formData?: FormData;
};

export async function request(
  url: string | URL | globalThis.Request,
  options?: OptionsType,
) {
  const augmentedOptions = {
    withAuth: true,
    ...options,
  };

  const controller = new AbortController();
  const timeout = setTimeout(
    () => {
      controller.abort();
    },
    Number(process.env.NEXT_PUBLIC_DEFAULT_REQUEST_TIMEOUT_DURATION) || 30000,
  );

  const headers = new Headers(augmentedOptions.headers);
  const { formData, ...otherOptions } = augmentedOptions;

  if (!formData) {
    headers.set('Content-Type', 'application/json');
  }

  const response = await fetch(url, {
    ...otherOptions,
    body: formData || otherOptions?.body,
    headers,
    signal: AbortSignal.any(
      [otherOptions?.signal, controller.signal].filter(
        (s): s is AbortSignal => s !== undefined,
      ),
    ),
  });

  clearTimeout(timeout);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  switch (response.status) {
    case 204:
      return;
    case 201:
    case 200:
      return await response.json();
  }
}

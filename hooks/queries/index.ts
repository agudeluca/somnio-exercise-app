import { QueryClient } from '@tanstack/react-query';

let queryClient: QueryClient;

const queryClientInstance = (): QueryClient => {
  if (!queryClient) {
    queryClient = new QueryClient();
  }

  return queryClient;
}
export default queryClientInstance;

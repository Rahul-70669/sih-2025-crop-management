import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getAdvisory } from '../services/advisoryService';
import type { AdvisoryRequest } from '../services/advisoryService';

/**
 * Hook to manage advisory data fetching and caching.
 * Uses React Query's useMutation for the POST request, but we can utilize
 * the query client to manually cache or manage the state if needed.
 * 
 * Note: Since advisory is a transactional POST request (often strictly dependent on input),
 * standard "caching" by key (like GET requests) in React Query is less common unless
 * we treat the input params as a unique key for a query.
 * 
 * However, to support "offline" re-display of the *last* result, we can persist the result
 * or use `useMutation` state.
 */
export const useAdvisory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (request: AdvisoryRequest) => getAdvisory(request),
    onSuccess: (data) => {
      // Optimistically update or invalidate other queries if needed
      // For now, we just return the data to the component
      // We could cache this specific result if we wanted to show "Last generated advisory"
      queryClient.setQueryData(['lastAdvisory'], data);
    },
    retry: 3, // Retry a few times if offline/network error
  });
};

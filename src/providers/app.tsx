import { queryClient } from '@/lib/react-query';
import { ReactNode, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

type Props = {
  children: ReactNode;
};

export default function AppProvider({ children }: Props) {
  return (
    <Suspense fallback={<div>로딩중</div>}>
      <ErrorBoundary FallbackComponent={() => <div>에러 표시</div>}>
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>{children}</BrowserRouter>
          </QueryClientProvider>
        </HelmetProvider>
      </ErrorBoundary>
    </Suspense>
  );
}

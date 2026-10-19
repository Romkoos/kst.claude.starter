import { AuthGuard } from '@/features/auth';

/**
 * Guards every route in the `(protected)` group with one declaration — including routes added
 * later, which is the property that matters. The group name in parentheses does not appear in
 * any URL; it exists only to give these routes a shared, guarded layout.
 *
 * `AuthProvider` is mounted in the root layout, not here: Entra ID sends the user back to the
 * redirect URI (usually `/`, a public page), and `handleRedirectPromise()` must run there to
 * finish sign-in. This layout only decides who may see the page.
 */
export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return <AuthGuard>{children}</AuthGuard>;
}

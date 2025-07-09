interface ProtectedRouteType {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteType) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}

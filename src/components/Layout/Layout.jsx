function Layout({ children }) {
  return (
    <div className="bg-lightGray min-h-screen flex flex-col gap-6">
      {children}
    </div>
  );
}

export default Layout;

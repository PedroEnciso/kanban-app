function Layout({ children, showSidebar }) {
  const classes = showSidebar ? "md:show-sidebar" : "";
  return (
    <div className={`min-h-screen flex flex-col gap-6 md:gap-0 ${classes}`}>
      {children}
    </div>
  );
}

export default Layout;

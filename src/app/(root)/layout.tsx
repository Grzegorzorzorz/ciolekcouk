import React from "react";

import Layout from "@/components/layout";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return <Layout>{children}</Layout>;
}

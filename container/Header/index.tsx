import Head from "next/head";
import React from "react";

const Header: React.FC = () => {
  return (
    <Head>
      <title>Hydro</title>
      <meta name="description" content="Website code linh tinh của Hydro" />
      <link rel="icon" href="/heart.ico" />

      <meta itemProp="name" content="Website code linh tinh của Hydro" />
          <meta itemProp="description" content="Thư viện link project" />
          <meta
            itemProp="image"
            content="http://www.pngkit.com/png/detail/186-1867486_pandablindfold-discord-emoji-admiral-bahroo-emotes.png"
          />
    </Head>
  );
};

export default Header;

export const indexTemplate = (content, token) => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
         <meta charset="utf-8" />
    <link rel="icon" href="/img-src/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Mirror for reddit"
    />
    <link rel="apple-touch-icon" href="/img-src/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="/img-src/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the \`public\` folder during the build.
      Only files inside the \`public\` folder can be referenced from the HTML.
      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running \`npm run build\`.
    -->
           <title>mirror for Reddit</title>
    </head>
   
    <body>
        <div id="react__root">${content}</div>
        <div id="loading__root" ></div>
        <div id="modal__root"></div>
         <script src="/static/client.js" type="application/javascript"></script>
    <script >
        window.__token__ = '${token}'
    </script>
    </body>
    </html>
`;

export const indexTemplate = (content, token) => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Reddit</title>
    </head>
    <script src="/static/client.js" type="application/javascript"></script>
    <script >
        window.__token__ = '${token}'
    </script>
    <body>
        <div id="react__root">${content}</div>
        <div id="loading__root" ></div>
        <div id="modal__root"></div>
    </body>
    </html>
`;

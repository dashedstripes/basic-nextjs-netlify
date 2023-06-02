import { builder, type Handler } from "@netlify/functions";

const myHandler: Handler = async (event, context) => {
  return {
    statusCode: 200,
    ttl: 60,
    headers: {
      "Content-Type": "text/html",
    },
    body: `
    <!DOCTYPE html>
      <html>
        <body>
          Hello World ${Date.now()}
        </body>
    </html>
    `,
  };
};
const handler = builder(myHandler);

export { handler };
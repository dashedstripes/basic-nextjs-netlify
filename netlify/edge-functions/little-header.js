export default async (_, context) => {
  const response = await context.next();
  response.headers.set("second-header", "this was added by a second edge function");
  return response;
}
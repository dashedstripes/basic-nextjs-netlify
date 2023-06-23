export default async (_, context) => {
  const response = await context.next();
  response.headers.set("adam-test", "this was added by edge function");
  return response;
}
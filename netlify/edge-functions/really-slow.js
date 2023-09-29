export default async (_, context) => {
  const response = await context.next();

  await new Promise(r => setTimeout(r, 20000));

  return response;
}
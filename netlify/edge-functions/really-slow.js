export default async (_, context) => {
  const response = await context.next();

  await new Promise(r => setTimeout(r, 40001));

  return response;
}

export const config = {
  onError: "/unavailable"
}
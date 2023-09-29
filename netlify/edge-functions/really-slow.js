export default async (_, context) => {
  const response = await context.next();

  for(let i = 0; i < Number.MAX_SAFE_INTEGER; i++) {
    console.log(i);
  }

  return response;
}

export const config = {
  onError: "/unavailable"
}
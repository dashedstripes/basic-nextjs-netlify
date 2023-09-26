export default async function handler(req: any, res: any) {
  try {
    await res.revalidate('/needs-revalidate');
    return res.json({ revalidated: true });
  } catch (_) {
    return res.status(500).send('Error revalidating');
  }
};
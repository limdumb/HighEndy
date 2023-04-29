export default function logout() {
  return new Promise((resolve, rejects) => {
    try {
      localStorage.clear()
    } catch (err) {
      rejects(err);
    }
  });
}

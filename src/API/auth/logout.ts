export default function logout() {
  return new Promise((resolve, rejects) => {
    try {
      localStorage.clear()
      resolve(localStorage.removeItem("memberId"));
    } catch (err) {
      rejects(err);
    }
  });
}

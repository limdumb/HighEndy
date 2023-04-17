export default function logout() {
  return new Promise((resolve, rejects) => {
    try {
      resolve(localStorage.removeItem("memberId"));
    } catch (err) {
      rejects(err);
    }
  });
}

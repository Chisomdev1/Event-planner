export async function loginUser({ email, password }) {
  // Simulate API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'test@example.com' && password === 'password123') {
        resolve({ token: 'fake-token-123' });
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 1000);
  });
}

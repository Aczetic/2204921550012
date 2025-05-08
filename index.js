fetch("http://20.244.56.144/evaluation-service/users", {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ2Njg2NzMyLCJpYXQiOjE3NDY2ODY0MzIsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjZiNTVhNzM2LWE4NDAtNGNlNi04Y2M3LWJhODkxMWQ0ZGYyMCIsInN1YiI6ImNvbnRhY3RtZWFuYW55YXNpbmdoQGdtYWlsLmNvbSJ9LCJlbWFpbCI6ImNvbnRhY3RtZWFuYW55YXNpbmdoQGdtYWlsLmNvbSIsIm5hbWUiOiJhbmFueWEgc2luZ2giLCJyb2xsTm8iOiIyMjA0OTIxNTUwMDEyIiwiYWNjZXNzQ29kZSI6ImJhcWhXYyIsImNsaWVudElEIjoiNmI1NWE3MzYtYTg0MC00Y2U2LThjYzctYmE4OTExZDRkZjIwIiwiY2xpZW50U2VjcmV0IjoiWGFqZ0JocEVZandFaGJmYiJ9.6KKP_3HfXuVd1l-SSBxmfTn7sNcqGUKVkAip0g_6gR4",
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // Handle response data
  })
  .catch((error) => {
    console.error("Fetch error:", error); // Handle any errors
  });

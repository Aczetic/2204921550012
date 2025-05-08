const data = {
  email: "contactmeananyasingh@gmail.com",
  name: "Ananya Singh",
  rollNo: "2204921550012",
  accessCode: "baqhWc",
  clientID: "6b55a736-a840-4ce6-8cc7-ba8911d4df20",
  clientSecret: "XajgBhpEYjwEhbfb",
};

fetch("http://20.244.56.144/evaluation-service/auth", {
  method: "POST",

  headers: {
    "Content-Type": "application/json",
  },

  body: JSON.stringify(data),
})
  .then((res) => res.json())

  .then((data) => console.log(data))

  .catch((e) => console.log(e));

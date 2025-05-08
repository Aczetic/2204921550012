fetch('http://20.244.56.144/evaluation-service/users', {
    method: 'GET',
    headers: {
      'Authorization': `${tokenType} ${accessToken}`,  // Include token type (Bearer) and token
      'Content-Type': 'application/json',  // Set Content-Type if necessary
    }
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);  // Handle response data
    })
    .catch(error => {
      console.error('Fetch error:', error);  // Handle any errors
    });
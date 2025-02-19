document.getElementById('getUserForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const userId = document.getElementById('userId').value;
    const response = await fetch(`http://localhost:5002/getUser/${userId}`);

    const data = await response.json();
    if (data.message) {
        alert(data.message);
    } else {
        alert(`${data.firstName} ${data.lastName}`);
    }
});

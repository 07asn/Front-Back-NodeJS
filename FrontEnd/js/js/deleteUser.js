document.getElementById('deleteUserForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const userId = document.getElementById('userId').value;
    const response = await fetch(`http://localhost:5002/deleteUser/${userId}`, {
        method: "DELETE"
    });

    const data = await response.json();
    alert(data.message);
});

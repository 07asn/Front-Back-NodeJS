document.getElementById('updateUserForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const userId = document.getElementById('updateUserId').value;
    const firstName = document.getElementById('updateFname').value;
    const lastName = document.getElementById('updateLname').value;

    const response = await fetch(`http://localhost:5002/updateUser/${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName })
    });

    const data = await response.json();
    alert(`Hi , I am BACKEND = ${data.message}`);
});

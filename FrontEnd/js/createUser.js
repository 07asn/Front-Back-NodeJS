// (1) Imports
document.getElementById('createUserForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;

    const response = await fetch("http://localhost:5002/createUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName })
    });

    const data = await response.json();
    alert(data.message);
});
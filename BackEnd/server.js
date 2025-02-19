const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 5002;  

app.use(cors());
app.use(express.json());

// Firebase Realtime Database URL
const FIREBASE_URL = "https://users-70538-default-rtdb.firebaseio.com/users";

/* ------------------ (1) Create User ------------------ */
app.post('/createUser', async (req, res) => {
    try {
        const { firstName, lastName } = req.body;
        const userId = Date.now().toString(); 
        
        await axios.put(`${FIREBASE_URL}/${userId}.json`, {
            firstName,
            lastName
        });

        res.status(200).json({ message: 'Hi I am BACKEND = User created successfully', userId });
    } catch (error) {
        res.status(500).json({ error: 'Error saving user data', details: error.message });
    }
});

/* ------------------ (2) Get User ------------------ */
app.get('/getUser/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const response = await axios.get(`${FIREBASE_URL}/${userId}.json`);

        if (response.data) {
            res.status(200).json(response.data);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error fetching user', details: error.message });
    }
});

/* ------------------ (3) Update User ------------------ */
app.put('/updateUser/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const { firstName, lastName } = req.body;

        await axios.patch(`${FIREBASE_URL}/${userId}.json`, {
            firstName,
            lastName
        });

        res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error updating user', details: error.message });
    }
});

/* ------------------ (4) Delete User ------------------ */
app.delete('/deleteUser/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        await axios.delete(`${FIREBASE_URL}/${userId}.json`);
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting user', details: error.message });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

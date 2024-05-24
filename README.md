# CodeSync

CodeSync is a real-time collaborative code editing tool built using React, Node.js, Express, and Socket.IO. It allows multiple users to collaborate on a single code file in real-time.

## Features

- Real-time code synchronization among multiple users
- User authentication with username
- Copy room ID to easily share with collaborators
- Leave room option to exit the collaboration session

## Installation

To get started with CodeSync, follow these steps:

1. Clone this repository:

```bash
git clone https://github.com/your_username/CodeSync.git
```

2. Navigate to the project directory:

```bash
cd CodeSync
```

3. Install dependencies for both the client and server:

```bash
cd client
npm install

cd ../server
npm install
```

4. Start the server:

```bash
cd server
npm start
```

5. Start the client:

```bash
cd client
npm start
```

6. Open your browser and go to `http://localhost:3000` to access CodeSync.

## Usage

- Upon opening the application, you will be prompted to enter your username.
- You can then join or create a room using the provided room ID.
- Share the room ID with collaborators to allow them to join the same room.
- Collaborate in real-time by editing the code in the editor panel.
- Use the "Copy Room ID" button to copy the room ID to your clipboard.
- Use the "Leave Room" button to exit the collaboration session.

## Contributing

Contributions are welcome! If you have any suggestions, feature requests, or bug reports, please open an issue on the GitHub repository.

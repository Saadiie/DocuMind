// C:\Users\PC\Desktop\document-Creater\pages\api\user.js
import nc from 'next-connect';
import ncOpts from '@/api-lib/nc';
import { connectMongoDB } from '@/api-lib/mongodb';
import User from '@/models/users';

const handler = nc(ncOpts);

handler.post(async (req, res) => {
  const { name, email, token } = req.body; // Destructure incoming data
  
  try {
    await connectMongoDB();
    
    // Check if user already exists by email
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      // If the user exists, you can update their data if needed
      // For example, you can update the token or other fields if necessary
      existingUser.token = token; // Example: Update user token
      await existingUser.save();
      return res.status(200).json({ message: 'User data updated' });
    } else {
      // If the user doesn't exist, create a new user
      await User.create({ name, email, token });
      return res.status(201).json({ message: 'User registered' });
    }
  } catch (error) {
    console.error('Error handling user request:', error);
    res.status(500).json({ error: 'Failed to register or update user' });
  }
});

export default handler;

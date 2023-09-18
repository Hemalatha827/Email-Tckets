const { nanoid } = require('nanoid');

module.exports = {
  lifecycles: {
    async beforeCreate(data) {
      // Handle ticket creation logic here (e.g., set default status, generate ThreadID).
      data.Status = 'wait'; // Default status
      data.ThreadID = generateThreadID(); // Generate ThreadID
    },
  },
  attributes: {
    Email: {
      type: 'email',
      required: true,
    },
    Subject: {
      type: 'string',
      required: true,
    },
    Message: {
      type: 'text',
      required: true,
    },
    Status: {
      type: 'enumeration',
      enum: ['wait', 'read', 'replied', 'resolved', 'spam'],
    },
    ThreadID: {
      type: 'string',
    },
    // Add other necessary fields here.
  },
};

// Function to generate a unique ThreadID
function generateThreadID() {
  // Generate a random string using nanoid
  const randomString = nanoid(10); // Adjust the length as needed
  // Get the current timestamp in milliseconds
  const timestamp = Date.now();
  // Combine the timestamp and random string to create a unique ThreadID
  const threadID = `${timestamp}-${randomString}`;
  return threadID;
}

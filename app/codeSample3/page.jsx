"use client";
import React, { useState } from 'react';

const CodeSample3 = () => {
  const [secretCode, setSecretCode] = useState(null); // State to store the secret code retrieved from the API

  // Function to handle the API call
  const handleAPICall = () => {
    // Define the URL with the passcode appended
    const apiUrl = 'https://webdev2-class-demo.vercel.app/api/sampleReqs/?passcode=ehen2rfow';

    // Make a GET request to the API using the fetch API
    fetch(apiUrl)
      .then(response => {
        // Check if the response is successful (status code 200)
        if (response.ok) {
          // Parse the JSON response
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => {
        // If the request is successful, extract the secret code from the response data
        const { secretCode } = data;
        setSecretCode(secretCode); // Update the state with the secret code
      })
      .catch(error => {
        // Handle errors
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div className="h-screen bg-white p-2 text-black">
      <h1 className="pb-2 text-blue-600">Code sample 3: Making an API Call</h1>
      <div className="p-2 text-sm text-gray-600">
        <p className="pb-2">
          Create a function that calls the following URL
          https://webdev2-class-demo.vercel.app/api/sampleReqs/. The function
          should be called on the click of the button below. This call is a GET
          request and it requires a passcode as part of the URL for it to work.
        </p>
        <p>
          This passcode is: "ehen2rfow". It is to be appended to the URL. The
          response from this call will contain a JSON with a single field called
          "secretCode". This is the answer to your question.
        </p>
      </div>

      <div className="p-4">
        {/* Button to trigger the API call */}
        <button onClick={handleAPICall} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Click to Get Secret Code
        </button>

        {/* Display the retrieved secret code */}
        {secretCode && (
          <div className="mt-4">
            <p>Secret Code: {secretCode}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeSample3;

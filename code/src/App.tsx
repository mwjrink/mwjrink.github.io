import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';

// import React from 'react';
// @ts-ignore
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

const api_key = '2b10189SmpQJ3XHmESgf2Hz9k'

const text = "'score': 0.7177, 'scientificName': 'Turbinicarpus valdezianus '"

function App() {
  const inputFlower = useRef<HTMLInputElement | null>(null);
  const inputLeaves = useRef<HTMLInputElement | null>(null);
  const [selectedFlower, setSelectedFlower] = useState<string | null>(null);
  const [showCamera, setShowCamera] = useState<boolean>(false);
  const [showImage, setShowImage] = useState<boolean>(false);
  const [showAPI, setShowAPI] = useState<boolean>(false);
  const [selectedLeaves, setSelectedLeaves] = useState<string | null>(null);
  const [response, setResponse] = useState<string>();

  const onUploadFlower = () => {
    if (inputFlower.current) {
      inputFlower.current.click();
      setShowImage(true);
    }
  };

  const onTakePicture = () => {
    setShowCamera(true);
    setShowImage(false);
  };

  const handleTakePhoto = (dataUri: any) => {
    // Do stuff with the photo...
    // console.log('takePhoto with uri: ', dataUri);

    setShowCamera(false);
    setShowImage(true);
    setSelectedFlower(dataUri);
  }

  const onUploadLeaves = () => {
    if (inputLeaves.current) {
      inputLeaves.current.click();
    }
  };

  const onIdentify = async () => {
    setShowAPI(true);

    console.log("1234");
    // POST request using fetch with async / await
    const body = `{ "organs": "flower", "images": "${selectedFlower}", "organs": "leaf", "images": "${selectedLeaves}" }`
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body
    };
    //https://my-api.plantnet.org/v2/identify/all?api-key=
    const response = await fetch('https://crossorigin.me/https://my-api.plantnet.org/v2/identify/all?api-key=2b10189SmpQJ3XHmESgf2Hz9k', requestOptions);
    const data = await response.json();
    setResponse(data);

    console.log(response)
  };

  const handleFlowerChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event && event.target) {
      let input = event.target;
      var fReader = new FileReader();
      if (input.files) {
        fReader.readAsDataURL(input.files[0]);
        fReader.onloadend = (event) => {
          if (event && event.target) {
            setSelectedFlower(event.target.result as string);
          }
        }
      }
    }
  }

  const handleLeavesChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event && event.target) {
      let input = event.target;
      var fReader = new FileReader();
      if (input.files) {
        fReader.readAsDataURL(input.files[0]);
        fReader.onloadend = (event) => {
          if (event && event.target) {
            setSelectedLeaves(event.target.result as string);
          }
        }
      }
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div>
            {showCamera &&
              <Camera onTakePhoto={handleTakePhoto} />
            }

            {showImage &&
              <img src={selectedFlower ?? ""} className="App-logo" alt="" />
            }
            <br />
            <div>
              <input type='file' id='file' ref={inputFlower} onChange={handleFlowerChange} style={{ display: 'none' }} accept="image/*" />
              <button onClick={onUploadFlower}>Upload Picture</button>
              <button onClick={onTakePicture}>Take Picture</button>
            </div>
          </div>
          {/* <div>
            <img src={selectedLeaves ?? ""} className="App-logo" alt="logo" />
            <br />
            <div>
              <input type='file' id='file' ref={inputLeaves} onChange={handleLeavesChange} style={{ display: 'none' }} accept="image/*" />
              <button onClick={onUploadLeaves}>Upload Leaves Image</button>
            </div>
          </div> */}
        </div>
        <button onClick={onIdentify}>Identify</button>
        {showAPI && <div>
          {response //text
          }
        </div>}
      </header>
    </div>
  );
}

export default App;

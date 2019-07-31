// Generic wrapper class that handles
// knowing how the ACRCloud library is supposed
// to work. If we have to use a different service
// in the future, only this file will have to
// change
//
// API Version:
// https://www.acrcloud.com/docs/acrcloud/audio-fingerprinting-api/audio-identification-api/protocol-1/
//
//

const startRecognitionAsync = async () => {
  console.log('Starting Recognition...');

  // Mock response
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 2000);
  });

  return promise;
}

const stopRecognition = () => {

}

const cancelRecognition = () => {
  console.log('Recognition terminated...');
}

export default {
  startRecognitionAsync,
  stopRecognition,
  cancelRecognition
}

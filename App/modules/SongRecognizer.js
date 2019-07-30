// Generic wrapper class that handles
// knowing how the ACRCloud library is supposed
// to work. If we have to use a different service
// in the future, only this file will have to
// change

class SongRecognizer {
  constructor() {
    // Set up whatever service
  }

  async startRecognition() {
    console.log('Starting Recognition...');
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 2000);
    });

    let results = await promise;

    // Analyze results...
    console.log(results);
  }

  stopRecognition() {

  }

  cancelRecognition() {
    console.log('Recognition terminated...');
  }
}

export default SongRecognizer;

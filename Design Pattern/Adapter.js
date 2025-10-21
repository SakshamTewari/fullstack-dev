/*
    Adapter
    - structural
    - allows objects with incompatible interfaces to work together
    - converts interface of a class into another interface that client expects
    - useful when we want to use a class but its interface does not match the one we need

    Components
    - Target : defines domain specific interface that client uses
    - Adapter: implements target interface and translates the requests to Adaptee's interface
    - Adaptee: defines an existing interface that needs adapting
    - Client: collaborates with objects that conform to target interface
*/

/* Implementation 1

    payment gateway that expects payment in a certain format, but
    we need to use an existing payment system interface
*/

// Target interface
class PaymentGateway {
  makePayment(amount) {
    throw new Error('This method should be overridden');
  }
}

// Adaptee class
class OldPaymentSystem {
  processPayment(amount) {
    console.log(`Processing payment of ${amount} through old system`);
  }
}

// Adapter class
class PaymentAdapter extends PaymentGateway {
  constructor(oldPaymentSystem) {
    super();
    this.oldPaymentSystem = oldPaymentSystem;
  }
  makePayment(amount) {
    this.oldPaymentSystem.processPayment(amount);
  }
}

// Test
const oldPaymentSystem = new OldPaymentSystem();
const paymentAdapter = new PaymentAdapter(oldPaymentSystem);
paymentAdapter.makePayment(100);

/* Implementation 2

    simulating media player that can play audio and video files in different format
    we need to adapt an existing library that plays only mp3 files to support formats like mp4 and AVI

*/

// Target interface
class MediaPlayer {
  play(fileName, fileType) {
    throw new Error('This method should be overridden!');
  }
}

// Adaptee class
class MP3Player {
  playMp3(filename) {
    console.log(`Playing mp3 file: ${filename}`);
  }
}

// Additional adaptee class to play mp4
class MP4Player {
  playMp4(filename) {
    console.log(`Playing mp4 file: ${filename}`);
  }
}

// Adapter class
class MediaAdapter extends MediaPlayer {
  constructor(fileType) {
    super();
    this.fileType = fileType;
    this.mediaPlayer = fileType === 'mp3' ? new MP3Player() : new MP4Player();
  }
  play(filename, filetype) {
    filetype === 'mp3'
      ? this.mediaPlayer.playMp3(filename)
      : this.mediaPlayer.playMp4(filename);
  }
}

// Test
const audioPlayer = new MediaAdapter('mp3');
audioPlayer.play('song.mp3', 'mp3');
const videoPlayerMP4 = new MediaAdapter('mp4');
videoPlayerMP4.play('video.mp4', 'mp4');

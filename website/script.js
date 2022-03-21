const sounds = [

{
  key: 'Q',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },

{
  key: 'W',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },

{
  key: 'E',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },

{
  key: 'A',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },

{
  key: 'S',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },

{
  key: 'D',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },

{
  key: 'Z',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },

{
  key: 'X',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },

{
  key: 'C',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' }];






class DrumPad extends React.Component {

  constructor(props) {
    super(props);
    this.audio = React.createRef();
    this.playAudio = this.playAudio.bind(this);

  }

  componentDidMount() {
    this.audio.current.addEventListener('ended', e => {
      const parent = e.target.parentNode;
      parent.classList.remove('active');
    });
  }


  playAudio() {
    this.audio.current.play();

    this.audio.current.parentNode.classList.add('active');

    document.getElementById("display").innerHTML = this.props.text + " is playing";
  }

  render() {

    const { text, audio } = this.props;

    return /*#__PURE__*/(


      React.createElement("button", { onClick: this.playAudio, className: "drum-pad", id: `drum-${text}` },
      text, /*#__PURE__*/
      React.createElement("audio", { ref: this.audio, src: audio, id: text, className: "clip" })));



  }}


class DrumMachine extends React.Component {



  render() {


    return /*#__PURE__*/(

      React.createElement("div", null, /*#__PURE__*/

      React.createElement("div", { id: "display" }, "Key Appear here!!"), /*#__PURE__*/

      React.createElement("div", { id: "grid-container" },
      this.props.sounds.map((sound, idx) => /*#__PURE__*/React.createElement(DrumPad, { text: sound.key, audio: sound.url, key: idx })))));






  }}



document.addEventListener("keydown", event => {
  const text = event.key.toUpperCase();
  const audio = document.getElementById(text);

  if (audio) {
    audio.play();
    audio.parentNode.classList.add('active');
    document.getElementById("display").innerHTML = text + " is playing";
  }
});

ReactDOM.render( /*#__PURE__*/React.createElement(DrumMachine, { sounds: sounds }), document.getElementById('drum-machine'));
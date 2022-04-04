SpeechSynthesisUtterance
------------------------

{: .-one-column}

------------------------------------------------------------------------

    function speak(message) {
        var msg = new SpeechSynthesisUtterance(message);
        var voices = window.speechSynthesis.getVoices();
        msg.voice = voices[0];
        window.speechSynthesis.speak(msg);
    }

    speak('Hello, world');

See: [SpeechSynthesisUtterance](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance) *(developer.mozilla.org)*

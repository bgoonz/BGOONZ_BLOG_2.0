---
title: Fast Fourier Transform
weight: 0
excerpt: Visualizing the Discrete Fourier Transform
seo:
    title: 'Fast Fourier Transform'
    description: 'Visualizing the Discrete Fourier Transform'
    robots: []
    extra: []
    type: stackbit_page_meta
template: docs
---

## Visualizing the Discrete Fourier Transform

A couple of years ago I suggested a way of thinking about [how the Discrete Fourier Transform works](https://blog.revolutionanalytics.com/2014/01/the-fourier-transform-explained-in-one-sentence.html), based on Stuart Riffle's elegant colour-coding of the equation:

[![The fourier transform, explained in one color-coded sentence](https://revolution-computing.typepad.com/.a/6a010534b1db25970b019b0172129c970c-800wi 'The fourier transform, explained in one color-coded sentence')](http://revolution-computing.typepad.com/.a/6a010534b1db25970b019b0172129c970c-pi)

(Sadly, Stuart's [original post](http://www.altdevblogaday.com/2011/05/17/understanding-the-fourier-transform/) describing the equation has been lost to bitrot, and can't even be found in the Wayback Machine.) My contribution was the following analogy:

> Imagine an enormous speaker, mounted on a pole, playing a repeating sound. The speaker is so large, you can see the cone move back and forth with the sound. Mark a point on the cone, and now rotate the pole. Trace the point from an above-ground view, if the resulting squiggly curve is off-center, then there is frequency corresponding the pole's rotational frequency represented in the sound.

Dr Bill Connelly from Australia National University has created an interactive simulation of the analogy. Here, the sound from the speaker is a chord of two tones: just enter their frequency and amplitude, and see how the DFT is calculated from the analysis of the rotation:

[![DFT](https://revolution-computing.typepad.com/.a/6a010534b1db25970b01bb08743789970d-800wi 'DFT')](http://www.billconnelly.net/?p=276)

---
title: lorem-ipsum
weight: 0
excerpt: lorem-ipsum
seo:
  title: ''
  description: ''
  robots: []
  extra: []
template: docs
---
## Web Audio Api


Web Audio API
=============

The Web Audio API provides a powerful and versatile system for controlling audio on the Web, allowing developers to choose audio sources, add effects to audio, create audio visualizations, apply spatial effects (such as panning) and much more.

[Web audio concepts and usage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API#web_audio_concepts_and_usage "Permalink to Web audio concepts and usage")
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

The Web Audio API involves handling audio operations inside an **audio context**, and has been designed to allow **modular routing**. Basic audio operations are performed with **audio nodes**, which are linked together to form an **audio routing graph**. Several sources --- with different types of channel layout --- are supported even within a single context. This modular design provides the flexibility to create complex audio functions with dynamic effects.

Audio nodes are linked into chains and simple webs by their inputs and outputs. They typically start with one or more sources. Sources provide arrays of sound intensities (samples) at very small timeslices, often tens of thousands of them per second. These could be either computed mathematically (such as [`OscillatorNode`](https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode)), or they can be recordings from sound/video files (like [`AudioBufferSourceNode`](https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode) and [`MediaElementAudioSourceNode`](https://developer.mozilla.org/en-US/docs/Web/API/MediaElementAudioSourceNode)) and audio streams ([`MediaStreamAudioSourceNode`](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamAudioSourceNode)). In fact, sound files are just recordings of sound intensities themselves, which come in from microphones or electric instruments, and get mixed down into a single, complicated wave.

Outputs of these nodes could be linked to inputs of others, which mix or modify these streams of sound samples into different streams. A common modification is multiplying the samples by a value to make them louder or quieter (as is the case with [`GainNode`](https://developer.mozilla.org/en-US/docs/Web/API/GainNode)). Once the sound has been sufficiently processed for the intended effect, it can be linked to the input of a destination ([`BaseAudioContext.destination`](https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/destination)), which sends the sound to the speakers or headphones. This last connection is only necessary if the user is supposed to hear the audio.

A simple, typical workflow for web audio would look something like this:

1.  Create audio context
2.  Inside the context, create sources --- such as `<audio>`, oscillator, stream
3.  Create effects nodes, such as reverb, biquad filter, panner, compressor
4.  Choose final destination of audio, for example your system speakers
5.  Connect the sources up to the effects, and the effects to the destination.

![A simple box diagram with an outer box labeled Audio context, and three inner boxes labeled Sources, Effects and Destination. The three inner boxes have arrows between them pointing from left to right, indicating the flow of audio information.](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/audio-context_.png)

Timing is controlled with high precision and low latency, allowing developers to write code that responds accurately to events and is able to target specific samples, even at a high sample rate. So applications such as drum machines and sequencers are well within reach.

The Web Audio API also allows us to control how audio is *spatialized*. Using a system based on a *source-listener model*, it allows control of the *panning model* and deals with *distance-induced attenuation* induced by a moving source (or moving listener).

**Note:** You can read about the theory of the Web Audio API in a lot more detail in our article [Basic concepts behind Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API).

[Web Audio API target audience](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API#web_audio_api_target_audience "Permalink to Web Audio API target audience")
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The Web Audio API can seem intimidating to those that aren't familiar with audio or music terms, and as it incorporates a great deal of functionality it can prove difficult to get started if you are a developer.

It can be used to incorporate audio into your website or application, by [providing atmosphere like futurelibrary.no](https://www.futurelibrary.no/), or [auditory feedback on forms](https://css-tricks.com/form-validation-web-audio/). However, it can also be used to create *advanced* interactive instruments. With that in mind, it is suitable for both developers and musicians alike.

We have a [simple introductory tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API) for those that are familiar with programming but need a good introduction to some of the terms and structure of the API.

There's also a [Basic Concepts Behind Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API) article, to help you understand the way digital audio works, specifically in the realm of the API. This also includes a good introduction to some of the concepts the API is built upon.

Learning coding is like playing cards --- you learn the rules, then you play, then you go back and learn the rules again, then you play again. So if some of the theory doesn't quite fit after the first tutorial and article, there's an [advanced tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Advanced_techniques) which extends the first one to help you practice what you've learnt, and apply some more advanced techniques to build up a step sequencer.

We also have other tutorials and comprehensive reference material available that covers all features of the API. See the sidebar on this page for more.

If you are more familiar with the musical side of things, are familiar with music theory concepts, want to start building instruments, then you can go ahead and start building things with the advanced tutorial and others as a guide (the above-linked tutorial covers scheduling notes, creating bespoke oscillators and envelopes, as well as an LFO among other things.)

If you aren't familiar with the programming basics, you might want to consult some beginner's JavaScript tutorials first and then come back here --- see our [Beginner's JavaScript learning module](https://developer.mozilla.org/en-US/docs/Learn/JavaScript) for a great place to begin.

[Web Audio API interfaces](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API#web_audio_api_interfaces "Permalink to Web Audio API interfaces")
-----------------------------------------------------------------------------------------------------------------------------------------------------------

The Web Audio API has a number of interfaces and associated events, which we have split up into nine categories of functionality.

### [General audio graph definition](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API#general_audio_graph_definition "Permalink to General audio graph definition")

General containers and definitions that shape audio graphs in Web Audio API usage.

[`AudioContext`](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext)

The **`AudioContext`** interface represents an audio-processing graph built from audio modules linked together, each represented by an [`AudioNode`](https://developer.mozilla.org/en-US/docs/Web/API/AudioNode). An audio context controls the creation of the nodes it contains and the execution of the audio processing, or decoding. You need to create an `AudioContext` before you do anything else, as everything happens inside a context.

[`AudioNode`](https://developer.mozilla.org/en-US/docs/Web/API/AudioNode)

The **`AudioNode`** interface represents an audio-processing module like an *audio source* (e.g. an HTML [`<audio>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio) or [`<video>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video) element), *audio destination*, *intermediate processing module* (e.g. a filter like [`BiquadFilterNode`](https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode), or *volume control* like [`GainNode`](https://developer.mozilla.org/en-US/docs/Web/API/GainNode)).

[`AudioParam`](https://developer.mozilla.org/en-US/docs/Web/API/AudioParam)

The **`AudioParam`** interface represents an audio-related parameter, like one of an [`AudioNode`](https://developer.mozilla.org/en-US/docs/Web/API/AudioNode). It can be set to a specific value or a change in value, and can be scheduled to happen at a specific time and following a specific pattern.

[`AudioParamMap`](https://developer.mozilla.org/en-US/docs/Web/API/AudioParamMap)

Provides a maplike interface to a group of [`AudioParam`](https://developer.mozilla.org/en-US/docs/Web/API/AudioParam) interfaces, which means it provides the methods `forEach()`, `get()`, `has()`, `keys()`, and `values()`, as well as a `size` property.

[`BaseAudioContext`](https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext)

The **`BaseAudioContext`** interface acts as a base definition for online and offline audio-processing graphs, as represented by [`AudioContext`](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext) and [`OfflineAudioContext`](https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext) respectively. You wouldn't use `BaseAudioContext` directly --- you'd use its features via one of these two inheriting interfaces.

The `[ended](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/ended_event "/en-US/docs/Web/Events/ended")` event

The `ended` event is fired when playback has stopped because the end of the media was reached.

### [Defining audio sources](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API#defining_audio_sources "Permalink to Defining audio sources")

Interfaces that define audio sources for use in the Web Audio API.

[`AudioScheduledSourceNode`](https://developer.mozilla.org/en-US/docs/Web/API/AudioScheduledSourceNode)

The **`AudioScheduledSourceNode`** is a parent interface for several types of audio source node interfaces. It is an [`AudioNode`](https://developer.mozilla.org/en-US/docs/Web/API/AudioNode).

[`OscillatorNode`](https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode)

The **`OscillatorNode`** interface represents a periodic waveform, such as a sine or triangle wave. It is an [`AudioNode`](https://developer.mozilla.org/en-US/docs/Web/API/AudioNode) audio-processing module that causes a given *frequency* of wave to be created.

[`AudioBuffer`](https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer)

The **`AudioBuffer`** interface represents a short audio asset residing in memory, created from an audio file using the [`BaseAudioContext.decodeAudioData`](https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/decodeAudioData) method, or created with raw data using [`BaseAudioContext.createBuffer`](https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createBuffer). Once decoded into this form, the audio can then be put into an [`AudioBufferSourceNode`](https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode).

[`AudioBufferSourceNode`](https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode)

The **`AudioBufferSourceNode`** interface represents an audio source consisting of in-memory audio data, stored in an [`AudioBuffer`](https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer). It is an [`AudioNode`](https://developer.mozilla.org/en-US/docs/Web/API/AudioNode) that acts as an audio source.

[`MediaElementAudioSourceNode`](https://developer.mozilla.org/en-US/docs/Web/API/MediaElementAudioSourceNode)

The **`MediaElementAudioSourceNode`** interface represents an audio source consisting of an HTML5 [`<audio>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio) or [`<video>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video) element. It is an [`AudioNode`](https://developer.mozilla.org/en-US/docs/Web/API/AudioNode) that acts as an audio source.

[`MediaStreamAudioSourceNode`](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamAudioSourceNode)

The **`MediaStreamAudioSourceNode`** interface represents an audio source consisting of a [`MediaStream`](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream) (such as a webcam, microphone, or a stream being sent from a remote computer). If multiple audio tracks are present on the stream, the track whose [`id`](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/id "id") comes first lexicographically (alphabetically) is used. It is an [`AudioNode`](https://developer.mozilla.org/en-US/docs/Web/API/AudioNode) that acts as an audio source.

[`MediaStreamTrackAudioSourceNode`](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrackAudioSourceNode)

A node of type [`MediaStreamTrackAudioSourceNode`](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrackAudioSourceNode) represents an audio source whose data comes from a [`MediaStreamTrack`](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack). When creating the node using the [`createMediaStreamTrackSource()`](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createMediaStreamTrackSource "createMediaStreamTrackSource()") method to create the node, you specify which track to use. This provides more control than `MediaStreamAudioSourceNode`.

### [Defining audio effects filters](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API#defining_audio_effects_filters "Permalink to Defining audio effects filters")

Interfaces for defining effects that you want to apply to your audio sources.

[`BiquadFilterNode`](https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode)

The **`BiquadFilterNode`** interface represents a simple low-order filter. It is an [`AudioNode`](https://developer.mozilla.org/en-US/docs/Web/API/AudioNode) that can represent different kinds of filters, tone control devices, or graphic equalizers. A `BiquadFilterNode` always has exactly one input and one output.

[`ConvolverNode`](https://developer.mozilla.org/en-US/docs/Web/API/ConvolverNode)

The **`ConvolverNode`** interface is an [`AudioNode`](https://developer.mozilla.org/en-US/docs/Web/API/AudioNode) that performs a Linear Convolution on a given [`AudioBuffer`](https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer), and is often used to achieve a reverb effect.

[`DelayNode`](https://developer.mozilla.org/en-US/docs/Web/API/DelayNode)

The **`DelayNode`** interface represents a [delay-line](https://en.wikipedia.org/wiki/Digital_delay_line); an [`AudioNode`](https://developer.mozilla.org/en-US/docs/Web/API/AudioNode) audio-processing module that causes a delay between the arrival of an input data and its propagation to the output.

[`DynamicsCompressorNode`](https://developer.mozilla.org/en-US/docs/Web/API/DynamicsCompressorNode)

The **`DynamicsCompressorNode`** interface provides a compression effect, which lowers the volume of the loudest parts of the signal in order to help prevent clipping and distortion that can occur when multiple sounds are played and multiplexed together at once.

[`GainNode`](https://developer.mozilla.org/en-US/docs/Web/API/GainNode)

The **`GainNode`** interface represents a change in volume. It is an [`AudioNode`](https://developer.mozilla.org/en-US/docs/Web/API/AudioNode) audio-processing module that causes a given *gain* to be applied to the input data before its propagation to the output.

[`WaveShaperNode`](https://developer.mozilla.org/en-US/docs/Web/API/WaveShaperNode)

The **`WaveShaperNode`** interface represents a non-linear distorter. It is an [`AudioNode`](https://developer.mozilla.org/en-US/docs/Web/API/AudioNode) that use a curve to apply a waveshaping distortion to the signal. Beside obvious distortion effects, it is often used to add a warm feeling to the signal.

[`PeriodicWave`](https://developer.mozilla.org/en-US/docs/Web/API/PeriodicWave)

Describes a periodic waveform that can be used to shape the output of an [`OscillatorNode`](https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode).

[`IIRFilterNode`](https://developer.mozilla.org/en-US/docs/Web/API/IIRFilterNode)

Implements a general **[infinite impulse response](https://en.wikipedia.org/wiki/infinite%20impulse%20response "infinite impulse response")** (IIR)  filter; this type of filter can be used to implement tone control devices and graphic equalizers as well.

### [Defining audio destinations](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API#defining_audio_destinations "Permalink to Defining audio destinations")

Once you are done processing your audio, these interfaces define where to output it.

[`AudioDestinationNode`](https://developer.mozilla.org/en-US/docs/Web/API/AudioDestinationNode)

The **`AudioDestinationNode`** interface represents the end destination of an audio source in a given context --- usually the speakers of your device.

[`MediaStreamAudioDestinationNode`](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamAudioDestinationNode)

The **`MediaStreamAudioDestinationNode`** interface represents an audio destination consisting of a [WebRTC](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API) [`MediaStream`](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream) with a single `AudioMediaStreamTrack`, which can be used in a similar way to a [`MediaStream`](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream) obtained from [`getUserMedia()`](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia "getUserMedia()"). It is an [`AudioNode`](https://developer.mozilla.org/en-US/docs/Web/API/AudioNode) that acts as an audio destination.

### [Data analysis and visualization](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API#data_analysis_and_visualization "Permalink to Data analysis and visualization")

If you want to extract time, frequency, and other data from your audio, the `AnalyserNode` is what you need.

[`AnalyserNode`](https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode)

The **`AnalyserNode`** interface represents a node able to provide real-time frequency and time-domain analysis information, for the purposes of data analysis and visualization.

### [Splitting and merging audio channels](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API#splitting_and_merging_audio_channels "Permalink to Splitting and merging audio channels")

To split and merge audio channels, you'll use these interfaces.

[`ChannelSplitterNode`](https://developer.mozilla.org/en-US/docs/Web/API/ChannelSplitterNode)

The **`ChannelSplitterNode`** interface separates the different channels of an audio source out into a set of *mono* outputs.

[`ChannelMergerNode`](https://developer.mozilla.org/en-US/docs/Web/API/ChannelMergerNode)

The **`ChannelMergerNode`** interface reunites different mono inputs into a single output. Each input will be used to fill a channel of the output.

### [Audio spatialization](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API#audio_spatialization "Permalink to Audio spatialization")

These interfaces allow you to add audio spatialization panning effects to your audio sources.

[`AudioListener`](https://developer.mozilla.org/en-US/docs/Web/API/AudioListener)

The **`AudioListener`** interface represents the position and orientation of the unique person listening to the audio scene used in audio spatialization.

[`PannerNode`](https://developer.mozilla.org/en-US/docs/Web/API/PannerNode)

The **`PannerNode`** interface represents the position and behavior of an audio source signal in 3D space, allowing you to create complex panning effects.

[`StereoPannerNode`](https://developer.mozilla.org/en-US/docs/Web/API/StereoPannerNode)

The **`StereoPannerNode`** interface represents a simple stereo panner node that can be used to pan an audio stream left or right.

### [Audio processing in JavaScript](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API#audio_processing_in_javascript "Permalink to Audio processing in JavaScript")

Using audio worklets, you can define custom audio nodes written in JavaScript or [WebAssembly](https://developer.mozilla.org/en-US/docs/WebAssembly). Audio worklets implement the [`Worklet`](https://developer.mozilla.org/en-US/docs/Web/API/Worklet) interface, a lightweight version of the [`Worker`](https://developer.mozilla.org/en-US/docs/Web/API/Worker) interface.

[`AudioWorklet`](https://developer.mozilla.org/en-US/docs/Web/API/AudioWorklet)

The `AudioWorklet` interface is available through the [`AudioContext`](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext) object's [`audioWorklet`](https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/audioWorklet "audioWorklet"), and lets you add modules to the audio worklet to be executed off the main thread.

[`AudioWorkletNode`](https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletNode)

The `AudioWorkletNode` interface represents an [`AudioNode`](https://developer.mozilla.org/en-US/docs/Web/API/AudioNode) that is embedded into an audio graph and can pass messages to the corresponding `AudioWorkletProcessor`.

[`AudioWorkletProcessor`](https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletProcessor)

The `AudioWorkletProcessor` interface represents audio processing code running in a `AudioWorkletGlobalScope` that generates, processes, or analyses audio directly, and can pass messages to the corresponding `AudioWorkletNode`.

[`AudioWorkletGlobalScope`](https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletGlobalScope)

The `AudioWorkletGlobalScope` interface is a `WorkletGlobalScope`-derived object representing a worker context in which an audio processing script is run; it is designed to enable the generation, processing, and analysis of audio data directly using JavaScript in a worklet thread rather than on the main thread.

#### Obsolete: script processor nodes

Before audio worklets were defined, the Web Audio API used the `ScriptProcessorNode`  for JavaScript-based audio processing. Because the code runs in the main thread, they have bad performance. The `ScriptProcessorNode` is kept for historic reasons but is marked as deprecated.

[`ScriptProcessorNode`](https://developer.mozilla.org/en-US/docs/Web/API/ScriptProcessorNode) 

The **`ScriptProcessorNode`** interface allows the generation, processing, or analyzing of audio using JavaScript. It is an [`AudioNode`](https://developer.mozilla.org/en-US/docs/Web/API/AudioNode) audio-processing module that is linked to two buffers, one containing the current input, one containing the output. An event, implementing the [`AudioProcessingEvent`](https://developer.mozilla.org/en-US/docs/Web/API/AudioProcessingEvent) interface, is sent to the object each time the input buffer contains new data, and the event handler terminates when it has filled the output buffer with data.

`[audioprocess](https://developer.mozilla.org/en-US/docs/Web/API/ScriptProcessorNode/audioprocess_event "/en-US/docs/Web/Events/audioprocess")` (event) 

The `audioprocess` event is fired when an input buffer of a Web Audio API [`ScriptProcessorNode`](https://developer.mozilla.org/en-US/docs/Web/API/ScriptProcessorNode) is ready to be processed.

[`AudioProcessingEvent`](https://developer.mozilla.org/en-US/docs/Web/API/AudioProcessingEvent) 

The `AudioProcessingEvent` represents events that occur when a [`ScriptProcessorNode`](https://developer.mozilla.org/en-US/docs/Web/API/ScriptProcessorNode) input buffer is ready to be processed.

### [Offline/background audio processing](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API#offlinebackground_audio_processing "Permalink to Offline/background audio processing")

It is possible to process/render an audio graph very quickly in the background --- rendering it to an [`AudioBuffer`](https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer) rather than to the device's speakers --- with the following.

[`OfflineAudioContext`](https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext)

The **`OfflineAudioContext`** interface is an [`AudioContext`](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext) interface representing an audio-processing graph built from linked together [`AudioNode`](https://developer.mozilla.org/en-US/docs/Web/API/AudioNode)s. In contrast with a standard `AudioContext`, an `OfflineAudioContext` doesn't really render the audio but rather generates it, *as fast as it can*, in a buffer.

`[complete](https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext/complete_event "/en-US/docs/Web/Events/complete")` (event)

The `complete` event is fired when the rendering of an [`OfflineAudioContext`](https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext) is terminated.

[`OfflineAudioCompletionEvent`](https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioCompletionEvent)

The `OfflineAudioCompletionEvent` represents events that occur when the processing of an [`OfflineAudioContext`](https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext) is terminated. The `[complete](https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext/complete_event "/en-US/docs/Web/Events/complete")` event uses this interface.

[Guides and tutorials](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API#guides_and_tutorials "Permalink to Guides and tutorials")
-----------------------------------------------------------------------------------------------------------------------------------------------

[Advanced techniques: Creating and sequencing audio](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Advanced_techniques)

In this tutorial, we're going to cover sound creation and modification, as well as timing and scheduling. We're going to introduce sample loading, envelopes, filters, wavetables, and frequency modulation. If you're familiar with these terms and you're looking for an introduction to their application within with the Web Audio API, you've come to the right place.

[Background audio processing using AudioWorklet](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Using_AudioWorklet)

This article explains how to create an audio worklet processor and use it in a Web Audio application.

[Basic concepts behind Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API)

This article explains some of the audio theory behind how the features of the Web Audio API work, to help you make informed decisions while designing how audio is routed through your app.

[Controlling multiple parameters with ConstantSourceNode](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode)

This article demonstrates how to use a `ConstantSourceNode` to link multiple parameters together so they share the same value, which can be changed by setting the value of the `ConstantSourceNode.offset` parameter.

[Example and tutorial: Simple synth keyboard](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Simple_synth)

This article presents the code and working demo of a video keyboard you can play using the mouse. The keyboard allows you to switch among the standard waveforms as well as one custom waveform, and you can control the main gain using a volume slider beneath the keyboard. This example makes use of the following Web API interfaces: `AudioContext`, `OscillatorNode`, `PeriodicWave`, and `GainNode`.

[Migrating from webkitAudioContext](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Migrating_from_webkitAudioContext)

In this article, we cover the differences in Web Audio API since it was first implemented in WebKit and how to update your code to use the modern Web Audio API.

[Tools for analyzing Web Audio usage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Tools)

While working on your Web Audio API code, you may find that you need tools to analyze the graph of nodes you create or to otherwise debug your work. This article discusses tools available to help you do that.

[Using IIR filters](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Using_IIR_filters)

The **`IIRFilterNode`** interface of the [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) is an `AudioNode` processor that implements a general [infinite impulse response](https://en.wikipedia.org/wiki/infinite%20impulse%20response) (IIR) filter; this type of filter can be used to implement tone control devices and graphic equalizers, and the filter response parameters can be specified, so that it can be tuned as needed. This article looks at how to implement one, and use it in a simple example.

[Using the Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)

Let's take a look at getting started with the [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API). We'll briefly look at some concepts, then study a simple boombox example that allows us to load an audio track, play and pause it, and change its volume and stereo panning.

[Visualizations with Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)

One of the most interesting features of the Web Audio API is the ability to extract frequency, waveform, and other data from your audio source, which can then be used to create visualizations. This article explains how, and provides a couple of basic use cases.

[Web Audio API best practices](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Best_practices)

There's no strict right or wrong way when writing creative code. As long as you consider security, performance, and accessibility, you can adapt to your own style. In this article, we'll share a number of *best practices* --- guidelines, tips, and tricks for working with the Web Audio API.

[Web audio spatialization basics](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)

As if its extensive variety of sound processing (and other) options wasn't enough, the Web Audio API also includes facilities to allow you to emulate the difference in sound as a listener moves around a sound source, for example panning as you move around a sound source inside a 3D game. The official term for this is **spatialization**, and this article will cover the basics of how to implement such a system.


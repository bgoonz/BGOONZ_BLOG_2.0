# Signals & Systems For Dummies Cheat Sheet - dummies

> Signals and systems is an aspect of electrical engineering that applies mathematical concepts to the creation of product design, such as cell phones and automobile cruise control systems. Absorbing the core concepts of signals and systems requires a firm grasp on their properties and classifications; a solid knowledge of algebra, trigonometry, complex arithmetic, calculus of […]

2.  [Education](https://www.dummies.com/education/)
3.  [Science](https://www.dummies.com/education/science/)
4.  Signals & Systems For Dummies Cheat Sheet

Signals and systems is an aspect of electrical engineering that applies mathematical concepts to the creation of product design, such as cell phones and automobile cruise control systems. Absorbing the core concepts of signals and systems requires a firm grasp on their properties and classifications; a solid knowledge of algebra, trigonometry, complex arithmetic, calculus of one variable; and familiarity with linear constant coefficient (LCC) differential equations.

## Getting to Know the Mathematical Foundation of Signals and Systems

The study of signals and systems establishes a mathematical formalism for analyzing, modeling, and simulating electrical systems in the time, frequency, and _s\_\_-_ or _z\_\_-\_domains. Signals exist naturally and are also created by people. Some operate continuously (known as \_continuous-time signals_); others are active at specific instants of time (and are called _discrete-time signals_).

Signals pass through systems to be modified or enhanced in some way. Systems that operate on signals are also categorized as continuous- or discrete-time.

Mathematics plays a central role in all facets of signals and systems. Specifically, complex arithmetic, trigonometry, and geometry are mainstays of this dynamic and (ahem) electrifying field of work and study. This article highlights the most applicable concepts from each of these areas of math for signals and systems work.

## Complex arithmetic for signals and systems

Here are some of the most important complex arithmetic operations and formulas that relate to signals and systems.

![image0.jpg](https://www.dummies.com/wp-content/uploads/375142.image0.jpg)

## Trigonometry and Euler's formulas

This table presents the key formulas of trigonometry that apply to signals and systems:

![image1.jpg](https://www.dummies.com/wp-content/uploads/375143.image1.jpg)

## Geometric series

Among the most important geometry equations to know for signals and systems are these three:

![image2.jpg](https://www.dummies.com/wp-content/uploads/375144.image2.jpg)

## Recognizing Signal Properties and Classifications

Signals — both continuous-time signals and their discrete-time counterparts — are categorized according to certain properties, such as deterministic or random, periodic or aperiodic, power or energy, and even or odd. These traits aren't mutually exclusive; signals can hold multiple classifications.

Here are some of the most important signal properties.

![image0.jpg](https://www.dummies.com/wp-content/uploads/375167.image0.jpg)

But wait! There's more. Signals can also be categorized as exponential, sinusoidal, or a special sequence. The unit sample sequence and the unit step sequence are special signals of interest in discrete-time. All the continuous-time signal classifications have discrete-time counterparts, except singularity functions, which appear in continuous-time only.

Defining special signals that serve as building blocks for more complex signals makes the creation of custom signal models to suit your needs more systematic and convenient.

![image1.jpg](https://www.dummies.com/wp-content/uploads/375168.image1.jpg)

## Recognizing System Properties and Classifications

Part of learning about signals and systems is that systems are identified according to certain properties they exhibit. Have a look at the core system classifications:

-   **Linearity:** A linear combination of individually obtained outputs is equivalent to the output obtained by the system operating on the corresponding linear combination of inputs.
-   **Time-invariant:** The system properties don't change with time. A present input produces the same response as it does in the future, less the time shift factor between the present and future.
-   **Memoryless:** If the present system output depends only on the present input, the system is memoryless.
-   **Causal:** The present system output depends at most on the present and past inputs. Future inputs can't be used to produce the present output.
-   **Stable:** A system is bounded-input bound-output (BIBO) stable if all bounded inputs produce a bounded output.

This table presents core linear time invariant (LTI) system properties for both continuous and discrete-time systems. Time-domain, frequency-domain, and _s_/_z_\-domain properties are identified for the categories basic input/output, cascading, linear constant coefficient (LCC) differential and difference equations, and BIBO stability:

![image0.jpg](https://www.dummies.com/wp-content/uploads/375149.image0.jpg)

## Signals and Systems: Working with Transform Theorems and Pairs

Both signals and systems can be analyzed in the time-, frequency-, and _s\_\_-_ and \_z\_\_-\_domains. Leaving the time-domain requires a transform and then an inverse transform to return to the time-domain.

As you work to and from the time domain, referencing tables of both transform theorems and transform pairs can speed your progress and make the work easier. Use this table of common pairs for the continuous-time Fourier transform, discrete-time Fourier transform, the Laplace transform, and the _z_\-transform as needed.

Working in the frequency domain means you are working with Fourier transform and discrete-time Fourier transform — in the _s_\-domain.

## Using Fourier transforms for continuous-time signals

Here is a short table of theorems and pairs for the continuous-time Fourier transform (FT), in both frequency variable

![image0.png](https://www.dummies.com/wp-content/uploads/375151.image0.png)

The forward and inverse transforms for these two notational schemes are defined as:

![image1.png](https://www.dummies.com/wp-content/uploads/375152.image1.png)

. . . and here's the table:

![image2.jpg](https://www.dummies.com/wp-content/uploads/375153.image2.jpg)

## Applying Fourier transform to discrete-time signals

For discrete-time signals and systems the discrete-time Fourier transform (DTFT) takes you to the frequency domain. A short table of theorems and pairs for the DTFT can make your work in this domain much more fun. The discrete-time frequency variable is

![image3.png](https://www.dummies.com/wp-content/uploads/375154.image3.png)

The forward and inverse transforms are defined as:

![image4.png](https://www.dummies.com/wp-content/uploads/375155.image4.png)

. . . and here's the table:

![image5.jpg](https://www.dummies.com/wp-content/uploads/375156.image5.jpg)

## Using the Laplace transform in the s-domain

For continuous-time signals and systems, the one-sided Laplace transform (LT) helps to decipher signal and system behavior. It's also the best approach for solving linear constant coefficient differential equations with nonzero initial conditions. The one-sided LT is defined as:

![image6.png](https://www.dummies.com/wp-content/uploads/375157.image6.png)

The inverse LT is typically found using partial fraction expansion along with LT theorems and pairs. Here's a short table of LT theorems and pairs.

![image7.jpg](https://www.dummies.com/wp-content/uploads/375158.image7.jpg)

## Letting the z-Transform help with signals and systems analysis

For discrete-time signals and systems, the _z_\-transform (ZT) is the counterpart to the Laplace transform. With the ZT you can characterize signals and systems as well as solve linear constant coefficient difference equations. The two-sided ZT is defined as:

![image8.png](https://www.dummies.com/wp-content/uploads/375159.image8.png)

The inverse ZT is typically found using partial fraction expansion and the use of ZT theorems and pairs. Here is a short table of ZT theorems and pairs.

![image9.jpg](https://www.dummies.com/wp-content/uploads/375160.image9.jpg)

## Exploring Signals and Systems: Core Concepts of Sampling Theory

Sampling theory links continuous and discrete-time signals and systems. For example, you can get a discrete-time signal from a continuous-time signal by taking samples every _T_ seconds. This article points out some useful relationships associated with sampling theory. Key concepts include the low-pass sampling theorem, the frequency spectrum of a sampled continuous-time signal, reconstruction using an ideal lowpass filter, and the calculation of alias frequencies.

The table of properties begins with a block diagram of a discrete-time processing subsystem that produces continuous-time output _y_(_t_) from continuous-time input _x_(_t_). This block diagram motivates the sampling theory properties in the remainder of the table.

The process of converting continuous-time signal _x_(_t_) to discrete-time signal _x_\[_n_\] requires sampling, which is implemented by the analog-to-digital converter (ADC) block. The block with frequency response

![image0.png](https://www.dummies.com/wp-content/uploads/375162.image0.png)

represents a linear time invariant system with input _x_\[_n_\] and output _y_\[_n_\]. The discrete-time signal _y_\[_n_\] is returned to the continuous-time domain via a digital-to-analog converter and a reconstruction filter.

![image1.jpg](https://www.dummies.com/wp-content/uploads/375163.image1.jpg)

## Synthesizing Signals with the Fourier Series

Periodic signals can be synthesized as a linear combination of harmonically related complex sinusoids. The theory of Fourier series provides the mathematical tools for this synthesis by starting with the analysis formula, which provides the Fourier coefficients _X\_\_n_ corresponding to periodic signal _x_(_t_) having period \_T_0.

Common periodic signals include the square wave, pulse train, and triangle wave. This table shows the Fourier series analysis and synthesis formulas and coefficient formulas for _X\_\_n_ in terms of waveform parameters for the provided waveform sketches:

![image0.jpg](https://www.dummies.com/wp-content/uploads/375165.image0.jpg)

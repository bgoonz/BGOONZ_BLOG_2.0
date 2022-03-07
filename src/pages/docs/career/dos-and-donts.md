---
title: Do & Don't of Interviewing!
weight: 0
excerpt: Do & Don't of Interviewing!
seo:
    title: ''
    description: ''
    robots: []
    extra: []
template: docs
---

## Do & Don't of Interviewing!

#### Legend

-   ✅ = Do
-   ❌ = Don't
-   ⚠️ = Situational

### Before interview

|     | Things                                                                                                                                      |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| ✅  | Prepare pen, paper and earphones/headphones.                                                                                                |
| ✅  | Find a quiet environment with good Internet connection.                                                                                     |
| ✅  | Ensure webcam and audio are working. There were times I had to restart Chrome to get Hangouts to work again.                                |
| ✅  | Request for the option to interview over Hangouts/Skype instead of a phone call; it is easier to send links or text across.                 |
| ✅  | Decide on and be familiar with a programming language.                                                                                      |
| ✅  | Familiarize yourself with the coding environment (CoderPad/CodePen). Set up the coding shortcuts, turn on autocompletion, tab spacing, etc. |
| ✅  | Prepare answers to the [frequently-asked behavioral questions](behavioral-questions.md) in an interview.                                    |
| ✅  | Prepare some [questions to ask](questions-to-ask.md) at the end of the interview.                                                           |
| ✅  | Dress comfortably. Usually you do not need to wear smart clothes, casual should be fine. T-shirts and jeans are acceptable at most places.  |
| ✅  | Stay calm and composed.                                                                                                                     |
| ⚠️  | Turn off the webcam if possible. Most remote interviews will not require video chat and leaving it on only serves as a distraction.         |

### Introduction

|     | Things                                                                                               |
| --- | ---------------------------------------------------------------------------------------------------- |
| ✅  | Introduce yourself in a few sentences under a minute or two.                                         |
| ✅  | Mention interesting points that are relevant to the role you are applying for.                       |
| ✅  | Sound enthusiastic! Speak with a smile and you will naturally sound more engaging.                   |
| ❌  | Spend too long introducing yourself. The more time you spend talking the less time you have to code. |

### Upon receiving the question

|     | Things                                                                                                                                                                                                                    |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ✅  | Repeat the question back at the interviewer.                                                                                                                                                                              |
| ✅  | Clarify any assumptions you made subconsciously. Many questions are under-specified on purpose. E.g. a tree-like diagram could very well be a graph that allows for cycles and a naive recursive solution would not work. |
| ✅  | Clarify input format and range. Ask whether input can be assumed to be well-formed and non-null.                                                                                                                          |
| ✅  | Work through a small example to ensure you understood the question.                                                                                                                                                       |
| ✅  | Explain a high level approach even if it is a brute force one.                                                                                                                                                            |
| ✅  | Improve upon the approach and optimize. Reduce duplicated work and cache repeated computations.                                                                                                                           |
| ✅  | Think carefully, then state and explain the time and space complexity of your approaches.                                                                                                                                 |
| ✅  | If stuck, think about related problems you have seen before and how they were solved. Check out the [tips](algorithms/introduction.md) in this section.                                                                   |
| ❌  | Ignore information given to you. Every piece is important.                                                                                                                                                                |
| ❌  | Jump into coding straightaway.                                                                                                                                                                                            |
| ❌  | Start coding without interviewer's green light.                                                                                                                                                                           |
| ❌  | Appear too unsure about your approach or analysis.                                                                                                                                                                        |

### Code out your solution

|     | Things                                                                                                                                                                                                                                                                                                   |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ✅  | Explain what you are coding/typing to the interviewer, what you are trying to achieve.                                                                                                                                                                                                                   |
| ✅  | Practice good coding style. Clear variable names, consistent operator spacing, proper indentation, etc.                                                                                                                                                                                                  |
| ✅  | Type/write at a reasonable speed. Too slow is no good.                                                                                                                                                                                                                                                   |
| ✅  | As much as possible, write actual compilable code, not pseudocode.                                                                                                                                                                                                                                       |
| ✅  | Write in a modular fashion. Extract out chunks of repeated code into functions.                                                                                                                                                                                                                          |
| ✅  | Ask for permission to use trivial functions without having to implement them; saves you some time.                                                                                                                                                                                                       |
| ✅  | Use the hints given by the interviewer.                                                                                                                                                                                                                                                                  |
| ✅  | Demonstrate mastery of your chosen programming language.                                                                                                                                                                                                                                                 |
| ✅  | Demonstrate technical knowledge in data structures and algorithms.                                                                                                                                                                                                                                       |
| ✅  | If you are cutting corners in your code, state that out loud to your interviewer and say what you would do in a non-interview setting (no time constraints). E.g., "Under non-interview settings, I would write a regex to parse this string rather than using `split()` which may not cover all cases." |
| ✅  | Practice whiteboard space-management skills.                                                                                                                                                                                                                                                             |
| ⚠️  | Reasonable defensive coding. Check for nulls, empty collections, etc. Can omit if input validity has been clarified with the interviewer.                                                                                                                                                                |
| ❌  | Remain quiet the whole time while coding.                                                                                                                                                                                                                                                                |
| ❌  | Spend too much time writing comments.                                                                                                                                                                                                                                                                    |
| ❌  | Use extremely verbose or single-character (unless they're common like `i`, `n`) variable names.                                                                                                                                                                                                          |
| ❌  | Copy and paste code without checking (e.g. variables need to be renamed).                                                                                                                                                                                                                                |
| ❌  | Interrupt your interviewer when they are talking. Usually if they speak, they are trying to give you hints or steer you in the right direction.                                                                                                                                                          |
| ❌  | Write too big (takes up too much space) or too small (illegible) if on a whiteboard.                                                                                                                                                                                                                     |

### After coding

|     | Things                                                                                                                  |
| --- | ----------------------------------------------------------------------------------------------------------------------- |
| ✅  | Scan through your code for mistakes as if it was your first time seeing code written by someone else.                   |
| ✅  | Check for off-by-one errors.                                                                                            |
| ✅  | Come up with test cases. Try extreme test cases - empty sets, single item sets, negative numbers                        |
| ✅  | Step through your code with those test cases.                                                                           |
| ✅  | Look out for places where you can refactor.                                                                             |
| ✅  | Reiterate the time and space complexity of your code.                                                                   |
| ✅  | Explain trade-offs and how the code/approach can be improved if given more time.                                        |
| ❌  | Immediately announce that you are done coding. Do the above first!                                                      |
| ❌  | Argue with the interviewer. They may be wrong but that is very unlikely given that they are familiar with the question. |

### Wrap up

|     | Things                                                                                                                                                        |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ✅  | Ask questions. More importantly, ask good and engaging questions that are tailored to the company! Pick some questions from [this list](questions-to-ask.md). |
| ✅  | Thank the interviewer.                                                                                                                                        |
| ⚠️  | Ask about your interview performance. It can get awkward.                                                                                                     |
| ❌  | End the interview without asking any questions.                                                                                                               |

### Post interview

|     | Things                                                                                                                 |
| --- | ---------------------------------------------------------------------------------------------------------------------- |
| ✅  | Record the interview questions and answers down as these can be useful for future reference.                           |
| ⚠️  | Send a follow up email to your interviewer(s) thanking them for their time and the opportunity to interview with them. |

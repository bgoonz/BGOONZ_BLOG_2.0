---
title: Lambda School Projects
weight: 0
excerpt: family promise web app
seo:
  title: ''
  description: ''
  robots: []
  extra: []
template: docs
---




---

# Roadmap:

## Roadmap

![](<../.gitbook/assets/image (1).png>)

### Type

**Web (Node) + DS** (Build-on)

![](<../.gitbook/assets/image (12).png>)

### Overview

Family Promise helps local communities coordinate their compassion to address the root causes of family homelessness. They tap existing local resources to empower families towards economic stability. Families come to them in crisis; they help them rebuild their lives with new skills and ongoing support. They address the issue holistically, providing prevention services before families reach crisis, shelter and case management when they become homeless, and stabilization programs once they have secured housing to ensure they remain independent.

Family Promise needs a way to **track and visualize the services they provide external to the shelter to gain actionable insights**.

Our goal is to build a _**generalizable**_** monitoring and evaluation (M\&E) platform** that meets Family Promise's needs, with an eye toward additional potential use cases that would be useful for many other organizations.

This product will take multiple Labs cohorts to complete.

For the first round, students laid a solid foundation for the application. They built out user roles and profiles, an interface for user management, and a way for users to manage programs in the application.

The next round focused on ensuring individual services can be tracked for recipients at the household and individual level.

This round, we'll pick up the previous team's work building out **metrics** to serve as the main window our users will have into conducting monitoring and evaluation of their programs and services. Then we'll let Administrators and Program Managers define **Goals** based on one or more metrics, and provide **analytics** and **visualizations** to display relevant data for each user type.

![](<../.gitbook/assets/image (7).png>)

### Contacts

**Stakeholder Name:** J Wylie

**Stakeholder Email:** [jwylie@familypromiseofspokane.org](mailto:jwylie@familypromiseofspokane.org)

### Technology Stack

* **BE:** Node
* **FE:** React
* **Auth:** Okta

### User Base

* **Administrators:** Manage all aspects of the application, including:
  * Users
  * Programs
  * Services
* **Program Managers:** Manage one or more programs.
* **Service Providers:** Manage one or more services.

[Feature List](https://www.notion.so/649befae354f455abbd7b642f8f0a120)

![](<../.gitbook/assets/image (21).png>)

### Resources

#### Trello Boards

[**Product Trello Board**](https://trello.com/invite/b/3tDU57dX/c3402ecb4c4a579a18794a51dbd33219/family-promise-service-tracker)

[**Team A Trello Board**](https://trello.com/invite/b/U8UUCBeb/1e2fa0c9b49a4f8b327874bebec596ff/family-promise-a)

#### Stakeholder Resources

**Family Promise Colors:**

* Purple: #472D5B
* Blue: #006FBA
* Lilac: #8D4982
* Yellow: #FEC357

#### Recordings

📼 [**Labs 33 Playlist**](https://www.youtube.com/playlist?list=PLWX9jswdDQ0WPE7UjrgmGx-nkI8ZuN0lg)

📼 [**Labs 34 Playlist**](https://youtube.com/playlist?list=PLWX9jswdDQ0VP4avK4t33TMpOz_AnBnw7)

📼 [**Labs 35 Playlist**](https://youtube.com/playlist?list=PLWX9jswdDQ0V0521r\_6qoVRdkjc4NItEl)

#### Previous Team Pages

[Labs 33: Family Promise: Team A](https://www.notion.so/Labs-33-Family-Promise-Team-A-67cafe38210c4cb5b03ceee65cd72e88)

[Labs 34: Family Promise: Team A](https://www.notion.so/Labs-34-Family-Promise-Team-A-36825ea9492247fd85208f2955f185ac)

[Labs 34: Family Promise: Team B](https://www.notion.so/Labs-34-Family-Promise-Team-B-fadaa6d067a148aa9fd5f09e75244083)

[Labs 35: Family Promise: Team A](https://www.notion.so/Labs-35-Family-Promise-Team-A-66f3cd8444d04302a609d695dba1aa3e)

[Labs 35: Family Promise: Team B](https://www.notion.so/Labs-35-Family-Promise-Team-B-10be7365bdbf479f968b6b28a3b07f4d)

[Family Promise: Team A](https://www.notion.so/Family-Promise-Team-A-765f45407d6640f0853b2ac402acc3a5)

#### Future Brainstorm

* Let Program Managers select an area on a map and name it as a neighborhood/area
  * Let Program Managers add in insider knowledge/community resources per neighborhood/area

![](<../.gitbook/assets/image (8).png>)

## Labs Engineering Docs

## Labs Guides <a href="labs-guides" id="labs-guides"></a>

* ​[Labs Engineering Standards](https://docs.labs.lambdaschool.com/standards/)​
* ​[Labs Engineering Guide](https://docs.labs.lambdaschool.com/guides/)​
* ​[Labs Data Science Guide](https://docs.labs.lambdaschool.com/data-science/)​

## Labs Scaffolding <a href="labs-scaffolding" id="labs-scaffolding"></a>

* ​[Labs SPA Starter](https://docs.labs.lambdaschool.com/labs-spa-starter/)​
* ​[Labs API Starter](https://docs.labs.lambdaschool.com/api/)​

## Please read this carefully! <a href="please-read-this-carefully" id="please-read-this-carefully"></a>

The internet is full of very powerful platforms for supporting your application (AWS, Heroku, etc.). These platforms require the use of secrets (passwords, keys, tokens, etc.) to access and use their services.

🎗 It is your responsibility to always protect the secret keys and tokens you use to access these platforms. A single compromise of your application resources can have major a significant impact on the life of your application and potentially on the lives of people affected.

🔐 Always protect your secrets! The secrets you use to access these services should be protected at all times with extreme care! Exposing secrets to anyone not entitled to have them can hurt your career, your product, your company, your colleagues and in many cases the public.

❌ Never commit your secrets to a code repository! This is the most common mistake that you can make when handling secrets. You will never need to or should commit a secret to a code repository for any reason whatsoever.

🔒 Keep your secrets hidden! Your secrets should never be hardcoded into your application code. Instead, they must always be passed to your code after your code is running. Every platform you use will have some mechanism for passing secrets to your code at runtime. In general, the system environment is where you should get your secrets after your application starts up.

👀 Heroku provides a mechanism for getting runtime variables to your application after it is running, which is how you should be getting your secrets to your application: [https://devcenter.heroku.com/articles/config-vars](https://devcenter.heroku.com/articles/config-vars)​

The AWS security team scans for AWS keys in public repositories. If they find them, they notify the Lambda School engineering team who will rotate the keys and may lock out individual students or the entire team. Please be very careful not to commit secrets into your repository.

💥 Please be careful, you are responsible!

If you cannot think of a way to get your secrets to your application without hardcoding... stop! Talk to your TPL, APL or an Engineering Manager for a solution. Please do not ever commit your secret keys into your code repository or expose them in any other way.

Install git-secrets right now! All students using Git are required to install git-secrets ([https://github.com/awslabs/git-secrets](https://github.com/awslabs/git-secrets)) which will greatly reduce the possibility of pushing secrets to your code repository. All students are should install and use git-secrets while working in Labs. Of course, it's also a good idea to use git-secrets whenever and wherever you're writing code. Be sure to follow the Advanced Configuration steps to be sure that all current and new repos have git-secrets enabled.

Install dotenv right now! You can use dotenv or another similar tool to automatically load secrets and other runtime parameters as your application starts. These tools help to keep secrets safe by ensuring they can be easily loaded without needing to hardcode them. Be sure to that the .env file is in your .gitignore file.

Never commit the contents of your .env file to your repository!

Add the line`.env*` to your`.gitignore`file to be sure you never accidentally commit a `.env` file.

Never hardcode any secrets! Don't do it! Not even for a minute for a quick test! Chances are you'll be so happy your code works you'll forget about the hardcoded key, commit the code, push it to GitHub and will get your app shutdown or pwned and all your data exposed and your commit of a secret key will be forever tied to your GitHub ID. Use dotenv to be make managing secrets easier and use git-secrets to prevent accidents.

Don't ignore or hide mistakes! If you mess up, it's fine! The only thing that makes it not fine is if you try to hide your mistake. We might not find it, but someone will. If you expose a secret by pushing it to a repo, let your TPL or APL know immediately. We can then invalidate the secret (change the password, rotate the key) and move on.





![](<../.gitbook/assets/image (11).png>)

## Roadmap: Family Promise Homeless Shelter Intake System (Labs 29)

### Type

**Web (Node), DS** (Greenfield)

### Overview

Family Promise helps local communities coordinate their compassion to address the root causes of family homelessness. They tap existing local resources to empower families towards economic stability. Families come to them in crisis; they help them rebuild their lives with new skills and ongoing support. They address the issue holistically, providing prevention services before families reach crisis, shelter and case management when they become homeless, and stabilization programs once they have secured housing to ensure they remain independent.

The shelter currently has a paper intake system, so the head of household needs to fill out around 30 pages of questions.

Family Promise needs a digital intake system to digitize the intake process and allow supervisors, case managers, the executive director, and guests to access data relevant to them. They also need a way to identify risk factors for guests who are unlikely to exit to housing and determine which guests are more likely to require additional case management.

This product will take multiple Labs cohorts to complete.

For this initial round, we're focusing on the core functionality for the Guest, Supervisor, and Case Manager roles. We'll also develop a multiclass predictive model to attempt to identify risk factors for arriving guests.

This is a **user experience-heavy challenge**. We can't present the model in the traditional wonky, academic way—it has to be translated visually and verbally into a form highly suitable for a lay user.

### Contacts

**Stakeholder Name:** J Wylie

**Stakeholder Email:** [jwylie@familypromiseofspokane.org](mailto:jwylie@familypromiseofspokane.org)

### Technology Stack

* **BE:** Node
* **FE:** React
* **DS:** PostgreSQL
* **Auth:** Okta

### User Base

* **Family Promise Supervisor**: Responsible for handling the day-to-day needs of the guests at the shelter, including conducting intakes of new families.
* **Family Promise Case Manager:** Writes case notes on guests the shelter is serving as they work with them.
* **Guest:** A "head of household" arriving to or checked into the shelter as part of a family unit of some kind.

[Feature List](https://www.notion.so/5257d6ed0dcd44a3a0852d576dc3786f)

### Resources

(Work with stakeholder for canonical versions)

[Exit Destination Model](https://colab.research.google.com/drive/15Y1WTWgVKQN8pKLTWCqWKJs_ZQnDKpmT?usp=sharing) \[Google Colaboratory]

[Data](https://drive.google.com/file/d/1faYmEHN0Braa-Gyc-fLpQjBjHw8SjixD/view?usp=sharing) (2 years, redacted, "semi-"cleaned)

[Current Intake Packet](https://drive.google.com/file/d/1iLUgQtalpiRlW1x_nNg75CcIO09hunAr/view?usp=sharing) \[Google Drive]

[Currently Deployed Prediction Model](https://fp-prediction.herokuapp.com) (binary classification)

**FamilyPromise Colors:**

* Purple: #472D5B
* Blue: #006FBA
* Lilac: #8D4982
* Yellow: #FEC357

[PAIR People + AI Guidebook](https://pair.withgoogle.com/guidebook/)



<iframe src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FbOwyinWBikQ5jdEpSx5WcI%2FFamily-Promise-Copy"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Family_Promise_embed"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

<iframe src="https://codesandbox.io/embed/family-promise-embed-b434z?autoresize=1&fontsize=12&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Family_Promise_embed"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

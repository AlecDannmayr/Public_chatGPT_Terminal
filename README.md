# TerminatorGPT - Terminal chatGPT

TerminatorGPT is a micro cml (command line) operated software package for accessing ChatGPT from your Linux cml. 

## Installation

You'll need to install node.js to run this software. Node.js is freeware used around the world for building software, it's completely free and trusted. Node.js is the Google's V8 JavaScript engine taken from google chrome wrapped in a C++ and C package to be installed on your own machine instead of in google chrome.


To install node.js:

1. Go to [https://nodejs.org/en](https://nodejs.org/en/) and follow the simple instructions, download and follow the setup wizard, It's recommended you use the "recommended" version not the "current version" 

2. You will also need to install an IED, this is an environment for writing code, [VsCode by Microsoft](https://code.visualstudio.com/) is widely used and free, follow this link and follow to steps to install.

## Usage 

3. If you have used git before Clone the software repository from github by copying this code below and pasting it in your Mac Terminal or Windows Command line tool.

*If you haven't used Git before install git on your machine by following the instructions [Here] (https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) then follow the step above*

```bash
git clone git@github.com:AlecDannmayr/Public_chatGPT_Terminal.git
```

4. In your cml or terminal navigate into this folder by typing the below

```bash
cd.. Public_chatGPT_Terminal.git
```

5. In VsCode open the whole folder you downloaded from github "Public_chatGPT_Terminal", and navigate to the ```
.env``` file and open it, you should see ```API_KEY=""``` in this file where you will need to get and add a key.

## Get an API_KEY 

8. You now need to get your API_Key from OpenAi, you don't need the paid version, the free version is fine, it comes with free credits which take some time to use up. Go to [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys) and create an account if you don't have one.

9. Once you've created an account, follow the link above and select 

```Create new secret key```

10. Enter any name you like click create and copy the secret key, you will only get to see this once so keep it safe and don't share it with anyone online! If you loose this key you can always generate a new one by following the steps above.

11. copy and paste this key back into your .env file in VsCode and paste it between the quotations in the ```API_KEY="<Paste Key Here>"```

## Go wild! 

12. save and close all these files, then go back to your terminal/cml and run the command

```bash
npm run TerminatorGPT
```

13. Ask what you like, each time you hit return you're asking a question and ran the openAi API. If you need to quit either close the terminal or enter ```<Ctrl> + C``` to stop the process and stop the software from running.

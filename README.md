# bb-8
Sphero bb-8 droid

System requirements.
Bluetooth LE adapter
NodeJS (https://nodejs.org/ LTS)
Python (https://www.python.org/downloads/release/python-2711/)
XCode installed + command line tools

Node version 8

Installation.
1. Download sources
2. Init npm repository and fill all required data:
  * npm init
3. install required packages (sphero, noble, keypress):
  * npm install noble
  * npm install sphero
  * npm install keypress
4. after installing noble package, goto ../node_modules/noble and execute:
  * npm install
5. Open test.js and replace your device UDID in line:
  * bb8 = sphero("1467cd62cd9848b9b52e1924b1397c24");

Usage.
node test.js

FAQ.

Useful links.
http://www.ladysign-apps.com/developer/connect-play-around-with-bb-8-by-sphero-with-javascript-on-a-mac/#.Vp4zuPl96_4


Contacts.
In case of any queastions please write - oleg.dudar@gmail.com

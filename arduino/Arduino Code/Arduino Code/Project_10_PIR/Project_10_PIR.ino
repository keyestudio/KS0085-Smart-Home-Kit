/*
Keyestudio smart home Kit for Arduino
Project 10
PIR
http://www.keyestudio.com
*/

void setup () {
   Serial.begin (9600); // open serial port, and set baud rate at 9600bps
   pinMode (2, INPUT); // Define PIR as input in D2
   Serial.begin (9600);
   pinMode (13, OUTPUT); // Define LED as output in D13
   pinMode (7, OUTPUT); // Define D7 as output
   pinMode (6, OUTPUT); // Define D6 as output
}

void loop () {
   Serial.println (digitalRead (2));
   delay (500); // Delay 500ms
   if (digitalRead (2) == 1) // If someone is detected walking
  {
     digitalWrite (13, HIGH); // LED light is on
     digitalWrite (7, HIGH);
     analogWrite (6,150); // Fan rotates

   } else // If no person is detected walking
{
     digitalWrite (13, LOW); // LED light is not on
     digitalWrite (7, LOW);
     analogWrite (6,0); // The fan does not rotate
   }}
//*************************************************************************************************

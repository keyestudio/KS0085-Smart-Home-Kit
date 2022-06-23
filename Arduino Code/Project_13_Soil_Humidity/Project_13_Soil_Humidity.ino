/*
Keyestudio smart home Kit for Arduino
Project 13
Soil Humidity
http://www.keyestudio.com
*/
#include <Wire.h>
#include <LiquidCrystal_I2C.h>
volatile int value;
LiquidCrystal_I2C mylcd (0x27,16,2); // set the LCD address to 0x27 for a16 chars and 2 line display
void setup () {
  Serial.begin (9600); // Set the serial port baud rate to 9600
  value = 0;
  mylcd.init ();
  mylcd.backlight (); // Light up the backlight
  mylcd.clear (); // Clear the screen
  Serial.begin (9600); // Set the serial port baud rate to 9600
  pinMode (A2, INPUT); // Soil sensor is at A2, the mode is input
}
void loop () {
  Serial.print ("Soil moisture value:"); // Print the value of soil moisture
  Serial.print ("");
  Serial.println (value);
  delay (500); // Delay 0.5S
  value = analogRead (A2); // Read the value of the soil sensor
  if (value <300) // If the value is less than 300
{
    mylcd.clear (); // clear screen
    mylcd.setCursor (0, 0);
    mylcd.print ("value:"); //
    mylcd.setCursor (6, 0);
    mylcd.print (value);
    mylcd.setCursor (0, 1);
    mylcd.print ("dry soil"); // LCD screen print dry soil
    delay (300); // Delay 0.3S
  } 
  else if ((value>=300) && (value <= 700)) // If the value is greater than 300 and less than 700
 {
    mylcd.clear (); //clear screen
    mylcd.setCursor (0, 0);
    mylcd.print ("value:");
    mylcd.setCursor (6, 0);
    mylcd.print (value);
    mylcd.setCursor (0, 1);
    mylcd.print ("humid soil"); // LCD screen printing humid soil
    delay (300); // Delay 0.3S
  } else if (value> 700) // If the value is greater than 700
 {
    mylcd.clear ();//clear screen
    mylcd.setCursor (0, 0);
    mylcd.print ("value:");
    mylcd.setCursor (6, 0);
    mylcd.print (value);
    mylcd.setCursor (0, 1);
    mylcd.print ("in water"); /// LCD screen printing in water
    delay (300); // Delay 0.3S
  }}
//*************************************************************************************************

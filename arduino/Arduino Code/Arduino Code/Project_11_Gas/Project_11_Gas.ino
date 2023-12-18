/*
Keyestudio smart home Kit for Arduino
Project 11
Gas
http://www.keyestudio.com
*/
int MQ2 = A0; // Define MQ2 gas sensor pin at A0
int val = 0; // declare variable
int buzzer = 3; // Define the buzzer pin at D3
void setup ()
{
pinMode (MQ2, INPUT); // MQ2 gas sensor as input
Serial.begin (9600); // Set the serial port baud rate to 9600
pinMode (buzzer, OUTPUT); // Set the digital IO pin mode for output
}
void loop ()
{
val = analogRead (MQ2); // Read the voltage value of A0 port and assign it to val
Serial.println (val); // Serial port sends val value
if (val> 450)
{
tone (buzzer, 589);
delay(300);
}
else
{
noTone (buzzer);
}
}
//***************************************************

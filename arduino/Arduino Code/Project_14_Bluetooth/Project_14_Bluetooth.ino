/*
Keyestudio smart home Kit for Arduino
Project 14
Bluetooth
http://www.keyestudio.com
*/
char val;
void setup()
{
Serial.begin(9600);// Set the serial port baud rate to 9600
}
void loop()
{
while (Serial.available()>0)
{
val=Serial.read();// Read the value sent by Bluetooth
Serial.print(val);// The serial port prints the read value
}
}
//*************************************************************************

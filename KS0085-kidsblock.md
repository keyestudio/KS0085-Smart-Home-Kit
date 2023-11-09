
# **KidsBlock Tutorial**

## Getting started with KidsBlock Software

**Instruction**

The Kidsblock, based on the Scratch graphical programming software, integrates multiple mainstream mainboards, sensors as well as modules. It can be programmed by dragging graphical blocks and using the C/C++ programming language, making programming easy and interesting for children to learn.

**Download and install KidsBlock software**

**[Windows system](https://www.kidsblock.cn/Down/KidsBlock.exe)**

**[MACOS system](https://www.kidsblock.cn/Down/KidsBlock-MACOS.dmg)**


**Install Development Board Driver**

**[How to install development board driver](https://kidsblocksite.readthedocs.io/en/latest/driver/)**

**Start your first program**
**[Quick Start](https://kidsblocksite.readthedocs.io/en/latest/function/)**

## Projects


### Project 01 Blink LED
![Img](/kidsblock/media/img-20230302141429.png)

 1. Description
In this lesson, we will conduct an experiment to make LED blink.
Connect GND and VCC to power. The LED will be on when signal end S is high level, on the contrary, LED will turn off when signal end S is low level.
In addition, the different blinking frequency can be presented by adjusting the delayed time.

 2. Parameters 
- Control interface: digital port
- Working voltage: DC 3.3-5V
- Pin pitch: 2.54mm
- LED display color: white

 3. Needed Components
   
|PLUS control board*1 |Expansion board*1|White LED*1|USB cable *1|3Pin F-F Dupont wire*1|
| :--: | :--: | :--: |:--:|:--:|
|![Img](/kidsblock/media/img-20230302142231.png)|![Img](/kidsblock/media/img-20230302142246.png)|![Img](/kidsblock/media/img-20230302142259.png)|![Img](/kidsblock/media/img-20230302142305.png)|![Img](/kidsblock/media/img-20230302142310.png)|

 4. Sensor Expansion Board
![Img](/kidsblock/media/img-20230302142808.png)
We usually combine Arduino control board with a large number of sensors and modules. However, the pins and ports are limited on control board.
To cope with this disadvantage, we just need to stack V5 sensor board on  Keyestudio PLUS control board.
This V5 shield can be directly attached to sensors with 3 pin connectors, and be extended the commonly used communication ports as well, such as serial communication, IIC communication and SPI communication ports. What’s more, the shield comes with a reset button and 2 signal lights.


Pins Description: 
![Img](/kidsblock/media/img-20230302144024.png)

 5. Wiring Diagram
Link LED module with D13 of shield.
![Img](/kidsblock/media/img-20230302144228.png)
<span style="color: rgb(255, 76, 65);">Note: pin G, V and S of white LED module are linked with G, V and 13 of V5 board.</span>

 6. Test Code
![Img](/kidsblock/media/img-20230303142151.png)

 7. Test Result
After the code is uploaded, the white LED alternately flashes for 1000ms.
![Img](/kidsblock/media/img-20230321131850.png)
![Img](/kidsblock/media/img-20230321131854.png)

### Project 02: Breathing Light
![Img](/kidsblock/media/img-20230302145049.png)

 1. Description
In the previous lesson, we control LED on and off and to blink.
In this project, we will control LED brightness through PWM to simulate breathing effect. Similarly, you can change the step length and delay time in the code so as to demonstrate different breathing effect.

PWM is a means of controlling the analog output via digital means. Digital control is used to generate square waves with different duty cycles (a signal that constantly switches between high and low levels) to control the analog output.
In general, the input voltage of port are 0V and 5V. What if the 3V is required? Or what if switch among 1V, 3V and 3.5V? We can’t change resistor constantly. For this situation, we need to control by PWM. 
![Img](/kidsblock/media/img-20230302145230.png)
For the Arduino digital port voltage output, there are only LOW and HIGH, which correspond to the voltage output of 0V and 5V. You can define LOW as 0 and HIGH as 1, and let the Arduino output five hundred 0 or 1 signals within 1 second.
If output five hundred 1, that is 5V; if all of which is 1, that is 0V. If output 010101010101 in this way then the output port is 2.5V.
This is like showing movie. The movie we watch are not completely continuous. It actually outputs 25 pictures per second. In this case, the human can’t tell it, neither does PWM. 
If want different voltage, need to control the ratio of 0 and 1. The more 0 and 1 signals output per unit time, the more accurately control.

 2. Needed Components
   
|PLUS control board*1 |Expansion board*1|Yellow LED*1|USB cable *1|3Pin F-F Dupont wire*1|
| :--: | :--: | :--: |:--:|:--:|
|![Img](/kidsblock/media/img-20230302142231.png)|![Img](/kidsblock/media/img-20230302142246.png)|![Img](/kidsblock/media/img-20230302145405.png)|![Img](/kidsblock/media/img-20230302142305.png)|![Img](/kidsblock/media/img-20230302142310.png)|

 3. Wiring Diagram
![Img](/kidsblock/media/img-20230302145500.png)
<span style="color: rgb(255, 76, 65);">Note: The G, V and S pins of yellow LED are linked with G, V and 5.</span>

 4. Test Code
![Img](/kidsblock/media/img-20230303142742.png)

 5. Test Result
After the code is uploaded, LED smoothly changes its brightness in a circulation, which is similar to a lung breathing in and out.
![Img](/kidsblock/media/img-20230321131836.png)


 6. Relevent Knowledge
PWM is a tech of controlling the analog output via digital means. Digital control is used to generate square waves with different duty cycles (a signal that constantly switches between high and low levels).
By controlling duration ratio of LED on and off, the voltage of 0~5V can be simulated. The duration time (technically known as high level) is called Pulse Width. 
And PWM is fully named Pulse Width Modulation. Here are five square waves of PWM. 
![Img](/kidsblock/media/img-20230302150318.png)
Every green line saparates a period, and the value in analogWrite() should be a percentage technically known as duty cycle, which is calculated by the high duration divided by the low duration in a cycle. 
The duty cycle of the first square wave equals 0%, whose value is 0 with the lowest LED birghtness(light-off state). 
The longer the duration of high level is, the brighter LED will be. 
Therefore, the last duty cycle equals 100%, whose value is 255 with the brightest LED. 
In practice, PWM is mainly applied to adjust LED brightness and motor speed. 


### Project 03 Passive Buzzer
![Img](/kidsblock/media/img-20230302150518.png)

 1. Description
There are prolific interactive works completed by Arduino. The most common one is sound and light display. We always use LED to make experiments. For this lesson, we design circuit to emit sound. 
Generally, sound components are buzzer and horns, in which the former is easier to use. 
Buzzer includes about active buzzer and passive buzzer. In this experiment, we adopt passive buzzer. While using passive buzzer, we can control different sound by inputting square waves with distinct frequency.
During this experiment, we control code to make buzzer sound, begin with “tick, tick” sound, then make passive buzzer emit “do re mi fa so la si do”, and play specific songs.

 2. Needed Components

|PLUS control board*1 |Expansion board*1|Passive buzzer*1|USB cable*1|3Pin F-F Dupont wire*1|
| :--: | :--: | :--: |:--:|:--:|
|![Img](/kidsblock/media/img-20230302142231.png)|![Img](/kidsblock/media/img-20230302142246.png)|![Img](/kidsblock/media/img-20230302150803.png)|![Img](/kidsblock/media/img-20230302142305.png)|![Img](/kidsblock/media/img-20230302142310.png)|

 3. Wiring Diagram：
![Img](/kidsblock/media/img-20230317131712.png)
<span style="color: rgb(255, 76, 65);">Note:The G, V and S pins of passive buzzer are connected to G, V and 3.</span>

 4. Test Code 1
![Img](/kidsblock/media/img-20230303143135.png)

 5. Test Result 1
After the code is uploaded, “tick, tick” sound emit from the passive buzzer. 


 6. Test Code 2
![Img](/kidsblock/media/img-20230303143241.png)

 7. Test Result 2
After the code is uploaded, the passive buzzer sings like “do re mi fa so la si do” and play a specific song. 
![Img](/kidsblock/media/img-20230321131811.jpg)



### Project 04 Button Controls LED
![Img](/kidsblock/media/img-20230302154826.png)

 1. Description
In this lesson, we will read the output value of external device by using the input function of I/O port. Also, we will do an experiment with a button and an LED to know more about I/O.
The button belongs to switch quantity (digital quantity) components. Composed of normally open contact and normally closed contact, it is similar to ordinary switch. 
When the normally-open contact bears pressure, the circuit will be on state; however, when this pressure disappears, this contact will go back to be the initial state(off state).

 2. Needed Components

|PLUS control board*1 |Expansion board*1|Yellow LED*1|Button sensor*1|USB cable*1|3Pin F-F Dupont wire*2|
| :--: | :--: | :--: |:--:|:--:|:--:|
|![Img](/kidsblock/media/img-20230302142231.png)|![Img](/kidsblock/media/img-20230302142246.png)|![Img](/kidsblock/media/img-20230302155112.png)|![Img](/kidsblock/media/img-20230302155120.png)|![Img](/kidsblock/media/img-20230302142305.png)|![Img](/kidsblock/media/img-20230302142310.png)|

 3. Wiring Diagram
![Img](/kidsblock/media/img-20230302155244.png)
<span style="color: rgb(255, 76, 65);">Note: The G, V, and S pins of button sensor module are separately connected to G, V, and 4 on the shield, and the G, V, and S pins of the yellow LED are linked with G, V, and 5 on the expansion board.</span>

 4. Test Code
Then, we will design the program to make LED on by pressing button placed at the ③ on the house.
Comparing with previous experiments, we add a conditional judgement statement---“if” statement. The written sentences of Arduino is based on C language, therefore, the condition judgement statement of C is suitable for Arduino, like while, swich, etc.

For this lesson, we take simple “if” statement as example to demonstrate: 

If button is pressed, digital 4 is low level, then we make digital 5 output high level , then LED will be on; conversely, if the button is released, digital 4 is high level, we make digital 5 output low level, then LED will go off.

![Img](/kidsblock/media/img-20230303143510.png)

 5. Test Result
After the code is uploaded, LED will light on when the button is pressed, and it will go off when the button is released. 
![Img](/kidsblock/media/img-20230321131731.png)



### Project 05 Relay
![Img](/kidsblock/media/img-20230303134510.png)

 1. Description
This is an Arduino dedicated module, compatible with Arduino sensor expansion board. It includes a control system (an input loop) and a controlled system (an output loop). 
Commonly used in automatic control circuits, the relay module is an "automatic switch" that controls a larger current and a lower voltage with a smaller current and a lower voltage.
Therefore, it plays the role of automatic adjustment, safety protection and conversion in the circuit. It allows Arduino to drive loads below 3A, such as LED light strips, DC motors, miniature water pumps, solenoid valve interface.
Its main internal components are electromagnet A, armature B, spring C, moving contact D, static contact(normally open contact)E, and static contact(normally closed contact)F, as shown in the figure. 
![Img](/kidsblock/media/img-20230303134635.png)
As long as a certain voltage is applied to both ends of the coil, a certain current will flow through it. 
This will generate electromagnetic effects, and the armature will attract the iron core against the pulling force of the return spring under the action of electromagnetic force attraction, thereby driving the moving contact and the normally-open contact to attract each other. 
When the coil is disconnected, the electromagnetic suction will disappear, and the armature will return to the original position under the reaction force of the spring, releasing the moving contact and the original normally-closed contact. And this achieves the purpose of turning on and off in the circuit. 

To distinguish the "normally open and closed" contacts: 
When the relay coil is powered off, static contacts on disconnected state are called "normally open contacts", while those on connected state are called "normally closed contact".

The module comes with 2 positioning holes for you to fix the module to other devices.

 2. Parameters
- Working voltage: 5V (DC)
- Input signal: digital signal (high level 1, low level 0)
- Contact: static contact (normally-open contact, normally-closed contact) and moving contact

 3. Needed Components

|PLUS control board*1 |Expansion board*1|Relay module*1|USB cable*1|3Pin F-F Dupont wire*1|
| :--: | :--: | :--: |:--:|:--:|
|![Img](/kidsblock/media/img-20230302142231.png)|![Img](/kidsblock/media/img-20230302142246.png)|![Img](/kidsblock/media/img-20230303135617.png)|![Img](/kidsblock/media/img-20230302142305.png)|![Img](/kidsblock/media/img-20230302142310.png)|

 4. Wiring Diagram
![Img](/kidsblock/media/img-20230307142015.png)
<span style="color: rgb(255, 76, 65);">Note: On the expansion board, the G, V, and S pins of 1-channel relay module are connected to G, V, and 12 respectively.</span>

 5. Test Code
![Img](/kidsblock/media/img-20230303144529.png)

 6. Test Result
After the code is uploaded, when the relay is connected, the white LED will light on; conversely, when it is disconnected, the LED will go off.
![Img](/kidsblock/media/img-20230321131721.png)



### Project 06 Optical Control Light
![Img](/kidsblock/media/img-20230303145103.png)

 1. Description
The photocell sensor (photoresistor) is a resistor made by the photoelectric effect of a semiconductor. As highly sensitive to ambient light, its resistance value vary with different light intensity.
Its signal end is connected to the analog port of the microcontroller. When the light intensity increases, the resistance will decrease, but the analog value of the microcontroller will increase. On the contrary, when the light intensity decreases, the analog value of the microcontroller will go down. 
Therefore, we can use the photoresistor to read the corresponding analog value and sense the light intensity in the environment. 
It is commonly applied to light measurement, control and conversion as well as light control circuit.

 2. Needed Components

|PLUS control board*1 |Expansion board*1|Yellow LED*1|Photocell sensor*1|USB cable*1|3Pin F-F Dupont wire*2|
| :--: | :--: | :--: |:--:|:--:|:--:|
|![Img](/kidsblock/media/img-20230302142231.png)|![Img](/kidsblock/media/img-20230302142246.png)|![Img](/kidsblock/media/img-20230302155112.png)|![Img](/kidsblock/media/img-20230303150005.png)|![Img](/kidsblock/media/img-20230302142305.png)|![Img](/kidsblock/media/img-20230302142310.png)| 

 3. Wiring Diagram
![Img](/kidsblock/media/img-20230303150914.png)
<span style="color: rgb(255, 76, 65);">On the expansion board, the G, V, and S pins of the photocell sensor module are connected to G, V, and A1; the G, V, and S pins of the yellow LED are linked with G, V, and 5 separately.</span>

 4. Test Code
![Img](/kidsblock/media/img-20230322083143.png)

 5. Test Result
After uploading the test code, the LED will light up. When you change the intensity of the ambient light, the brightness of the yellow LED changes.
![Img](/kidsblock/media/img-20230321131700.png)




### Project 07 Servo
![Img](/kidsblock/media/img-20230307171014.png)

 1. Description

Servo can control doors and windows. In this course, we’ll introduce its principle and demonstrate how to use it.
Servo motor is a position control rotary actuator. It mainly consists of housing, circuit board, core-less motor, gear and position sensor. 
Its working principle is that the servo receives the signal sent by MCU or receiver, and produces a reference signal with a period of 20ms and width of 1.5ms, then compares the acquired DC bias voltage to the voltage of the potentiometer and obtains the voltage difference output.

Generally, Servo reserves three external wires distinguished by colors of brown(GND), red(VCC, the positive pole of power supply) and orange(signal). But the colors vary from different brands of Servo.
![Img](/kidsblock/media/img-20230303152542.png)

When the motor speed is constant, the potentiometer is driven to rotate through the cascade reduction gear, which leads 0 voltage difference, and the motor stops rotating.
Commonly, the angle range of servo rotation is 0° --180 °, which is controlled by regulating the duty cycle of PWM (Pulse-Width Modulation) signal.
The standard cycle of PWM signal is 20ms (50Hz). Theoretically, the width is distributed between 1ms-2ms, but in fact, it's between 0.5ms-2.5ms, and its width corresponds to the rotation angle from 0° to 180°.
Pay attention that that for different brand motor, the same signal may have different rotation angle.
![Img](/kidsblock/media/img-20230303152309.png)

The corresponding servo Angle:
![Img](/kidsblock/media/img-20230303152826.png)

 2. Parameters
- Working voltage: DC 4.8V〜6V
- perating angle range: About 180°(at 500→2500 μsec)
- Pulse width range: 500→2500 μsec
- No-load speed: 0.12±0.01 sec/60(DC 4.8V) 0.1±0.01 sec/60(DC 6V)
- No-load current: 200±20mA(DC 4.8V) 220±20mA(DC 6V)
- Stopping torque: 1.3±0.01kg·cm(DC 4.8V) 1.5±0.1kg·cm(DC 6V)
- Stop current: ≦850mA(DC 4.8V)  ≦1000mA(DC 6V)
- Standby current: 3±1mA(DC 4.8V)  4±1mA(DC 6V)
- Lead length: 250±5mm
- Appearance dimensions: 22.9 * 12.2 * 30mm
- Weight: 9±1g(without servo horn) 

 3. Needed Components

|PLUS control board*1 |Expansion board*1|Servo*1|USB cable*1|
| :--: | :--: | :--: |:--:|
|![Img](/kidsblock/media/img-20230302142231.png)|![Img](/kidsblock/media/img-20230302142246.png)|![Img](/kidsblock/media/img-20230307170845.png)|![Img](/kidsblock/media/img-20230302142305.png)|

 4. Wiring Diagram
![Img](/kidsblock/media/img-20230303153358.png)
<span style="color: rgb(255, 76, 65);">Note: On the expansion board, the brown wire of the servo is connected to Gnd (G), the red wire is linked with 5v (V), and the orange wire is connected to digital pin 9.</span>

 5. Test Code
![Img](/kidsblock/media/img-20230303154936.png)

 6. Test Result
Upload code, wire up components according to connection diagram, and power on. 
The servo rotates from 0° to 180° then from 180°~0° in loop.
![Img](/kidsblock/media/img-20230321131635.jpg)



### Project 08 Fan
![Img](/kidsblock/media/img-20230303155536.png)

 1. Description
L9110 fan module adopts L9110 motor control chip to control the rotation direction and speed of the motor.
Moreover, this module is an important part of fire robot, which can put out the flame within 20cm distance.

 2. Parameters
- Working voltage: 5V
- Working current: 0.8A
- Support TTL / CMOS output level
- Control and drive integrate in IC
- High pressure protection for pins
- Working temperature: 0-80° 

 3. Needed Components

|PLUS control board*1 |Expansion board*1|Fan *1|USB cable*1|4pin F-F Dupont wire*1|
| :--: | :--: | :--: |:--:|:--:|
|![Img](/kidsblock/media/img-20230302142231.png)|![Img](/kidsblock/media/img-20230302142246.png)|![Img](/kidsblock/media/img-20230303160043.png)|![Img](/kidsblock/media/img-20230302142305.png)|![Img](/kidsblock/media/img-20230303160104.png)|
 
 4. Wiring Diagram
![Img](/kidsblock/media/img-20230303160148.png)
<span style="color: rgb(255, 76, 65);">On the expansion board, the GND, VCC, INA, and INB pins of the fan module are respectively connected to G, V, 7, 6.</span>

 5. Test Code
![Img](/kidsblock/media/img-20230303163142.png)

 6. Test Result
Upload test code, hook up the components according to connection diagram, and dial the DIP switch to right side and power on.
The fan rotates clockwise and counterclockwise for 3000ms alternately with an interval of stop for 1000ms.
![Img](/kidsblock/media/img-20230321131543.png)
![Img](/kidsblock/media/img-20230321131548.png)



### Project 09 Steam Sensor
![Img](/kidsblock/media/img-20230303164007.png)

 1. Description
The steam sensor can be used as a rain detector and a liquid level switch. When the humidity of the sensor surface increases, the output voltage and the analog value we read will increase.

Working principle: It detects the amount of water through the exposed printed parallel lines on the circuit board. The more water there is, the more wires will be connected. 
As the contact area of the conductor increases, the output voltage of the V-pin and the analog value of S detected at the signal will gradually rise.

In addition to measuring the amount of water, it can also detect water vapor in the air.

<span style="color: rgb(255, 76, 65);">Note: the connection part is not waterproof, please don’t immerse it in the water!</span>

 2. Parameters
- Working voltage: DC 3.3-5V
- Working current: <20mA
- Operating temperature range: -10℃~ + 70℃
- Control signal: Analog signal output
- Interface: 3pin interface with 2.54mm in pitch

 3. Needed Components

|PLUS control board*1 |Expansion board*1|Steam sensor*1|USB canble*1|3Pin F-F Dupont wire*1|
| :--: | :--: | :--: |:--:|:--:|
|![Img](/kidsblock/media/img-20230302142231.png)|![Img](/kidsblock/media/img-20230302142246.png)|![Img](/kidsblock/media/img-20230303164915.png)|![Img](/kidsblock/media/img-20230302142305.png)|![Img](/kidsblock/media/img-20230302142310.png)|

 4. Wiring Diagram
![Img](/kidsblock/media/img-20230303165035.png)
<span style="color: rgb(255, 76, 65);">Note: On the expansion board, the pins G，V and S of steam sensor are connected to G, V and A3.</span>

 5. Test Code
![Img](/kidsblock/media/img-20230303165555.png)

 6. Test Result 
After uploading code, wire components up and power the board on. Click ![Img](/kidsblock/media/img-20230303165745.png) on the serial port to set the baud rate to 9600.
When detecting different humidity, the sensor will output different current value, as shown below. 
Place a drop of water at the detecting area of the sensor, and the analog value will be displayed on serial monitor of Arduino.
![Img](/kidsblock/media/img-20230321131526.png)
![Img](/kidsblock/media/img-20230307090831.png)



### Project 10 Intelligent Fan for Human Body
![Img](/kidsblock/media/img-20230303170001.png)

 1. Description
This motion sensor can detect infrared signals from moving objects, and output digital signals. It detects movement of human body and applies to a variety of occasions.
Compared with traditional PIR motion sensors, this module integrates a digital pyroelectric infrared sensor and connecting pins. 
It features higher sensibility and reliability, low power consumption and working voltage, light weight, small occupation and simple peripheral circuits.

 2. Parameters
- Input voltage: DC 3.3 ~ 5 V (Maximum 6V)
- Working current: 15uA
- Working temperature: -20 ~ 85℃
- Output voltage: High level of 3V; low level of 0 V
- Output delay time (high level): About 2.3 to 3 seconds
- Detection angle: About 100°
- Maximum detection distance: About 7m
- Output indicator (it lights on at a high level)
- Pin limit current: 100mA

<span style="color: rgb(255, 76, 65);">NOTE</span><br>
<span style="color: rgb(255, 76, 65);">1. The maximum distance is 3-4m during testing.</span><br>
<span style="color: rgb(255, 76, 65);">2. In the test, open the white lens to check rectangular sensing part. When the long line of the sensing part is parallel to the ground, the distance is the best.</span><br>
<span style="color: rgb(255, 76, 65);">3. In the test, covering the sensor with white lens can measure the distance precisely.</span><br>
<span style="color: rgb(255, 76, 65);">4. When temperature exceeds 30℃, the detection distance value will reduce. 25℃ is the best.</span><br>
<span style="color: rgb(255, 76, 65);">5. After powering up and uploading the code, you can start testing after 5-10 seconds, otherwise the sensor detects inaccurately.</span><br>
<span style="color: rgb(255, 76, 65);">6. To avoid misinformation caused by great changes in environmental temperature, this module should avoid direct exposure to sunlight, car headlamps, incandescent lamps, heat sources(such as radiator and heater) as well as air conditioning. It is also susceptible to radio-frequency radiation.</span><br>

 3. Needed Components

|PLUS control board*1 |Expansion board*1|PIR motion sensor*1|Fan*1|
| :--: | :--: | :--: |:--:|
|![Img](/kidsblock/media/img-20230302142231.png)|![Img](/kidsblock/media/img-20230302142246.png)|![Img](/kidsblock/media/img-20230303171527.png)|![Img](/kidsblock/media/img-20230303171544.png)|
|**White LED*1**|**USB cable*1**|**3Pin F-F Dupont wire*2**|**4Pin F-F Dupont wire*1**|
|![Img](/kidsblock/media/img-20230303171732.png)|![Img](/kidsblock/media/img-20230303172115.png)|![Img](/kidsblock/media/img-20230302142310.png)|![Img](/kidsblock/media/img-20230303171617.png)|

 4. Wiring Diagram 
![Img](/kidsblock/media/img-20230303172551.png)
<span style="color: rgb(255, 76, 65);">Note: On the expansion board, the G, V and S of PIR motion sensor are connected to G, V and 2; the GND, VCC, INA and INB of fan module are separately linked with G,V,7,6. The pin G, V and S of LED module are linked with G, V and 13.</span>

 5. Test Code
![Img](/kidsblock/media/img-20230303173638.png)

 6. Test Result
After uploading code, wire components up and power the board on. Click ![Img](/kidsblock/media/img-20230303174037.png) on the serial port to set the baud rate to 9600.
If PIR motion sensor detects someone nearby, LED will light up, the fan will rotate, and the serial port will display “Somebody is in this area!”; If nobody is around, the serial monitor will show “No one!”, LED will be off, and fan will stay still.
![Img](/kidsblock/media/img-20230321120942.png)

![Img](/kidsblock/media/img-20230303173905.png)


### Project 11 Dangerous Gas Alarm
![Img](/kidsblock/media/img-20230303183203.png)

 1. Description
This gas sensor is used for household gas leak alarms, industrial combustible gas alarms and portable gas detection instruments. Also, it is suitable for the detection of liquefied gas, benzene, alkane, alcohol, hydrogen, etc.
MQ-2 gas sensor accurately detects multiple gases. It enjoys high sensitivity, fast response, good stability, long life, and simple drive circuit. 

It can detect the concentration of flammable gas and smoke in the range of 300~10000ppm. Meanwhile, it has high sensitivity to natural gas, liquefied petroleum gas and other smoke, especially to alkanes smoke.
It must be heated for a period of time before using, otherwise the output resistance and voltage are not accurate. However, the heating voltage should not be too high, or it will cause internal signal line to blow.

This sensor employs tin dioxide semiconductor gas-sensitive material. At a certain temperature, tin dioxide adsorbs oxygen in the air and forms negative ion adsorption of oxygen, reducing the electron density in the semiconductor, thereby increasing its resistance value.

When in contact with flammable gas in the air and smog, if the potential barrier at the grain boundary is adjusted by the smog, it will change the surface conductivity. As a result, we will know whether smoke or flammable gas is in presence. 
The greater the concentration of smoke or flammable gas is, the greater the conductivity and the analog signal output will be, and the lower the output resistance will be. 
In addition, the sensitivity can be adjusted via the potentiometer.

 2. Parameters
- Working voltage: 3.3 ~ 5V (DC)
- Interface: 4pin (VCC, GND, D0, A0)
- Output signal: digital signal and analog signal
- Weight: 7.5g

 3. Needed Components

|PLUS control board*1 |Expansion board*1|MQ-2 gas sensor*1|Passive buzzer*1|
| :--: | :--: | :--: |:--:|
|![Img](/kidsblock/media/img-20230302142231.png)|![Img](/kidsblock/media/img-20230302142246.png)|![Img](/kidsblock/media/img-20230303184448.png)|![Img](/kidsblock/media/img-20230303184507.png)|
|**USB cable*1**|**3Pin F-F Dupont wire*1**|**F-F Dupont*3**| |
|![Img](/kidsblock/media/img-20230303172115.png)|![Img](/kidsblock/media/img-20230302142310.png)|![Img](/kidsblock/media/img-20230303184711.png)![Img](/kidsblock/media/img-20230303184717.png)![Img](/kidsblock/media/img-20230303184721.png)| |

 4. Wiring Diagram
![Img](/kidsblock/media/img-20230303184835.png)
<span style="color: rgb(255, 76, 65);">Note: On the expansion board, the pin GND, VCC and A0 of gas sensor are linked with pin G, V and A0. The pin G,V and S of passive buzzer are connected to G,V and 3.</span>

 5. Test Code
![Img](/kidsblock/media/img-20230303190141.png)

 6. Test Result
Upload test code, wire components up and power on. 
When the detected analog value of flammable gas(lighter gas is included) is greater than 450, the passive buzzer emits sound. However, when there is no flammable gas, the passive buzzer keeps quiet.
![Img](/kidsblock/media/img-20230321131455.png)



### Project 12 1602 LCD Display
![Img](/kidsblock/media/img-20230303190857.png)

 1. Description
This display module, with I2C communication module, shows contents(blue background and white letters) in 2 lines with 16 characters per line. And a blue potentiometer is on the back of LCD display for adjusting the backlight. 
It is attached to I2C interface of MCU, and its communication default address is 0x27. The original 1602 LCD can run with 7 IO ports, but ours is built with IIC/I2C interface, saving 5 IO ports. 
Alternatively, the module comes with 4 positioning holes with a diameter of 3mm, which is convenient for you to fix on other devices.

<span style="color: rgb(255, 76, 65);">Notice that when the screen gets brighter or darker, the characters will become more or less visible.</span>

 2. Parameters
- I2C address: 0x27
- Backlight (blue, white)
- Power supply voltage: 5V
- Adjustable contrast
- GND: A pin that connects to ground
- VCC: A pin that connects to a +5V power supply
- SDA: A pin that connects to analog port A4 for IIC communication
- SCL: A pin that connects to analog port A5 for IIC communication

 3. Needed Components

|PLUS control board*1 |Expansion board*1|1602 LCD display*1|USB cable*1|4Pin F-F Dupont wire*1|
| :--: | :--: | :--: |:--:|:--:|
|![Img](/kidsblock/media/img-20230302142231.png)|![Img](/kidsblock/media/img-20230302142246.png)|![Img](/kidsblock/media/img-20230303191709.png)|![Img](/kidsblock/media/img-20230302142305.png)|![Img](/kidsblock/media/img-20230303191644.png)|

 4. Wiring Diagram
![Img](/kidsblock/media/img-20230303191842.png)
<span style="color: rgb(255, 76, 65);">GND is linked with GND（-）of IIC communication, VCC is connected to 5V（+）, SDA to SDA, SCL to SCL</span>

 5. Test Code
![Img](/kidsblock/media/img-20230303193108.png)

 5. Test Result
After hooking up components and uploading sample code, the 1602 LCD will print "Hello, world!, keyestudio!", and the backlight can be adjusted through a potentiometer.
![Img](/kidsblock/media/img-20230321131313.png)

<span style="color: rgb(255, 76, 65);">Note: When the display doesn’t show characters, you can adjust the potentiometer behind the 1602LCD to make the it show corresponding character string.</span>




### Project 13 Soil Humidity Detector
![Img](/kidsblock/media/img-20230303194038.png)

 1. Description
This sensor detects the soil humidity.
If the soil is lack of water, the analog value output by the sensor will decrease; otherwise, the value will increase. Virtually, It is applied to prevent your household plants from being destitute of water.
The soil humidity sensor has two probes. When inserted into the soil, it will get resistance value by reading the current changes between the two probes and converting resistance value into moisture content. The higher the moisture (less resistance) is, the higher the conductivity will be. 
The surface of the sensor has undergone metallization process to prolong its service life. You may insert it into the soil and then use the AD converter to read the value. With the help of this sensor, the plant can remind of you: I need water.

It also comes with 2 positioning holes for installing on other devices.

 2. Parameters
- Working voltage: 3.3V-5V
- Working current: ≤20mA
- Output Voltage: 0 ~ 2.3V(When the sensor is totally immersed in water, the voltage will be 2.3V)
- the higher humidity is, the higher the output voltage will be. 
- Sensor type: Analog output
- Interface definition: S - Signal, G - GND, V - VCC

 3. Needed Components

|PLUS control board*1 |Expansion board*1|Humidity sensor*1|1602 LCD display*1|USB cable*1|4Pin F-F Dupont wire*1|3Pin F-F Dupont wire*1|
| :--: | :--: |:--:| :--: |:--:|:--:|:--:|
|![Img](/kidsblock/media/img-20230302142231.png)|![Img](/kidsblock/media/img-20230302142246.png)|![Img](/kidsblock/media/img-20230303194856.png)|![Img](/kidsblock/media/img-20230303191709.png)|![Img](/kidsblock/media/img-20230302142305.png)|![Img](/kidsblock/media/img-20230303191644.png)|![Img](/kidsblock/media/img-20230303194919.png)|

 4. Wiring Diagram
![Img](/kidsblock/media/img-20230303195015.png)
<span style="color: rgb(255, 76, 65);">On the expansion board, the pin G, V and S of soil humidity sensor are connected to G, V and A2; GND of 1602LCD is linked with GND of ICC communication, VCC is connected to 5V（+）, SDA to SDA, SCL to SCL.</span>

 5. Test Code
![Img](/kidsblock/media/img-20230306101856.png)
![Img](/kidsblock/media/img-20230306101931.png)

 6. Test Result
After uploading code, click ![Img](/kidsblock/media/img-20230303174037.png) on the serial port to set baud rate to 9600. Insert the soil humidity sensor into the soil. The greater the humidity is, the larger the value(0-1023) will be. Meanwhile, the 1602LCD will display the corresponding value.
![Img](/kidsblock/media/img-20230321131256.png)


### Project 14 Bluetooth Test
![Img](/kidsblock/media/img-20230306104600.png)

 1. Description
Bluetooth technology is a wireless standard technology that enables short-distance data exchange between fixed devices and mobile devices, and it builds personal area networks as well(using UHF radio waves in the ISM band of 2.4 to 2.485 GHz).
This is a host-slave device equipped with HM-10 Bluetooth module. The host sends commands to the slave, while the slave only receives. 
The HM-10 Bluetooth module supports the Bluetooth 4.0 protocol in not only Android but also iOS system. In the experiment, we take the HM-10 Bluetooth module as a Slave and our mobile phone as a Host. Install the Bluetooth APP on our phone and connect to this module, so that we control smart home kits via Bluetooth. 

 2. Interface Description
| Pins | Description |
| :--: | :-- |
| BRK | Input pin(short press to control), or input single pulse of 100ms low level to achieve the following functions:<br> ① When BT is in sleep state, it will be activated to normal state; if open AT+NOTI, serial port will send OK+WAKE.<br> ② It actively requests to disconnect in connected state. <br> ③ If it is in standby mode, it will back to the initial state.|
| RXD | Serial data inputs |
| TXD | Serial data outputs |
| GND | Ground line |
| VCC | Positive pole of power with an input of 5V |
| STATE | Output pin, shows the working state of module:<br> Flash slowly in standby state and repeat 500ms pulse;<br> Always light in connected state in a high level; <br> Or you may set light state as you needed.  |

 3. Parameters
- Bluetooth protocol: Bluetooth Specification V4.0 BLE
- No byte limit in receiving and sending of serial port.
- 100m ultra-distance communication with phones/pads in an open environment.
- USB protocol: USB V2.0
- Working frequency: 2.4GHz ISM band
- Modulation method: GFSK(Gaussian Frequency Shift Keying)
- Transmission power: -23dbm, -6dbm, 0dbm, 6dbm, which can be modified by AT command
- Sensitivity: ≤-84dBm at 0.1% BER
- Transmission rate: 6K bytes for asynchronous and synchronous
- Security feature: Authentication & encryption
- Supporting service: Central & Peripheral UUID FFE0, FFE1
- Power consumption: Auto-sleep mode with stand by current of 400uA~800uA; current is 8.5mA during transmission.
- Power supply: 5V DC
- Working temperature: -5 ~ +65℃

 4. Needed Components

|PLUS control board*1 |Expansion board*1|HM-10 BT module*1|White LED*1|USB cable*1|
| :--: | :--: | :--: |:--:|:--:|
|![Img](/kidsblock/media/img-20230302142231.png)|![Img](/kidsblock/media/img-20230302142246.png)|![Img](/kidsblock/media/img-20230306134446.png)|![Img](/kidsblock/media/img-20230302142259.png)|![Img](/kidsblock/media/img-20230302142305.png)|

 5. Wiring Diagram
![Img](/kidsblock/media/img-20230306134653.png)
<span style="color: rgb(255, 76, 65);">On the sensor expansion board, the RXD, TXD, GND, and VCC of the Bluetooth module are respectively connected to TXD, RXD, GND, and 5V, and the STATE and BRK pins of the Bluetooth module do not need connecting.</span>

 6. Test Code 1
**Read Bluetooth Character Strings**
![Img](/kidsblock/media/img-20230306135539.png)
<span style="color: rgb(255, 76, 65);">Pay attention: Remove the Bluetooth module please when uploading the test code. Otherwise, the code will fail to be uploaded.</span>

 7. Bluetooth APP download
In the previous, we’ve introduced the basic parameter principle of HM-10 Bluetooth module. 
In this project, let's show you how to use the HM-10 Bluetooth module. To efficiently control this kit, we specially designed an APP as shown below.
![Img](/kidsblock/media/img-20230306115553.png)
There are twelve control buttons and four sliders on App. When we press control button, the Bluetooth sends a control character and the module will receive a corresponding counterpart. 
When programming, we set the corresponding function of each sensor or module according to the corresponding key control character. We will test 16 buttons on app in the following parts.

 （1）Android Mobile/Pad: 
<span style="color: rgb(255, 76, 65);">Note: You need to enable the location information before connecting to HM-10 Bluetooth module via cellphone, otherwise, Bluetooth may not be connected.</span>
<br><br>

A. Enter Google play and search “**keyes IoT**”. Download the app in APP Store or from: https://play.google.com/store/apps/details?id=com.keyestudio.iot_keyes. 
Click ![Img](/kidsblock/media/img-20230306141057.png) to open APP, and the following interface will pop up: 
![Img](/kidsblock/media/img-20230306133728.png)
<br>

B. Upload code and power on. LED of Bluetooth module blinks. Open App to click “**SCANING**” to pair.
![Img](/kidsblock/media/img-20230306140646.png)
<br><br>

C. Click “**connect**”, then Bluetooth is connected successfully(indicator is always on) as shown below:
![Img](/kidsblock/media/img-20230306140719.png)

 (2) iOS System
A. Open App Store.
![Img](/kidsblock/media/img-20230306140923.png)
<br>
B. Search "**IoT keyes**" in APP Store, and click "**Download**".
![Img](/kidsblock/media/img-20230306144026.png)
<br>
C. Tap ![Img](/kidsblock/media/img-20230306141057.png) to enter the interface as follow:
![Img](/kidsblock/media/img-20230306141105.png)
<br>
D. Click "Connect" and HMSoft to pair the Bluetooth. After paring successfully, the red indicator will always light on.
![Img](/kidsblock/media/img-20230306142548.png)
![Img](/kidsblock/media/img-20230306142600.png)
<br>
16 control button are preserved in the APP. After APP and HM-10 being successfully connected, tap the control button on APP.
When we press control button, the Bluetooth sends a control character and the module will receive a corresponding counterpart.
When programming, we set the corresponding function of each sensor or module according to the corresponding key control character. 

 8. Test Result 1
Upload test code and plug Bluetooth on the expansion board. Open the APP to pair with it.
Click ![Img](/kidsblock/media/img-20230303174037.png) on the serial monitor to set the baud rate to 9600. Tap the buttons on APP and we can see corresponding characters below: 
![Img](/kidsblock/media/img-20230321131145.png)
![Img](/kidsblock/media/img-20230321131232.png)

![Img](/kidsblock/media/img-20230306135409.png)

We can call a functional list through tests(ios is basically the same)</span>）
![Img](/kidsblock/media/img-20230306143836.png)

 9. Test Code 2
Bluetooth controls LED
![Img](/kidsblock/media/img-20230306152006.png)
<span style="color: rgb(255, 169, 0);">Note: Remove the Bluetooth module please when uploading the test code. Otherwise, the code will fail to be uploaded. Remember to pair Bluetooth after uploading the code.</span>

 10. Test Result 2
Upload test code and plug Bluetooth on the expansion board. Open the APP to pair with it.
Tap ![Img](/kidsblock/media/img-20230306152432.png) to light the white LED up, and tap again ![Img](/kidsblock/media/img-20230306152449.png) to turn it off.
![Img](/kidsblock/media/img-20230321131052.png)



### Project 15 Multi-functional Smart Home
![Img](/kidsblock/media/img-20230306154623.png)

 1. Description
In the previous projects, we’ve introduced how to use sensors, modules and HM-10 Bluetooth module. For this lesson, we will present all functions of this smart home.

 2. Needed Components

|PLUS control board*1|Expansion board*1|Fan*1|Servo*2|
| :--: | :--: | :--: |:--: |
|![Img](/kidsblock/media/img-20230302142231.png)|![Img](/kidsblock/media/img-20230302142246.png)|![Img](/kidsblock/media/img-20230303160043.png)|![Img](/kidsblock/media/img-20230307171014.png)![Img](/kidsblock/media/img-20230307171014.png)|
|**1602LCD display*1** |**Button sensor*2**| **Whit LED*1** | **Relay module*1** |
|![Img](/kidsblock/media/img-20230303190857.png)|![Img](/kidsblock/media/img-20230302154826.png)![Img](/kidsblock/media/img-20230302154826.png)|![Img](/kidsblock/media/img-20230302142259.png)|![Img](/kidsblock/media/img-20230303134510.png)|
|**Passive buzzer*1** |**PIR motion sensor*1**| **Steam sensor*1** | **Photocell sensor*1** |
|![Img](/kidsblock/media/img-20230302150518.png)|![Img](/kidsblock/media/img-20230303170001.png)|![Img](/kidsblock/media/img-20230303164007.png)|![Img](/kidsblock/media/img-20230303145103.png)|
|**BT module*1** |**Yellow LED*1**| **Soil humidity sensor*1** | **MQ-2 gas sensor*1** |
|![Img](/kidsblock/media/img-20230306104600.png)|![Img](/kidsblock/media/img-20230302155112.png)|![Img](/kidsblock/media/img-20230303194038.png)|![Img](/kidsblock/media/img-20230303183203.png)|
|**USB cable*1** |**F-F Dupond wires**| **4pin F-F Dupond wire*1** | **3pin F-F Dupond wires*10** |
|![Img](/kidsblock/media/img-20230302142305.png)|![Img](/kidsblock/media/img-20230308082338.png)|![Img](/kidsblock/media/img-20230303191644.png)|![Img](/kidsblock/media/img-20230308082526.png)|

 3. Wiring Diagram
![Img](/kidsblock/media/img-20230308082655.png)

|Names|Sensor/module pins|Expansion pins|Installation position|
| :--: | :--: | :--: |:--: |
|PIR motion sensor|G/V/S|G/V/2|⑤|
|Passive buzzer|G/V/S|G/V/3|⑯|
|Button sensor 1|G/V/S|G/V/4|③|
|Yellow LED|G/V/S|G/V/5|⑫|
|Fan|GND/VCC/INA/INB|G/V/7/6|⑮|
|Button sensor 2|G/V/S|G/V/8|④|
|Servo 1 for door|Brown line/Red line/Orange line|G/V/9|⑰|
|Servo 2 for window|Brown line/Red line/Orange line|G/V/10|⑪|
|MQ-2 gas sensor|GND/VCC/D0/A0|G/V/11/A0|⑩|
|Relay module|G/V/S|G/V/12|⑥|
|White LED|G/V/S|G/V/13|①|
|1602LCD display|GND/VCC/SDA/SCL|GND/5V/SDA/SCL|②|
|Photocell sensor|G/V/S|G/V/A1|⑭|
|Soil humidity sensor|G/V/S|G/V/A2| |
|Steam sensor|G/V/S|G/V/A3|⑬|

 4. Test Code
For complete code, please refer to our tutorial. 
![Img](/kidsblock/media/img-20230313162055.png)

<span style="color: rgb(255, 76, 65);">（1）Remove the Bluetooth module please when uploading the test code. Otherwise, the code will fail to be uploaded. Remember to pair Bluetooth after uploading the code.</span> <br>
<span style="color: rgb(255, 76, 65);">（2）For how to download and use APP, please refer to Project 14. </span>

 5. Test Result
Upload the test code, stack expansion board on PLUS Control Board, and power on. 
After pairing and connecting Bluetooth successfully, we can control the smart home through app. 
（1）Functions:
![Img](/kidsblock/media/img-20230306143836.png)
（2）Gas alarm: When MQ2 gas sensor detects a gas leakage(detected value>300, here you may use lighter gas for testing), the buzzer emits an alarm till the value is under 100.
（3）Close window in rainy days: When the steam sensor detects a value over than 800, the servo linked to Pin 10 turns 90° to close the door. Otherwise, it turns to 180° to open the window.
（4）Turn off light at night: When the photocell sensor detects a value less than 300 and PIR motion sensor detects someone is nearby, RGB light goes on in red. Otherwise, it goes off. 
（5）Soil humidity: Insert the humidity sensor into soil. When the detected humidity value is within 10(10 is included) ~ 100, the buzzer emits sound. If the value is less than 10, the buzzer keeps silence.
（6）Door bypass code: The door is equipped with a 1602LCD display, two buttons and Servo 1. Press button 1 to enter passwords.
Correct passwords is "**. - - . - .**" , in which ”.” means "press the button" and ” - ” means "press and hold the button for more than 2S".
Each time you enter one password, the display will show a “*” . Press button 2 after inputing all passwords. 
If it is correct, the screen displays "open" and Servo 1 truns to 180° to open the door. When the motion sensor detects no one 5s later, the door close automatically. 
If it is wrong, the display shows "error". Wait for 2s and re-enter the passwords when you see and "again". Or press and hold button 2 to ring the doorbell(the buzzer emits sounds).
![Img](/kidsblock/media/img-20230321121021.png)


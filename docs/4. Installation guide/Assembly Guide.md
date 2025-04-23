# 6. Assembly Guide

Check the board A\~I and parts in the first place.

![image-20250416164450809](media/image-20250416164450809.png)

**Step 1: Install sensors on A board**

Prepare components as follows;

-   A board\*1
-   M3\*10MM round screw\*4
-   M3 nickel plated nut\*4；
-   M2.5\*10MM round screw\*4
-   button sensor\*2
-   white LED\*1
-   PIR motion sensor\*1
-   LCD1602 display\*1
-   4pin F-F dupont Cable\*1
-   3pin F-F dupont cable\*4

![image-20250416164523463](media/image-20250416164523463.png)

![image-20250416164537929](media/image-20250416164537929.png)

1.  Fix the white LED, 2 button sensors and the PIR motion sensor on the corresponding areas of the A board with 4pcs M3\*10MM round head screws and 4pcs M3 nuts.
2.  Then install the LCD1602 display on A board with 4pcs M2.5\*10MM round head screws and 4pcs M2.5 nuts.
3.  Connect them with 3pin and 4pin dupont cables.

![image-20250416164604216](media/image-20250416164604216.png)

![](media/8461d9f32c2f8a2e8aa63f7c5434f26f.jpeg)

![](media/cbf9eb21013bd648297b12542c0a5453.jpeg)

![image-20250416164800592](media/image-20250416164800592.png)

![](media/c415fa75fb346efaf4836819c462caae.jpeg)

![image-20250416164845112](media/image-20250416164845112.png)

**Step 2: Install sensors on B board**

-   B board，
-   3pin F-F dupont line\*1，
-   M3\*10MM round head screw\*2，
-   M3 nickel plated nut\*2
-   A relay module

![](media/8ae3f57b21c0f51bed1a20f582ed6f8d.png)

![image-20250416164919408](media/image-20250416164919408.png)

Assemble the relay module on B board with 2 pcs M3\*10MM screws and 2pcs M3 nickel plated nuts, and attach a 3pin F-F dupont cable to the relay module.

![image-20250416164959680](media/image-20250416164959680.png)

![](media/47ebcf299a900923be7d3fce0d0e8eb7.jpeg)

**Step 3: Fix A board and B board together with a “T” bolt**

![](media/a214abddefb0337b929f1be0e397b2f5.jpeg)

![](media/59381b0cac49a329238743ff6bcce93b.jpeg)

![](media/844b631173fa706522b6e68beadc337a.jpeg)

**Step 4: Assemble sensors and a battery holder on C board**

C board\*1

MQ-2 gas sensor\*1

A battery holder

M3\*10MM flat head screw\*2

M3\*10MM round head screw\*1

M3 nickel plated nut\*3

4pin F-F dupont line\*1

![](media/25ff0e408ba63ae89e28da8a5c91dcf2.png)

![image-20250416165040744](media/image-20250416165040744.png)

1.  Fix the battery holder on C board with 2pcs M3\*10MM flat head screws and 2 pcs M3 nickel plated nuts.
2.  Then install the MQ-2 gas sensor on the corresponding area of C board with a M3\*10MM round head screw and a M3 nickel plated nut.
3.  Connect a 4pin dupont line to the MQ-2 gas sensor

![](media/87cfc3b68613fb063bbfbb2a517f465f.jpeg)

![](media/3934097b98ae64dcdf30de857621ab44.jpeg)

**Step 5: Install the sensors and parts on D board**

-   A servo
-   M1.2\*5 self-tapping screw\*4
-   A white cross mount（included in servo）
-   M2\*5 round head screw（included in servo）\*1
-   M2\*12MM round head screw\*2
-   M2 nickel plated nut\*2
-   M3\*12MM round head screw\*4
-   M3 stainless self-locking nut\*4
-   D board
-   A gear
-   Board1

![](media/8ccaf29c72c51af6f6ce7094797c4669.png)

![](media/2c8f1b59a323d3d35424e0b6f5823058.jpeg)

We need to set the servo to 90° before installing. Just follow the steps below

Connect servo to Keyestudio PLUS Control Board and upload test code to make servo rotate to 90°

| Servo Motor |         |
| ----------- | ------- |
| Brown wire  | GND     |
| Red wire    | 5V      |
| Orange wire | S（10） |

![](media/image-20230612113008225.png)

**Test Code：**

```c
#include <Servo.h>
Servo servo_10;

void setup(){
  servo_10.attach(10);
}
void loop(){
  servo_10.write(90);
  delay(500);}
```

After the test code is uploaded successfully, the servo will rotate to 90°

1.  Fix the servo on the corresponding area of D board with 2pcs M2\*12MM round head screws and 2pcs M2 nickel plated nuts.
2.  Then install the square board 1 on the D board with 4pcs M3\*12MM round head screws and 4 M3 self-locking nuts.

![image-20250416165136186](media/image-20250416165136186.png)

![image-20250416165232574](media/image-20250416165232574.png)

Install the white cross mount on the gear with 4pcs M1.2\*5MM self-tapping screws, and mount the gear on the servo motor with 1 M2\*5MM round head screw.

![image-20250416165315281](media/image-20250416165315281.png)



![image-20250416165403504](media/image-20250416165403504.png)

**Step 6: Assemble C board with D board with a “T” bolt.**

![](media/8e4f5a60e2e176ee09c19efe94d1df2a.jpeg)

![](media/2d274ad0bf60d9eb283249aa80621cd9.jpeg)

![](media/7558c2a4c94ea2310798fed818a0269c.jpeg)

**Step 7: Install the yellow LED on E board**

-   A yellow LED module
-   A E board
-   M3\*10MM round head screw\*1
-   M3 nickel plated nut \*1
-   3pin F-F dupont line\*1

![](media/ceadd9fddab49d404e992b744c52b55f.png)

![](media/c9fdca12bfe959d9a648d29af985e276.jpeg)

Mount the yellow LED on the corresponding area of E board with 1 M3\*10MM round head screw and 1 M3 nickel plated nut，then connect a 3pin dupont line to it.

![](media/4a5bf0af3b96ddd254e550dc6b4c3711.jpeg)![](../../KS0085%2520Smart%2520Home%2520Kit%2520for%2520Arduino/2.%2520Tutorial%2520for%2520Arduino/3.%2520Tutorial/media/66a496c0fc7baf9c157eaf6f07dc0aea.jpeg)

**Step 8: Install control board, sensors and parts on H board**

- A servo

- A passive buzzer

- M1.2\*5 self-tapping screw\*4,

- A white cross mount(included in servo)\*1

- A M2\*5 screw( included in servo)

- M2\*12MM round head screw\*2

- M2 nickel plated nut\*2

- M3\*10MM round screw\*1

- M3 nickel plated nut\*1

- M3\*6MM round head screw\*8

- M3\*10MM dual-pass copper pillar\*4

- A Keyestudio PLUS Control Board

- A sensor shield

- 3pinF-F dupont line\*1

- H board

- 2 gears
- Board 2\*2


![](media/597433c2300a027ff6ebee5c0b3c3707.png)

![](media/400de4d98176394486793d39760e6150.jpeg)

1.  Mount 4pcs dual-pass copper pillars on the H board with 4pcs M3\*6MM screws
2.  Then fix the passive buzzer on H board with 1 M3\*10MM round head screw and 1 M3 nut.
3.  Connect a 3pinF-F dupont line to the passive buzzer.

![image-20250416165703041](media/image-20250416165703041.png)

![image-20250416165728984](media/image-20250416165728984.png)

Set the servo to 90° before installing, and the method is same as the step 6.

Fix the 4pcs M3\*10MM copper pillars on the Keyestudio PLUS control board with 4 M3\*6MM round head screws, then mount the servo on the corresponding area of H board with 2 M2\*12MM round head screws and 2 M2 nuts.

![image-20250416165812840](media/image-20250416165812840.png)

![image-20250416165834185](media/image-20250416165834185.png)

Mount 2pcs board 2 together, then fix white cross mount on the gear with 4pcs M1.2\*5 self-tapping screws

![](media/229ba883da33ab9c829237d0b15266cc.jpeg)

![](media/59dbff7f3be6b6a43432f7ebb620d7cd.jpeg)

![image-20250416165924161](media/image-20250416165924161.png)

Fix the gear with white cross mount on the black servo with 1 M2\*5MM screw(included in servo), then install the combination of 2pcs board 2 and another servo on the corresponding area of H board, finally stack the sensor shield on the Keyestudio PLUS control board.

![image-20250416170105760](media/image-20250416170105760.png)

![](media/d0c652476b02c86138c6dd2502611f43.jpeg)

Step 9: Assemble all boards together with 2 “T” type bolts.

(Note: the port of PLUS Control Board is aligned with the hole ⑧ on board B, and the interface of USB cable is aligned with the hole ⑦ on board B)

![](media/1095045fa1165b5553cfb8856356d2c8.jpeg)

![](media/0c334ef18456d4df74383b12c2b30d68.jpeg)

![](../../KS0085%2520Smart%2520Home%2520Kit%2520for%2520Arduino/2.%2520Tutorial%2520for%2520Arduino/3.%2520Tutorial/media/a2d8dd6a5e34c6be3400068a35c9cf4b.jpeg)![](media/65aa75da5e1fa9d789e3e017a0b5e82b.jpeg)

![](../../KS0085%2520Smart%2520Home%2520Kit%2520for%2520Arduino/2.%2520Tutorial%2520for%2520Arduino/3.%2520Tutorial/media/c1d3c6cc45db04bc6aa0cf3d05ea286c.jpeg)![](media/10b307c39057d29e26bcdcf639c6c5e4.jpeg)

**Step 10: Install sensors on F board**

- A steam sensor,

- A photocell sensor

- A fan module(with fan)

- Board F

- 3pinF-F dupont line\*2,

- 4pin F-F dupont line\*1
- M3\*10MM round head screw\*3

- M3 nickel plated nut\*3.


![](media/bd684ff7cbb44813eb77e478a5ca71f5.png)

![](media/984fda0b23048b65de00721b90504d12.jpeg)

Separately fix the steam sensor, the photocell sensor and the fan module on the F board with 3pcs M3\*10MM round head screws and 3pcs M3 nuts, then attach 3pin and 4pin dupont lines to sensors

![image-20250416170252231](media/image-20250416170252231.png)

**Step 11: Connect sensor/module**

Connect one end of a 3pin dupont line to soil humidity sensor, then connect all sensors with the sensor shield. (make dupont wires of the servo go through the holes of board)

![](media/bca03708b95612f0eda1bc87b807d0ae.jpeg)

| Name                            | The corresponding interfaces of sensors and sensor shield | The corresponding installed area on the board |      |
| ------------------------------- | --------------------------------------------------------- | --------------------------------------------- | ---- |
| PIR Motion Sensor               | G/V/S                                                     | G/V/2                                         | ⑤    |
| Passive buzzer                  | G/V/S                                                     | G/V/3                                         | ⑯    |
| Button module 1                 | G/V/S                                                     | G/V/4                                         | ③    |
| Yellow LED                      | G/V/S                                                     | G/V/5                                         | ⑫    |
| Fan module                      | GND/VCC/INA/INB                                           | G/V/7/6                                       | ⑮    |
| Button module 2                 | G/V/S                                                     | G/V/8                                         | ④    |
| Servo 1 controlling the door    | Brown/Red/Orange wire                                     | G/V/9                                         | ⑰    |
| Servo 2 controlling the windows | Brown/Red/Orange wire                                     | G/V/10                                        | ⑪    |
| MQ-2 Gas Sensor                 | GND/VCC/D0/A0                                             | G/V/11/A0                                     | ⑩    |
| Relay Module                    | G/V/S                                                     | G/V/12                                        | ⑥    |
| White LED                       | G/V/S                                                     | G/V/13                                        | ①    |
| LCD1602 Display                 | GND/VCC/SDA/SCL                                           | GND/5V/SDA/SCL                                | ②    |
| Photocell Sensor                | G/V/S                                                     | G/V/A1                                        | ⑭    |
| Soil humidity sensor            | G/V/S                                                     | G/V/A2                                        |      |
| Steam sensor                    | G/V/S                                                     | G/V/A3                                        | ⑬    |

![](media/2bf2f025ffdf28c89bbb103d7f7866f8.jpeg)

Insert the Bluetooth module into sensor shield, then fix the F board with 2 M3\*10MM round head screws, 2 M3 nuts and 2 pcs parts and mount G board with 2 “T” bolts.

| Bluetooth Module | Sensor shield |
| ---------------- | ------------- |
| VCC              | 5V            |
| GND              | GND           |
| TXD              | RXD           |
| RXD              | TXD           |

![](media/50519e5fada2b8a6a273fb3ecd983301.jpeg)

![image-20250416170353497](media/image-20250416170353497.png)

![image-20250416170410340](media/image-20250416170410340.png)

**Step 12: Assemble the kit**

Fix the board I with 6 “T” bolts

![](media/79c3b7b5e28d4248b6f6f8e155ee4e25.jpeg)

![](media/60c101c92e1ee57410849267dcb2e4ad.jpeg)

![](media/e2febc246493ba3293296c4e0caca3ce.jpeg)

The smart home kit is established.
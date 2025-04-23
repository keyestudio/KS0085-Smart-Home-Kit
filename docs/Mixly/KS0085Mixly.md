# 15. Mixly Tutorial

![](mixly/media/6d044e8a930f59e98d4c4ac801160c7e.png)

Note: when you get this kit, you need to confirm to use 9V voltage to drive smart home to work.


## 15.1 Download Mixly Software

**Instruction**

Mixly is a free open-source graphical Arduino programming software, based on Google’s Blockly graphical programming framework.

It is a free open-source graphical programming tool for creative electronic development; a complete support ecosystem for creative e-education; a stage for maker educators to realize their dreams.

More info please check the link to download the Mixly blocks software.

**Download and install Mixly 1.0 software**

**Download link：**

Windows system: [https://fs.keyestudio.com/Mixly1-Windows](https://wiki.keyestudio.com/Down/Mixly_1.0-windows.rar)

MACOS system：[https://fs.keyestudio.com/Mixly1-MACOS](https://wiki.keyestudio.com/Down/Mixly_1.0-MacOS.zip)

**Mixly Interface:**

After downloading Mixly, Click![](mixly/media/a16cc09cfdcacf72ab45af43a1a721e2.png)icon, as shown below:

![](mixly/media/8b65e8014847891e4f7d01e85927eba5.png)

When downloading the sketch to the board, you must select the correct name of Arduino board that matches the board connected to your computer. As shown below;

![](mixly/media/6f0feab0d42c595eca51b002610e0953.png)

Then select correct COM port（the corresponding COM port will be shown after successful installation)

![](mixly/media/095b5436e5d977cfae9f6693892ecab4.png)

![](mixly/media/e20934e6965430806e473a124cbff01b.png)

## 15.2 Install PLUS Development Board Driver

![](mixly/media/dfe50fbafbd9a114c782b69cd6d9dd44.png)

Now, let’s get to know Keyestudio PLUS development board. It is the core of the whole kit.

Keyestudio PLUS Control Board is fully compatible with Arduino UNO R3 board. Its functions is as same as Arduino UNO R3 board. Moreover, some improvements made highly strengthen its function. Alternatively, it is the best choice to learn building the circuit and designing codes.

![](mixly/media/faaf0f3d74218e010b280a0768dcaa8c.jpeg)

Serial communication interface: D0 is RX, D1 is TX

PWM interface (pulse width modulation): D3 D5 D6 D9 D10 D11

External interrupt interface: D2 (interrupt 0) and D3 (interrupt 1)

SPI communication interface: D10 is SS, D11 is MOSI, D12 is MISO, D13 is SCK

IIC communication port: A4 is SDA, A5 is SCL

Let’s install the driver of Keyestudio PLUS Control Board. The USB-TTL chip on PLUS board adopts CP2102 serial chip. The driver program of this chip is included in Arduino 1.8 version and above, which is convenient.

When you attach USB port to computer, the driver of CP2102 can be installed.

If the driver is installed unsuccessfully, you need to install it manually.

Open the device manager of computer. Right click Computer----- Properties----- Device Manager.

![](mixly/media/afa5b0dde9342bd7ad9f385333cb6f55.png)

There is a yellow exclamation mark on the page, which implies the failure installation of the driver of CP2102.

Operate as follows；

![](mixly/media/c26ca0ef1bf1506c815b6e3e239cf525.png)

Click “OK” to enter the following page and click “browse my computer for updated driver software”.

![](mixly/media/4ec7a5ea3c8a1fd9663eef4768b687c5.png)

Click “Browse”, then search the driver of CP2102 and click “Next”,

There is a DRIVERS folder in Arduino software installed package（![](mixly/media/f50a31a59716594afbd7c2254cfd521e.png)）, open driver folder and check the driver of CP210X series chips.

![](mixly/media/417de936fa9720c7a7427c4d07718292.png)

When opening the device manager, we will find the yellow exclamation mark disappear. The driver of CP2102 is installed successfully.

![](mixly/media/efce0ba96c48d853f302730b4d481ee9.jpeg)

![](mixly/media/2f751d5f4e4c0c18fa862c589eaaf0da.jpeg)

**Start your first program**

Click“Open”→Mixly 1.0 for keyestudio→ sample→ arduino→Arduino→01 IN-OUT→led-blink

![](mixly/media/d3f6e2e10fe7c426b39f37fb6d220aa6.png)

Set board and COM port. The corresponding board and COM port are shown in the lower right corner. ![](mixly/media/aafc58d49bd812a8de0143dedc0dfbd2.png)

Click“Compile”to check errors of program.

![](mixly/media/6c6188a8593318ef6673ce3136bafdd5.png)

If without errors, click“Upload”to upload program.

![](mixly/media/67afaee11414768a5e53674f4b6d2d42.png)

LED blinks, and your first program is finished.

## 15.3 Projects

![](mixly/media/1dfed548560b06e51f83a1b2d1c71558.jpeg)

Alright, let’s get straight to our projects. In this kit, there are 14 sensors and modules. We will make you know the smart home deeply from the simple sensor.

However, if you are professional with Arduino. You can skip theses steps and assemble the smart home kit directly.

<https://ks0085-smart-home-kit-for-mixly.readthedocs.io/en/latest/KS0085-Mixly.html#assembly-guide>

Note: In this course, the interface of each sensor / module marked with (G,-, GND) indicates the negative pole, G is connected to G or - or GND of sensor shield or control board; “V” implies positive pole which is linked with V or VCC or 5V.

### Project 1：LED Blink

**Description：**

![](mixly/media/48c1374daadaa5ff7efd6f0e8158a834.png)

We’ve installed the driver of Keyestudio V4.0 development board.

In this lesson, we will conduct an experiment to make LED blink.

Let’s connect GND and VCC to power. The LED will be on when signal end S is high level, on the contrary, LED will turn off when signal end S is low level.

In addition, the different blinking frequency can be presented by adjusting the delayed time.

**Specifications：**

Control interface: digital port

Working voltage: DC 3.3-5V

Pin pitch: 2.54mm

Display color: white

**Experiment equipment：**

| PLUS control board\*1                           | Sensor shield\*1                                 | White LED module \*1                             | USB cable\*1                                    | 3pin F-F Dupont line\*1                         |
|-------------------------------------------------|--------------------------------------------------|--------------------------------------------------|-------------------------------------------------|-------------------------------------------------|
| ![](mixly/media/24c831162a53ab88e584fbbedd6e4018.png) | ![](mixly/media/cc6f4cc25bad50e342fe54bc09417592.jpeg) | ![](mixly/media/9cad01dce5c196317f665e6115b44c86.jpeg) | ![](mixly/media/0da41a27db41e1207a7f760067e93104.png) | ![](mixly/media/bad041b053825940869213d9f431ef96.png) |

**Sensor shield**

![](mixly/media/cc6f4cc25bad50e342fe54bc09417592.jpeg)

We usually combine Arduino control board with a large number of sensors and modules. However, the pins and ports are limited on control board.

To cope with this disadvantage, we just need to stack V5 sensor board on Keyestudio PLUS control board.

This V5 shield can be directly attached to sensors with 3 pin connectors, and be extended the commonly used communication ports as well, such as serial communication, IIC communication and SPI communication ports. What’s more, the shield comes with a reset button and 2 signal lights.

![](mixly/media/fd2e9e9910365f3c5b7d8dda73620ac9.jpeg)

**Wiring Diagram：**

![](mixly/media/f333bf0356bdac18485911e123ed4d2e.png)

Note: G, V and S of white LED module are linked with G, V and 13 of expansion board.

**Test Code：**

Wire up components according to connection diagram.

Let’s design code to make LED blink.

Enter “sensor” → “Control Output” → ![](mixly/media/b951dbf373613ad1f0c2ddfc88285676.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

![](mixly/media/0b40f95c61d8a609674ad74178fea26a.png)![](mixly/media/90a4644cd4b8365ffdb283fc5445f709.png)
White LED is linked with digital 13 of shield, then we click drop-down triangle to select 13 and HIGH, then we get block:

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

![](mixly/media/d5f46fa96cc113d90153fac26393c882.png)
Next click “Control”→

Then we get block:

![](mixly/media/2ee07071903cc8af85c66ac32279d697.png)+![](mixly/media/7c7aa08820622066c957422c43e888d1.png)=![](mixly/media/2655036fd82f38a484b059fbf3526f04.png) .

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Duplicate ![](mixly/media/2655036fd82f38a484b059fbf3526f04.png)once，but set to LOW, then we get block:

![](mixly/media/1ee5bd1151f60369a28bbf73df8a07cd.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

The complete code is shown below:

![](mixly/media/e427edce6ef0b3ce7e676d2ff486eeed.gif)

Click “Code” on Mixly software to convert graphic code into C language code.

![](mixly/media/9c01f684260bea0deb0d683e5059d705.png)

**Test Result：**

After the code is uploaded, the white LED flashes for 1000ms, alternately.

![](mixly/media/c7ab78c093285bf9cf55fc008a73f888.png)

**Code explanation：**

(1)![](mixly/media/ac1ecf4e9453e80446d7f89b02c7afcd.png)

(2)![](mixly/media/1a52ed051469f8574019ccb0e4bda464.png)

When signal end S is high level, LED is on; however, when signal end S is low level, LED is off.

![](mixly/media/d5f46fa96cc113d90153fac26393c882.png)
: delay for 1000ms, namely 1s, we could set any numbers to alter delay time so as to control flashing frequency of LED.

### Project 2：Breathing light

**Description**

![](mixly/media/a8400a25a27dc7659d62f3c7ce753b1c.png)

In the previous lesson, we control LED on and off and make it blink.

In this project, we will control LED brightness through PWM to simulate breathing effect. Similarly, you can change the step length and delay time in the code so as to demonstrate different breathing effect.

PWM is a means of controlling the analog output via digital means. Digital control is used to generate square waves with different duty cycles (a signal that constantly switches between high and low levels) to control the analog output.In general, the input voltage of port are 0V and 5V. What if the 3V is required? Or what if switch among 1V, 3V and 3.5V? We can’t change resistor constantly. For this situation, we need to control by PWM.

![](mixly/media/bbcfcb9ae56abb7e80ee587246fc4be9.gif)

For the Arduino digital port voltage output, there are only LOW and HIGH, which correspond to the voltage output of 0V and 5V. You can define LOW as 0 and HIGH as 1, and let the Arduino output five hundred 0 or 1 signals within 1 second.

If output five hundred 1, that is 5V; if all of which is 1, that is 0V. If output 010101010101 in this way then the output port is 2.5V, which is like showing movie. The movie we watch are not completely continuous. It actually outputs 25 pictures per second. In this case, the human can’t tell it, neither does PWM. If want different voltage, need to control the ratio of 0 and 1. The more 0,1 signals output per unit time, the more accurately control.

**Experiment equipment：**

| PLUS control board\*1                           | Sensor shield\*1                                 | Yellow LED module\*1                             | USB cable\*1                                    | 3pin F-F Dupont line\*1                         |
|-------------------------------------------------|--------------------------------------------------|--------------------------------------------------|-------------------------------------------------|-------------------------------------------------|
| ![](mixly/media/24c831162a53ab88e584fbbedd6e4018.png) | ![](mixly/media/cc6f4cc25bad50e342fe54bc09417592.jpeg) | ![](mixly/media/c330317970c9594d8baed73ee43106e6.jpeg) | ![](mixly/media/0da41a27db41e1207a7f760067e93104.png) | ![](mixly/media/bad041b053825940869213d9f431ef96.png) |

**Wiring Diagram：**

Not like general digital port, PWM port can output high and low level, and alter levels constantly in certain time. PWM controls the brightness. Additionally, 0-255 “range” voltage output is decided by PWM. D3, D5, D6, D9, D10, D11 are PWM pins. In the following experiment, D5 is needed.

![](mixly/media/cd10f1f03f20f7465f1feee9e1bd0a67.png)

Note: on sensor shield, the G, V and S pins of yellow LED module are linked with G, V and S.

**Test Code：**
Enter “Control” →![](mixly/media/d48c39a58db4b922b32d68247925ba1f.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Click “IN/OUT” →![](mixly/media/b7c6e0675f71c2d6e5f2642c6447739e.png)，LED is linked with digital 5, so we set to pin 5, then get block ![](mixly/media/51ac49f822072fe207e16e8acca30bfb.png).

![](mixly/media/51ac49f822072fe207e16e8acca30bfb.png)+![](mixly/media/c267a3ba21a4141c165a0e0b2dcfc2cb.png)=![](mixly/media/531e9ad9097b7b02a77ed6f954f91c73.png)

During initialization, set PWM value of D5 to 0.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Click “Control” →![](mixly/media/2aacec9ec4c820bd214c19e30df43960.png)，numbers and variable i are set freely. Level varies from 0 to 255, then LED is getting brighter, so we set block![](mixly/media/ff2775349776b0308df8392ef43343d0.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Copy![](mixly/media/51ac49f822072fe207e16e8acca30bfb.png)once, then ![](mixly/media/51ac49f822072fe207e16e8acca30bfb.png)+![](mixly/media/ff2775349776b0308df8392ef43343d0.png)=![](mixly/media/fb7195a9658ee505a02dd0345142717b.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Click“Variables”to select ![](mixly/media/76fec9a270a1358da274c191dd26fd3b.png), ![](mixly/media/76fec9a270a1358da274c191dd26fd3b.png)+![](mixly/media/51ac49f822072fe207e16e8acca30bfb.png)=![](mixly/media/a751ad09a20456e77b350ff4e9b68b01.png);

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Add delay block![](mixly/media/d5f46fa96cc113d90153fac26393c882.png)，set to 500ms.

Then get ![](mixly/media/fd344ac92914c5b80b0f82e0d2310ac3.png)code string

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Duplicate ![](mixly/media/fd344ac92914c5b80b0f82e0d2310ac3.png)once, then we set to “counter with i from 255 to 0 step -51”, check out the entire code:

![](mixly/media/ae42a277624210373a1405bacbcc1c4e.png)

**Test Result：**

LED smoothly changes its brightness from dark to bright and back to dark, continuing to do so, which is similar to a lung breathing in and out.

![](mixly/media/84ac0b289e27c94f023d5fa83716d412.jpeg)

**Code explanation**

![](mixly/media/d48c39a58db4b922b32d68247925ba1f.png): the code of “setup” only run once

There are PWM ports(D3 D5 D6 D9 D10 D11) on PLUS control board, which control brightness of LED. In the experiment, connect signal end S to digital 5(PWM port). The smaller the PWM value, the darker the LED, conversely, the brighter the LED, in the range of 0-255.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

![](mixly/media/cd0b599275ad8249b49aa1609c7ecdda.png)

![](mixly/media/68777ec28effd96471ad61672bbca6ba.png)

![](mixly/media/2837cc00e4136a1a7e2a7108c0053073.png)

![](mixly/media/d6f8e614528ada1453f2f8be45da95c9.png)， in this lesson, it implies that variable i increases from 51 to 255 every 500ms, or decrease 51 every 500ms.

**Extension Practice：**

Change test code, link LED with D10. When LED is getting brighter, PWM value goes up from 0 to 255, plus 15 every time, delay in 100ms; when getting darker, PWM value decreases from 255 to 0, reduces 15 every time, delay in 100ms.

![](mixly/media/7c220995bf5e04e2d1d4ca9ca8bc41a2.png)

Do you find any difference in brightness when we alter some numbers? Is it cool?

### Project 3：Passive Buzzer

**Description：**

**![](mixly/media/73d052659c19eb9abbf9ed63261d22c0.jpeg)**

There are prolific interactive works completed by Arduino. The most common one is sound and light display. We always use LED to make experiments. For this lesson, we design circuit to emit sound. The universal sound components are buzzer and horns. Buzzer is easier to use. And buzzer includes about active buzzer and passive buzzer. In this experiment, we adopt passive buzzer.

While using passive buzzer, we can control different sound by inputting square waves with distinct frequency. During the experiment, we control code to make buzzer sound, begin with “tick, tick” sound, then make passive buzzer emit “do re mi fa so la si do”, and play specific songs.

**Experiment equipment：：**

| PLUS control board\*1                           | Sensor shield\*1                                 | Passive buzzer\*1                                | USB cable\*1                                    | 3pin F-F Dupont line\*1                         |
|-------------------------------------------------|--------------------------------------------------|--------------------------------------------------|-------------------------------------------------|-------------------------------------------------|
| ![](mixly/media/24c831162a53ab88e584fbbedd6e4018.png) | ![](mixly/media/cc6f4cc25bad50e342fe54bc09417592.jpeg) | ![](mixly/media/73d052659c19eb9abbf9ed63261d22c0.jpeg) | ![](mixly/media/0da41a27db41e1207a7f760067e93104.png) | ![](mixly/media/bad041b053825940869213d9f431ef96.png) |

**Wiring Diagram：**

![](mixly/media/1b0b1b98f6e805d4dca168a4c5ba97a7.png)

The G, V and S pins of passive buzzer are connected to G, V and S.

**Test Code：**

Code 1：Code to make passive buzzer emit “tick, tick”

Click→ “sensor” → “Control Output” →![](mixly/media/176ece1f6e44f2c564f05063eb9ae533.png): there are triangle buttons at “NOTE_C3” and “1/8”, click to get more options which are used to select tones and beats.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

The signal end S of passive buzzer is attached to digital 3, therefore, set to pin 3, tone NOTE_C4，1/4 beat，get block![](mixly/media/a2b655357f48e50fffcabee6931315c6.png), tones and beats are set freely.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Enter “Control Output” →![](mixly/media/8d3e0acfb50099b7566749b5f1aee248.png)and ![](mixly/media/bd3506b57febf33440dc831e3273c260.png), set to pin 3, delay in 200ms. ![](mixly/media/a2b655357f48e50fffcabee6931315c6.png)+![](mixly/media/60121673046ec9cab15c0ecb12dbc00b.png)+![](mixly/media/1aa47218cd902397c6e6f6e2d7727ed4.png)=![](mixly/media/adb6a591bfb0d91fe23d137bb5f4ecd1.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Duplicate![](mixly/media/3cc0c4fe673510ab35810eabaf1999d3.png)code string once. Modify the last 200ms into 1000ms so as to delay time. The complete code is shown as below:

![](mixly/media/8c0d156e0ee692428b95ebfe93fffec1.png)

Upload cod on control board, buzzer will emit“tick,tick”sound.

![](mixly/media/0693a9a92e2629b3862c08a10469af73.jpeg)

Code 2：Passive buzzer emits“do re mi fa so la si do”

Duplicate this block![](mixly/media/23a909ab87b2dbf494e1138d401a38d6.png) for 7 times, separately remain frequency for NOTE_D4, NOTE_E4, NOTE_F4, NOTE_G4, NOTE_A4, NOTE_B4, NOTE_C5;

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Add![](mixly/media/60121673046ec9cab15c0ecb12dbc00b.png)，move out block![](mixly/media/bd3506b57febf33440dc831e3273c260.png)from “Control”, delay in 1000ms. Check out the complete code.

![](mixly/media/096ddd45e61fd3eec8b9057a43eee7d8.png)

Upload code on control board, buzzer will emit “do re mi fa so la si do”

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Code 3：Play《Ode to joy》

Click “sensor” →“control output”→![](mixly/media/38870fc8835957683bf19dc6eec51f36.png)，respectively set to pin 3 and click drop down triangle button to select “Ode to joy”

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Then move out block![](mixly/media/8d3e0acfb50099b7566749b5f1aee248.png)，set to pin 3，drag block![](mixly/media/bd3506b57febf33440dc831e3273c260.png)，delay in 3000ms.

![](mixly/media/ce4af4f2b3eb2c768f31d71e25d7acd0.png)

Upload test code on the development board.

Do you hear “Ode to joy”?

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

**Code Explanation：**

![](mixly/media/451a3bf12441df8ff7ea201d36beb352.png): passive buzzer is attached to D3, so set to pin 3, NOTE_C4 and 1/4 beat;

1（Do）、2(Re)、3(Mi)、4(Fa)、5(Sol)、6(La)、7(Si) are the roll-call in music. They correspond to NOTE C、NOTE D、NOTE E、NOTE F、NOTE G、NOTE A、NOTE B in frequency drop-down list.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

From 1（Do）to 7（Si）, that is from C to B. As the below table shown.

The pitch/tone is getting higher and higher.

| 1（Do） | 2（Re） | 3(Mi)  | 4(Fa)  | 5(Sol) | 6(La)  | 7(Si)  |
|---------|---------|--------|--------|--------|--------|--------|
| NOTE_C  | NOTE_D  | NOTE_E | NOTE_F | NOTE_G | NOTE_A | NOTE_B |

Music in addition to "singing accurately", but also "rhythm-paired". The duration of each note, is the beat. The bigger the number, the longer the duration.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

*For example:*

-   1 beat, 1 second is 1000 milliseconds;
-   1/2 beat, 0.5 second is 500 milliseconds;
-   1/4 beat, 0.25 second is 250 milliseconds;

![](mixly/media/0e09b39d0209ccc619c946e680b6f070.png)

![](mixly/media/b7922cf55a07d60f5e03fe49067f75d9.png)

![](mixly/media/db88f3a04df0aae38c72911928f17738.png) passive buzzer plays specific music, multiple choices are provided

### Project 4：Button-controlled LED

**Description：**

**![](mixly/media/197566fe08fddc5ed5686e9e9084d4b9.jpeg)**
In this lesson, we will use the input function of I/O port, that is, reading the output value of external device. Also, we will do an experiment with a button and an LED to know more about I/O.

The button switch is ordinary in our life. It belongs to switch quantity( digital quantity)components. Composed of normally open contact and normally closed contact, it is similar to ordinary switch.

When the normally open contact bears pressure, the circuit will be on state ; however, when this pressure disappears, the normally open contact will go back to be the initial state, that is, off state.

**Experiment equipment：**

| PLUS control board\*1                                    | Sensor shield\*1                                 | Yellow LED module\*1                             | Button sensor\*1                                 | USB cable\*1                                    | 3pin F-F Dupont line\*2                         |
|----------------------------------------------------------|--------------------------------------------------|--------------------------------------------------|--------------------------------------------------|-------------------------------------------------|-------------------------------------------------|
|          ![](mixly/media/24c831162a53ab88e584fbbedd6e4018.png) | ![](mixly/media/cc6f4cc25bad50e342fe54bc09417592.jpeg) | ![](mixly/media/c330317970c9594d8baed73ee43106e6.jpeg) | ![](mixly/media/197566fe08fddc5ed5686e9e9084d4b9.jpeg) | ![](mixly/media/0da41a27db41e1207a7f760067e93104.png) | ![](mixly/media/bad041b053825940869213d9f431ef96.png) |

**Wiring Diagram：**

![](mixly/media/48cb561fe113be0ceda220ebcf6ebb59.png)

Note: the G, V, and S pins of button sensor module are separately connected to G, V, and 4 on the shield, and the G, V, and S pins of the yellow LED module are linked with G, V, and 5 on the shield.

**Test Code：**

 Click “Control” →![](mixly/media/d48c39a58db4b922b32d68247925ba1f.png);

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

 Enter “Serialport” → ![](mixly/media/03895bd4a93a21339a63618e108ba269.png),

Then we get the block:

![](mixly/media/03895bd4a93a21339a63618e108ba269.png)+![](mixly/media/d48c39a58db4b922b32d68247925ba1f.png)=![](mixly/media/7fb955029eb9e0954f5ea2c81533c083.png)

In order to read the signal detected by button sensor, select ![](mixly/media/711b2607bab2b88862edfda0f1c3e5d3.png) from “Serialport”；

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

 Next to click “sensor” → “Digital Read” →![](mixly/media/87b17f0a3637274c8e961902484bcd22.png), the button sensor is connected to digital 4，set to pin 4.

Then we get the block:

![](mixly/media/3107a39ddaf55ae2426016c3300b7728.png)+![](mixly/media/711b2607bab2b88862edfda0f1c3e5d3.png)=![](mixly/media/20b3db1b0da6112d2e72d2b15ba8b245.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Then drag![](mixly/media/bd3506b57febf33440dc831e3273c260.png)，delay in 500ms, get the following code string: ![](mixly/media/278a1f61dc8bb86f2251a15ce64d0be0.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Enter “control” →![](mixly/media/35d8652d308657b854152fc080c39dd3.png)，click blue gear icon, appear box, move![](mixly/media/12cff395715042bc2e2f5bea31f7a889.png)block into ![](mixly/media/95900b41ae4c029ea54b7615cd738c3f.png)then get→![](mixly/media/31210f144689f12e831a3f0214c3f711.png)block.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Click “Logic” → ![](mixly/media/83d6672dfd2057586ef318ab8f798b23.png), copy ![](mixly/media/2dae91b602b6f6ce0eb3672e8c3af35b.png)block, drag ![](mixly/media/afe464e116326f22bc13584db15f0629.png) from “math”:

![](mixly/media/83d6672dfd2057586ef318ab8f798b23.png)+![](mixly/media/31210f144689f12e831a3f0214c3f711.png)+![](mixly/media/2dae91b602b6f6ce0eb3672e8c3af35b.png)+![](mixly/media/afe464e116326f22bc13584db15f0629.png)=![](mixly/media/a132c91d764895af22758d094b29c94d.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Enter “Control Output” →![](mixly/media/b1337892735406ec2a16c7fd2cb7ce18.png)，yellow LED is linked with digital 5, so set pin 5. When the button is released, yellow LED is off, copy ![](mixly/media/d3af46f46f055e24df30e9810e2a4c29.png)block once and drag it into else block, and set to LOW.

Alright, we get the complete code.

![](mixly/media/09344ad324d6b4db52b07955f98e413f.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

**Test Result：**

After the code is uploaded successfully. The serial monitor will send digital 0（low level) and yellow LED will be on, when the button is pressed; however, when the button is released, signal 1 will be displayed and LED will be off.

![](mixly/media/18bb6fb33cdf2894877ad13779bed5dc.jpeg)

**Code Explanation：**

![](mixly/media/0dbacea9874e74e74a72f495f967c1d7.png): button sensor is linked with D4, when the button is pressed, low level(0) is sent; when released, high level(1) is maintained at signal end.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

![](mixly/media/03895bd4a93a21339a63618e108ba269.png)：set baud rate to 9600

![](mixly/media/711b2607bab2b88862edfda0f1c3e5d3.png): output word/data on serial monitor，word wrap

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

![](mixly/media/31210f144689f12e831a3f0214c3f711.png): if condition 1 is met, then the result will be A....., otherwise, the result will be B....

**Extension Practice：**

Finish the following program:

When press button, yellow LED is getting brighter then darker moderately; when release button, yellow LED will be off, alternately.

![](mixly/media/b75e7e5bc58b09551ad757e3fce0d477.png)

### Project 5：1-channel Relay Module

**Description：**

![](mixly/media/484b144bc1b0d88b30d6b04df7918b04.jpeg)

This module is an Arduino dedicated module, and compatible with arduino sensor expansion board. It has a control system (also called an input loop) and a controlled system (also called an output loop).

Commonly used in automatic control circuits, the relay module is an "automatic switch" that controls a larger current and a lower voltage with a smaller current and a lower voltage.

Therefore, it plays the role of automatic adjustment, safety protection and conversion circuit in the circuit. It allows Arduino to drive loads below 3A, such as LED light strips, DC motors, miniature water pumps, solenoid valve pluggable interface.

The main internal components of the relay module are electromagnet A, armature B, spring C, moving contact D, static contact (normally open contact) E, and static contact (normally closed contact) F, (as shown in the figure ).

![](mixly/media/97319b6bfd2ebf5cef9d1a14d07ae538.jpeg)

As long as a certain voltage is applied to both ends of the coil, a certain current will flow through the coil to generate electromagnetic effects, and the armature will attract the iron core against the pulling force of the return spring under the action of electromagnetic force attraction, thereby driving the moving contact and the static contact (normally open contact) to attract. When the coil is disconnected, the electromagnetic suction will also disappear, and the armature will return to the original position under the reaction force of the spring, releasing the moving contact and the original static contact (normally closed contact). This pulls in and releases, thus achieving the purpose of turning on and off in the circuit. The "normally open and closed" contacts of the relay can be distinguished in this way: the static contacts on disconnected state when the relay coil is powered off are called "normally open contacts"; the static contacts on connected state are called "normally closed contact". The module comes with 2 positioning holes for you to fix the module to other equipment.

**Specifications：**

Working voltage: 5V (DC)

Input signal: digital signal (high level 1, low level 0)

Contacts: static contacts (normally open contacts, normally closed contacts) and moving contacts

Rated current: 10A (NO) 5A (NC)

Maximum switching voltage: 150 V (AC) 24 V (DC)

Electric shock current: less than 3A

Contact action time: 10ms

**Experiment equipment：**

| PLUS control board\*1                                                                                                                             | Sensor shield\*1                                                                                  | USB cable\*1                                    |
|---------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|-------------------------------------------------|
| ![](mixly/media/24c831162a53ab88e584fbbedd6e4018.png)                                                                                                   | ![](mixly/media/cc6f4cc25bad50e342fe54bc09417592.jpeg)                                                  | ![](mixly/media/0da41a27db41e1207a7f760067e93104.png) |
| Relay module\*1                                                                                                                                   | White LED\*1                                                                                      | 3pin F-F Dupont Line\*1                         |
| ![](mixly/media/484b144bc1b0d88b30d6b04df7918b04.jpeg)                                                                                                  | ![](mixly/media/9cad01dce5c196317f665e6115b44c86.jpeg)                                                  | ![](mixly/media/bad041b053825940869213d9f431ef96.png) |
| Female to Female Dupont Lines\*2                                                                                                                  | Male to Female Dupont Line\*2                                                                     |                                                 |
| ![](mixly/media/c765da7bdad858ecaa7080ffcec4f605.jpeg)![](mixly/media/c765da7bdad858ecaa7080ffcec4f605.jpeg) ![](mixly/media/c765da7bdad858ecaa7080ffcec4f605.jpeg) | ![](mixly/media/ebae742607b42dd5a84676d6a399d980.jpeg) ![](mixly/media/ebae742607b42dd5a84676d6a399d980.jpeg) |                                                 |

**Wiring Diagram：**

![](mixly/media/0bde162c8c3ae0e8917a8a9953827a68.png)

Note: On the shield, the G, V, and S pins of 1-channel relay module are connected to G, V, and 12 respectively. The NO is linked with V; the G, V, and S pins of white LED are respectively connected to G, V, and the static contact of NO on relay module.

**Test Code：**
Click “Sensor”→ “Control Output” → ![](mixly/media/e15f007b8dcf727b9ffce91f1b4d85ee.png)，relay sensor is linked with digital 12, so set to pin 12 and maintain HIGH , then get block![](mixly/media/8bdbf38dffcff4e70c69e406d9dfa442.png);

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Enter “Control” →![](mixly/media/bd3506b57febf33440dc831e3273c260.png)，set to 500ms，then compile code according to following code.

![](mixly/media/99307d4fe4a34bd4efc922a5261b5155.png)

**Test Result：**

Wire up components, power up and upload test code. The relay is electrified(“NO”is on, NC is off) for 0.5s, white LED will be on; then disconnected for 0.5s (NC is on, NO is off), white LED will go off; alternately.

![](mixly/media/d001ec087a1d48dd983be447505a7d27.jpeg)

**Code Explanation：**

![](mixly/media/581d47a62f579d44ba691c25c11bf96f.png)

![](mixly/media/91912ae17b8fbb09ff1c3d12c9f82845.png)

**Extension Practice：**

Finish the following program:

We link relay module with D11, relay is electrified for 1000ms(NO is on, NC is disconnected), LED lights on; then disconnected for 1000ms(NC is on, NO is off), LED goes off; alternately.

![](mixly/media/58053e8604ce50a003acfcac0eab86bf.png)

### Project 6：Photocell Sensor

**Description：**

![](mixly/media/7950acf19912aabfb83928eb3459cc2c.jpeg)

The photocell sensor (photoresistor) is a resistor made by the photoelectric effect of a semiconductor. As highly sensitive to ambient light, its resistance value vary with different light intensity.

Its signal end is connected to the analog port of the microcontroller. When the light intensity increases, the resistance will decrease, but the analog value of the microcontroller won’t. On the contrary, when the light intensity decreases, the analog value of the microcontroller will go down.

Therefore, we can use the photoresistor sensor module to read the corresponding analog value and sense the light intensity in the environment.

It is commonly applied to light measurement, control and conversion, light control circuit as well.

**Experiment equipment：**

| PLUS control board\*1                           | Sensor shield\*1                                 | Photocell sensor\*1                              | Yellow LED module\*1                             | USB cable\*1                                    | 3pin F-F Dupont line\*2                         |
|-------------------------------------------------|--------------------------------------------------|--------------------------------------------------|--------------------------------------------------|-------------------------------------------------|-------------------------------------------------|
| ![](mixly/media/24c831162a53ab88e584fbbedd6e4018.png) | ![](mixly/media/cc6f4cc25bad50e342fe54bc09417592.jpeg) | ![](mixly/media/7950acf19912aabfb83928eb3459cc2c.jpeg) | ![](mixly/media/c330317970c9594d8baed73ee43106e6.jpeg) | ![](mixly/media/0da41a27db41e1207a7f760067e93104.png) | ![](mixly/media/bad041b053825940869213d9f431ef96.png) |

**Wiring Diagram：**

![](mixly/media/38be559475a64e6b228f06b2e09e1d7a.png)

Note: On the expansion board, the G, V, and S pins of the photocell sensor module are connected to G, V, and A1; the G, V, and S pins of the yellow LED module are linked with G, V, and 5 separately.

**Test Code：(Note: you could set the range of analog value freely based on test result)**

Click “Control”→![](mixly/media/d48c39a58db4b922b32d68247925ba1f.png)block，enter “Serialport” →![](mixly/media/03895bd4a93a21339a63618e108ba269.png);

Then ![](mixly/media/03895bd4a93a21339a63618e108ba269.png)+![](mixly/media/d48c39a58db4b922b32d68247925ba1f.png)=![](mixly/media/e749e2bd654a9495ad0abc13a031ddf2.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Click “serialport” → ![](mixly/media/711b2607bab2b88862edfda0f1c3e5d3.png)，

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Click “Sensor” →“Analog Read” →![](mixly/media/e6f8141576bee56f0beffa6c1908cba5.png), photocell sensor is connected to A1 of shield, so set to A1;

Then get block![](mixly/media/6dfbd37cca17f2cf09ebb2a5075e3b6e.png)+ ![](mixly/media/711b2607bab2b88862edfda0f1c3e5d3.png)= ![](mixly/media/bb898654ddf2a046af3f25e4cacf2b78.png)，

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

drag![](mixly/media/bd3506b57febf33440dc831e3273c260.png)block and set to 500ms, then get the following block.

![](mixly/media/4f641b69abb5f964697df9d0594b3731.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Enter “control” →![](mixly/media/35d8652d308657b854152fc080c39dd3.png)，click blue gear icon, appear edit box, move![](mixly/media/12cff395715042bc2e2f5bea31f7a889.png)block into ![](mixly/media/95900b41ae4c029ea54b7615cd738c3f.png)then get→![](mixly/media/31210f144689f12e831a3f0214c3f711.png)block.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Enter “Logic” →![](mixly/media/6a1c89a4814740e276514180994c57d5.png), Copy block ![](mixly/media/6dfbd37cca17f2cf09ebb2a5075e3b6e.png)and ![](mixly/media/afe464e116326f22bc13584db15f0629.png)，modify “=” into “≤”，0 into 600, once, next get block:

![](mixly/media/6a1c89a4814740e276514180994c57d5.png)+![](mixly/media/31210f144689f12e831a3f0214c3f711.png)+![](mixly/media/6dfbd37cca17f2cf09ebb2a5075e3b6e.png)+![](mixly/media/c88344411fb8a03ad64a6f82aa8aea91.png)=![](mixly/media/1cde6b87773037a60abb03d5ce80bd64.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Enter“Control Output” →![](mixly/media/b1337892735406ec2a16c7fd2cb7ce18.png), LED is connected to digital 5, so set block ![](mixly/media/6ca275b177df536f610b9cbc72fb5c76.png),

![](mixly/media/6ca275b177df536f610b9cbc72fb5c76.png)+![](mixly/media/1cde6b87773037a60abb03d5ce80bd64.png)=![](mixly/media/6d7568bb50b57f00d543583dc49e7b96.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Add delay block![](mixly/media/bd3506b57febf33440dc831e3273c260.png)，delay in 500ms, combine delay block with ![](mixly/media/6ca275b177df536f610b9cbc72fb5c76.png)to get ![](mixly/media/0c84c1ad5a2b5ba80f1aec110c3cb118.png);

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

 Duplicate code string![](mixly/media/0c84c1ad5a2b5ba80f1aec110c3cb118.png)once and move it into “else” block，set to LOW. Refer to the following complete code.

![](mixly/media/ee3e58709c2ed2883deac9b298d7e967.png)

**Test Result：**

Hook up components, upload code and power on, set baud rate to 9600.

When the value is equivalent to or less than 600, yellow LED will be on; conversely, LED will go off.

![](mixly/media/b419d9dd38196af6381ea5fb25f48f5e.jpeg)

![](mixly/media/cac2538385acd84ad275873103de09f3.png)![](mixly/media/4866d343d55cf1dd5ecd1866fc3c52b5.png) ![](mixly/media/64677480779fa2283e4f183b44f549ca.png)

**Code Explanation：**

![](mixly/media/fcc73bb50dcef807b598cf84e5720fd0.png)

![](mixly/media/3d934862ce0d18d58efc5c8c627a8099.png)

![](mixly/media/711b2607bab2b88862edfda0f1c3e5d3.png): output word/data on serial monitor，wrap word

![](mixly/media/31210f144689f12e831a3f0214c3f711.png): if condition 1 is met, then the result will be A....., otherwise, the result will be B....

![](mixly/media/c8143ad7562b32804df0e9afcb21223e.png): logic statement, the value is equivalent to or less than 600

**Extension Practice:**

The light intensity of photocell sensor is greater than 500, yellow LED will light on; conversely, LED will go off.

![](mixly/media/5470f8e7c4a96df30887fc02e2351850.png)

![](mixly/media/baa044ee6e953a4c9834a0103b39bc3d.png)

### Project 7：Adjusting Servo Angle

**Description：**

When we make this kit, we often control doors and windows with servos. In this course, we’ll introduce its principle and how to use servo motors.

Servo motor is a position control rotary actuator. It mainly consists of housing, circuit board, core-less motor, gear and position sensor. Its working principle is that the servo receives the signal sent by MCU or receiver and produces a reference signal with a period of 20ms and width of 1.5ms, then compares the acquired DC bias voltage to the voltage of the potentiometer and obtain the voltage difference output.

When the motor speed is constant, the potentiometer is driven to rotate through the cascade reduction gear, which leads that the voltage difference is 0, and the motor stops rotating. Generally, the angle range of servo rotation is 0° --180 °

The rotation angle of servo motor is controlled by regulating the duty cycle of PWM (Pulse-Width Modulation) signal. The standard cycle of PWM signal is 20ms (50Hz). Theoretically, the width is distributed between 1ms-2ms, but in fact, it's between 0.5ms-2.5ms. The width corresponds the rotation angle from 0° to 180°. But note that for different brand motor, the same signal may have different rotation angle.

![](mixly/media/9525f9ee3c8d14d5249fecaf71043236.png)

One is to use a common digital sensor port of Arduino to produce square wave with different duty cycle to simulate PWM signal and use that signal to control the positioning of the motor.

Another way is to directly use the servo function of the Arduino to control the motor. In this way, the program will be easier to design, but it can only control two-channel motor because the servo function only uses digital pin 9 and 10.

However, you need to control more than one motor by external power as the drive capacity of micro:bit board is limited.

Note that don’t supply power through USB cable. There is possibility to damage the USB cable if the current demand is greater than 500MA. We recommend the external power.

**Specifications:**

Working voltage: DC 4.8V \~ 6V

Operating angle range: about 180 ° (at 500 → 2500 μsec)

Pulse width range: 500 → 2500 μsec

No-load speed: 0.12 ± 0.01 sec / 60 (DC 4.8V) 0.1 ± 0.01 sec / 60 (DC 6V)

No-load current: 200 ± 20mA (DC 4.8V) 220 ± 20mA (DC 6V)

Stopping torque: 1.3 ± 0.01kg · cm (DC 4.8V) 1.5 ± 0.1kg · cm (DC 6V)

Stop current: ≦ 850mA (DC 4.8V) ≦ 1000mA (DC 6V)

Standby current: 3 ± 1mA (DC 4.8V) 4 ± 1mA (DC 6V)

Lead length: 250 ± 5 mm

Appearance size: 22.9 \* 12.2 \* 30mm

Weight: 9 ± 1 g (without servo horn)

**Experiment equipment：**

| PLUS control board\*1                           | Sensor shield\*1                                 | Servo\*1                                        | USB cable\*1                                    |
|-------------------------------------------------|--------------------------------------------------|-------------------------------------------------|-------------------------------------------------|
| ![](mixly/media/24c831162a53ab88e584fbbedd6e4018.png) | ![](mixly/media/cc6f4cc25bad50e342fe54bc09417592.jpeg) | ![](mixly/media/c458fe22759b1d73bded113c44753333.png) | ![](mixly/media/0da41a27db41e1207a7f760067e93104.png) |

**Wiring Diagram：**

![](mixly/media/2993c9c61fb1185b6e24403e0eb53136.png)

Note: The servo is connected to G (GND), V (VCC), 9. The brown wire of the servo is connected to Gnd (G), the red wire is linked with 5v (V), and the orange wire is connected to digital pin 9.

**Test Code：**

Click "module" → “Drive_module”→![](mixly/media/fe610750903f8b41f2f26c48b2bb731d.png)，set to pin 9，delay in 500ms，

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Copy this code string twice，separately set to 90° and 180°, the whole coding string is shown below:

![](mixly/media/55ff1725ad3a3ac0ca2a6523136f38a9.png)

**Test Result：**

Upload code, dial DIP switch to right end and power on.

The servo swing forth and back in range of 0°\~90\~180°.

![](mixly/media/ba5f3f37e95764db68a956d945e60a13.png)

**Code Explanation：**

Set servo angle with library files, set signal end of servo to D9.

**Extension Practice:**

Set angle of servo, the servo swings in range of 0°\~45°\~90°\~135°\~180° alternately, delay in 500ms.

![](mixly/media/f8d1d27a94e00955bea5adc5aab2f568.png)

### Project 8：Fan Module

**Description**

![](mixly/media/54cdb977922bf3a61bf00d3b6468e403.jpeg)

The L9110 fan module adopts L9110 motor control chip, it can control the rotation direction and speed of the motor. Moreover, this module is efficient and with high quality fan, which can put out the flame within 20cm distance. Similarly, it is an important part of fire robot as well.

**Specifications:**

1\. Working voltage: 5V

2\. Working current: 0.8A

3\. TTL / CMOS output level compatible,

4\. Control and drive integrate in IC

5\. Have pin high pressure protection function

6\. Working temperature: 0-80 °

**Experiment equipment：**

| PLUS control board\*1                           | Sensor shield\*1                                 | Fan module\*1                                    | USB cable\*1                                    | Female to Female Dupont lines\*4                |
|-------------------------------------------------|--------------------------------------------------|--------------------------------------------------|-------------------------------------------------|-------------------------------------------------|
| ![](mixly/media/24c831162a53ab88e584fbbedd6e4018.png) | ![](mixly/media/cc6f4cc25bad50e342fe54bc09417592.jpeg) | ![](mixly/media/54cdb977922bf3a61bf00d3b6468e403.jpeg) | ![](mixly/media/0da41a27db41e1207a7f760067e93104.png) | ![](mixly/media/1b76ae2bbea30f1a9fe80b41de65ab94.png) |

**Wiring Diagram：**

![](mixly/media/a7ec518da57cd093981bd578ddc70aec.png)

Note: On the shield, the GND, VCC, INA, and INB pins of the fan module are respectively connected to G, V, 7, 6.

**Test Code：**

Turn clockwise and anticlockwise
Click "module" →“Drive_module” →![](mixly/media/949681fc8fa2cc5cacd7b112b0173702.png)，signal ends of fan module are linked with digital 7 and 6, so set to pin 7 and 6, stay HIGH unchanged. Upload program to test it.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

| INA（D7） | INB（D6） | Motor Fan |
|-----------|-----------|-----------|
| HIGH      | HIGH      | Not Turn  |

![](mixly/media/33b0c12c6f1968b64d64885bf600cb16.png)

It turns out that fan doesn’t rotate.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Then alter digital 7 into LOW, upload the code to see the change.

| INA（D7） | INB（D6） | Motor Fan           |
|-----------|-----------|---------------------|
| LOW       | HIGH      | Turn anticlockwise  |

![](mixly/media/cfe9f9e22becc6569260526eba511ace.png)

Fan turns anticlockwise.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Set D7 to HIGH, D6 to LOW, check out how fan rotates:

| INA（D7） | INB（D6） | Motor Fan       |
|-----------|-----------|-----------------|
| HIGH      | LOW       | Turn Clockwise  |

Fan turns clockwise.![](mixly/media/5ece517d0c698f68660e7b7908503feb.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Set D7 and D6 to LOW

| INA（D7） | INB（D6） | Motor Fan |
|-----------|-----------|-----------|
| LOW       | LOW       | Not Turn  |

![](mixly/media/359dd7dcad31f18fc45a5550ea19a14f.png)

The fan doesn’t rotate.

B. Fan rotates anticlockwise for 3s, stops for 3s, in clockwise direction for 3s

Copy ![](mixly/media/cfe9f9e22becc6569260526eba511ace.png) block;

Add![](mixly/media/bd3506b57febf33440dc831e3273c260.png)block，delay in 3000ms；

Fan turns anticlockwise for 3s:

![](mixly/media/d671362e3710b1110aa62b030f8d0856.png)+![](mixly/media/4f710f5c3d6b5f285cb2c417bc7eddbe.png)=![](mixly/media/b24b0d2503c9eaca76015aec12a8f616.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Duplicate![](mixly/media/b24b0d2503c9eaca76015aec12a8f616.png)twice，

Next to make fan stop for 1s, so set block:

![](mixly/media/09889fdaa1caed99f4a3133d7d93af49.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

And make fan turn clockwise:![](mixly/media/e648b30f0e1ee7401d6534fbb97f5a65.png)

The entire code:

![](mixly/media/35117c5f274494aa078b3ad7b3aaa5ce.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Regulate speed

Fan rotates so rapidly, is there a way to make it slow?

PWM ports can output and alter high and low level steadily in certain time, which can adjust speed of motor. The signal end of fan is linked with digital 7 and 6, digital 6 is PWM port.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Click "module"→“Drive_module” →![](mixly/media/d36526bb20870c531a6c70ebd8706333.png)，set pin 7 and 6, when fan rotates anticlockwise, INA outputs LOW, assign the PWMB value as 150, add delay block, set to 3000ms, then fan will turn slowly.

![](mixly/media/98d7c9c7952df3e50f47e65c0f6ca9eb.png)+![](mixly/media/d36526bb20870c531a6c70ebd8706333.png)=![](mixly/media/8f3e7a45558a94140fd048ab75956bbe.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Duplicate![](mixly/media/68466e015119657c06dd8ea1bad4a22f.png)twice，when not turning, we set block :![](mixly/media/a422155b7fce00f836e6486e72dd94a9.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

When turning clockwise, we set block:![](mixly/media/18eb1f4c99ab18e833ef1073dd5fad78.png) and fan will rotate slowly. Upload program code and see the result.

![](mixly/media/bae9d00c4e66d37d50f9bbfdac243435.png)

**Test Result：**

Upload test code, wire up components according to connection diagram. The DIP switch is dialed to right side and power on. The fan rotates counterclockwise for 3000ms, stops for 1000ms, then rotates clockwise for 3000ms.

![](mixly/media/c0d64cc8394901f8b0a750ded20fe969.jpeg)

**Code Explanation：**

![](mixly/media/cfe9f9e22becc6569260526eba511ace.png):

fan rotates anticlockwise at the fastest speed, blow outward.

![](mixly/media/5ece517d0c698f68660e7b7908503feb.png): fan rotates clockwise at the fastest speed, blow inward.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

![](mixly/media/914a49c8291c6c480c2d7b9e62d4a609.png): fan turns slowly, and rotates anticlockwise at the speed of PWMB 150, blow outward

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

![](mixly/media/f503f65e82c0c0262bf51ed8f479a7ec.png): fan turns slowly, and rotates clockwise at the speed of PWMB 150, blow inward.

**Extension Practice:**

Fan will rotate clockwise for 2500ms, stop for 1000ms and turn anticlockwise for 2500ms, stop for 1000ms, and rotate clockwise at the speed of PWM100.

![](mixly/media/777e41fd94befe74d6222f1bcd40f9bd.png)

### Project 9：Steam Sensor

**Description：**

![](mixly/media/d4d2afcefef9dfe30b45110c1fa5eb4a.png)

This is a commonly used steam sensor. Its principle is to detect the amount of water by bare printed parallel lines on the circuit board. The more the water content is, the more wires will be connected. As the conductive contact coverage increases, the output voltage will gradually rise. It can detect water vapor in the air as well. The steam sensor can be used as a rain water detector and level switch. When the humidity on the sensor surface surges, the output voltage will increase.

The sensor is compatible with various microcontroller control boards, such as Arduino series microcontrollers. When using it, we provide the guide to operate steam sensor and Arduino control board.

First, connect the sensor to the analog port of the microcontroller, and display the corresponding analog value on the serial monitor.

Note: the connection part is not waterproof, therefore, don’t immerse it in the water please.

**Specifications:**

Working voltage: DC 3.3-5V

Working current: \<20mA

Operating temperature range: -10 ℃ ～ ＋ 70 ℃;

Control signal: analog signal output

Interface: 3pin interface with 2.54mm in pitch

**Experiment equipment：**

| PLUS control board\*1                           | Sensor shield\*1                                 | Steam sensor\*1                                 | USB  cable\*1                                   | 3pinF-F Dupont  line\*1                         |
|-------------------------------------------------|--------------------------------------------------|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|
| ![](mixly/media/24c831162a53ab88e584fbbedd6e4018.png) | ![](mixly/media/cc6f4cc25bad50e342fe54bc09417592.jpeg) | ![](mixly/media/d4d2afcefef9dfe30b45110c1fa5eb4a.png) | ![](mixly/media/0da41a27db41e1207a7f760067e93104.png) | ![](mixly/media/bad041b053825940869213d9f431ef96.png) |

**Wiring Diagram：**

![](mixly/media/b050f0182ffc81a13824af95511a9fe5.png)

Note: On the sensor shield, the pins G，V and S of steam sensor are connected to G, V and A3

**Test Code：(Note: you could set the range of analog value freely based on test result)**

Initialize firstly，click “Control” → ![](mixly/media/d48c39a58db4b922b32d68247925ba1f.png)，

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Enter ”serialport” → ![](mixly/media/03895bd4a93a21339a63618e108ba269.png)；

![](mixly/media/03895bd4a93a21339a63618e108ba269.png)+![](mixly/media/70bfff86b53dcc9e9d659b67819d3637.png)=![](mixly/media/355b66af95930249e8648fa98c79da9a.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

To read the signal detected by steam sensor, enter “serialport” →![](mixly/media/711b2607bab2b88862edfda0f1c3e5d3.png);

Click “sensor” → “Analog Read” →![](mixly/media/6ea7963b7d07282fa4730a60b9fa7d49.png), steam sensor is connected to A3 of shield, therefore, set to A3;

Then![](mixly/media/711b2607bab2b88862edfda0f1c3e5d3.png)+![](mixly/media/46557602570effb84df85a8ab307fe0f.png)=![](mixly/media/5209321143fc7cbac5a3075cad870b8e.png);

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

To prevent numbers from updating rapidly，add![](mixly/media/bd3506b57febf33440dc831e3273c260.png)block，set to 500ms, check out the entire code:

![](mixly/media/2a102b68229923074e13c071d7a811f9.png)

The higher the humidity, the larger the value on serial monitor; on the contrary, the lower the humidity, the smaller the value.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

**Test Result：**

Upload code, wire up components, and drop water on steam sensor.

At the beginning, the analog value is getting larger. If you wipe out the water on steam sensor, the analog value will reduce

![](mixly/media/f3f1b41178d3c24b344c80716179bb3d.jpeg)

**Code Explanation**

![](mixly/media/62ddbc0f34ac2d699aff5f3408e26194.png)

![](mixly/media/ffd52c42dde30f9470d050a6c25e285c.png)： Set baud rate to 9600

![](mixly/media/711b2607bab2b88862edfda0f1c3e5d3.png): Output word/data on serial monitor, word wrap.

### Project 10：PIR Motion Sensor

**Description：**

![](mixly/media/3ced83ccadf7d3ef5783ddb224cf3e4d.jpeg)

The Pyroelectric infrared motion sensor can detect infrared signals from moving objects, and output switching signals. Applied to a variety of occasions, it can detect movement of human body.

Conventional pyroelectric infrared sensors are much more bigger, with complex circuit and lower reliability. Yet, this new pyroelectric infrared motion sensor, is more practical. It integrates a digital pyroelectric infrared sensor and connecting pins. It features higher sensibility and reliability, lower power consumption, light weight, small size, lower voltage working mode and simpler peripheral circuit.

**Specifications:：**

Input voltage: DC 3.3V \~ 18V

Working current: 15uA

Working temperature: -20 \~ 85 degrees Celsius

Output voltage: high 3 V, low 0 V

Output delay time (high level): about 2.3 to 3 seconds

Detection angle: about 100 °

Detection distance: 3-4 meters

Output indicator LED (high-level )

Pin limit current: 100mA

Note：

1\. The maximum distance is 3-4 meters during testing.

2\. In the test, open the white lens to check rectangular sensing part. When the long line of the sensing part is parallel to the ground, the distance is the best.

3\. In the test, covering the sensor with white lens can sense the distance precisely.

4\. The distance is best at 25℃, and the detection distance value will reduce when temperature exceeds 30℃.

5\. After powering up and uploading the code, you can start testing after 5-10 seconds, otherwise the sensor is not sensitive.

**Experiment equipment：**

| PLUS control board\*1                            | Sensor  shield\*1                                | PIR motion sensor\*1                             | F-F Dupont lines\*4                             |
|--------------------------------------------------|--------------------------------------------------|--------------------------------------------------|-------------------------------------------------|
| ![](mixly/media/24c831162a53ab88e584fbbedd6e4018.png)  | ![](mixly/media/cc6f4cc25bad50e342fe54bc09417592.jpeg) | ![](mixly/media/3ced83ccadf7d3ef5783ddb224cf3e4d.jpeg) | ![](mixly/media/1b76ae2bbea30f1a9fe80b41de65ab94.png) |
| Fan module\*1                                    | White LED module\*1                              | USB cable\*1                                     | 3pinF-F Dupont  line\*2                         |
| ![](mixly/media/54cdb977922bf3a61bf00d3b6468e403.jpeg) | ![](mixly/media/9cad01dce5c196317f665e6115b44c86.jpeg) | ![](mixly/media/0da41a27db41e1207a7f760067e93104.png)  | ![](mixly/media/18bffe57fac75c8ff5a156ac96f1798d.png) |

**Wiring Diagram：**

![](mixly/media/070ebbff591c015a1c2986e4d5e0803d.png)

Note: On the shield, the G, V and S of PIR motion sensor are connected to G, V and 2; the GND, VCC, INA and INB of fan module are separately linked with G,V,7,6. The pin G, V and S of LED module are linked with G, V and 13.

**Test Code：**

Initialize firstly，Click “Control” →![](mixly/media/d48c39a58db4b922b32d68247925ba1f.png);

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Enter “Serialport” → ![](mixly/media/03895bd4a93a21339a63618e108ba269.png),

Then we get the block:

![](mixly/media/03895bd4a93a21339a63618e108ba269.png)+![](mixly/media/d48c39a58db4b922b32d68247925ba1f.png)=![](mixly/media/7fb955029eb9e0954f5ea2c81533c083.png)

To read the signal detected by PIR motion sensor, click “Serialport” →![](mixly/media/711b2607bab2b88862edfda0f1c3e5d3.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Click “Sensor” → “Digital Read” → ![](mixly/media/49564a464d765366d882a01fdd63a196.png), PIR motion sensor is linked with digital 2, so set to pin 2.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Next to get block:

![](mixly/media/22a8cdd041711d5c4df951c5c561cbe6.png)+![](mixly/media/711b2607bab2b88862edfda0f1c3e5d3.png)=![](mixly/media/b370482f8e5d63396c5861b97bc706b3.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Add![](mixly/media/bd3506b57febf33440dc831e3273c260.png)block, set to 500ms.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Then judge if there is person close，enter “control” →![](mixly/media/35d8652d308657b854152fc080c39dd3.png)，click blue gear icon, appear edit box, move![](mixly/media/12cff395715042bc2e2f5bea31f7a889.png)block into ![](mixly/media/95900b41ae4c029ea54b7615cd738c3f.png)then get→![](mixly/media/31210f144689f12e831a3f0214c3f711.png)block.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Click “Logic” → ![](mixly/media/385087071ed9a7b46dd67364354a0421.png)，Duplicate ![](mixly/media/79e83cc54527ecaeb8a26cea2b4a12c6.png)once, select ![](mixly/media/74a4c2996a6b37d1a9a8505389fa401c.png) from “math”, modify it into 1.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

![](mixly/media/385087071ed9a7b46dd67364354a0421.png)+![](mixly/media/31210f144689f12e831a3f0214c3f711.png)+![](mixly/media/94cc55d681342037896c2fe383ae13a4.png)+![](mixly/media/79e83cc54527ecaeb8a26cea2b4a12c6.png)=![](mixly/media/1492f399c9c59b386f8b42ad8fa66dff.png);

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Click “Control Output” →![](mixly/media/d4e6736d00db1e70fad20c04236ebe0d.png)，set to pin 13.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Enter "module" →”Drive_module” →![](mixly/media/e1db2539bcdbc2521fb055b8aa04ddf4.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Set pin to 7 and 6, INA to HIGH and PWMB to 150:

![](mixly/media/3f6aba5cf8a1c8d05065cc194ee61b6f.png)+![](mixly/media/1492f399c9c59b386f8b42ad8fa66dff.png)+![](mixly/media/88c5f9c5939e311593a9071dce76ab90.png)=![](mixly/media/b894d9cced2b94abff14d70ce042ba97.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Copy![](mixly/media/5ed639fa5c4ea1467db738cdfdb766e4.png)once, move it to else block, set to LOW, assign the value of 0. Okay, check the whole code string. ![](mixly/media/2a28d820abdeb7c3d1e7c06bbc189258.png)

**Test Result：**

Upload the above test code, open serial monitor, and set baud rate to 9600. If PIR motion sensor detects someone nearby, the serial monitor will display “1” , and LED and D13 will be turned on as well, and fan will rotate. If nobody is around, the serial monitor will show “0”, indicators will be off and fan will stop rotating.

**![](mixly/media/ee5376ab8b49273f8f968f9dc078124a.jpeg)**

![](mixly/media/3eb925d815a63da1a934e0908f5b064e.png)![](mixly/media/c68395e2a401ec7e8278ca343014b2b0.png)![](mixly/media/a1af3f46d8a9e982a89365874c4ebbaf.png)

**Code Explanation:**

![](mixly/media/a2f61ef8bf2aa488dab1c7d803ac5967.png): Read the signals 1 and 0 of PIR motion sensor.

![](mixly/media/0b45761a12377501298129bfd5e73a6c.png): Read the digital signal of D2 is 1.

![](mixly/media/5579d037694a5bf2eec630cf4d312ec7.png)set baud rate to 9600,![](mixly/media/5944ab23cd762ede61fb01b896cffa41.png)digital signals are displayed on serial monitor, set to word wrap.

![](mixly/media/31210f144689f12e831a3f0214c3f711.png): if condition 1 is met, then the result will be A....., otherwise, the result will be B....

**Extension Practice：**

In certain distance, when there is person around, LED flashes and fan turns anticlockwise at the speed of PWMB200; however, if nobody, LED is off and fan rotates clockwise at the speed of PWMB150

![](mixly/media/e1a6c43b5bba468e49f808e37fa93820.png)

### Project 11：Analog Gas Sensor

![](mixly/media/fed3dd9e2581a73519bfad27b4f3a533.png)

**Description：**

This gas sensor is used for household gas leak alarms, industrial combustible gas alarms and portable gas detection instruments. Also, it is suitable for the detection of liquefied gas, benzene, alkane, alcohol, hydrogen, etc.,

The MQ-2 smoke sensor can be accurately a multi-gas detector, with the advantages of high sensitivity, fast response, good stability, long life, and simple drive circuit.

It can detect the concentration of flammable gas and smoke in the range of 300\~10000ppm. Meanwhile, it has high sensitivity to natural gas, liquefied petroleum gas and other smoke, especially to alkanes smoke.

It must be heated for a period of time before using the smoke sensor, otherwise the output resistance and voltage are not accurate. However, the heating voltage should not be too high, otherwise it will cause internal signal line to blow.

It belongs to the tin dioxide semiconductor gas-sensitive material. At a certain temperature, tin dioxide adsorbs oxygen in the air and forms negative ion adsorption of oxygen, reducing the electron density in the semiconductor, thereby increasing its resistance value.

When in contact with flammable gas in the air and smog, and the potential barrier at the grain boundary is adjusted by the smog, it will cause the surface conductivity to change. With this, information about the presence of smoke or flammable gas can be obtained. The greater the concentration of smoke or flammable gas in the air, the greater the conductivity, and the lower the output resistance, the larger the analog signal output. In addition, the sensitivity can be adjusted by rotating the potentiometer.

**Specifications:**

Working voltage: 3.3-5V (DC)

Interface: 4 pins (VCC, GND, D0, A0)

Output signal: digital signal and analog signal

Weight: 7.5g

**Experiment equipment：**

| PLUS control  board\*1                           | Sensor shield\*1                                 | MQ-2 gas sensor\*1                              | Fan module\*1                                    | Yellow LED module\*1                             |
|--------------------------------------------------|--------------------------------------------------|-------------------------------------------------|--------------------------------------------------|--------------------------------------------------|
| ![](mixly/media/24c831162a53ab88e584fbbedd6e4018.png)  | ![](mixly/media/cc6f4cc25bad50e342fe54bc09417592.jpeg) | ![](mixly/media/fed3dd9e2581a73519bfad27b4f3a533.png) | ![](mixly/media/54cdb977922bf3a61bf00d3b6468e403.jpeg) | ![](mixly/media/c330317970c9594d8baed73ee43106e6.jpeg) |
| Passive buzzer\*1                                | USB cable\*1                                     | F-F Dupint line\*8                              | 3pinF-F Dupint line\*2                           |                                                  |
| ![](mixly/media/73d052659c19eb9abbf9ed63261d22c0.jpeg) | ![](mixly/media/0da41a27db41e1207a7f760067e93104.png)  | ![](mixly/media/42d3f31a0f9d17c0a219a885dd2759bf.png) | ![](mixly/media/05621d579e502c5e71fa193a6afe7ac6.png)  |                                                  |

**Wiring Diagram：**

![](mixly/media/fd2ddca992d60be4f17cbd53830d0283.png)

Note: On the shield, the pin GND, VCC, D0 and A0 of gas sensor are linked with pin G, V and A0. The pin G,V and S of passive buzzer are connected to G,V and 3.

**Test Code：(Note: you could set the range of analog value freely based on test result)**

Analog output 0\~5V voltage; the higher the concentration, the higher the voltage.

300-10000ppm (0-5V) corresponds to 0-1023. So there is a proportional relationship. The analog signal 0 corresponds 300ppm; and analog signal 1023 corresponds 10000ppm.

Using the formula , calculate the concentration of combustible gas or smoke in the air.

（refers to the analog signal value when the smoke sensor detects flammable gas or smoke; refers to the analog signal value in the initial state; W refers to the concentration）

If the analog signal is 40 at the beginning, there is a flammable gas in the air, and the analog signal is 515. Thus, the concentration of the air flammable gas is 4799.5 ppm ().

Design the code that MQ-2 gas sensor detects flammable gas and outputs the analog signal.

Click “Control” →![](mixly/media/d48c39a58db4b922b32d68247925ba1f.png), enter “Serialport” → ![](mixly/media/03895bd4a93a21339a63618e108ba269.png),

Then we get the block:

![](mixly/media/03895bd4a93a21339a63618e108ba269.png)+![](mixly/media/d48c39a58db4b922b32d68247925ba1f.png)=![](mixly/media/7fb955029eb9e0954f5ea2c81533c083.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Enter “Serialport” → ![](mixly/media/711b2607bab2b88862edfda0f1c3e5d3.png), click “sensor”→“Analog Read” →![](mixly/media/7dbcf763089d7bed40f596cc0df953fd.png);

![](mixly/media/7dbcf763089d7bed40f596cc0df953fd.png)+![](mixly/media/711b2607bab2b88862edfda0f1c3e5d3.png)=![](mixly/media/fce6366818267e198bbf2747fb525543.png).

This block is used to detect and display the concentration value of combustible gas

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Add![](mixly/media/bd3506b57febf33440dc831e3273c260.png)block，delay in 500ms. Upload the program and open serial monitor, point fire lighter at analog gas (MQ-2）sensor to test.

![](mixly/media/7d57797a0baf044521100b63997aff2c.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Open serial monitor, the analog value is less than 45. Point fire lighter at gas sensor, the analog value is getting larger. Power on, adjust potentiometer of gas sensor to make LED1 at the critical point between off and on and sensitivity is highest.

Note: the range of analog value is 0\~1023, however, the detected range is 300-10000ppm. If the smoke per cubic meter of air is less than 300 cubic centimeters, the value can’t be detected.

Next to make code that MQ-2 gas sensor controls passive sensor:

If the analog data of A0 is greater than 45, the passive buzzer will emit sound. We could use block ![](mixly/media/31210f144689f12e831a3f0214c3f711.png)to express this statement.

Enter “control” →![](mixly/media/35d8652d308657b854152fc080c39dd3.png)，click blue gear icon, appear edit box, move![](mixly/media/12cff395715042bc2e2f5bea31f7a889.png)block into ![](mixly/media/95900b41ae4c029ea54b7615cd738c3f.png)then get→![](mixly/media/31210f144689f12e831a3f0214c3f711.png)block，

The content behind “ if” is to set assuming condition, such as “if the analog data of A0 is greater than 45 and signal of digital 11 is 0”.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Let’s complete the code that analog data is greater 45. Enter ”Logic” →![](mixly/media/19b5cd0f036965935ba8db75e02936c1.png)，modify “=” into “\>”;

Click “analog sensor” →![](mixly/media/7dbcf763089d7bed40f596cc0df953fd.png), move out the ![](mixly/media/f0592932286ff1033e0e48ad65d37e28.png) from “math”, alter 0 into 45.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

The we get block:

![](mixly/media/7dbcf763089d7bed40f596cc0df953fd.png)+![](mixly/media/a2b6f43afa65289d5efb63bfaa70b003.png)+![](mixly/media/9a5e5a82304e914a2baba85b7baa10fe.png)=![](mixly/media/c418d43b558b93e18ce6ac955867aa07.png); the analog value can be set freely.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Click“Control Output”→![](mixly/media/97d70723445e4d766968da159c253471.png)， set to pin3. Enter"module" →“Drive_module” →![](mixly/media/71d317fe6955080cc0a136900a70fa06.png)，set to pin 7 and 6; in order to stop fan from turning rapidly, set INA to LOW and PWMB to 200. Get block:![](mixly/media/ba4cea624bd7bcaeb57f60e3a58a3829.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Enter“Control Output”→![](mixly/media/b1337892735406ec2a16c7fd2cb7ce18.png)， set to pin 5, remain HIGH unchanged. Add block![](mixly/media/bd3506b57febf33440dc831e3273c260.png), set to 200ms，then we get code string:![](mixly/media/b046860322299ba02a61a8cabd7f041d.png);

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Replicate block![](mixly/media/b046860322299ba02a61a8cabd7f041d.png)once, set to LOW.

![](mixly/media/e4b443685d71dcd97618245aecb4451b.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Else means that when analog value of gas sensor is less than 45, passive won’t emit sound. Click“Control Output”→![](mixly/media/14305ecf6afea24cad84e5cdaf64b369.png)， set to pin 3; copy ![](mixly/media/7d3863c666514bee48d60168d1cb2f99.png)，set to LOW, duplicate ![](mixly/media/ba4cea624bd7bcaeb57f60e3a58a3829.png)set PWMB to 0. Upload code to see the result:

![](mixly/media/04d29e83b30f2def07e239e6b3708ee6.png)

**Test Result：**

Wire up, burn test code and power up. When there is combustible gas, the passive buzzer will alarm, fan will rotate and LED will flash; however, if no flammable gas is around, they won’t work.

![](mixly/media/10e1be4e6db13858ed9d11d458cc9633.jpeg)

**Code Explanation:**

![](mixly/media/7dbcf763089d7bed40f596cc0df953fd.png)，read the analog data of digital A0 of MQ-2 gas sensor.
![](mixly/media/03895bd4a93a21339a63618e108ba269.png): set baud rate to 9600.
![](mixly/media/fce6366818267e198bbf2747fb525543.png): Detect and display the analog data on serial monitor and set word wrap.

**Extension Practice：**

The analog value of flammable gas or smoke is greater than 40, passive buzzer will emit sound with tone of NOTE_A4 and 1/4 beat, yellow LED will blink. Otherwise, yellow LED and passive buzzer won’t work, fan will rotate clockwise at the speed of PWMB 150

![](mixly/media/5852fafc298a4a805ab118d69ae0c23b.png)

### Project 12: 1602 LCD Display

![](mixly/media/ab1818942731c6e822a574ba5c0df31e.jpeg)

**Description：**

This is a display module, with I2C communication module, can show 2 lines with 16 characters per line.

It shows blue background and white word and is attached to I2C interface of MCU. On the back of LCD display is a blue potentiometer for adjusting the backlight. The communication default address is 0x27.

The original 1602 LCD can run with 7 IO ports, but ours is built with ARDUINOIIC/I2C interface, saving 5 IO ports. Alternatively, the module comes with 4 positioning holes with a diameter of 3mm, which is convenient for you to fix on other devices.

Notice that when the screen gets brighter or darker, the characters will become more visible or less visible.

**Specifications:**

I2C address: 0x27

Backlight (blue, white)

Power supply voltage: 5V

Adjustable contrast

GND: A pin that connects to ground

VCC: A pin that connects to a +5V power supply

SDA: A pin that connects to analog port A4 for IIC communication

SCL: A pin that connects to analog port A5 for IIC communication

**Experiment equipment:**

| PLUS control board\*1                           | Sensor shield\*1                                 | 1602 LCD Display\*1                              | USB cable\*1                                    | 4pinF-F Dupont  line\*1                         |
|-------------------------------------------------|--------------------------------------------------|--------------------------------------------------|-------------------------------------------------|-------------------------------------------------|
| ![](mixly/media/24c831162a53ab88e584fbbedd6e4018.png) | ![](mixly/media/cc6f4cc25bad50e342fe54bc09417592.jpeg) | ![](mixly/media/ab1818942731c6e822a574ba5c0df31e.jpeg) | ![](mixly/media/0da41a27db41e1207a7f760067e93104.png) | ![](mixly/media/7e9771a54d49d2cc123894447b941cf8.png) |

**Wiring Diagram：**

![](mixly/media/18e30bb459c2c24d40509741424c3fb9.png)

Note: there are pin GND, VCC, SDA and SCL on 1602LCD module. GND is linked with GND（-）of IIC communication, VCC is connected to 5V（+）, SDA to SDA,

SCL to SCL.

**Test Code:**

Code 1：1602 LCD displays “Hello World！

Click “Control” →![](mixly/media/d48c39a58db4b922b32d68247925ba1f.png);

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Enter "module" →“Display_module” →![](mixly/media/a52256ffd323cba7c02911fa679cb9f9.png);

Then we get block:

![](mixly/media/a52256ffd323cba7c02911fa679cb9f9.png)+![](mixly/media/d48c39a58db4b922b32d68247925ba1f.png)=![](mixly/media/78611c3c607c35ff612df69429ea381e.png);

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Then enter “Display_module” →![](mixly/media/b55b233311a125f427c1989ee06bfb4f.png), click drop down triangle to select “clear”: ![](mixly/media/3e42f719ee3f3aefa8842a844e66e4c9.png), clear the previous content on 1602 LCD.

![](mixly/media/3e42f719ee3f3aefa8842a844e66e4c9.png)+![](mixly/media/78611c3c607c35ff612df69429ea381e.png)=![](mixly/media/4c8c277862cc8971db43b19b8a602f66.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Enter“Display_module” →![](mixly/media/53f6c24377a750451ee0b35e42497fa6.png)，

The content you fill in must be letters, numbers, symbols and spaces.

For instance, delete“Hello World”and fill in“line1”and“lin2”.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Copy![](mixly/media/d6a0e2d8be0f655c91cfd03275fe23e6.png)again. Enter“Control”→![](mixly/media/bd3506b57febf33440dc831e3273c260.png)，set to 300ms, upload code to see the result.

![](mixly/media/92ffdc18dddf179510e8b6526a9420c2.png)

“Hello World”is displayed on line 1 of 1602 LCD and rolls leftward

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Code 2：”Hello” is displayed at row 1 and column 3, “AB” is shown at row2 and column 1; “12345” appears at row 2, column 4

We make 1602 LCD display “Hello World！”, then we copy the code string of code 1:

![](mixly/media/4c8c277862cc8971db43b19b8a602f66.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Duplicate ![](mixly/media/3e42f719ee3f3aefa8842a844e66e4c9.png)once, then enter “Display_module” →![](mixly/media/5872e79dba8b1af922d46775edc47ba9.png)，set to row 1, column 3, print “Hello”, then get ![](mixly/media/cebe052eae73d190f04a1acc0b808c1f.png), add![](mixly/media/bd3506b57febf33440dc831e3273c260.png)block.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Then get code string:

![](mixly/media/3e42f719ee3f3aefa8842a844e66e4c9.png)+![](mixly/media/cebe052eae73d190f04a1acc0b808c1f.png)+![](mixly/media/bd3506b57febf33440dc831e3273c260.png)=![](mixly/media/3759127c04d26a4d2c6f89b9460463a6.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Copy ![](mixly/media/3759127c04d26a4d2c6f89b9460463a6.png)twice，then separately set to row 1, column 3, print “AB”; and set to row 2, column 4, print “12345”, refer to the following code string.

![](mixly/media/b1faa8377d6e6d75f3adb181e82a0407.png)

**Test Result：**

Upload Test Code1 and power on, “Hello World” is displayed at row 1 on 1602 LCD, and rolls leftward. Upload Test Code2，1602 LCD displays “Hello”, "AB" and “12345”.

Note: Wire according to connection diagram, upload the code and after power on, when no characters shown, you can adjust the potentiometer behind the 1602LCD and backlight to make the 1602LCD display the corresponding character string.

![](mixly/media/dbe985355c82548bdfaafc51f2f44dc9.jpeg)

**Code Explanation：**

![](mixly/media/a52256ffd323cba7c02911fa679cb9f9.png): initialize1602 LCD，SCL and SDA of 1602 LCD are linked with SCL and SDA of Arduino board or shield or A4 and A5 of analog port.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

![](mixly/media/630049337f425b6acc973266fecfbeaa.png)clear the previous content on 1602LCD, click drop-down triangle to get a series of options.

![](mixly/media/aa60c61d8acd7eb462bb7013fc39b434.png): “Hello World!” is displayed at row 1and column 1, you could set row 1 and column 2. However, you can’t set in which columns the displayed content is. This displayed content is default at column 1.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

![](mixly/media/31fb754977c98d300ba1d4011eb290b4.png): use library files and make the shown data of 1602 LCD roll leftward. There is another corresponding block ![](mixly/media/8251dfe3a6b64715919d3ad6630eeefa.png)，it can make displayed data roll rightward.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

![](mixly/media/0ae7c31417535d31e4d4eac62ccc3571.png): “Hello” starts showing at row 1 and column 3, you could display character at different rows and columns. when set row 0 and column 0, ”Hello” appears at row 2 and column 1 on the display; its function is to show the location of character.

Note: Wire up, upload code and power on. When no character displayed, we recommend you to adjust the potentiometer at the back and backlight to make character string appear.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

### Project 13：Soil Humidity Sensor

![](mixly/media/4fc308a59339d9178ffa2f3254b55ecd.jpeg)

**Description：**

This is a sensor to detect the soil humidity.

If the soil is lack of water, the analog value output by the sensor will decrease; otherwise, the value will increase. It can be applied to prevent your household plants from being destitute of water.

The soil humidity sensor module is not as complicated as you think. It has two probes. When inserted into the soil,it will get resistance value by reading the current changes between the two probes and converting resistance value into moisture content. The higher the moisture (less resistance), the higher the conductivity.

Meanwhile, it comes with 2 positioning holes for installing on other devices.

**Specification:**

Power Supply Voltage: 3.3V or 5V

Working Current: ≤ 20mA

Output Voltage: 0-2.3V (When the sensor is totally immersed in water, the voltage will be 2.3V) the higher humidity, the higher the output voltage

Sensor type: Analog output

Interface definition: S- signal, G- GND, V - VCC

**Experiment equipment：**

| PLUS control board\*1                           | Sensor shield\*1                                 | Soil humidity sensor\*1                          | 1602 LCD display\*1                              |
|-------------------------------------------------|--------------------------------------------------|--------------------------------------------------|--------------------------------------------------|
| ![](mixly/media/24c831162a53ab88e584fbbedd6e4018.png) | ![](mixly/media/cc6f4cc25bad50e342fe54bc09417592.jpeg) | ![](mixly/media/4fc308a59339d9178ffa2f3254b55ecd.jpeg) | ![](mixly/media/ab1818942731c6e822a574ba5c0df31e.jpeg) |
| USB cable\*1                                    | 4pinF-F Dupont line\*1                           | 3pinF-F Dupont line\*1                           |                                                  |
| ![](mixly/media/0da41a27db41e1207a7f760067e93104.png) | ![](mixly/media/7e9771a54d49d2cc123894447b941cf8.png)  | ![](mixly/media/4e989abe8df04574fdba53bea8f89d78.png)  |                                                  |

**Wiring diagram：**

![](mixly/media/8339f3adc268de8c8dd5d26a6c0a1359.png)

Note: On the shield, the pin G, V and S of soil humidity sensor are connected to G, V and A2; GND of 1602LCD is linked with GND of ICC communication, VCC is connected to 5V（+）, SDA to SDA, SCL to SCL.

**Test Code：(Note: you could set the range of analog value freely based on test result)**

Wire soil humidity sensor with 1602 LCD display. Let’s design the code to test soil humidity.

Click “Control” →![](mixly/media/d48c39a58db4b922b32d68247925ba1f.png)，

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Enter “Serialport” → ![](mixly/media/03895bd4a93a21339a63618e108ba269.png),

Then we get the block:

![](mixly/media/03895bd4a93a21339a63618e108ba269.png)+![](mixly/media/d48c39a58db4b922b32d68247925ba1f.png)=![](mixly/media/7fb955029eb9e0954f5ea2c81533c083.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

To read the signal detected by soil humidity sensor, drag out block![](mixly/media/542dda143e5461f50b25ce1501d7d6e4.png)and ![](mixly/media/711b2607bab2b88862edfda0f1c3e5d3.png)from “serial port”

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Enter “Text”→![](mixly/media/5b5bb92d0290514b576e11635fa70f12.png)，![](mixly/media/5b5bb92d0290514b576e11635fa70f12.png)+![](mixly/media/542dda143e5461f50b25ce1501d7d6e4.png)=![](mixly/media/37cc78797cc0f921cbd04d8e24475ac6.png)，copy this code once, change the first “hello” into “Soil moisture value”，then get block![](mixly/media/c41c4cdd4819423786dcd221dc5e77a5.png)；

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Then delete the second “hello”, get block:![](mixly/media/3a0f7e9592217c53ff5a922134ec5bbc.png).

Click “Sensor”→ “Analog Read” →![](mixly/media/a0a7ff5237277ff6b2b2cd9d7516d64e.png)，soil humidity sensor is attached to A2, get block![](mixly/media/9e945eb11f41113659d834d9922e9ce6.png),

![](mixly/media/9e945eb11f41113659d834d9922e9ce6.png)+![](mixly/media/711b2607bab2b88862edfda0f1c3e5d3.png)=![](mixly/media/49fd44a4268676cb4ef58d80637eacc6.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Drag out block![](mixly/media/bd3506b57febf33440dc831e3273c260.png)，set to 500ms, upload program, insert soil humidity sensor into soil and check the analog value.

![](mixly/media/d34356a693733f81971d527f498e9d9c.png)

Open serial monitor, insert soil humidity sensor into dry soil, the analog value is around in the range of 0\~300; When in wet soil, the range is 300\~700; in the water, the range is 700\~950.

In this lesson, we need to observe the distinct humidity in different condition. So we need to use assuming condition, like![](mixly/media/ef7b916ed8f5aef251cea0cac3b67fd9.png)block. ![](mixly/media/1a01ce173983e9a1941fca636e0d1615.png).

for instance, we set “if the analog data of soil humidity is greater than0 and less than 300”, which is assuming condition.

Next, we will show you how to create a variable. You will adopt this method in the subsequent courses. In this lesson, need to create “value” which saves the soil humidity value detected.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Enter “variables” →![](mixly/media/646793018efc12df8b07c6993fc08465.png)， click “math” →![](mixly/media/e4ca6cf968f2bcc710de5bc2813d5027.png), then we get block:![](mixly/media/646793018efc12df8b07c6993fc08465.png)+![](mixly/media/e4ca6cf968f2bcc710de5bc2813d5027.png)=![](mixly/media/9d201b36cd05274487459b0b1e930d33.png)，

Change “item” into “value”，we get block![](mixly/media/f59792507a250a81b969225a81cd5c07.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

![](mixly/media/f59792507a250a81b969225a81cd5c07.png)+![](mixly/media/7fb955029eb9e0954f5ea2c81533c083.png)=![](mixly/media/96b9f85d0d063823b746c6921cfdc8e2.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

A variable is like a box. We can name it, like "num". You could put anything inside such as oranges, apples, pears, etc.. It is changeable. “Value” means soil humidity.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Click “variables”→![](mixly/media/f506d63b1e458aafa15510afd6592d37.png)， ![](mixly/media/f506d63b1e458aafa15510afd6592d37.png)+![](mixly/media/ff760b47968023b4debf6340971e595e.png)=![](mixly/media/0b8409538b3a4b06a1683d8f08a9a02f.png)， then move out![](mixly/media/64c673ae500462fc5c184171e89a656a.png)from![](mixly/media/49fd44a4268676cb4ef58d80637eacc6.png) ;

Combine it with ![](mixly/media/f506d63b1e458aafa15510afd6592d37.png), therefore we get block:![](mixly/media/64c673ae500462fc5c184171e89a656a.png)+![](mixly/media/0b8409538b3a4b06a1683d8f08a9a02f.png)=![](mixly/media/248e3b1e8f1612bb7509847734c56e58.png);

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Enter“variables” →![](mixly/media/f4dae55971112f135aa99a97ee0fea91.png)，![](mixly/media/f4dae55971112f135aa99a97ee0fea91.png)+![](mixly/media/711b2607bab2b88862edfda0f1c3e5d3.png)=![](mixly/media/8ee1ebc9356ac5c6f93b5b56a75bf86c.png);

The complete code is shown below:

![](mixly/media/059b70e89806d11d064a66e5f34969e1.png)

When the analog data is less than 300, 1602 LCD displays soil humidity and “dry soil”

Enter “Control” →![](mixly/media/35d8652d308657b854152fc080c39dd3.png)，click blue gear icon，appear edit box，move block![](mixly/media/9eb9adcf30d03755b8b3b07813360848.png)into![](mixly/media/85bb759b3b6effac0641e460075fbc4e.png)block for 2 times，so get block![](mixly/media/01032251badfd4c4574d61cc59c48ccd.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Enter “Logic” →![](mixly/media/221dc3d75880b1632c042b3c1c02bd08.png)，![](mixly/media/221dc3d75880b1632c042b3c1c02bd08.png)+![](mixly/media/d98fb9245cdca70ccfa52ce2897b7fcd.png)=![](mixly/media/3268e511346b4615a1891c48fb791737.png).

modify “=” into “＜”，drag out![](mixly/media/f4dae55971112f135aa99a97ee0fea91.png), ![](mixly/media/f4dae55971112f135aa99a97ee0fea91.png)+![](mixly/media/8478962888dc01a32fb81fea5cb986ba.png)=![](mixly/media/b1cdf5f7945bb7cd58f7ad2ccbefef2a.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Move out![](mixly/media/d8dde88b00f9d4a598649265d432a085.png), change 0 into 300, then get block![](mixly/media/c4701037d424c0dbf9990fdb454c8387.png)，the numbers can be set freely.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Click "module" → “Display_module” →![](mixly/media/a52256ffd323cba7c02911fa679cb9f9.png)，place it into setup block. ![](mixly/media/a52256ffd323cba7c02911fa679cb9f9.png)+![](mixly/media/9a468380f074e08e65360e796fdb0561.png)=

![](mixly/media/a3c45059a7291d15d56d841ec02578f0.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Drag out ![](mixly/media/b55b233311a125f427c1989ee06bfb4f.png), set to “Clear” , and place it into “set up” block :![](mixly/media/f0ede08a0b939695bf264656d8061a3f.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Move out block![](mixly/media/5872e79dba8b1af922d46775edc47ba9.png), set to row 1 and column 1 to display “value”, enter “value” in the text box, copy this block once. The soil humidity value is shown at row 1. Character string “value：” occupies 6 characters, therefore, the soil humidity will be displayed at row 7. We set row 1, column 7.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Click“Variables”to move block![](mixly/media/f4dae55971112f135aa99a97ee0fea91.png)into text box. Replicate![](mixly/media/303a6388806da9e40eb65501c4fccaef.png)block once, set to row 2 and column 1, change “value：” into “dry soil”, “dry soil” will show at row 2 and column 1.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Move out block![](mixly/media/b55b233311a125f427c1989ee06bfb4f.png), click drop-down triangle to select “clear”, clear up the previous content on 1602LCD.![](mixly/media/303a6388806da9e40eb65501c4fccaef.png)+![](mixly/media/b9787fd004d371ca13118dceff0569ab.png)=![](mixly/media/10133b6064fd952d0f258c6ce3706c47.png);

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Add block![](mixly/media/bd3506b57febf33440dc831e3273c260.png), set to 300ms. ![](mixly/media/f04b68cdc4940476893cfdf76d643df1.png)

Next to design the code that the soil humidity is in the range of 300-700. 1602 LCD will shows soil humidity and “humid soil” if soil humidity is in the range of 300-700.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Copy![](mixly/media/191e7004186fedae9ed2f9665a5ee19d.png)twice，then we separately set blocks![](mixly/media/8462052b18c2cd6f6f24c2ab09591afd.png)and![](mixly/media/9f6ea2c95cf454bac2a61fac9d8434b4.png)， we need to combine this two blocks to express “300≤value≤700”, ![](mixly/media/24f5732dee99f76717214dddc0882b42.png) is needed.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

![](mixly/media/8462052b18c2cd6f6f24c2ab09591afd.png)+![](mixly/media/24f5732dee99f76717214dddc0882b42.png)+![](mixly/media/9f6ea2c95cf454bac2a61fac9d8434b4.png)=![](mixly/media/3660c80de41a3a4eb936b18b2f863b92.png); then the assuming condition is created.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Duplicate![](mixly/media/23611181acf228e2fb9df17c93e3e520.png)once, alter“dry soil” into “humid soil”.

![](mixly/media/bad10c72c6de910fabbd9079390327ee.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Then design the code that soil humidity is greater than 700. 1602 LCD will display the soil humidity and “In Water” if soil humidity is larger than 700.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Replicate![](mixly/media/191e7004186fedae9ed2f9665a5ee19d.png)and ![](mixly/media/23611181acf228e2fb9df17c93e3e520.png)once, place ![](mixly/media/191e7004186fedae9ed2f9665a5ee19d.png)into second “else if” block, change “＜” into “＞” , “dry soil” into “ in water”and 300 into 700.

The whole code is for your reference:

![](mixly/media/257b12cdafdf24a57a8248e7608db717.png)

Upload test code, open serial monitor, insert soil humidity sensor into soil, change soil humidity to see the result.

![](mixly/media/164678e738bb9e45ae6651e002cc05b5.png)

**Test Result：**

Upload code, open the serial monitor and insert the soil humidity sensor into the soil.

The greater the humidity is, the larger the value(0-1023). Also, the 1602LCD will display the corresponding value.

![](mixly/media/838e82b6a497bf7cd92e6c93beaf3a29.png)![](mixly/media/08f89da4ab20385feae6c63daf1f2094.png)![](mixly/media/761758a9171dbf34b4767172b59d95ea.jpeg)

![](mixly/media/ba8a4c774add9c116ef5274f80891dca.jpeg)

**Code Explanation：**

![](mixly/media/64c673ae500462fc5c184171e89a656a.png)，read the analog value of A2

![](mixly/media/01032251badfd4c4574d61cc59c48ccd.png)，if the condition in the “if” block is not met, the judgement result of “else if” block will be executed. On the contrary, if it met, judgement result only execute the situation in the “do” block.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

![](mixly/media/303a6388806da9e40eb65501c4fccaef.png): 1602 LCD displays “value” at row 1 and column 1.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

![](mixly/media/fd887bcf13be3ad1e4535bc2b3f21b52.png): 1602 LCD starts showing the soil humidity value at row 1 and column7. There are only 2 line with 16 grids of per row on 1602LCD, thus, 32 pcs characters can be displayed. The letters, numbers and symbols are called characters, as well as space. Multiple characters come together and form into character string. For instance, character string “value：”occupies 6 characters，then set to start displaying soil humidity value at column 7.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

![](mixly/media/d15ea241fe49f367e9ff8751a28d6953.png): 1602 LCD starts displaying “dry soil” at row 2 and column 1.

### Project 14: Bluetooth Test

![](mixly/media/72574d5d46da095f5c313abdfddefea3.png)

**Description：**

Bluetooth technology is a wireless standard technology that enables short-distance data exchange between fixed devices, mobile devices, and building personal area networks (using UHF radio waves in the ISM band of 2.4 to 2.485 GHz).

This kit is equipped with the HM-10 Bluetooth module, which is a master-slave machine. When used as the Host, it can send commands to the slave actively; when used as the Slave, it can only receive commands from the host.

The HM-10 Bluetooth module supports the Bluetooth 4.0 protocol, which not only supports Android mobile, but also supports iOS system.

In the experiment, we take the HM-10 Bluetooth module as a Slave and the cellphone as a Host. We install the Bluetooth APP on the mobile phone, connect the Bluetooth module; and use the Bluetooth APP to control the smart home kit.

We also provide you with APP for Android and iOS system.

**Pins description**

| Pins  | Description                                                                                                                                                                                                                                                                                                                                                       |
|-------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| BRK   | As the input pin, short press control, or input single pulse of 100ms low level to achieve the following functions: When module is in sleep state: Module is activated to normal state, if open AT+NOTI, serial port will send OK+WAKE. When in connected state: Module will actively request to disconnect When in standby mode: Module will be in initial state |
| RXD   | Serial data inputs                                                                                                                                                                                                                                                                                                                                                |
| TXD   | Serial data outputs                                                                                                                                                                                                                                                                                                                                               |
| GND   | ground lead                                                                                                                                                                                                                                                                                                                                                       |
| VCC   | Positive pole of power, input 5V                                                                                                                                                                                                                                                                                                                                  |
| STATE | As output pin, show the working state of module Flash slowly in standby state——repeat 500ms pulse； Always light up in connected state——high level You could set to no flashing in standby state, always light up in connected state                                                                                                                              |

**Parameters:**

Bluetooth protocol: Bluetooth Specification V4.0 BLE

No byte limit in serial port Transceiving

In open environment, realize 100m ultra-distance communication with iphone4s

USB protocol: USB V2.0

Working frequency: 2.4GHz ISM band

Modulation method: GFSK(Gaussian Frequency Shift Keying)

Transmission power: -23dbm, -6dbm, 0dbm, 6dbm, can be modified by AT command.

Sensitivity: ≤-84dBm at 0.1% BER

Transmission rate: Asynchronous: 6K bytes ; Synchronous: 6k Bytes

Security feature: Authentication and encryption

Supporting service: Central & Peripheral UUID FFE0, FFE1

Power consumption: Auto sleep mode, stand by current 400uA\~800uA, 8.5mA during transmission.

Power supply: 5V DC

Working temperature: –5 to +65 Centigrade

**Using Bluetooth APP**

In the previous lesson, we’ve introduced the basic parameter principle of HM-10 Bluetooth module. In this project, let's show you how to use the HM-10 Bluetooth module. In order to efficiently control this kit by HM-10 Bluetooth module, we specially designed an APP, as shown below.

![](mixly/media/51f78d766d19dff68efde3e89cc25a0c.jpeg)

There are twelve control buttons and four sliders on App. When we press control button on APP, the Bluetooth of cellphone will send a control character, and Bluetooth module will receive a corresponding control character. When programming, we set the corresponding function of each sensor or module according to the corresponding key control character. Next, let’s test 16 buttons.

**Android System**

**Note: you need to enable the location information before connecting to HM-10 Bluetooth module via cellphone, otherwise, Bluetooth may not be connected.**

Enter **Google** play，search “keyes IoT”. If you can’t search it on app store, please download the app：

<https://play.google.com/store/apps/details?id=com.keyestudio.iot_keyes>

Open the app![](mixly/media/c2c30c626d6a10fd8123780ec5847a5d.png)，and the interface will pop up as below:

![](mixly/media/51f78d766d19dff68efde3e89cc25a0c.jpeg)

Upload code and power on. LED of Bluetooth module blinks.

Start Bluetooth of your cellphone and open App to click “SCANNING” to pair.

![](mixly/media/c9e488c23dadabcbc2fffed2adf69dd8.jpeg)

Click “Connect”, then Bluetooth is connected successfully(indicator is always on). As shown below;

![](mixly/media/a182ea97bfea835954cf6205b5bec83c.jpeg)

**IOS system：**

(1) Open App store![](mixly/media/eeccf6fd30106842b44464a3dc598f0c.png)

Search “IoT keyes”on APP store，then click “download”.

![](mixly/media/3f729e12933a29d62cf24dde64d5c7ea.jpeg)

After the app is installed successfully, tap![](mixly/media/c2c30c626d6a10fd8123780ec5847a5d.png)to enter the interface as follows:

![](mixly/media/cbdbd5555560fbae02c9d45301bad4b1.png)

After uploading the test code successfully, insert the Bluetooth module and power on.

First start the Bluetooth on cellphone, then click “connect” on app to search Bluetooth and pair. After paring successfully, the LED of Bluetooth module will be always on.

Note: Remove the Bluetooth module please when uploading the test code. Otherwise, the code will fail to be uploaded.

Remember to pair Bluetooth and Bluetooth module after uploading the test code.

**Wiring diagram：**

![](mixly/media/16477d46a4396f0283d1ea5acf603a19.png)

Note: On the sensor expansion board, the RXD, TXD, GND, and VCC of the Bluetooth module are respectively connected to TXD, RXD, GND, and 5V, and the STATE and BRK pins of the Bluetooth module do not need to be connected. Connect the power supply.

**Test Code：**

Download APP，wire up Bluetooth module and power.

Drag out![](mixly/media/d48c39a58db4b922b32d68247925ba1f.png)，![](mixly/media/03895bd4a93a21339a63618e108ba269.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

![](mixly/media/03895bd4a93a21339a63618e108ba269.png)+![](mixly/media/d48c39a58db4b922b32d68247925ba1f.png)=![](mixly/media/dc3e957e9a03e74e10027897efe73550.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Click "module" →“Communicate_module”→![](mixly/media/6e19e1fb05bac2f5ff29c427940d67f3.png)，TXD of Bluetooth module is linked with RXD of sensor shield(RXD is as same as D0), RXD is attached to TXD of sensor shield (TXD is as same as D1); set RX: 0, TX:1.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Click "serialport” →![](mixly/media/c31cb91bea35b631b53d5e8a42b49b0d.png), enter“variables” →![](mixly/media/de5ea16c84bc13a2654a258d600b6110.png),

![](mixly/media/de5ea16c84bc13a2654a258d600b6110.png)+![](mixly/media/c31cb91bea35b631b53d5e8a42b49b0d.png)+![](mixly/media/c61cfc1f50f84d2cf4935df62655cdb3.png)=![](mixly/media/2765e951ed18756f8b041e90407a5db1.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

![](mixly/media/7999c0e5c2c6f1d47fb3683abd95219f.png)

Remove Bluetooth module after uploading test code, then connect with Bluetooth module and open serial monitor, set baud rate to 9600. The corresponding characters are shown below:

![](mixly/media/ea7b7546187d6b3f4644bb809f95bb1f.png)
![](mixly/media/a3d768527aed10735fb2abb736c72dea.png)
![](mixly/media/b66d6abbf718d3a506f57f8345a392d6.jpeg)

The function of corresponding characters and buttons are shown below:

![](mixly/media/ac1b1a06c5597fd684fc4dc0f6e90b6b.jpeg)

### Assembly Guide

Check the board A\~I and parts in the first place.

![](mixly/media/img-20230313133550.png)

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

![](mixly/media/image-20250416164523463.png)

![](mixly/media/image-20250416164537929.png)

1.  Fix the white LED, 2 button sensors and the PIR motion sensor on the corresponding areas of the A board with 4pcs M3\*10MM round head screws and 4pcs M3 nuts.
2.  Then install the LCD1602 display on A board with 4pcs M2.5\*10MM round head screws and 4pcs M2.5 nuts.
3.  Connect them with 3pin and 4pin dupont cables.

![](mixly/media/image-20250416164604216.png)

![](mixly/media/8461d9f32c2f8a2e8aa63f7c5434f26f.jpeg)

![](mixly/media/cbf9eb21013bd648297b12542c0a5453.jpeg)

![](mixly/media/4e46ef90620c3c9f59dbf6e0534bfd77.jpeg)

![](mixly/media/c415fa75fb346efaf4836819c462caae.jpeg)![](mixly/media/b6f28bdad72c4b30104666c4abb7d86f.jpeg)

 **Step 2: Install sensors on B board**

-   B board，
-   3pin F-F dupont line\*1，
-   M3\*10MM round head screw\*2，
-   M3 nickel plated nut\*2
-   A relay module

![](mixly/media/8ae3f57b21c0f51bed1a20f582ed6f8d.png)

![](mixly/media/46239818633aa196b2b6a52e0dc25e9f.jpeg)

Assemble the relay module on B board with 2 pcs M3\*10MM screws and 2pcs M3 nickel plated nuts, and attach a 3pin F-F dupont cable to the relay module

![](mixly/media/386f90f0dce9d43345f3f8ba2632fec1.jpeg)![](mixly/media/47ebcf299a900923be7d3fce0d0e8eb7.jpeg)

 **Step 3: Fix A board and B board together with a “T” bolt**

![](mixly/media/a214abddefb0337b929f1be0e397b2f5.jpeg)

![](mixly/media/59381b0cac49a329238743ff6bcce93b.jpeg)

![](mixly/media/844b631173fa706522b6e68beadc337a.jpeg)

 **Step 4: Assemble sensors and a battery holder on C board**

C board\*1

MQ-2 gas sensor\*1

A battery holder

M3\*10MM flat head screw\*2

M3\*10MM round head screw\*1

M3 nickel plated nut\*3

4pin F-F dupont line\*1

![](mixly/media/25ff0e408ba63ae89e28da8a5c91dcf2.png)

![](mixly/media/01a3d67a67ee1bb0300ca8e947efe543.jpeg)

1.  Fix the battery holder on C board with 2pcs M3\*10MM flat head screws and 2 pcs M3 nickel plated nuts.
2.  Then install the MQ-2 gas sensor on the corresponding area of C board with a M3\*10MM round head screw and a M3 nickel plated nut.
3.  Connect a 4pin dupont line to the MQ-2 gas sensor

![](mixly/media/87cfc3b68613fb063bbfbb2a517f465f.jpeg) ![](mixly/media/3934097b98ae64dcdf30de857621ab44.jpeg)

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

![](mixly/media/8ccaf29c72c51af6f6ce7094797c4669.png)

![](mixly/media/2c8f1b59a323d3d35424e0b6f5823058.jpeg)

We need to set the servo to 90° before installing. Just follow the steps below

Connect servo to Keyestudio PLUS Control Board and upload test code to make servo rotate to 90°

| Servo Motor |         |
|-------------|---------|
| Brown wire  | GND     |
| Red wire    | 5V      |
| Orange wire | S（10） |

![](mixly/media/536291edb03081897727037dbfe14759.png)

**Test Code：**

    #include <Servo.h>
    
    Servo servo_10;
    
    void setup(){
    
    servo_10.attach(10);
    
    }
    
    void loop(){
    
    servo_10.write(90);
    
    delay(500);}

After the test code is uploaded successfully, the servo will rotate to 90°

1.  Fix the servo on the corresponding area of D board with 2pcs M2\*12MM round head screws and 2pcs M2 nickel plated nuts.
2.  Then install the square board 1 on the D board with 4pcs M3\*12MM round head screws and 4 M3 self-locking nuts.

![](mixly/media/f244c60d719c62a53459535aba172d2b.jpeg) ![](mixly/media/5695d16c1019b09d8a6274cd48ffc9ec.jpeg)

![](mixly/media/83350a24d1590d9c6fd8a6b768fbb0de.jpeg)![](mixly/media/299ec806259817e1df361cb7fad22d6a.jpeg)

Install the white cross mount on the gear with 4pcs M1.2\*5MM self-tapping screws, and mount the gear on the servo motor with 1 M2\*5MM round head screw.

![](mixly/media/2cfaaa43af4c41714ff59629db160c6d.jpeg) ![](mixly/media/fe2114e6e29711f518e0be07e2619ecf.jpeg)

![](mixly/media/dd8247a34700465c88cc6229825bea47.jpeg)![](mixly/media/5dfca1d1f5f603146b989ca48011ecd0.jpeg)

 **Step 6: Assemble C board with D board with a “T” bolt.**

![](mixly/media/8e4f5a60e2e176ee09c19efe94d1df2a.jpeg)

![](mixly/media/2d274ad0bf60d9eb283249aa80621cd9.jpeg)![](mixly/media/7558c2a4c94ea2310798fed818a0269c.jpeg)

 **Step 7: Install the yellow LED on E board**

-   A yellow LED module
-   A E board
-   M3\*10MM round head screw\*1
-   M3 nickel plated nut \*1
-   3pin F-F dupont line\*1

![](mixly/media/ceadd9fddab49d404e992b744c52b55f.png)

![](mixly/media/c9fdca12bfe959d9a648d29af985e276.jpeg)

Mount the yellow LED on the corresponding area of E board with 1 M3\*10MM round head screw and 1 M3 nickel plated nut，then connect a 3pin dupont line to it.

![](mixly/media/4a5bf0af3b96ddd254e550dc6b4c3711.jpeg)![](mixly/media/66a496c0fc7baf9c157eaf6f07dc0aea.jpeg)

 **Step 8: Install control board, sensors and parts on H board**

A servo

A passive buzzer

M1.2\*5 self-tapping screw\*4,

A white cross mount(included in servo)\*1

A M2\*5 screw( included in servo)

M2\*12MM round head screw\*2

M2 nickel plated nut\*2

M3\*10MM round screw\*1

M3 nickel plated nut\*1

M3\*6MM round head screw\*8

M3\*10MM dual-pass copper pillar\*4

A Keyestudio PLUS Control Board

A sensor shield

3pinF-F dupont line\*1

H board E

2 gears

Board 2\*2

![](mixly/media/597433c2300a027ff6ebee5c0b3c3707.png)

![](mixly/media/400de4d98176394486793d39760e6150.jpeg)

1.  Mount 4pcs dual-pass copper pillars on the H board with 4pcs M3\*6MM screws
2.  Then fix the passive buzzer on H board with 1 M3\*10MM round head screw and 1 M3 nut.
3.  Connect a 3pinF-F dupont line to the passive buzzer.

![](mixly/media/f33c7e4d3fdc88f51da0e5cb5adc279d.jpeg)![](mixly/media/34a50a1a1858a954016f13bedae32b10.jpeg)

![](mixly/media/1b2f78a761ce0609281a0f665742f9e1.jpeg)![](mixly/media/dd3f0b0078b3fbb3939c7807bfe6b571.jpeg)

Set the servo to 90° before installing, and the method is same as the step 6.

Fix the 4pcs M3\*10MM copper pillars on the Keyestudio PLUS control board with 4 M3\*6MM round head screws, then mount the servo on the corresponding area of H board with 2 M2\*12MM round head screws and 2 M2 nuts.

![](mixly/media/92d69de4a3357170f499cf359e232b6b.jpeg)

![](mixly/media/7e0350f12cd1a84c05f67f9299e64ea9.jpeg)![](mixly/media/066bd05ae837c9904a4653c7d9db9379.jpeg)

Mount 2pcs board 2 together, then fix white cross mount on the gear with 4pcs M1.2\*5 self-tapping screws

![](mixly/media/229ba883da33ab9c829237d0b15266cc.jpeg)![](mixly/media/59dbff7f3be6b6a43432f7ebb620d7cd.jpeg) ![](mixly/media/a4d9ed95b8a9fec0deeba703af46cb73.jpeg)![](mixly/media/a23ac3154c7a63d387b8df8cb9315c43.jpeg)

Fix the gear with white cross mount on the black servo with 1 M2\*5MM screw(included in servo), then install the combination of 2pcs board 2 and another servo on the corresponding area of H board, finally stack the sensor shield on the Keyestudio PLUS control board.

![](mixly/media/b72a6309c515a427a9dcf1040163e65a.jpeg)

![](mixly/media/d0c652476b02c86138c6dd2502611f43.jpeg)

 **Step 9: Assemble all boards together with 2 “T” type bolts.**

(Note: the port of PLUS Control Board is aligned with the hole ⑧ on board B, and the interface of USB cable is aligned with the hole ⑦ on board B)

![](mixly/media/1095045fa1165b5553cfb8856356d2c8.jpeg)

![](mixly/media/0c334ef18456d4df74383b12c2b30d68.jpeg)

![](mixly/media/a2d8dd6a5e34c6be3400068a35c9cf4b.jpeg)![](mixly/media/65aa75da5e1fa9d789e3e017a0b5e82b.jpeg)

![](mixly/media/c1d3c6cc45db04bc6aa0cf3d05ea286c.jpeg)![](mixly/media/10b307c39057d29e26bcdcf639c6c5e4.jpeg)

 **Step 10: Install sensors on F board**

A steam sensor,

A photocell sensor

A fan module(with fan)

Board F

3pinF-F dupont line\*2,

4pin F-F dupont line\*1

M3\*10MM round head screw\*3

M3 nickel plated nut\*3.

![](mixly/media/bd684ff7cbb44813eb77e478a5ca71f5.png)

![](mixly/media/984fda0b23048b65de00721b90504d12.jpeg)

Separately fix the steam sensor, the photocell sensor and the fan module on the F board with 3pcs M3\*10MM round head screws and 3pcs M3 nuts, then attach 3pin and 4pin dupont lines to sensors

![](mixly/media/7f99a61c34f2df4c4edf3f2a19cdb99f.jpeg)![](mixly/media/6d437743fb286eef5f284756318e4a4a.jpeg)

 **Step 11: Connect sensor/module**

Connect one end of a 3pin dupont line to soil humidity sensor, then link all sensors with the sensor shield. (make dupont wires of the servo go through the holes of board)

![](mixly/media/bca03708b95612f0eda1bc87b807d0ae.jpeg)

| Name                            | The corresponding interfaces of sensors  and sensor shield | The corresponding installed area on the board |   |
|---------------------------------|------------------------------------------------------------|-----------------------------------------------|---|
| PIR Motion Sensor               | G/V/S                                                      | G/V/2                                         | ⑤ |
| Passive buzzer                  | G/V/S                                                      | G/V/3                                         | ⑯ |
| Button module 1                 | G/V/S                                                      | G/V/4                                         | ③ |
| Yellow LED                      | G/V/S                                                      | G/V/5                                         | ⑫ |
| Fan module                      | GND/VCC/INA/INB                                            | G/V/7/6                                       | ⑮ |
| Button module 2                 | G/V/S                                                      | G/V/8                                         | ④ |
| Servo 1 controlling the door    | Brown/Red/Orange wire                                      | G/V/9                                         | ⑰ |
| Servo 2 controlling the windows | Brown/Red/Orange wire                                      | G/V/10                                        | ⑪ |
| MQ-2 Gas Sensor                 | GND/VCC/D0/A0                                              | G/V/11/A0                                     | ⑩ |
| Relay Module                    | G/V/S                                                      | G/V/12                                        | ⑥ |
| White LED                       | G/V/S                                                      | G/V/13                                        | ① |
| LCD1602 Display                 | GND/VCC/SDA/SCL                                            | GND/5V/SDA/SCL                                | ② |
| Photocell Sensor                | G/V/S                                                      | G/V/A1                                        | ⑭ |
| Soil humidity sensor            | G/V/S                                                      | G/V/A2                                        |   |
| Steam sensor                    | G/V/S                                                      | G/V/A3                                        | ⑬ |

![](mixly/media/2bf2f025ffdf28c89bbb103d7f7866f8.jpeg)

Insert the Bluetooth module into sensor shield, then fix the F board with 2 M3\*10MM round head screws, 2 M3 nuts and 2 pcs parts and mount G board with 2 “T” bolts.

| Bluetooth Module | Sensor shield |
|------------------|---------------|
| VCC              | 5V            |
| GND              | GND           |
| TXD              | RXD           |
| RXD              | TXD           |

![](mixly/media/50519e5fada2b8a6a273fb3ecd983301.jpeg)

![](mixly/media/32920af7e9a825278dd6c2e024de3a6f.jpeg)

![](mixly/media/36dfb4e4defba38c41d548e9eba76ab0.jpeg)

 **Step 12: Assemble the kit**

Fix the board I with 6 “T” bolts

![](mixly/media/79c3b7b5e28d4248b6f6f8e155ee4e25.jpeg)

![](mixly/media/60c101c92e1ee57410849267dcb2e4ad.jpeg)

![](mixly/media/e2febc246493ba3293296c4e0caca3ce.jpeg)

The smart home kit is established.

### Project 15：Multi-purpose Smart Home

![](mixly/media/7f962fd86397e96ebb2eb4c590d90c1d.png)

**Description：**

In the previous projects, we’ve introduced how to use sensors, modules and HM-10 Bluetooth module. For this lesson, we will present all functions of this smart home.

We will achieve the effect as follows:

![](mixly/media/7950acf19912aabfb83928eb3459cc2c.jpeg)（1）Photocell sensor, PIR motion sensor and LED. When at night, someone passes by, LED is on; nobody is around, the LED is off.

A 1602LCD display, 2 buttons, 1 servo on the board.

When button1 is pressed, you can input password(set password in the test code), and the 1602LCD will show “\*”, then press button2 to “confirm”. If the password is correct, the 1602LCD will show “open” and the door will be open. However, if the password is wrong, the “error” pops up; after 2s, “error” will turn into “again” , which means that you can enter password again.

Note: The correct password is ”. - - . - .” which means that short press button1, long press button1, long press button1, short press button1, long press button1, and short press button1.

”- ”means long press button1, ”.”means short press button1

The door will be closed when PIR motion sensor doesn’t detect people around. What’s more, if you press and hold button2, the buzzer will emits a sound, and LCD display will show “wait”.

（If the password is right, the servo will rotate to 180°, otherwise，it doesn’t rotate）

![](mixly/media/4fc308a59339d9178ffa2f3254b55ecd.jpeg)Insert soil humidity sensor into a plant pot, when the soil is too dry, the buzzer will alarm and you will get the notification from app.

![](mixly/media/fed3dd9e2581a73519bfad27b4f3a533.png)(5) When the gas sensor detects the gas with high concentration, the buzzer will emit a "tick,tick" alarm sound.

![](mixly/media/9e74ad218abc3b7c7ddc669f26aa4b2b.jpeg)(6) When steam sensor detects rains, the servo 2 will be activated and the window will be closed automatically, otherwise, the window will be open.

**Experiment equipment：**

![](mixly/media/ea22fb2dc139a1414e4f7c3ac6a9f72b.png)

keyestudio PLUS control board \* 1,

Sensor shield \* 1,

Bluetooth module \* 1,

PIR motion sensor\* 1,

Photocell sensor \* 1,

button sensor \* 2,

White LED module \* 1,

Yellow LED module \* 1,

Relay Module \* 1,

passive buzzer module \* 1,

fan module \* 1,

steam sensor \* 1,

servo module \* 2,

LCD1602 display module \* 1,

Soil humidity sensor \* 1

MQ-2 gas sensor\* 1,

3pinF-F Dupont line \* 10,

4pinF-F Dupont line \* 1,

several FF Dupont line,

USB cable \* 1

**Wiring Diagram：**

![](mixly/media/bf207721bc860516ad5341e92ae6aada.png)

|   Name                         |  The corresponding interfaces of sensors and sensor shield | The corresponding installed area on the board |    |
|--------------------------------|------------------------------------------------------------|-----------------------------------------------|----|
| PIR Motion Sensor              | G/V/S                                                      | G/V/2                                         | ⑤  |
| Passive Buzzer                 | G/V/S                                                      | G/V/3                                         | ⑯  |
| Button sensor 1                | G/V/S                                                      | G/V/4                                         | ③  |
| Yellow LED Module              | G/V/S                                                      | G/V/5                                         | ⑫  |
| Fan Module                     | GND/VCC/INA/INB                                            | G/V/7/6                                       | ⑮  |
| Button Module 2                | G/V/S                                                      | G/V/8                                         | ④  |
| Servo 1 controlling the door   | Brown/Red/Orange Wire                                      |  G/V/9                                        |  ⑰ |
| Servo 2 controlling the window | Brown/Red/ Orange Wire                                     |  G/V/10                                       |  ⑪ |
| MQ-2 Gas Sensor                | GND/VCC/D0/A0                                              | G/V/11/A0                                     | ⑩  |
| Relay Module                   | G/V/S                                                      | G/V/12                                        | ⑥  |
| White LED                      | G/V/S                                                      | G/V/13                                        | ①  |
| LCD1602 Display                | GND/VCC/SDA/SCL                                            | GND/5V/SDA/SCL                                | ②  |
| Photocell Sensor               | G/V/S                                                      | G/V/A1                                        | ⑭  |
| Soil Humidity Sensor           | G/V/S                                                      | G/V/A2                                        |    |
| Steam Sensor                   | G/V/S                                                      | G/V/A3                                        | ⑬  |

**Test Code：**

**Serial port displays data from Bluetooth**

Click “Control” →![](mixly/media/d48c39a58db4b922b32d68247925ba1f.png);

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Enter “Serialport” → ![](mixly/media/03895bd4a93a21339a63618e108ba269.png),

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Then we get the block:![](mixly/media/03895bd4a93a21339a63618e108ba269.png)+![](mixly/media/d48c39a58db4b922b32d68247925ba1f.png)=![](mixly/media/7fb955029eb9e0954f5ea2c81533c083.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

![](mixly/media/c479cc5fdf87a8858b4d10d7564a0692.png) : display the signal sent by Bluetooth. Bluetooth can read the character signals, the variables and judgement condition are needed. Therefore, we could use ![](mixly/media/a3892084ff6519791acbccad9cf84cce.png)to read data.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Select![](mixly/media/03d5f6c40ef7558d93ef1d23a2306491.png)and![](mixly/media/5186c91253d6f5d3ae8ffc9eb092c2cf.png), combine these two blocks. Get block ![](mixly/media/8e5bfe8e20d6ea3ca5ed9f95a6b97b59.png). Change “item” into “val”, ![](mixly/media/873f4f2e2255ab833362d899e2d0bab7.png)block is produced, then ![](mixly/media/608ab03cfab65043d5e58bdac50d7492.png) is created.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Drag out![](mixly/media/a3892084ff6519791acbccad9cf84cce.png)，![](mixly/media/6ab1d0da3c3b37935359c55d8571245e.png),![](mixly/media/8ccc6857955d90d0a430eb90bcdace32.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Enter “variables” → ![](mixly/media/74a98443a1ba6c7fc3e83bc9521499bd.png),

![](mixly/media/a3892084ff6519791acbccad9cf84cce.png)+![](mixly/media/6ab1d0da3c3b37935359c55d8571245e.png)+![](mixly/media/74a98443a1ba6c7fc3e83bc9521499bd.png)+![](mixly/media/8ccc6857955d90d0a430eb90bcdace32.png)=![](mixly/media/dfaf24e81a32ede8c291b41b3efe0a94.png);

Move out block![](mixly/media/5aded8020be63f5081ed5fc5fad75d41.png) and ![](mixly/media/608ab03cfab65043d5e58bdac50d7492.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

![](mixly/media/608ab03cfab65043d5e58bdac50d7492.png)+![](mixly/media/5aded8020be63f5081ed5fc5fad75d41.png)+![](mixly/media/dfaf24e81a32ede8c291b41b3efe0a94.png)=![](mixly/media/5496da28c98a134c30ae49e1d7540cb3.png)；

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Refer to following code:

![](mixly/media/1f91d81e1cb5903c980027fc006c1625.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Tap function buttons on APP interface，Bluetooth module will receive the corresponding signals, and transfer them to other sensors or modules.

Click![](mixly/media/0bf4845021f35c8b032ad2970d8fbf23.png)to turn on and off LED.

Click “Control” →![](mixly/media/86c719c9f837abbb5ab72813e7020642.png)，click blue gear icon, appear edit box，drag![](mixly/media/2eefff3938ba54398c706a43be3e8daf.png)into![](mixly/media/9ab20b881c20020d78411e37b32bb4bd.png)，then we get block![](mixly/media/18009cfb6db3423bf9241b76b6e7dd9d.png)，when the value behind block switch is equal to the value behind “case” block, the statement of case block will be executed, then continue to go on with the next statement of “case”

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

block. Move![](mixly/media/2eefff3938ba54398c706a43be3e8daf.png)to ![](mixly/media/9ab20b881c20020d78411e37b32bb4bd.png)for 18 times ( ![](mixly/media/60278b6f1dab8f535cb72bba123f77f3.png))→![](mixly/media/57aa6c297566358deb508a373f7dbd93.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Select![](mixly/media/608ab03cfab65043d5e58bdac50d7492.png)，click “Text” to move out ![](mixly/media/3436492a5976323f853f1b22b6e1c1dd.png);

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Then get block:![](mixly/media/3436492a5976323f853f1b22b6e1c1dd.png)+ ![](mixly/media/608ab03cfab65043d5e58bdac50d7492.png)+ ![](mixly/media/18009cfb6db3423bf9241b76b6e7dd9d.png)=![](mixly/media/61c7cfc8a4a552fd2f1c8c5d3bca29ca.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Select block ![](mixly/media/f0f535e8cb956c15fc4b993f11a6ecd0.png),

white LED is linked with digital 13, so set block![](mixly/media/87e71d04efdaf0f7cd859a5fadee8afa.png);

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Press![](mixly/media/0bf4845021f35c8b032ad2970d8fbf23.png), Bluetooth passes on signal “a” to turn on LED, so we combine code string:

![](mixly/media/87e71d04efdaf0f7cd859a5fadee8afa.png)+![](mixly/media/61c7cfc8a4a552fd2f1c8c5d3bca29ca.png)=![](mixly/media/09b148514defbef5abaf877c36f53c05.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Click ![](mixly/media/0bf4845021f35c8b032ad2970d8fbf23.png)again, signal“b”is transmitted to Bluetooth module to turn off LED, copy ![](mixly/media/f0f535e8cb956c15fc4b993f11a6ecd0.png)and ![](mixly/media/3436492a5976323f853f1b22b6e1c1dd.png) once, set to LOW and “b”.

→![](mixly/media/4c21c6a2c9e10e5c0d3b840c18f1cf6a.png),![](mixly/media/52f803902e91ffb36b192848d9a8b2d0.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

The code to control white LED on and off as follows:

![](mixly/media/85b4e8eefbce02378f0c684c0d5e74d4.png)

Simultaneously, when we click![](mixly/media/0a4ae13a08a313ebef7f9d89b82ced9a.png), signal “c” and “d”are transferred(start up and end relay module) to control relay module.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Now, we could design code string as below:

Copy ![](mixly/media/3436492a5976323f853f1b22b6e1c1dd.png)twice, change “a” into “c” and “d”, get ![](mixly/media/8d593cbed6eb8627c6c4e94303634743.png),![](mixly/media/1c958e2a43314f603befed8b3a1ff0de.png)

Select block![](mixly/media/49be55dcd5069c7462e6d4290843ffc7.png), relay module is attached to digital 12, so set to pin 12, get block:![](mixly/media/d7e482eebd49f327257b6c909bc82deb.png) ;

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

The code that relay module is connected: ![](mixly/media/c934a0dca5e03f59757f18255cbab46f.png)

The code that relay module is off: ![](mixly/media/0b4115d31715f2d485fdb74e425cf8f0.png)

As for your reference:

![](mixly/media/a4797d7906150a27ce18202840454f27.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Press icon![](mixly/media/2009acb4732995cc83b7fe0ede2a9998.png)to play “Birthday“ song，press ![](mixly/media/f0e6081acc58cfd204f416d60656a493.png)to emit “ode-to-joy”.

Click “Functions” →![](mixly/media/aa9385446feb8d4ccb73158173a9e91c.png), alter “procedure” into “music1”, get block![](mixly/media/f5a3ac29a4a08d9484de0b540fc363bb.png)，

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Enter “Sensor”→“Control Output” →![](mixly/media/d9f2af0fcb59b9dc2f524d0b8d65679f.png)，passive buzzer is linked with digital 3, then select “birthday” , we get block ![](mixly/media/58628d0132a762a9c53e382562ea3510.png);

![](mixly/media/58628d0132a762a9c53e382562ea3510.png)+![](mixly/media/f5a3ac29a4a08d9484de0b540fc363bb.png)=![](mixly/media/aa973b8d104392fad7611d7d7a6eeee5.png);

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Duplicate![](mixly/media/aa973b8d104392fad7611d7d7a6eeee5.png)once，set to “music2” and “Ode_to_joy”.

![](mixly/media/c20dbcf5e58200e50449f90d29af5c75.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Press ![](mixly/media/2009acb4732995cc83b7fe0ede2a9998.png)icon, signal “e” is sent to Bluetooth module, then “birthday” song is played; so copy ![](mixly/media/3436492a5976323f853f1b22b6e1c1dd.png)once and set to “e”. Moreover, click ![](mixly/media/f0e6081acc58cfd204f416d60656a493.png)，signal ‘f’ is transmitted to play “Ode_to_joy” song; then get![](mixly/media/09a518abb6ff9a11680bf4bdfccd328e.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Enter “Functions” →![](mixly/media/bd306aec636583b57736cab66a55ebe7.png), ![](mixly/media/619d59d8caaf84424b9915fd22d2ca0a.png)

![](mixly/media/2c12824e2f26b6220c1834a12d51c26b.png)+![](mixly/media/bd306aec636583b57736cab66a55ebe7.png)+![](mixly/media/09a518abb6ff9a11680bf4bdfccd328e.png)+![](mixly/media/619d59d8caaf84424b9915fd22d2ca0a.png)+![](mixly/media/a4797d7906150a27ce18202840454f27.png)=![](mixly/media/0b9739d4827e51decf23841c7ab1416d.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Release icon![](mixly/media/2009acb4732995cc83b7fe0ede2a9998.png)or![](mixly/media/f0e6081acc58cfd204f416d60656a493.png), the signal “g” will be passed on, then music will stop(buzzer stops, note that buzzer won’t be turned off until the whole song is finished), add ![](mixly/media/0cf661c96059a482782e4e898f4d701d.png);
Click“Sensor”→ “Control Output”→![](mixly/media/1ce8aa6bd58f99f0a13f827f1cfe7d5b.png)， set to pin 3. The code string is shown below:

![](mixly/media/38c8c4c78b31ba562502cc63a2a753e8.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

**Test code for controlling door**

Drag out block![](mixly/media/95ebbe668b0c756b6b9451dc7cac9711.png)，change “procedure” into “door”, get block![](mixly/media/e3f28b971c130e542de4bf4399657324.png)，

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Then create variables “button1” and “button2”，“button1” represents variable of button sensor 1, so dose “button2”; Next, we produce these variables in accordance with previous method:

![](mixly/media/5186c91253d6f5d3ae8ffc9eb092c2cf.png)+![](mixly/media/290524e319cca4763ae217acfaf85be9.png)=![](mixly/media/5c84c2014ee4044186c88fce012dc93e.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
Copy![](mixly/media/5c84c2014ee4044186c88fce012dc93e.png)once, change “item” into “button1”and “button2”，default as integer and the initial value is 0, then block ![](mixly/media/dda9bce4064054f17d6e9d7f0ee26e0e.png)and ![](mixly/media/35c2fa190009603d051bc7858613b097.png)exist.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Enter “Variables”→ ![](mixly/media/e25e8477577315e83a2423080aefda62.png)，then get block: ![](mixly/media/c4567784251625cab25e01cbe52180f3.png)+![](mixly/media/98cdbaadad12a550d7aba6d715b37cf1.png)+![](mixly/media/831418021979b28af735edb37e1f5ca8.png)=![](mixly/media/3e39b22630114e0b4a305e3dd07f984a.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

 Enter “Sensor”→ “Digital Read” → ![](mixly/media/6e7d988789be39d44704d93377162df1.png), copy it twice. Two button sensors are respectively linked with digital 4 and 8, so we set ![](mixly/media/44c05ec6ca71fce49213054df8b9ef7b.png) and ![](mixly/media/29d91d2e0da704b02d6a27196798fc0c.png). Then we get block: ![](mixly/media/dd8ebef31d20f7bb6074e029cbae2299.png)and ![](mixly/media/d394b5078998e0d7181383daa5936f48.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Next to judge if button1 sensor is pressed. If it is, the signal 0 will be sent, the “if...do” block is adopted,

![](mixly/media/32a93a89befadb25979008674d9e9e6b.png)+![](mixly/media/217adea4de68cb4a155015081831d40d.png)=![](mixly/media/412b8631c55146bee332d774d18b3349.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Click “Logic” →![](mixly/media/4dedc9f47f1b7661ae96cc95fb62d711.png), drag out ![](mixly/media/5186c91253d6f5d3ae8ffc9eb092c2cf.png)and ![](mixly/media/dda9bce4064054f17d6e9d7f0ee26e0e.png), ![](mixly/media/4dedc9f47f1b7661ae96cc95fb62d711.png)+![](mixly/media/dda9bce4064054f17d6e9d7f0ee26e0e.png)+![](mixly/media/5186c91253d6f5d3ae8ffc9eb092c2cf.png)+![](mixly/media/32a93a89befadb25979008674d9e9e6b.png)= ![](mixly/media/d348fbf5f3d4a37ee4b9ed260a76e332.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

We need to create a variable to represent the time when button 1 is pressed.

→![](mixly/media/a67911abd819300ad3142b9f672161d2.png)+ ![](mixly/media/5186c91253d6f5d3ae8ffc9eb092c2cf.png)=![](mixly/media/36207995ce307503810eb9b4cd5ac1b7.png), modify “item” into “btn1_num”, then get![](mixly/media/c0ba0230aec6edeb95eaf732fa3ad85e.png) block. Enter “Control” →![](mixly/media/8df8777fcab31b8ec1b31b6551ac8c7a.png), ![](mixly/media/8df8777fcab31b8ec1b31b6551ac8c7a.png)+![](mixly/media/f7649218e971cd4af863360ec3707bdb.png)=![](mixly/media/09badfc7b88dd50cf10c039dff7c410d.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

 Duplicate![](mixly/media/a1048f36c079fdde60177397ebaec8b7.png)once, and ![](mixly/media/a1048f36c079fdde60177397ebaec8b7.png)+![](mixly/media/09badfc7b88dd50cf10c039dff7c410d.png)=![](mixly/media/f9d1ad5265d5f7ae50a41791190a3cf0.png);

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Replicate![](mixly/media/3e6c7bf6fbea9b201824b24799cb5575.png)once,![](mixly/media/3e6c7bf6fbea9b201824b24799cb5575.png)+![](mixly/media/f9d1ad5265d5f7ae50a41791190a3cf0.png)=![](mixly/media/6ec716f70825c11b0b9cb0427bdcfbee.png);

Enter “Variables”→![](mixly/media/004d28d0b2626b566116d7b1daae4925.png)，

![](mixly/media/004d28d0b2626b566116d7b1daae4925.png)+![](mixly/media/6ec716f70825c11b0b9cb0427bdcfbee.png)=![](mixly/media/118348dbc6ed6e721ee21bcd18028205.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Click “math” →![](mixly/media/ca7b4d2c4889e3471660672f09bcd4fc.png)，![](mixly/media/ca7b4d2c4889e3471660672f09bcd4fc.png)+![](mixly/media/f07703d72c69b48ea6e3bf1ac7e78593.png)=![](mixly/media/dee6dbd9d36d5e4e3c183e0e5ff018a4.png);

Enter“Variables”→![](mixly/media/c0ba0230aec6edeb95eaf732fa3ad85e.png)，![](mixly/media/c0ba0230aec6edeb95eaf732fa3ad85e.png)+![](mixly/media/dee6dbd9d36d5e4e3c183e0e5ff018a4.png)= ![](mixly/media/d994e0cbe3b95849929fd886d8784fcf.png)，（1 equals to 100ms）.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Drag out ![](mixly/media/18d0eae9962c2ef361fbc5b4f44fed06.png).

![](mixly/media/7b1b3afbab568de666f6bd78652eb091.png)+![](mixly/media/a1f2864521f2576c7a37f894935a1975.png)=![](mixly/media/7c8029508a45695d9fc7687865b4fbf5.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Pressing or releasing will cause vibration of button, therefore, a multitude of signals may be output and transmitted. We need to delay time to prevent this situation，add delay block![](mixly/media/18d0eae9962c2ef361fbc5b4f44fed06.png), set to 10ms and place it between block ![](mixly/media/80905d0009f911d0ba4d799d4e7d0cda.png)and ![](mixly/media/d7ccd14a35937fb0fdefd34045b07551.png).

![](mixly/media/ef4609036e9987c7dc6024d6cd6fe69c.png)

If the time when press button 1 is equivalent to or greater than 100ms and less than 500ms, the password is “.” and 1602LCD shows“\*”; if the time is equivalent to or greater 500ms, the password is “-”. 1602LCD displays “\*”. (“.” means pressing button senor, “-” stands for holding button sensor for long time)

If the time of pressing button 1 is greater than or equivalent to 100ms and less than 500ms, the input password is “.”, 1602LCD displays “\*”; if greater than 500ms, the input password is “-”,

Drag out ![](mixly/media/e023931ec9f4b667043bba53dc800941.png), ![](mixly/media/e3f28b971c130e542de4bf4399657324.png); ![](mixly/media/e023931ec9f4b667043bba53dc800941.png)+![](mixly/media/e3f28b971c130e542de4bf4399657324.png)=
Select![](mixly/media/4dedc9f47f1b7661ae96cc95fb62d711.png),![](mixly/media/c0ba0230aec6edeb95eaf732fa3ad85e.png), ![](mixly/media/5186c91253d6f5d3ae8ffc9eb092c2cf.png). Set to “≥”，change 0 into 1（1indicates 100ms). ![](mixly/media/c0ba0230aec6edeb95eaf732fa3ad85e.png)+![](mixly/media/4dedc9f47f1b7661ae96cc95fb62d711.png)=![](mixly/media/e5aea98766ffd827a8ada91b2a4e2ca4.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Duplicate![](mixly/media/e5aea98766ffd827a8ada91b2a4e2ca4.png)once, modify “≥” into “＜”, alter 1 into 5 (5=500), then get block![](mixly/media/5ce026f3d4c228764be8feee94e4aef3.png), Move out block![](mixly/media/bf58f6a184e7f99fe4eb262bb3d4d817.png);

![](mixly/media/fd5c3f39e8d34580aac0c89139a50a4c.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

![](mixly/media/e5aea98766ffd827a8ada91b2a4e2ca4.png)+![](mixly/media/bf58f6a184e7f99fe4eb262bb3d4d817.png)+![](mixly/media/5ce026f3d4c228764be8feee94e4aef3.png)= ![](mixly/media/ab8febc89061c724a30f07b6fd486b6b.png);
![](mixly/media/ab8febc89061c724a30f07b6fd486b6b.png)+![](mixly/media/e023931ec9f4b667043bba53dc800941.png)=![](mixly/media/35cd8b72d229b2b13598c20d8daf7cec.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Drag out ![](mixly/media/00b8c32d83891bad86e509c4be92abea.png),![](mixly/media/bf374becf848d8f981b89b78011b6ef3.png), change “hello” into ”.”, ![](mixly/media/03415b9005999ae615d8646ef4476bb6.png)+ ![](mixly/media/00b8c32d83891bad86e509c4be92abea.png)=![](mixly/media/5912d35ba32756524fd41575f188db04.png)
Replicate block ![](mixly/media/5912d35ba32756524fd41575f188db04.png)once，delete “.”, get block![](mixly/media/95a46b138b4c4dae3ca19ab2f9ffd04b.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Then get these two code ![](mixly/media/53f64c1da3bad380704db72247b06426.png)to create the variable ![](mixly/media/338c2342ca7da15a102300649aa57703.png)and ![](mixly/media/e4a802468764dfa9629feb558448dab0.png)，

![](mixly/media/338c2342ca7da15a102300649aa57703.png): save password ![](mixly/media/e4a802468764dfa9629feb558448dab0.png): show the character “\*” on 1602LCD display.

Select ![](mixly/media/b58ae3cdecb2425be967913aa972afe4.png) and ![](mixly/media/ab3547b109bb4d3911b02a0951c789dd.png),

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

![](mixly/media/338c2342ca7da15a102300649aa57703.png)+![](mixly/media/e4a802468764dfa9629feb558448dab0.png)+ ![](mixly/media/9c17388a7b8564b88c0825f7b3bca589.png)=![](mixly/media/b185ef4a00b8ccf8c9cbd2a701da9a09.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Enter “Text” →![](mixly/media/126b34103b0104f111590bdad3cf686a.png)，copy it twice.
Separately change “mixly” into “.” and “\*”, move out ![](mixly/media/338c2342ca7da15a102300649aa57703.png)and ![](mixly/media/b58ae3cdecb2425be967913aa972afe4.png), ![](mixly/media/b58ae3cdecb2425be967913aa972afe4.png)+![](mixly/media/338c2342ca7da15a102300649aa57703.png)+![](mixly/media/c6a1de76066e32e3cb2fe0f2e199dfd6.png)= ![](mixly/media/6e15dc5cd695f8f9e1dfc2711eb60f13.png);

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Then drag out ![](mixly/media/e4a802468764dfa9629feb558448dab0.png)and ![](mixly/media/28816c1c789976f03eab48dc7b4118ea.png), then get block![](mixly/media/28816c1c789976f03eab48dc7b4118ea.png)+![](mixly/media/e4a802468764dfa9629feb558448dab0.png)+![](mixly/media/1be2f2682093cde24238462c599fccc3.png)=![](mixly/media/a56d3ee484824fb06083184b5ed882cb.png);

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Initialize 1602LCD Display

Click "module" →“Display_module” →![](mixly/media/22d18bc040e7caf0d6be2b7ddcd7c717.png)，

Then get code string:

![](mixly/media/22d18bc040e7caf0d6be2b7ddcd7c717.png)+![](mixly/media/42c3d0ed490b169c46e84489a33114c7.png)=![](mixly/media/3e1020b5ead32c01db7b129d5fa83aa6.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Then drag out ![](mixly/media/cf42d82b2272705841f6e3a162531774.png), 1602LCD starts displaying “\*” at row 2 and column 1, so get block![](mixly/media/a01545aad94a8d0191e0e956eefa4d75.png);
Next drag out ![](mixly/media/e8fb24866c6242a4ef40df2f3319cf26.png),

![](mixly/media/e8fb24866c6242a4ef40df2f3319cf26.png)+![](mixly/media/a01545aad94a8d0191e0e956eefa4d75.png)=![](mixly/media/bb423b53965e99c58bbdd180b7b113ff.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Duplicate code string once

![](mixly/media/cc6bdf3b6bef4bd8ca8e241d9143f456.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Remove block![](mixly/media/9988ede0bb210bbb54ff6d1efc5fc425.png),![](mixly/media/e5aea98766ffd827a8ada91b2a4e2ca4.png)and![](mixly/media/0a7e5a9d7f1d70855c7b8126166728d5.png)，leave block![](mixly/media/5ce026f3d4c228764be8feee94e4aef3.png)behind “if” block，modify “＜” into “≥”，![](mixly/media/715d3e15e604e1dd8e4d6f49b49c2df2.png).
Change ![](mixly/media/eec1b7f3e1045564eac5a74b8f611019.png)into ![](mixly/media/c97b30403fa144b47ac8137b45c13727.png)，![](mixly/media/1ba7f5dcaee39ffba2bf3e68d04af47f.png)into ![](mixly/media/0ebe79a92b9bb9033940c87868bb7885.png);

Refer to the following code string:

![](mixly/media/902e9b6aff732656ee2e1344cc756e6d.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

After entering password, press button 2, if the password is correct,（right password : “. - - . - .”，“.” implies clicking button, ”- ” means clicking and holding button)，1602LCD will show “open！”，servo will rotate to 100° to make door open. After 5s, door will be closed when nobody is detected. If password is wrong, “error” will show up, and you can enter password after “again” is displayed.

For this part, need to decide if the button2 is pressed.

If it is, the signal 0 is transmitted.

Move out![](mixly/media/35d8652d308657b854152fc080c39dd3.png)，![](mixly/media/4dedc9f47f1b7661ae96cc95fb62d711.png), ![](mixly/media/3f342085dc103914707063ce6ebb8863.png), ![](mixly/media/5186c91253d6f5d3ae8ffc9eb092c2cf.png);

![](mixly/media/35d8652d308657b854152fc080c39dd3.png)+![](mixly/media/4dedc9f47f1b7661ae96cc95fb62d711.png)+![](mixly/media/3f342085dc103914707063ce6ebb8863.png)+![](mixly/media/5186c91253d6f5d3ae8ffc9eb092c2cf.png)=![](mixly/media/83266e9aac497252e24b5fb84f7c5f3e.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Duplicate ![](mixly/media/35d8652d308657b854152fc080c39dd3.png)once, and ![](mixly/media/35d8652d308657b854152fc080c39dd3.png)+![](mixly/media/83266e9aac497252e24b5fb84f7c5f3e.png)=![](mixly/media/bb6b25bf3d12d8883b371d14ec248c19.png)

Click blue gear icon，appear edit box，move block![](mixly/media/c14b4237165bcfbc9d5cd102405543e4.png)into![](mixly/media/85bb759b3b6effac0641e460075fbc4e.png)block，so the block![](mixly/media/e1eb5ed096548911685c654a0f09eb3e.png)turns into![](mixly/media/e64b3865c0abaa3da84e4ecfc9306327.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Drag out ![](mixly/media/4dedc9f47f1b7661ae96cc95fb62d711.png), ![](mixly/media/338c2342ca7da15a102300649aa57703.png),![](mixly/media/0b4f85a96c6a91193ed6aff81ed5b20a.png)

modify “hello” into “. - - . - .”，then get block: ![](mixly/media/e64b3865c0abaa3da84e4ecfc9306327.png)+![](mixly/media/4dedc9f47f1b7661ae96cc95fb62d711.png)+![](mixly/media/338c2342ca7da15a102300649aa57703.png)+![](mixly/media/e3253665e38f2d8cc21ddee87be37453.png)=![](mixly/media/146f2f95c4293029663830adbaf6b6d3.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Click “display screen” → ![](mixly/media/97428b3e6ba03eeaa11ea743016bbf61.png), tap drop-down button to select “clear”, ![](mixly/media/259d5d8c53cdae5a887586d42ff791f3.png)+![](mixly/media/146f2f95c4293029663830adbaf6b6d3.png)=![](mixly/media/d8d7ad33e29b6d8b97ed1137dc82d936.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Move out ![](mixly/media/5872e79dba8b1af922d46775edc47ba9.png), set to row 2, column 1→![](mixly/media/b7b3ba4ef8dadb25bfb094835cd83ab1.png)；

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Drag![](mixly/media/0b4f85a96c6a91193ed6aff81ed5b20a.png) into “hello” box，change “hello” into “open!”，then get block:![](mixly/media/8bacfcebd8b579e01f9f8f626202d57b.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Click "module" →“Drive_module” →![](mixly/media/53817aa25dba611700a25e49e074a752.png), servo 1 is linked with digital 9, so set to pin 9, 100° and delay in 300ms.

![](mixly/media/3d6d44ca3ce2f97e4da87182763a8303.png)![](mixly/media/33ac4c61cd769be7b7e5ebb7d3f360b5.png)+ =![](mixly/media/0a8897bbad1686cb1c1387dbb1071b0a.png),

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Initialize servo 1, drag out![](mixly/media/53817aa25dba611700a25e49e074a752.png), set to pin 9 and delay in 300ms.
![](mixly/media/012efd38a0ab7aab7f3ad866305b0fec.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Drag out block![](mixly/media/bd3506b57febf33440dc831e3273c260.png), set to 500ms,![](mixly/media/24f662135f9a22d9bf9fbc795d6c748d.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Copy![](mixly/media/0b4f85a96c6a91193ed6aff81ed5b20a.png)twice, delete “hello”, then get block ![](mixly/media/b91f579b3767c05dc7c1e1e409e55bc8.png), then![](mixly/media/944c72e001c521f53adbc1a51859ee15.png)+![](mixly/media/b91f579b3767c05dc7c1e1e409e55bc8.png)=![](mixly/media/894c47b1ff1840d794cee000b1a5740b.png); ![](mixly/media/47fe443d0bf27ed3453242ac9a864833.png)+![](mixly/media/b91f579b3767c05dc7c1e1e409e55bc8.png)=

![](mixly/media/201d33df24d79e900fa62534e4317bcb.png); combine these two blocks with code string: ![](mixly/media/ae482caa69bf788de091a4b68395dcf1.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Duplicate![](mixly/media/259d5d8c53cdae5a887586d42ff791f3.png)once;
![](mixly/media/259d5d8c53cdae5a887586d42ff791f3.png)+![](mixly/media/ae482caa69bf788de091a4b68395dcf1.png)=![](mixly/media/d1a8c172caa3cda47a9de092465e81d5.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Copy ![](mixly/media/8bacfcebd8b579e01f9f8f626202d57b.png) set to row 1, column 1, change “open” into “password. Get block:![](mixly/media/589315893140b3b51e69abca1ee819a8.png);

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

![](mixly/media/589315893140b3b51e69abca1ee819a8.png)+![](mixly/media/77a1a678f4221de8a9639aab1d988a59.png)=![](mixly/media/cd08fbb6b6337f5cbe98f38913656a15.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Duplicate![](mixly/media/de8bc207b11dede3127271e840939886.png), change “password” into “error!” (![](mixly/media/80480abd11f8d13617e103269d6fa8b9.png)); then duplicate ![](mixly/media/6870f80e693696a1d28084db575ddcf6.png)and ![](mixly/media/589315893140b3b51e69abca1ee819a8.png)block again, set to “again”→![](mixly/media/f5ac7f11730e0f56b1b7f9b714e110e6.png); add delay block, set to 2000ms;

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

![](mixly/media/80480abd11f8d13617e103269d6fa8b9.png)+![](mixly/media/6870f80e693696a1d28084db575ddcf6.png)+![](mixly/media/3d20d969735a3f2d6d0dc52ec275a328.png)+![](mixly/media/f5ac7f11730e0f56b1b7f9b714e110e6.png)=![](mixly/media/501fae0361344f3206db1893c781973b.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

In order to avoid the vibration of button sensor2 for pressing and releasing，we can delay time. Therefore, add delay block.

Move out![](mixly/media/35d8652d308657b854152fc080c39dd3.png)block, ![](mixly/media/4dedc9f47f1b7661ae96cc95fb62d711.png),![](mixly/media/3f342085dc103914707063ce6ebb8863.png), ![](mixly/media/5186c91253d6f5d3ae8ffc9eb092c2cf.png).

Then compose the block:![](mixly/media/9e951504befc390132769770c6a45ee4.png)，drag out![](mixly/media/bd3506b57febf33440dc831e3273c260.png), set to 10ms; then move code string ![](mixly/media/3083cf3b6b43455cab17798e2f0fe472.png)beneath block![](mixly/media/189ec8c3c86b58fcc2953c41cf508694.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Then we create variable “infrar” to save the digital signal detected by PIR motion sensor. Modify “item” into “infrar”→![](mixly/media/363729488ec7475e1519409a6e582f5c.png)， then ![](mixly/media/58812ea4e50d6c8006c9f27ff4499dc0.png) is produced in variables.

Drag ![](mixly/media/3caf8f86a4f3a6ddf4fc2d68df3ed8cc.png) into “do” block of![](mixly/media/3fdf387a0296b745e7cf5b7f007b9ca1.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Move out![](mixly/media/9b2daa7bc9d554918382b73503211cbe.png)，PIR sensor is linked with digital 2, set to pin 2. ![](mixly/media/a01e5a92db80cbdc0298e27d4827fa9e.png)+![](mixly/media/3caf8f86a4f3a6ddf4fc2d68df3ed8cc.png)=![](mixly/media/32c16cbaafa062b8b572e20e38119653.png);

If there is person around the PIR motion sensor, it will send signal “0” to close the door and servo 1 rotates to 0°.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Drag out ![](mixly/media/d98fb9245cdca70ccfa52ce2897b7fcd.png),![](mixly/media/4dedc9f47f1b7661ae96cc95fb62d711.png),![](mixly/media/e50722b26b2ce15f8285134769fdf4ce.png),![](mixly/media/5186c91253d6f5d3ae8ffc9eb092c2cf.png);

![](mixly/media/d98fb9245cdca70ccfa52ce2897b7fcd.png)+![](mixly/media/4dedc9f47f1b7661ae96cc95fb62d711.png)+![](mixly/media/e50722b26b2ce15f8285134769fdf4ce.png)+![](mixly/media/5186c91253d6f5d3ae8ffc9eb092c2cf.png)=![](mixly/media/3d156c28e4438a4513dc33cefc003dfd.png)；

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

In this situation, PIR motion sensor controls the door, but on the other hand, so do the signal “l” and “t” . In order to prevent the door from being restrained by them at same time. We ban signal “l” and “t” to control the door. Next we need to set judgement condition“val≠l” and “val≠t”.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Duplicate![](mixly/media/f8585aab90dd0f4c782bcc2738115251.png)twice，drag variable![](mixly/media/608ab03cfab65043d5e58bdac50d7492.png)to replace![](mixly/media/e50722b26b2ce15f8285134769fdf4ce.png)，Copy![](mixly/media/07494cc8fa590a5cef151cfbd16f9bb0.png) two times and displace![](mixly/media/5186c91253d6f5d3ae8ffc9eb092c2cf.png)，set to ‘l’ and ‘t’，change “=” into “≠”.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Move out and replicate ![](mixly/media/19166e9e32c9b98e7e9e9e56ae0d876f.png)once, ![](mixly/media/19166e9e32c9b98e7e9e9e56ae0d876f.png)+![](mixly/media/19166e9e32c9b98e7e9e9e56ae0d876f.png)=![](mixly/media/3a1e60e01333aa88aba897b139915559.png);

![](mixly/media/e5c1db95fbe9d9598d18108f7d308679.png)+![](mixly/media/875424173c4bfdffe9ecac36c026bb1a.png)+![](mixly/media/7186365a425f68718e6d4903f5e83040.png)+![](mixly/media/3a1e60e01333aa88aba897b139915559.png)=![](mixly/media/15eed0370cd3ac37f314fd5776a7b72c.png);

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Enter “Drive_module”→![](mixly/media/d0575f7c71eec24b9a5101b2ac4352ee.png)，and place it into “do” block，set to pin 9 and delay in 50ms →![](mixly/media/46f15ceb9f7ffcd0d05a2734ec4a5a1e.png)

![](mixly/media/5d2e9c3dafbbedf2958b4ea139c61ce1.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

When pres and hold button 2 for long time(more than 1500ms), buzzer will sound, 1602LCD will display“wait”. Then need to judge if the button2 is pressed, if it it, the signal 0 will be sent.

Drag out ![](mixly/media/35d8652d308657b854152fc080c39dd3.png), ![](mixly/media/4dedc9f47f1b7661ae96cc95fb62d711.png)，![](mixly/media/3f342085dc103914707063ce6ebb8863.png)，![](mixly/media/5186c91253d6f5d3ae8ffc9eb092c2cf.png)，![](mixly/media/8edac3bdd6fcbf74bd4046b5fc073d55.png).

Then we get code string:![](mixly/media/35d8652d308657b854152fc080c39dd3.png)+![](mixly/media/4dedc9f47f1b7661ae96cc95fb62d711.png)+![](mixly/media/3f342085dc103914707063ce6ebb8863.png)+![](mixly/media/5186c91253d6f5d3ae8ffc9eb092c2cf.png)+![](mixly/media/8edac3bdd6fcbf74bd4046b5fc073d55.png)=![](mixly/media/116cb2a76000e06d893f8540c275418f.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Duplicate![](mixly/media/8541a58d49809d1c49938eabc221b9a0.png)once,![](mixly/media/8541a58d49809d1c49938eabc221b9a0.png)+ ![](mixly/media/116cb2a76000e06d893f8540c275418f.png)=![](mixly/media/d86950821d2976e7e6a0cd41c9a389ec.png);

Copy block![](mixly/media/8282945600c748ffb4e9e900ec318f6b.png)once and leave it into “do” block of ![](mixly/media/c305db7b1a7380262e2c365083086ca6.png)，100ms is added when press the button 2.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

![](mixly/media/8282945600c748ffb4e9e900ec318f6b.png)+![](mixly/media/d86950821d2976e7e6a0cd41c9a389ec.png)=![](mixly/media/374d0ed17378d89be5bad4902aa6808a.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Click “variables” →![](mixly/media/7606a7246e5010c6a441513793b912aa.png), ![](mixly/media/b03da7d82a69d6cb25d149325f0e46ed.png)，enter “math” →![](mixly/media/ca7b4d2c4889e3471660672f09bcd4fc.png)， move out ![](mixly/media/bd3506b57febf33440dc831e3273c260.png)block;

![](mixly/media/7606a7246e5010c6a441513793b912aa.png)+![](mixly/media/ca7b4d2c4889e3471660672f09bcd4fc.png)+![](mixly/media/b03da7d82a69d6cb25d149325f0e46ed.png)+![](mixly/media/bd3506b57febf33440dc831e3273c260.png)=![](mixly/media/02ecad783277aa92f6f23a1434eea142.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Drag out![](mixly/media/e1eb5ed096548911685c654a0f09eb3e.png)block and leave it beneath the code string ![](mixly/media/be3d97505c7d6cd85d4d811d57574567.png)，→![](mixly/media/a5ce26936ac2386bf572a0db7c9b9d12.png)；

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

click blue gear icon，appear edit box，move block![](mixly/media/c14b4237165bcfbc9d5cd102405543e4.png)into![](mixly/media/85bb759b3b6effac0641e460075fbc4e.png)block，so the block![](mixly/media/e1eb5ed096548911685c654a0f09eb3e.png)turns into![](mixly/media/e64b3865c0abaa3da84e4ecfc9306327.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Move out![](mixly/media/4dedc9f47f1b7661ae96cc95fb62d711.png), ![](mixly/media/f4b626a8c1491405176d2a0ab2aca227.png),![](mixly/media/5186c91253d6f5d3ae8ffc9eb092c2cf.png), change “=” into “≥”, change 0 into 15, then we get block:![](mixly/media/4dedc9f47f1b7661ae96cc95fb62d711.png)+![](mixly/media/f4b626a8c1491405176d2a0ab2aca227.png)+![](mixly/media/43a62ae7e916f2e1b2468037ac4f9bd8.png)=![](mixly/media/a32f4b9b6c60a9dd4f1465d32b7d7757.png)(15 means 1500ms).

Enter“Control Output”→![](mixly/media/070acb530ed0a5bb4f95015108ae4bc6.png)，passive buzzer is connected to digital 3, so set pin 3, and NOTE_C5；→![](mixly/media/9068cd181a6bf9d389fa0d0af6445249.png);

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Click "module" → ”Display_module”→ ![](mixly/media/b55b233311a125f427c1989ee06bfb4f.png)， tap drop-down icon to select “clear” → ![](mixly/media/3976f69fec796f587a06f2f68714c6a0.png);

Copy ![](mixly/media/589315893140b3b51e69abca1ee819a8.png)twice, change “password：” into“wait”, then get code string:![](mixly/media/dd457db643fac84fb8bb38b24920b977.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

“Control Output”→![](mixly/media/03cca8550f35b0c4cc61a68c127ce097.png)，set to pin 3.
The button will vibrate when pressing and releasing. Several distinct digital signals will be output. In order to eliminate the vibration, we could delay time for a while. Then move out ![](mixly/media/cd0a4f0427523463d9485df063346597.png)block, set to 10ms(![](mixly/media/2f8bc36fb2254961f5f03dbb78d8b087.png)).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

![](mixly/media/fc1b636eac843e0e3a9d0965ae83129a.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

1602LCD shows the password, so we need to initialize 1602 LCD.

Then need to initialize 1602LCD, replicate ![](mixly/media/589315893140b3b51e69abca1ee819a8.png)block, move it into setup block.

![](mixly/media/792d0f14da12c8df936ae2f7c65a8706.png);

Move out![](mixly/media/faa51b05952d637a71d846628ff425f4.png)and![](mixly/media/ff00d620df9f31e5942f5664c99373a0.png) blocks.

Copy ![](mixly/media/5186c91253d6f5d3ae8ffc9eb092c2cf.png)once, ![](mixly/media/75dfe9c2d5de9249d83e95e1cd9a433c.png)and ![](mixly/media/165e4868a3b52fe92afc30585808c197.png), move blocks in the following figure:

![](mixly/media/53c531b3d3b0d8ae554aee39858cf1da.png)

![](mixly/media/fb8976408edd76e0ecc3cec3a32c74b5.png)

![](mixly/media/80ff5d5069cfe5d8df41b31bb58d565c.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

**Buzzer will alarm when the poisonous gas is detected.**

Drag out ![](mixly/media/844b47085d3c0dbb40d4cba7a2dd9228.png)，change “procedure” into “auto_sensor”, then get ![](mixly/media/7b6159e087bc280bc8561eca86ebe11b.png).

For creating variable ![](mixly/media/79baedb34dfc58ecb2264eac20ca5f3f.png), ![](mixly/media/0a026f16e23a594645a60c609fbcc937.png) and ![](mixly/media/5186c91253d6f5d3ae8ffc9eb092c2cf.png) are needed. Then combine them, and modify “item” into “gas”, get block:![](mixly/media/b7eec6b70af0866fa4cf3469116565e6.png), ![](mixly/media/79baedb34dfc58ecb2264eac20ca5f3f.png) and ![](mixly/media/fc54da3c3ca2640b2e9271e4dd9a0aee.png)exist in variable block.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Move out ![](mixly/media/fc54da3c3ca2640b2e9271e4dd9a0aee.png), ![](mixly/media/f97379df728aece35f6a9b377e070360.png).

![](mixly/media/fc54da3c3ca2640b2e9271e4dd9a0aee.png)+![](mixly/media/f97379df728aece35f6a9b377e070360.png)+![](mixly/media/282495e85476884a1dbe5ab61e8d32bc.png)=![](mixly/media/f92e0b55c097bacc58ac91af2e59a261.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

If the gas concentration value is more than 1000, the buzzer will emit “tick, tick”, otherwise, it won’t.

Drag out![](mixly/media/e1eb5ed096548911685c654a0f09eb3e.png), click blue gear icon，appear edit box，move block![](mixly/media/c14b4237165bcfbc9d5cd102405543e4.png)into![](mixly/media/85bb759b3b6effac0641e460075fbc4e.png)block，so the block![](mixly/media/e1eb5ed096548911685c654a0f09eb3e.png)turns into![](mixly/media/e64b3865c0abaa3da84e4ecfc9306327.png). Leave it beneath the block ![](mixly/media/f92e0b55c097bacc58ac91af2e59a261.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Drag out ![](mixly/media/4dedc9f47f1b7661ae96cc95fb62d711.png),![](mixly/media/79baedb34dfc58ecb2264eac20ca5f3f.png),![](mixly/media/5186c91253d6f5d3ae8ffc9eb092c2cf.png), change “=” into “＞”, 0 into 1000.

![](mixly/media/e64b3865c0abaa3da84e4ecfc9306327.png)+![](mixly/media/79baedb34dfc58ecb2264eac20ca5f3f.png)+![](mixly/media/d8e4216ac45518d4f54115277134c2d5.png)+![](mixly/media/20bfcfbbdfc96f503ec7eb6292bdd683.png)=![](mixly/media/eabd1df33928996df4f5d6fec7a547c1.png)

Then we create variable![](mixly/media/503f98221a3ecb18e08963f2ae05778a.png) and ![](mixly/media/34f9ff62485797952afa63d15c98c200.png)in same way.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Select ![](mixly/media/34f9ff62485797952afa63d15c98c200.png), ![](mixly/media/5186c91253d6f5d3ae8ffc9eb092c2cf.png); change 0 into 1, ![](mixly/media/34f9ff62485797952afa63d15c98c200.png)+![](mixly/media/1c72550d2361faea2183cd5131390b14.png)+![](mixly/media/eabd1df33928996df4f5d6fec7a547c1.png)=![](mixly/media/9e5399bc3bdffd9eee0fecffde743029.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Then![](mixly/media/f1fac95373852224b0e8d3de2a85cd28.png)+![](mixly/media/9e5399bc3bdffd9eee0fecffde743029.png)=![](mixly/media/d9810ae9b8cf390412ecce768d6c6ff0.png)

Drag out![](mixly/media/4dedc9f47f1b7661ae96cc95fb62d711.png),![](mixly/media/503f98221a3ecb18e08963f2ae05778a.png), copy ![](mixly/media/1c72550d2361faea2183cd5131390b14.png) once,

![](mixly/media/4dedc9f47f1b7661ae96cc95fb62d711.png)+![](mixly/media/1c72550d2361faea2183cd5131390b14.png)+![](mixly/media/503f98221a3ecb18e08963f2ae05778a.png)+![](mixly/media/d9810ae9b8cf390412ecce768d6c6ff0.png)=![](mixly/media/95097204f2e9e29001afe254b47b7c1c.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

If the poisonous gas concentration is higher than 1000, “gas” turns into “danger” on App. Select![](mixly/media/c479cc5fdf87a8858b4d10d7564a0692.png)to display the data.

Click “Text”→![](mixly/media/7b9d4e26051bd0916c4f6f179c2ee6a0.png)， set to “danger”![](mixly/media/653d2c0b8a8d5223ba14e4b80904802a.png)，![](mixly/media/653d2c0b8a8d5223ba14e4b80904802a.png)+![](mixly/media/c479cc5fdf87a8858b4d10d7564a0692.png)=![](mixly/media/631463d1ec448aacde3dc425ae81fc3b.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Enter“Control Output”→![](mixly/media/c4ef5d07a53ea613c85200b40dadf5d4.png)， set pin 3 and NOTE_A4, then get block:![](mixly/media/b5ac8cea20c04ec1a368b9279a233bbd.png), add delay block , set to 100ms.

Select![](mixly/media/6560d59e32952cc8719ea0a3c9b7a600.png)，set to pin 3 and delay in 100ms. ![](mixly/media/b5ac8cea20c04ec1a368b9279a233bbd.png)+![](mixly/media/d39a4ebd3a619cb8fcc25d11ffef37f7.png)+![](mixly/media/6560d59e32952cc8719ea0a3c9b7a600.png)+![](mixly/media/d39a4ebd3a619cb8fcc25d11ffef37f7.png)=![](mixly/media/201f6f13a1faa5ebcf214e7fdee4290e.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Copy code string![](mixly/media/201f6f13a1faa5ebcf214e7fdee4290e.png)once， and set last 100ms to 300ms.
Copy![](mixly/media/320058791a3d3cd43fa233944646e97f.png)once, ![](mixly/media/320058791a3d3cd43fa233944646e97f.png)+![](mixly/media/bc901dcb79d7627b728abcd1d09032c2.png)=![](mixly/media/e1d56465bb9a03ee6c7eefa34d4355bf.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

In case of the poisonous gas concentration is less than 10, the loop is ended. Move out ![](mixly/media/d98fb9245cdca70ccfa52ce2897b7fcd.png),![](mixly/media/4dedc9f47f1b7661ae96cc95fb62d711.png),![](mixly/media/5186c91253d6f5d3ae8ffc9eb092c2cf.png), ![](mixly/media/79baedb34dfc58ecb2264eac20ca5f3f.png), change “=” into “＜”, 0 into 10.

And ![](mixly/media/d98fb9245cdca70ccfa52ce2897b7fcd.png)+![](mixly/media/949290c126b0b1274ea146825ffefa98.png)+![](mixly/media/e15a02c147badd2b49a4f32eb72c07bd.png)+![](mixly/media/79baedb34dfc58ecb2264eac20ca5f3f.png)=![](mixly/media/f074fbeaabe2acfa8e449b56370d3888.png)

Drag ![](mixly/media/2909eee8f93424c4fc60ced8b7d3ed34.png),![](mixly/media/5186c91253d6f5d3ae8ffc9eb092c2cf.png). ![](mixly/media/2909eee8f93424c4fc60ced8b7d3ed34.png)+![](mixly/media/f074fbeaabe2acfa8e449b56370d3888.png)+![](mixly/media/5186c91253d6f5d3ae8ffc9eb092c2cf.png)=![](mixly/media/f502e586379cd8322928a5da5dc484a6.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Click “Control” →![](mixly/media/316351ea5abe934720358d0c225d373b.png)， ![](mixly/media/316351ea5abe934720358d0c225d373b.png)+![](mixly/media/f502e586379cd8322928a5da5dc484a6.png)=![](mixly/media/07119b8a17811311fb683c8a5628a788.png)

Copy ![](mixly/media/64ec1639dc3864a7f3541b7a508a37c9.png)once, add it to complete the whole code string.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

![](mixly/media/2c148beefd6eb1d6379dbdcc4f62b9f4.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

**Photocell sensor and PIR motion sensors control white LED.**

Then we use same way to create variable ![](mixly/media/53b734a3a3a7d371708cc7ccfcd4914d.png) and ![](mixly/media/64924734aa116a7cf2b8163380d88159.png).

Drag out ![](mixly/media/839b3adff58e5b8f9c5d9378d89fcb4e.png)，![](mixly/media/5186c91253d6f5d3ae8ffc9eb092c2cf.png)→![](mixly/media/5b27908e6379660416d3d9dacff7a24d.png)， then ![](mixly/media/53b734a3a3a7d371708cc7ccfcd4914d.png) and ![](mixly/media/64924734aa116a7cf2b8163380d88159.png) will appear in “variables”.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Move ![](mixly/media/64924734aa116a7cf2b8163380d88159.png)into “do: block
Click “Analog Read” →![](mixly/media/ffa1226d55b3efe8940e047cf2a7a810.png), photocell sensor is linked with A1, so set to A1. ![](mixly/media/64924734aa116a7cf2b8163380d88159.png)+![](mixly/media/ffa1226d55b3efe8940e047cf2a7a810.png)=![](mixly/media/632090a74582ec31bc40e9bcee74cf64.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

 When the light intensity is less than 300 and PIR motion sensor detects people at same time, LED will light on, otherwise, LED is off.

Drag![](mixly/media/d98fb9245cdca70ccfa52ce2897b7fcd.png), →![](mixly/media/0c279ba9145b12dc674b88b767821ce6.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Move out ![](mixly/media/4dedc9f47f1b7661ae96cc95fb62d711.png), ![](mixly/media/53b734a3a3a7d371708cc7ccfcd4914d.png), ![](mixly/media/5186c91253d6f5d3ae8ffc9eb092c2cf.png), change 0 into 300, “=” into “＜”;

![](mixly/media/d98fb9245cdca70ccfa52ce2897b7fcd.png)+![](mixly/media/7e251e47fda7cd4416d0466f916c3025.png)+![](mixly/media/cfc188b05c18a6eeeecab67d951233e0.png)+![](mixly/media/53b734a3a3a7d371708cc7ccfcd4914d.png)=![](mixly/media/71a41ade659edc81cf063b870223493c.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Enter “Variables” →![](mixly/media/6c20c29004f882fa809fc896d6bb4089.png)， ![](mixly/media/6c20c29004f882fa809fc896d6bb4089.png)+![](mixly/media/71a41ade659edc81cf063b870223493c.png)=![](mixly/media/e39a0f5b4050ec89f4bd7569e572af13.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Select![](mixly/media/b169e65cb66660d766fdbed71520a083.png)， set to pin 2, then ![](mixly/media/5353b4e0a649008205811461845d0f57.png)+![](mixly/media/e39a0f5b4050ec89f4bd7569e572af13.png)=![](mixly/media/68b946ff06da15f708a1b03d4fb6d556.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Move out block ![](mixly/media/f6496bb1a633cc54a7117354e85e945f.png)，![](mixly/media/37e451fc5aa5633786991154571e41fa.png)

![](mixly/media/37e451fc5aa5633786991154571e41fa.png)+ ![](mixly/media/f6496bb1a633cc54a7117354e85e945f.png)= ![](mixly/media/43630b1baaf00475ac403290c132ff34.png)，next to judge if there is person nearby, ![](mixly/media/bc330bdd20fb20f4697110481ff9257c.png) is needed. If it is，white LED will be on, conversely, turn off.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Select ![](mixly/media/4dedc9f47f1b7661ae96cc95fb62d711.png),![](mixly/media/37e451fc5aa5633786991154571e41fa.png), ![](mixly/media/5186c91253d6f5d3ae8ffc9eb092c2cf.png), modify 0 into 1.
![](mixly/media/4dedc9f47f1b7661ae96cc95fb62d711.png)+![](mixly/media/bc330bdd20fb20f4697110481ff9257c.png)+![](mixly/media/37e451fc5aa5633786991154571e41fa.png)+![](mixly/media/678c7be7434498c409c9da5620674bca.png)=![](mixly/media/08fb66c90a7b46de56c47cb8c38059cc.png);

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Enter“Control Output”→![](mixly/media/fa34e41ff13aae713e3d7c23655ca555.png), white LED is attached to digital 13, so set to 13→![](mixly/media/598040f96656bb95d2487eb48fefd005.png)，copy this block once and set to LOW.

![](mixly/media/431beb4bb256389e942b122941760caf.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

**When steam sensor detects water, servo 2 will rotate and make window closed; conversely, the window will be open.**

Combine ![](mixly/media/e5a30955f558ece1ef327a42248d94bd.png)and ![](mixly/media/5186c91253d6f5d3ae8ffc9eb092c2cf.png), displace “value” with “water” →![](mixly/media/f289dfa9bfdfbbd25eee5331ffffa15a.png)；then the variable ![](mixly/media/82097c85b5250e432f47842513105d7c.png) and![](mixly/media/58adad0a8424744b9e984826ad18652a.png) are created.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Move block![](mixly/media/58adad0a8424744b9e984826ad18652a.png) into do block.
Enter “Analog Read” → ![](mixly/media/0c74cb3dc67abe8aab648c4e97fda0f0.png), steam sensor is connected to A3, so set to pin A3,![](mixly/media/58adad0a8424744b9e984826ad18652a.png)+![](mixly/media/cbd8055ffb5d00fdd4db189ff5e19972.png)=![](mixly/media/cfec342a2c84dab147dc7ecd266723d8.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

In this lesson, servo 2 will rotate(window is closed) when the analog value of steam is greater than 800, otherwise, the window will be open.
Select![](mixly/media/35d8652d308657b854152fc080c39dd3.png)and place it into do block of![](mixly/media/425fdb1da80d72d1fbd349a07559f78a.png)，click blue gear icon，appear edit box，move block![](mixly/media/c14b4237165bcfbc9d5cd102405543e4.png)into![](mixly/media/85bb759b3b6effac0641e460075fbc4e.png)block，so the block![](mixly/media/e1eb5ed096548911685c654a0f09eb3e.png)turns into![](mixly/media/e64b3865c0abaa3da84e4ecfc9306327.png),

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Drag out block![](mixly/media/4dedc9f47f1b7661ae96cc95fb62d711.png),![](mixly/media/82097c85b5250e432f47842513105d7c.png), ![](mixly/media/d98fb9245cdca70ccfa52ce2897b7fcd.png),![](mixly/media/5186c91253d6f5d3ae8ffc9eb092c2cf.png). Change “=” into “＞” and 0 into 800,![](mixly/media/82097c85b5250e432f47842513105d7c.png)+![](mixly/media/eaf323902ba30332022f3d37c645a297.png)+![](mixly/media/3847c1ea7da69bdf63f111fdae25d95b.png),+![](mixly/media/d98fb9245cdca70ccfa52ce2897b7fcd.png)=![](mixly/media/8c873c7a2d9acb85223102825ee4d603.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Then we need to create another variable “flag2” →![](mixly/media/05bc5ad4483ae0ebab7cd8ade93d962a.png)→![](mixly/media/cc1ff585398f1a2cbd6d4f121f8c6748.png)，![](mixly/media/2d7761b573a4de0160862bde0cfb329c.png).
Select![](mixly/media/cc1ff585398f1a2cbd6d4f121f8c6748.png)and![](mixly/media/5186c91253d6f5d3ae8ffc9eb092c2cf.png), change 0 into 1, then ![](mixly/media/cc1ff585398f1a2cbd6d4f121f8c6748.png)+![](mixly/media/bc4b74779593321c0097992ba074eb8e.png)+![](mixly/media/bab45f538db4df712e953096ccd64112.png)=![](mixly/media/17b869368e27d250417fb2f7d641f930.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

![](mixly/media/e53c3e5598f406bb8f4fb26f3a4f9213.png)+![](mixly/media/17b869368e27d250417fb2f7d641f930.png)=![](mixly/media/e859edd3e6ce34da68b99803b1749b71.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Move out ![](mixly/media/4dedc9f47f1b7661ae96cc95fb62d711.png) ,![](mixly/media/5186c91253d6f5d3ae8ffc9eb092c2cf.png)and ![](mixly/media/2d7761b573a4de0160862bde0cfb329c.png), change 0 into 1. ![](mixly/media/4dedc9f47f1b7661ae96cc95fb62d711.png)+![](mixly/media/2d7761b573a4de0160862bde0cfb329c.png)+![](mixly/media/2f876f10d98aabd0b1af2914892db7ea.png)+![](mixly/media/e859edd3e6ce34da68b99803b1749b71.png)=![](mixly/media/078b9b0de9128e70eff8e8b34357b0e2.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

When the analog value of steam is greater than 800, the “water” is replaced by will “rain” on app.
![](mixly/media/8c2236b7c3667f690ef3d0e3d750ad9c.png)+![](mixly/media/078b9b0de9128e70eff8e8b34357b0e2.png)=![](mixly/media/cbca1e1d0d066167e21ca8f09cc1a5bf.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Click “Text” → ![](mixly/media/7b9d4e26051bd0916c4f6f179c2ee6a0.png), modify “hello” into “rain”，![](mixly/media/7b9d4e26051bd0916c4f6f179c2ee6a0.png)+![](mixly/media/c479cc5fdf87a8858b4d10d7564a0692.png)=![](mixly/media/b98959a4e8a1637c4992bb1a9b6b2ada.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Click “Drive_module” →![](mixly/media/877f30f7974b7ec41c6c123a7518c38a.png) ，servo is connected to digital 10, then set to pin 10 and 180°，delay in 300ms. Then we get block:![](mixly/media/3e5fb5260fe1a8efc57bc24143128245.png), ![](mixly/media/3e5fb5260fe1a8efc57bc24143128245.png)+![](mixly/media/204233fcd1290b2217ba6788eceb177d.png)=![](mixly/media/a6f70c71a470721975d5cf3f247d977d.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Then add delay block, set to 100ms, need to initialize serve 2 firstly, copy block![](mixly/media/877f30f7974b7ec41c6c123a7518c38a.png) and place it into setup block, set to pin 10 and 10°， delay in 300ms.
If the analog value detected is less than 30, the loop will stop，copy![](mixly/media/9653ecfce5c3e1d350c316ad40f9f5d1.png)once.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

![](mixly/media/76e4a141b536f8ba05a07a2d2cd031d6.png)+![](mixly/media/9653ecfce5c3e1d350c316ad40f9f5d1.png)=![](mixly/media/f2136ad3ea715d881e485090a54be041.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Separately drag out ![](mixly/media/d98fb9245cdca70ccfa52ce2897b7fcd.png),![](mixly/media/5186c91253d6f5d3ae8ffc9eb092c2cf.png), ![](mixly/media/4dedc9f47f1b7661ae96cc95fb62d711.png), ![](mixly/media/82097c85b5250e432f47842513105d7c.png), change “=” into “＜”, 0 into 30. ![](mixly/media/d98fb9245cdca70ccfa52ce2897b7fcd.png)+![](mixly/media/d6057e5940cd6efbbe2d3e75201774d6.png)+![](mixly/media/82097c85b5250e432f47842513105d7c.png)+![](mixly/media/16b23f84627a2854f210d29a519238ea.png)=![](mixly/media/27140034c4f75c6a2c154ad43772b255.png)

Drag out ![](mixly/media/82a95434087dc7f89e6bf4eefb683989.png)and![](mixly/media/5186c91253d6f5d3ae8ffc9eb092c2cf.png),![](mixly/media/82a95434087dc7f89e6bf4eefb683989.png)+![](mixly/media/5186c91253d6f5d3ae8ffc9eb092c2cf.png)+![](mixly/media/27140034c4f75c6a2c154ad43772b255.png)=![](mixly/media/4689c017f0d1b34e0797d62f08f1e6b7.png).

Enter ”Control” →![](mixly/media/89774a23bc21077c1329822188b2aa53.png), ![](mixly/media/89774a23bc21077c1329822188b2aa53.png)+![](mixly/media/4689c017f0d1b34e0797d62f08f1e6b7.png)=![](mixly/media/9d2fd7fda1f5e534d33e87b5808e1352.png);

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Move ![](mixly/media/d98fb9245cdca70ccfa52ce2897b7fcd.png) block into “else” block, drag out block![](mixly/media/4dedc9f47f1b7661ae96cc95fb62d711.png).
Select ![](mixly/media/608ab03cfab65043d5e58bdac50d7492.png)and ![](mixly/media/07494cc8fa590a5cef151cfbd16f9bb0.png), change ‘a’ into ‘u’, “=” into “≠”; then get ![](mixly/media/608ab03cfab65043d5e58bdac50d7492.png)+![](mixly/media/f666c3fca9ce0a86d64dc341666ae963.png)+![](mixly/media/63f90165788d005f90b2dbd9a4144810.png)=![](mixly/media/b48293ec19b23db6de452434b32c321c.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Copy![](mixly/media/b48293ec19b23db6de452434b32c321c.png)once，change u into n.

![](mixly/media/f561447b44d2f6b5d83a9d95312d3d70.png)+![](mixly/media/b48293ec19b23db6de452434b32c321c.png)+![](mixly/media/33b4365950af0b542defe7b520c69939.png)=![](mixly/media/f2269a58923396af2dd02db347496ce5.png);

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

“Control Output”→![](mixly/media/5a1a81d9c306afdadbd9b224869a60cc.png)，set to pin 10，0°，delay in 10ms.

![](mixly/media/4766c0e3183f038ac249d2a640e8f6e3.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

**Now, we design the code that buzzer alarms when deprived of water.**

Create variable ![](mixly/media/8bb647ea36d6169c0c698773b9e4d9e5.png)and![](mixly/media/8e7142790fe692910a40d8e8cb113889.png)first→![](mixly/media/183eb059287f0e9730e9ae80196ac4f7.png),

Then they are founded in variables block.

![](mixly/media/8e7142790fe692910a40d8e8cb113889.png)，![](mixly/media/8e7142790fe692910a40d8e8cb113889.png)+![](mixly/media/60c1a66eb0edf5b0081bb22707d083e3.png)=![](mixly/media/36943287ab32bf14b0aa0253f83c5404.png),

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Enter “Analog Read”→![](mixly/media/6d006197a316d8eca2a3dfe49cf9cc98.png)，soil sensor is linked with A2 , then![](mixly/media/f4c5082271be0659f158dfbeaacc49ff.png)+![](mixly/media/36943287ab32bf14b0aa0253f83c5404.png)=![](mixly/media/e503298d172223a1d11cb15585d43297.png)，when the soil humidity value is less than 300, the buzzer will alarm with the “tick,tick” sound. On the contrary, when soil humidity value is equivalent to or less than 10, the loop is ended.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Drag out ![](mixly/media/3dbbd3da4aa5499e1a255bb98f502518.png), place it into do block of ![](mixly/media/99d28247a1e3fe8f3fd9b383f5af7e23.png)
click blue gear icon，appear edit box，move block![](mixly/media/c14b4237165bcfbc9d5cd102405543e4.png)into![](mixly/media/85bb759b3b6effac0641e460075fbc4e.png)block，so the block![](mixly/media/e1eb5ed096548911685c654a0f09eb3e.png)turns into![](mixly/media/e64b3865c0abaa3da84e4ecfc9306327.png).
Move out![](mixly/media/4dedc9f47f1b7661ae96cc95fb62d711.png), ![](mixly/media/8bb647ea36d6169c0c698773b9e4d9e5.png),![](mixly/media/5186c91253d6f5d3ae8ffc9eb092c2cf.png), ![](mixly/media/62a44fed4859a4ff35fc94a4c9e4a3d6.png); alter “=” into “\<”,0 into 300, then get code string:![](mixly/media/dc2216303a716595c0255f23a70edee5.png)+![](mixly/media/8bb647ea36d6169c0c698773b9e4d9e5.png)+![](mixly/media/d5816d39bd2662c86936288e43252b46.png)=![](mixly/media/f8e474d880a3493dde7cf6672d17c008.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Then copy ![](mixly/media/f8e474d880a3493dde7cf6672d17c008.png)again, modify“\<” into “\>”, “300” into “10”→![](mixly/media/b69e83cc2de220f70afdebcb59e4d991.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Combine these blocks: ![](mixly/media/b69e83cc2de220f70afdebcb59e4d991.png)+![](mixly/media/62a44fed4859a4ff35fc94a4c9e4a3d6.png)+![](mixly/media/f8e474d880a3493dde7cf6672d17c008.png)=![](mixly/media/f409e17b2c234363c0480134d9b11c3e.png).

Next let’s create another variable “flag3”(![](mixly/media/0cbacac25a3132612ede2156f3fbe3e5.png));

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

You could refer to the method in the previous lessons.
Move ![](mixly/media/342edb03f146e45c1092d12b5dc7f2ac.png) and ![](mixly/media/5186c91253d6f5d3ae8ffc9eb092c2cf.png)out, modify 0 into 1. ![](mixly/media/342edb03f146e45c1092d12b5dc7f2ac.png)+![](mixly/media/f90b97d6678b2b8024a6c8586b58d1dc.png) +![](mixly/media/bde5b1d8089fa852cc415bb61777157a.png)=![](mixly/media/eae959f09aa30dbeb988b945e4846790.png).
![](mixly/media/7a40bc73785d75dea407c69909ed5f5e.png)+![](mixly/media/eae959f09aa30dbeb988b945e4846790.png)=![](mixly/media/dbe741e366fc70d2cb82047b889c92b5.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Drag out ![](mixly/media/4dedc9f47f1b7661ae96cc95fb62d711.png),![](mixly/media/8a041dcba7857ee65373754af8c4a3c6.png) and copy![](mixly/media/bde5b1d8089fa852cc415bb61777157a.png)block;

![](mixly/media/4dedc9f47f1b7661ae96cc95fb62d711.png)+![](mixly/media/8a041dcba7857ee65373754af8c4a3c6.png)+![](mixly/media/bde5b1d8089fa852cc415bb61777157a.png)+![](mixly/media/dbe741e366fc70d2cb82047b889c92b5.png)=![](mixly/media/cdb562cb604ecdba22e248565a06378a.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

If soil humidity analog value is greater than 800, the soil will turn into “hydropenia” on APP, move out ![](mixly/media/ef2651497d4f3432826dc910dd3f1c87.png),![](mixly/media/ef2651497d4f3432826dc910dd3f1c87.png)+![](mixly/media/cdb562cb604ecdba22e248565a06378a.png)=![](mixly/media/c98829e4c976b172f2253ec225282d19.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Copy![](mixly/media/7b9d4e26051bd0916c4f6f179c2ee6a0.png)once，change “hello” into “hydropenia, →![](mixly/media/a83c5c6627959eb30268d31ca35a5763.png)，

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Click“Control Output”→![](mixly/media/d0de89f1131ae2d68f9ba812e0f09ebc.png)， set to pin3, NOTE_A4 and 1/8 beat, ![](mixly/media/a0d4ee521be9f6a66d8bb5659653bb7b.png)+![](mixly/media/9233be4973f00d6e3552721d0b9b06f2.png)=![](mixly/media/fb38d9004fe75237a759638323146472.png);

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Add![](mixly/media/18d0eae9962c2ef361fbc5b4f44fed06.png)block, set to 100ms,
Replicate![](mixly/media/5cac0a9b5ca7eab5fd23eb51ba65fc62.png)and ![](mixly/media/972704fd9feb85a6aea1bf91fc54b2d0.png), then get code string:![](mixly/media/f9b604da2803bb6cb6c3a19dfff7ba9a.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Duplicate![](mixly/media/f9b604da2803bb6cb6c3a19dfff7ba9a.png)code string，and set the last 100ms to 300ms.
Copy ![](mixly/media/be97f2ce90a9e9390b94e9f8fece0541.png)once, the following code string is for your reference:

![](mixly/media/bf58cb30e2d5a6591859a60f540bb891.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*However, when the analog value is less than or equivalent to 10, the loop will stop. Drag out![](mixly/media/d98fb9245cdca70ccfa52ce2897b7fcd.png), ![](mixly/media/d98fb9245cdca70ccfa52ce2897b7fcd.png)+![](mixly/media/bf58cb30e2d5a6591859a60f540bb891.png)=![](mixly/media/2ff32164617556b186c5f24eb0e5822f.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Move out ![](mixly/media/fbd0727c2ef6d85da66b269dc86b0efe.png),![](mixly/media/4dedc9f47f1b7661ae96cc95fb62d711.png),![](mixly/media/8bb647ea36d6169c0c698773b9e4d9e5.png),![](mixly/media/d98fb9245cdca70ccfa52ce2897b7fcd.png); modify 0 into 10, “=” into “≤”.

Then ![](mixly/media/d98fb9245cdca70ccfa52ce2897b7fcd.png)+![](mixly/media/8bb647ea36d6169c0c698773b9e4d9e5.png)+![](mixly/media/4dedc9f47f1b7661ae96cc95fb62d711.png)+![](mixly/media/1c98c8e7562f827d13b1f3079e2aaf79.png)+![](mixly/media/fbd0727c2ef6d85da66b269dc86b0efe.png)=![](mixly/media/c0a204748b3ce547cbb1328ed48f6a57.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Drag out![](mixly/media/5186c91253d6f5d3ae8ffc9eb092c2cf.png)and ![](mixly/media/1b027ccb302186bf807540e0795432d3.png).

![](mixly/media/5186c91253d6f5d3ae8ffc9eb092c2cf.png)+![](mixly/media/1b027ccb302186bf807540e0795432d3.png)+![](mixly/media/c0a204748b3ce547cbb1328ed48f6a57.png) =![](mixly/media/c04b810e4bb0bf3483d835efd32121d7.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Replicate block![](mixly/media/6ea9dd7d219f934180a14d24af9886ac.png);

![](mixly/media/baea863c62fb1075b456a4d2aaaf92d4.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Click “functions”→![](mixly/media/358465f7f961e7122025a2cc859a96e2.png), add ![](mixly/media/358465f7f961e7122025a2cc859a96e2.png), the whole code string is below:

![](mixly/media/5dfc7a3c1f8a1ffa44bdc04cb8d4a207.png)

![](mixly/media/d8a4ff10fdca68484c470c0034e75acd.png)

![](mixly/media/0950da732920f0dfb4744605d614b6c4.png)

Click “variable” to drag ![](mixly/media/6530656492a33a0ed8daa9ad667d51c0.png), ![](mixly/media/6530656492a33a0ed8daa9ad667d51c0.png)+![](mixly/media/541b02e3dae07f7b1e289899163414e7.png)=![](mixly/media/670207af53aa3145aaf7c0067bfbc43e.png). \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

**There are different icons on App, you could use them to make smart home to perform distinct function.**

Drag out ![](mixly/media/ae5c2a62e6a1d5121f78fc8d7407e4a1.png)，change “procedure” into “pwm_control”, then get block![](mixly/media/c6f8e67584e52ff0934faebc042e1f22.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Need to make a “choice” judgement. We use block![](mixly/media/86c719c9f837abbb5ab72813e7020642.png)，drag out ![](mixly/media/86c719c9f837abbb5ab72813e7020642.png), click blue icon，appear edit box, drag![](mixly/media/2eefff3938ba54398c706a43be3e8daf.png)into block![](mixly/media/9ab20b881c20020d78411e37b32bb4bd.png)，the get block![](mixly/media/18009cfb6db3423bf9241b76b6e7dd9d.png), move![](mixly/media/2eefff3938ba54398c706a43be3e8daf.png)3 times into![](mixly/media/9ab20b881c20020d78411e37b32bb4bd.png) →(![](mixly/media/60278b6f1dab8f535cb72bba123f77f3.png)). Then get ![](mixly/media/4ed3c74e8e74d5fd9ba028860718ba97.png). ![](mixly/media/4ed3c74e8e74d5fd9ba028860718ba97.png)+![](mixly/media/4be3a0ebd60c99393622865ad2aa8472.png)=![](mixly/media/96c8be8428819e422116eee0644dd43b.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Move out![](mixly/media/608ab03cfab65043d5e58bdac50d7492.png)block,![](mixly/media/608ab03cfab65043d5e58bdac50d7492.png)+ ![](mixly/media/4ed3c74e8e74d5fd9ba028860718ba97.png)= ![](mixly/media/75fffc5f56e951f124cbc9de3c4ae365.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

![](mixly/media/b2c91a6d1b3d2c7725ab5b45b7d75969.png)control the door(the angle of servo 1), door shows the corresponding value.
Move out block![](mixly/media/3436492a5976323f853f1b22b6e1c1dd.png)into “case” block，when drag and release button![](mixly/media/b2c91a6d1b3d2c7725ab5b45b7d75969.png), signal “t 50 \##” will be transmitted to Bluetooth module，（t: incipient character, 50 implies the angel of servo 1,\##: end character）

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Next to produce the variable ![](mixly/media/494fd6a1cbb93e0a29b93db8b0731a0b.png), ![](mixly/media/72a8536161556d522b4c7d9580e2d967.png)and ![](mixly/media/b5c5d5d7a81e58d74854c256a7ad87b9.png)are needed, click drop-down triangle to select “string”, delete “hello”, change “item” into servo1→![](mixly/media/a635dda5b3da78507d5123fdba948446.png). Thus, ![](mixly/media/494fd6a1cbb93e0a29b93db8b0731a0b.png)is created.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Follow the same way to create variable ![](mixly/media/bb7e1570c1d2130bb5864aa648f6b023.png) and ![](mixly/media/d8c9d956c9c102353db7d618dd7fac9a.png)(![](mixly/media/294f07b7b642fb97199a12daefbca002.png)).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Drag![](mixly/media/752b8dee057fe0f9c7b4e9f035aa5b1a.png)and ![](mixly/media/925700ef4e23d176feec2dc688d259bf.png)into case‘t’，

Enter “serial port”→![](mixly/media/b97bfff03d8f9b3ea41afb90d58e4b3e.png)，combine this block with ![](mixly/media/752b8dee057fe0f9c7b4e9f035aa5b1a.png), alter ‘a’ into ‘\##’，![](mixly/media/3c1656ec3b81d8fbfbdfd6cc27ab1772.png). The angle of servo1 is integer, therefore, the string is supposed to transfer into integer.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Click “Tex” to drag out ![](mixly/media/c6098243e439759d8b8729033150763a.png) into ![](mixly/media/925700ef4e23d176feec2dc688d259bf.png);

Drag out ![](mixly/media/494fd6a1cbb93e0a29b93db8b0731a0b.png), ![](mixly/media/494fd6a1cbb93e0a29b93db8b0731a0b.png)+![](mixly/media/c6098243e439759d8b8729033150763a.png)+![](mixly/media/925700ef4e23d176feec2dc688d259bf.png)=

![](mixly/media/b05f9dd2ffb558c72aac9910f8e157c9.png);

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Place![](mixly/media/7b02b63a2f9a707830518b26dda492f0.png)into case‘t ’，set to pin 9, delay in 300ms; drag out ![](mixly/media/b672117c00bfd9c27b056f9879657760.png);

![](mixly/media/b672117c00bfd9c27b056f9879657760.png)+![](mixly/media/5816cbf4281e1ba04900cabb41db7321.png)=![](mixly/media/e0c50e15ea8bea80bb6607109f77281b.png)

![](mixly/media/9b9b4b0d56f15dd4f3aac08a57dc1dbd.png)restrains the windows(servo 2). Window displays the corresponding value,
Click “Text” →![](mixly/media/3436492a5976323f853f1b22b6e1c1dd.png)into “case” block，when drag and release button![](mixly/media/9b9b4b0d56f15dd4f3aac08a57dc1dbd.png), signal “u 34 \##” will be sent to Bluetooth module,alter ‘a’ into ‘u’（u: incipient character, 34 stands for angle of servo 2,\##: end character), create two variables to save the angle data of servo 2.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Next, follow the same way to establish the variable ![](mixly/media/948daef913d3e85c5775e198017a5a86.png) and ![](mixly/media/b84edffc7e5391caffff876fffae5004.png).
Drag out![](mixly/media/97491dae33b125b1c29078fe80479e32.png) and ![](mixly/media/66c47f3968acfee361b2a82ab11430f7.png), delete “hello”. Alter “item” into “servo2”，click drop-down triangle to select string. (![](mixly/media/22ce6da917149ce7810973c594368ef3.png)), then we get block![](mixly/media/948daef913d3e85c5775e198017a5a86.png)，

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Follow the same way(![](mixly/media/05ed2cf4ea7c5feca77b381f7d99fd3f.png)) to produce ![](mixly/media/b84edffc7e5391caffff876fffae5004.png)block. Then we get ![](mixly/media/b84edffc7e5391caffff876fffae5004.png)block.
Move out ![](mixly/media/b84edffc7e5391caffff876fffae5004.png) and ![](mixly/media/d07f7953b55ae5d5c7a1ce7a8014cd57.png), ![](mixly/media/b84edffc7e5391caffff876fffae5004.png)+![](mixly/media/d07f7953b55ae5d5c7a1ce7a8014cd57.png)=![](mixly/media/4120cd7a634fb2d24c3a0aa58bf8af43.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Copy block![](mixly/media/ba96ec50d5cf41cc9bda9d8ad359aef6.png), the angle of servo 2 is integer, convert character into integer, replicate![](mixly/media/94e00ca68801bf31eb9234aea19fe648.png)and ![](mixly/media/948daef913d3e85c5775e198017a5a86.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

![](mixly/media/ba96ec50d5cf41cc9bda9d8ad359aef6.png)+![](mixly/media/4120cd7a634fb2d24c3a0aa58bf8af43.png)+![](mixly/media/94e00ca68801bf31eb9234aea19fe648.png)+![](mixly/media/948daef913d3e85c5775e198017a5a86.png)=![](mixly/media/070f0b144f92b4ddb1309392a564087a.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Copy ![](mixly/media/921c97557c7ac6fea52c6325a7d4331c.png), set to pin 10, delay in 300ms duplicate ![](mixly/media/c10b7d7ce1647a2d08a4149af0d8da84.png)once, combine this two blocks →![](mixly/media/4751dac6d0c1a8ec141d54234e3f44fd.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

![](mixly/media/3ab556e235481eba93c8871e4ddbf01d.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

![](mixly/media/6d7cc1b6d61a493f95c2e16a5665a0b7.png)decides the yellow LED brightness，led2 displays the corresponding PWM value.
Drag![](mixly/media/3436492a5976323f853f1b22b6e1c1dd.png)block into case，when drag and release button![](mixly/media/6d7cc1b6d61a493f95c2e16a5665a0b7.png), signal “v 100 \##” will be sent to Bluetooth module, modify ‘a’ into ‘v’（v:incipient character, 100 represents the PWM value of led2, \##: end character)，next to create two variables to save PWM value of LED（led2).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

![](mixly/media/9b9b4b0d56f15dd4f3aac08a57dc1dbd.png)restrains the windows(servo 2). Window displays the corresponding value,
when drag and release button![](mixly/media/9b9b4b0d56f15dd4f3aac08a57dc1dbd.png), signal “u 34 \##” will be sent to Bluetooth module, alter ‘a’ into ‘u’（u: incipient character, 34 stands for angle of servo 2,\##: end character), create two variables to save the angle data of servo 2.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Move out ![](mixly/media/72a8536161556d522b4c7d9580e2d967.png) and ![](mixly/media/66c47f3968acfee361b2a82ab11430f7.png); combine these blocks, alter “item” into“led2”, get![](mixly/media/c38ed9edf8bf6f9a7cd131fc2df11654.png) and create variable![](mixly/media/9c2dc100dd753dc5f2eedf5373001d44.png). According to same method we get ![](mixly/media/7aa1d8f3762929ff56190bd7e6e03aa2.png), then ![](mixly/media/acce07575f47180ba2670334c0f34625.png) is created.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Click“Variables”to get block![](mixly/media/b61da5c1d4d6fc40b58540bb87917fd9.png)and ![](mixly/media/381bbdd1c0956544729c61d2b0f668ce.png). Place them into case‘v’，

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Copy![](mixly/media/1bab390dae6c666f22eb2423a5905e98.png)once, ![](mixly/media/1bab390dae6c666f22eb2423a5905e98.png)+![](mixly/media/b61da5c1d4d6fc40b58540bb87917fd9.png)=![](mixly/media/4051a47505d14da9e0b4ed66757a1f28.png). The PWM value is integer, need to convert character into integer. Therefore, drag ![](mixly/media/94e00ca68801bf31eb9234aea19fe648.png)from “Text” and place into ![](mixly/media/989027e7a9403d1d9cf11483eded6795.png). And move ![](mixly/media/9c2dc100dd753dc5f2eedf5373001d44.png)out.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

![](mixly/media/9c2dc100dd753dc5f2eedf5373001d44.png)+![](mixly/media/989027e7a9403d1d9cf11483eded6795.png)+![](mixly/media/94e00ca68801bf31eb9234aea19fe648.png)=![](mixly/media/fc67d79016bc98fec753a4afd942d84f.png).
Move out ![](mixly/media/b08c813b4e487d2afbddc95f840f8bc7.png)block into case‘v’ block, yellow LED is linked with digital 5(PWM port), set to pin 5 . Then combine block ![](mixly/media/acce07575f47180ba2670334c0f34625.png) with![](mixly/media/6806be48ff0168008861d34a11fe6b32.png) .

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

![](mixly/media/acce07575f47180ba2670334c0f34625.png)+ ![](mixly/media/6806be48ff0168008861d34a11fe6b32.png)=![](mixly/media/96eea6d7cebe76cf47d211f8e9a9eb30.png);
![](mixly/media/c193ca31a4d923a7ea87683aa0002061.png)decides the speed of fan, “fans” shows the corresponding PWM value.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Drag![](mixly/media/3436492a5976323f853f1b22b6e1c1dd.png)block into case，when drag and release button![](mixly/media/c193ca31a4d923a7ea87683aa0002061.png), signal “w 153 \##” will be transmitted to Bluetooth module, modify ‘a’ into ‘w’（w:incipient character, 153 represents the PWM value of led2, \##: end character)，next to create two variables to save PWM value of LED（led2).
We use same way to produce variable ![](mixly/media/16681f970e1459135cfcaf71c2229772.png) and ![](mixly/media/fa3448537821590826407da9c841cf8d.png)
through ![](mixly/media/5a8edc7740c60dfd1a92b5b81984ca06.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Click“Variables”to drag out block![](mixly/media/a2b8797caabd8f46cec5c658966f0cd7.png)and![](mixly/media/f8d669705d4de692d42140c72268cbc6.png) into case‘w’，
Copy ![](mixly/media/6632d87c2948e5990dc6881aa841640f.png)again. ![](mixly/media/a2b8797caabd8f46cec5c658966f0cd7.png)+![](mixly/media/6632d87c2948e5990dc6881aa841640f.png)=![](mixly/media/de4de1a8157a10986cfb4b695b5317d6.png). The PWM value is integer, so need to transfer character into integer.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Click “Text” to move out block![](mixly/media/94e00ca68801bf31eb9234aea19fe648.png), and drag out ![](mixly/media/76f1c4fc31f71a0c854638ec99bf7c47.png).
![](mixly/media/94e00ca68801bf31eb9234aea19fe648.png)+![](mixly/media/56fc5303a377c256381a608f6daf8aba.png)+![](mixly/media/76f1c4fc31f71a0c854638ec99bf7c47.png)= ![](mixly/media/32c536cbecd012a8c88a10511154e68a.png);

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Click “Drive_module”→![](mixly/media/af138081c8ceafaf7d53572848692eb1.png)，put this block into case‘t ’，it can alter pwm value to decide the rotation speed of fan.
INA and INB pin of fan are linked with digital 7 and 6. Set to pin 7and LOW for INA, which can make fan turn clockwise and blow outward. Set INB to pin 6(PWM port), move out ![](mixly/media/16681f970e1459135cfcaf71c2229772.png) from “Variables”![](mixly/media/16681f970e1459135cfcaf71c2229772.png)+![](mixly/media/eaa73da85e33da4cefb4af7070354751.png)=![](mixly/media/cdd3e733d64006cdcbbf6ab64f5a98df.png).

![](mixly/media/9f81914f1962678c2f2ee836e92d1d83.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Need to initialize fan first, copy ![](mixly/media/af138081c8ceafaf7d53572848692eb1.png)again and place it into “setup” block. In initial status, fan stops turning, set INA to pin 7, HIGH and INB to pin6, HIGH.

![](mixly/media/93dfe0c5dd43a33b91899f60e6c75d37.png)

The code of function of door, window, led2 and fan is completed.

![](mixly/media/3e36f110913c6f8d7165fea08e3533ab.png)

Enter “variables” to select block![](mixly/media/c01c642927d5276925793bc6919f2ea4.png),![](mixly/media/c01c642927d5276925793bc6919f2ea4.png)+![](mixly/media/a20e244ef3b54d17e080665c09e21624.png)=![](mixly/media/71244b2cf1587d90c6615cf325843398.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Next to compete the rest code. Click**![](mixly/media/fd82561fc16273f0e366af7df0c06ec4.png)，**photocell sensor starts detecting light intensity. “light” shows the detected data.

Move block![](mixly/media/3436492a5976323f853f1b22b6e1c1dd.png)into “case” block，the signal “h” will be transmitted when click**![](mixly/media/fd82561fc16273f0e366af7df0c06ec4.png)** icon.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Drag ![](mixly/media/c479cc5fdf87a8858b4d10d7564a0692.png)and ![](mixly/media/647857877467df637d74a49bb94d18e2.png). add delay block and set to 100ms.![](mixly/media/c479cc5fdf87a8858b4d10d7564a0692.png)+![](mixly/media/05d03219803c9579343a1be9525ba51d.png)+![](mixly/media/647857877467df637d74a49bb94d18e2.png)+![](mixly/media/4a1f0dec39480592193ce239d4fd90d5.png)+![](mixly/media/8e8d6f0109fa29d466ba1828672b4377.png)=![](mixly/media/8dc7c22c79068cc7babe15dc9cf19ddd.png);

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

**Click![](mixly/media/df457bfb68d5ee93c82bd0a1b8538440.png)，gas sensor starts detecting data, “gas” shows the detected data.**

Move block![](mixly/media/3436492a5976323f853f1b22b6e1c1dd.png)into “case” block，tap![](mixly/media/df457bfb68d5ee93c82bd0a1b8538440.png)icon，the signal “i” will be transmitted alter ‘a’ into ‘i’，drag out ![](mixly/media/c479cc5fdf87a8858b4d10d7564a0692.png)and ![](mixly/media/1ce08df45a9e08e45d20ff5087146212.png), add delay block and set to 100ms.![](mixly/media/c479cc5fdf87a8858b4d10d7564a0692.png)+![](mixly/media/59c2b65efd36a4e9989143df54f3a36c.png)+![](mixly/media/1ce08df45a9e08e45d20ff5087146212.png)+![](mixly/media/4a1f0dec39480592193ce239d4fd90d5.png)+![](mixly/media/8e8d6f0109fa29d466ba1828672b4377.png)=![](mixly/media/27abd1a37246ea754ab3045478c86183.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

**Click![](mixly/media/82d362ba8702cbdc389ee25d16a8dd1a.png)，soil humidity sensor starts detecting the data, “soil” shows the detected data.**

Move block![](mixly/media/3436492a5976323f853f1b22b6e1c1dd.png)into “case” block，tap![](mixly/media/df457bfb68d5ee93c82bd0a1b8538440.png)icon，the signal ‘j’ will be sent, alter ‘a’ into ‘j’，drag out ![](mixly/media/c479cc5fdf87a8858b4d10d7564a0692.png)and ![](mixly/media/15102dad24591342ae051105f4b3b16c.png), add delay block and set to 100ms.![](mixly/media/c479cc5fdf87a8858b4d10d7564a0692.png)+![](mixly/media/b9201732cd015e037b3f51b79dbb66d3.png)+![](mixly/media/15102dad24591342ae051105f4b3b16c.png)+![](mixly/media/4a1f0dec39480592193ce239d4fd90d5.png)+![](mixly/media/8e8d6f0109fa29d466ba1828672b4377.png)=![](mixly/media/a9c94f6cf7adc2ae282eb17d25ae2dcd.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

**Click![](mixly/media/c6892e6f550052216348cafa20dd705d.png)，steam sensor starts detecting the data, water displays the detected data.**

Move block![](mixly/media/3436492a5976323f853f1b22b6e1c1dd.png)into “case” block, tap![](mixly/media/c6892e6f550052216348cafa20dd705d.png)icon, the signal ‘k’ will be sent，change ‘a’ into ‘k’，drag out ![](mixly/media/c479cc5fdf87a8858b4d10d7564a0692.png)and ![](mixly/media/45c42b73ceeb021e58b921fcc0bcce11.png), add delay block and set to 100ms. ![](mixly/media/c479cc5fdf87a8858b4d10d7564a0692.png)+![](mixly/media/902e9f3d0e97efbba97c0a88ff57f038.png)+![](mixly/media/45c42b73ceeb021e58b921fcc0bcce11.png)+![](mixly/media/4a1f0dec39480592193ce239d4fd90d5.png)+![](mixly/media/8e8d6f0109fa29d466ba1828672b4377.png)=![](mixly/media/1659b8e0d77d38b8f8c8a840530b6373.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

**Click![](mixly/media/027da5a4bb50c846211290d128a26814.png) to open and close the door.**

Move block![](mixly/media/3436492a5976323f853f1b22b6e1c1dd.png)into “case” block，click![](mixly/media/027da5a4bb50c846211290d128a26814.png)，the signal ‘l’ will be sent，modify ‘a’ into ‘l’，
Move ![](mixly/media/140f67bcfcf990d4133218eee62ddf2f.png) block from “Drive_module” block, place it into case‘l’，servo 1 controlling the door is linked with digital 9, set to pin 9, 180° and delay in 500ms
![](mixly/media/ee4a9906da387d32aba9c3a0f2faaadb.png)+![](mixly/media/cac90100eec2009f3510674879f88463.png)+![](mixly/media/4a1f0dec39480592193ce239d4fd90d5.png)=![](mixly/media/8d8137cac5e43778a7c84d341e08d554.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Move block![](mixly/media/3436492a5976323f853f1b22b6e1c1dd.png)into “case” block，click ![](mixly/media/027da5a4bb50c846211290d128a26814.png) again to close the door，the signal ‘m’ will be sent, change ‘a’ into ‘m’.
Duplicate ![](mixly/media/cac90100eec2009f3510674879f88463.png) block and place it into case‘m’, set to0°.

![](mixly/media/42a9c62b6d0fd60ae07d7a0db497d64e.png)+![](mixly/media/10131caa42efefb83e8fe530e7369a81.png)+![](mixly/media/4a1f0dec39480592193ce239d4fd90d5.png)=![](mixly/media/01f957cc0053e0391699157d52187467.png)；

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

**Click ![](mixly/media/29180fb7638890a0ffb098743ff08384.png)to open and close window.**

Move block![](mixly/media/3436492a5976323f853f1b22b6e1c1dd.png)into “case” block，click ![](mixly/media/29180fb7638890a0ffb098743ff08384.png) to open the window，the signal ‘n’ will be transmitted, change ‘a’ into ‘n’.
Move ![](mixly/media/140f67bcfcf990d4133218eee62ddf2f.png) block from “Drive_module” block, place it into case‘n’，the servo 2 controlling the window is linked with digital 10, set to pin 10, 180° and delay in 500ms.

![](mixly/media/90db1a3f25ec772b8aeb9c0ad3cc4588.png)+![](mixly/media/ac9380386cc8bc68e10134b2664272c4.png)+![](mixly/media/4a1f0dec39480592193ce239d4fd90d5.png)=![](mixly/media/cd327d19c3c50d34d74bdf582fbb0ba9.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Move block![](mixly/media/3436492a5976323f853f1b22b6e1c1dd.png)into “case” block, tap![](mixly/media/29180fb7638890a0ffb098743ff08384.png)again to close the window, then the signal ‘o’ will be sent, alter ‘a’ into ‘o’.
Replicate![](mixly/media/90db1a3f25ec772b8aeb9c0ad3cc4588.png) and place it into case‘o’，set to 0°.

![](mixly/media/92a0c556b1c8e6d7e586141546cf03c3.png)+![](mixly/media/4a1f0dec39480592193ce239d4fd90d5.png)+![](mixly/media/b659a3eaa59eeac1eb837811fa7c940f.png)=![](mixly/media/12a6eb87cac88c52f52d2122e1147293.png)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

**Click![](mixly/media/0b9f125d6da42737ff3eae79f5378973.png) to turn on and off LED.**

Move block![](mixly/media/3436492a5976323f853f1b22b6e1c1dd.png)into “case” block, tap![](mixly/media/0b9f125d6da42737ff3eae79f5378973.png), then the signal ‘p’ will be sent, alter ‘a’ into ‘p’.
Enter“Control Output”→![](mixly/media/0b236021594cb8f02d271b8f3135dc6a.png). Yellow LED is connected to digital 5, so set to pin 5 and HIGH →![](mixly/media/e72986b5952d2375a7837b490497e909.png).

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Click![](mixly/media/0b9f125d6da42737ff3eae79f5378973.png)again to turn off LED. Move block![](mixly/media/3436492a5976323f853f1b22b6e1c1dd.png)into “case” block, the signal ‘q’ will be sent, modify ‘a’ into ‘q’，then duplicate ![](mixly/media/e72986b5952d2375a7837b490497e909.png)again and place it into ![](mixly/media/e72986b5952d2375a7837b490497e909.png), set to LOW.

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

**Click![](mixly/media/be23528229ee588283d4e1d5da695d5e.png) to turn on and off fan.**

![](mixly/media/e72986b5952d2375a7837b490497e909.png)，tap![](mixly/media/be23528229ee588283d4e1d5da695d5e.png)icon, then the signal ‘r’ will be transmitted，change ‘a ’ into ‘ r ’，
Drag out the block ![](mixly/media/e11ca14be67d5461960f1f1086a13c05.png) from “Drive_module” into case‘r’. INA and INB of fan are linked with digital 7 and 6. Set INA to 7, HIGH and INB to 6，LOW. (![](mixly/media/b87c40f7e581d6cd69bc615f7fd8183b.png))

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

To turn off fan, just click ![](mixly/media/be23528229ee588283d4e1d5da695d5e.png) again.
Move block![](mixly/media/3436492a5976323f853f1b22b6e1c1dd.png)into “case” block，click![](mixly/media/be23528229ee588283d4e1d5da695d5e.png)again，the signal ‘s’ will be sent，modify ‘a’ into ‘s’;
Copy ![](mixly/media/7abd1015ed99ac6b020a04709d4bd7da.png)once and move into case‘s’. Set INB to LOW.

![](mixly/media/61dea78b9cd23bb5ba497e71907a2b04.png)

![](mixly/media/afbdb28d6a25df98e3a6426f356ad9e3.png)

Finish and upload the whole code of smart home kit, then cooperate it via app.

**Note：in the Mixly page, the Initial code should be higher than the rest of code, otherwise, the whole code can’t be uploaded.**

**And remove Bluetooth module before uploading test code, otherwise, the complete code still can’t be uploaded.**

**Connect with Bluetooth module after uploading test code, pair and connect to App.**

![](mixly/media/8d44468ef9695d8373eed252a929a28b.png)

![](mixly/media/eb83fcbeb46831d20f2ebc2d458b032d.png)

**Test Result：**

Through app, we can control the various sensors or modules and make smart home to perform the corresponding function.


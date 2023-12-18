/*
Keyestudio smart home Kit for Arduino
Project 15
Smart home
http://www.keyestudio.com
*/
#include <Servo.h>
#include <Wire.h>
#include <LiquidCrystal_I2C.h>

volatile int btn1_num;
volatile int btn2_num;
volatile int button1;
volatile int button2;
String fans_char;
volatile int fans_val;
volatile int flag;
volatile int flag2;
volatile int flag3;
volatile int gas;
volatile int infrar;
String led2;
volatile int light;
String pass;
String passwd;
String servo1;
volatile int servo1_angle;
String servo2;
volatile int servo2_angle;
volatile int soil;
volatile int val;
volatile int value_led2;
volatile int water;

void birthday()
{
  tone(3,294);
  delay(250);
  tone(3,440);
  delay(250);
  tone(3,392);
  delay(250);
  tone(3,532);
  delay(250);
  tone(3,494);
  delay(500);
  tone(3,392);
  delay(250);
  tone(3,440);
  delay(250);
  tone(3,392);
  delay(250);
  tone(3,587);
  delay(250);
  tone(3,532);
  delay(500);
  tone(3,392);
  delay(250);
  tone(3,784);
  delay(250);
  tone(3,659);
  delay(250);
  tone(3,532);
  delay(250);
  tone(3,494);
  delay(250);
  tone(3,440);
  delay(250);
  tone(3,698);
  delay(375);
  tone(3,659);
  delay(250);
  tone(3,532);
  delay(250);
  tone(3,587);
  delay(250);
  tone(3,532);
  delay(500);
}

//tone
#define D0 -1
#define D1 262
#define D2 293
#define D3 329
#define D4 349
#define D5 392
#define D6 440
#define D7 494
#define M1 523
#define M2 586
#define M3 658
#define M4 697
#define M5 783
#define M6 879
#define M7 987
#define H1 1045
#define H2 1171
#define H3 1316
#define H4 1393
#define H5 1563
#define H6 1755
#define H7 1971

#define WHOLE 1
#define HALF 0.5
#define QUARTER 0.25
#define EIGHTH 0.25
#define SIXTEENTH 0.625

Servo servo_10;
Servo servo_9;

int tune[]=
{
  M3,M3,M4,M5,
  M5,M4,M3,M2,
  M1,M1,M2,M3,
  M3,M2,M2,
  M3,M3,M4,M5,
  M5,M4,M3,M2,
  M1,M1,M2,M3,
  M2,M1,M1,
  M2,M2,M3,M1,
  M2,M3,M4,M3,M1,
  M2,M3,M4,M3,M2,
  M1,M2,D5,D0,
  M3,M3,M4,M5,
  M5,M4,M3,M4,M2,
  M1,M1,M2,M3,
  M2,M1,M1
};
LiquidCrystal_I2C mylcd(0x27,16,2);

float durt[]=
 {
  1,1,1,1,
  1,1,1,1,
  1,1,1,1,
  1+0.5,0.5,1+1,
  1,1,1,1,
  1,1,1,1,
  1,1,1,1,
  1+0.5,0.5,1+1,
  1,1,1,1,
  1,0.5,0.5,1,1,
  1,0.5,0.5,1,1,
  1,1,1,1,
  1,1,1,1,
  1,1,1,0.5,0.5,
  1,1,1,1,
  1+0.5,0.5,1+1,
 };

 int length;
 int tonepin=3;

void Ode_to_Joy()
{
  for(int x=0;x<length;x++)
  {
    tone(tonepin,tune[x]);
    delay(300*durt[x]);
  }
}

void auto_sensor() {
  gas = analogRead(A0);
  if (gas > 1000) {
    flag = 1;
    while (flag == 1) {
      Serial.println("danger");
      tone(3,440);
      delay(125);
      delay(100);
      noTone(3);
      delay(100);
      tone(3,440);
      delay(125);
      delay(100);
      noTone(3);
      delay(300);
      gas = analogRead(A0);
      if (gas < 10) {
        flag = 0;
        break;

      }
    }

  } else {
    noTone(3);

  }
  light = analogRead(A1);
  if (light < 300) {
    infrar = digitalRead(2);
    Serial.println(infrar);
    if (infrar == 1) {
      digitalWrite(13,HIGH);

    } else {
      digitalWrite(13,LOW);

    }

  }
  water = analogRead(A3);
  if (water > 800) {
    flag2 = 1;
    while (flag2 == 1) {
      Serial.println("rain");
      servo_10.write(180);
      delay(300);
      delay(100);
      water = analogRead(A3);
      if (water < 30) {
        flag2 = 0;
        break;

      }
    }

  } else {
    if (val != 'u' && val != 'n') {
      servo_10.write(0);
      delay(10);

    }

  }
  soil = analogRead(A2);
  if (soil > 50) {
    flag3 = 1;
    while (flag3 == 1) {
      Serial.println("hydropenia ");
      tone(3,440);
      delay(125);
      delay(100);
      noTone(3);
      delay(100);
      tone(3,440);
      delay(125);
      delay(100);
      noTone(3);
      delay(300);
      soil = analogRead(A2);
      if (soil < 10) {
        flag3 = 0;
        break;

      }
    }

  } else {
    noTone(3);

  }
  door();
}

void door() {
  button1 = digitalRead(4);
  button2 = digitalRead(8);
  if (button1 == 0) {
    delay(10);
    while (button1 == 0) {
      button1 = digitalRead(4);
      btn1_num = btn1_num + 1;
      delay(100);
    }

  }
  if (btn1_num >= 1 && btn1_num < 5) {
    Serial.print(".");
    Serial.print("");
    passwd = String(passwd) + String(".");
    pass = String(pass) + String("*");
    mylcd.setCursor(1-1, 2-1);
    mylcd.print(pass);

  }
  if (btn1_num >= 5) {
    Serial.print("-");
    passwd = String(passwd) + String("-");
    pass = String(pass) + String("*");
    mylcd.setCursor(1-1, 2-1);
    mylcd.print(pass);

  }
  if (button2 == 0) {
    delay(10);
    if (button2 == 0) {
      if (passwd == ".--.-.") {
        mylcd.clear();
        mylcd.setCursor(1-1, 2-1);
        mylcd.print("open!");
        servo_9.write(100);
        delay(300);
        delay(5000);
        passwd = "";
        pass = "";
        mylcd.clear();
        mylcd.setCursor(1-1, 1-1);
        mylcd.print("password:");

      } else {
        mylcd.clear();
        mylcd.setCursor(1-1, 1-1);
        mylcd.print("error!");
        passwd = "";
        pass = "";
        delay(2000);
        mylcd.setCursor(1-1, 1-1);
        mylcd.print("again");

      }

    }

  }
  infrar = digitalRead(2);
  if (infrar == 0 && (val != 'l' && val != 't')) {
    servo_9.write(0);
    delay(50);

  }
  if (button2 == 0) {
    delay(10);
    while (button2 == 0) {
      button2 = digitalRead(8);
      btn2_num = btn2_num + 1;
      delay(100);
      if (btn2_num >= 15) {
        tone(3,532);
        delay(125);
        mylcd.clear();
        mylcd.setCursor(1-1, 1-1);
        mylcd.print("password:");
        mylcd.setCursor(1-1, 1-1);
        mylcd.print("wait");

      } else {
        noTone(3);

      }
    }

  }
  btn1_num = 0;
  btn2_num = 0;
}

void music1() {
  birthday();
}

void music2() {
  Ode_to_Joy();
}

void pwm_control() {
  switch (val) {
   case 't':
    servo1 = Serial.readStringUntil('#');
    servo1_angle = String(servo1).toInt();
    servo_9.write(servo1_angle);
    delay(300);
    break;
   case 'u':
    servo2 = Serial.readStringUntil('#');
    servo2_angle = String(servo2).toInt();
    servo_10.write(servo2_angle);
    delay(300);
    break;
   case 'v':
    led2 = Serial.readStringUntil('#');
    value_led2 = String(led2).toInt();
    analogWrite(5,value_led2);
    break;
   case 'w':
    fans_char = Serial.readStringUntil('#');
    fans_val = String(fans_char).toInt();
    digitalWrite(7,LOW);
    analogWrite(6,fans_val);
    break;
  }
}

void setup(){
  Serial.begin(9600);
  mylcd.init();
  mylcd.backlight();
  servo_9.attach(9);
  servo_10.attach(10);
  pinMode(7, OUTPUT);
  pinMode(6, OUTPUT);
  servo_9.write(0);
  delay(300);
  servo_10.write(0);
  delay(300);
  mylcd.setCursor(1-1, 1-1);
  mylcd.print("password:");
  digitalWrite(7,HIGH);
  digitalWrite(6,HIGH);
  pinMode(4, INPUT);
  pinMode(8, INPUT);
  Serial.begin(9600);
  pinMode(2, INPUT);
  pinMode(3, OUTPUT);
  pinMode(A0, INPUT);
  pinMode(A1, INPUT);
  pinMode(13, OUTPUT);
  pinMode(A3, INPUT);
  pinMode(A2, INPUT);
  val = 0;
  button1 = 0;
  button2 = 0;
  btn1_num = 0;
  btn2_num = 0;
  passwd = "";
  pass = "";
  gas = 0;
  flag = 0;
  light = 0;
  infrar = 0;
  water = 0;
  flag2 = 0;
  soil = 0;
  flag3 = 0;
  servo1 = "";
  servo1_angle = 0;
  servo2 = "";
  servo2_angle = 0;
  led2 = "";
  value_led2 = 0;
  fans_char = "";
  fans_val = 0;
  pinMode(12, OUTPUT);
  pinMode(5, OUTPUT);
  pinMode(3, OUTPUT);
  length=sizeof(tune)/sizeof(tune[0]);

}

void loop(){
  auto_sensor();
  if (Serial.available() > 0) {
    val = Serial.read();
    Serial.println(val);
    pwm_control();

  }
  switch (val) {
   case 'a':
    digitalWrite(13,HIGH);
    break;
   case 'b':
    digitalWrite(13,LOW);
    break;
   case 'c':
    digitalWrite(12,HIGH);
    break;
   case 'd':
    digitalWrite(12,LOW);
    break;
   case 'e':
    music1();
    break;
   case 'f':
    music2();
    break;
   case 'g':
    noTone(3);
    break;
   case 'h':
    Serial.println(light);
    delay(100);
    break;
   case 'i':
    Serial.println(gas);
    delay(100);
    break;
   case 'j':
    Serial.println(soil);
    delay(100);
    break;
   case 'k':
    Serial.println(water);
    delay(100);
    break;
   case 'l':
    servo_9.write(180);
    delay(500);
    break;
   case 'm':
    servo_9.write(0);
    delay(500);
    break;
   case 'n':
    servo_10.write(180);
    delay(500);
    break;
   case 'o':
    servo_10.write(0);
    delay(500);
    break;
   case 'p':
    digitalWrite(5,HIGH);
    break;
   case 'q':
    digitalWrite(5,LOW);
    break;
   case 'r':
    digitalWrite(7,LOW);
    digitalWrite(6,HIGH);
    break;
   case 's':
    digitalWrite(7,LOW);
    digitalWrite(6,LOW);
    break;
  }}

'use strict';

goog.provide('Blockly.Arduino.Keyestudio001');

goog.require('Blockly.Arduino');

Blockly.Arduino.cb_led1 = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n'
  return code;
};
Blockly.Arduino.cb_led01 = Blockly.Arduino.cb_led1

Blockly.Arduino.cb_3wled = Blockly.Arduino.cb_led1

Blockly.Arduino.cb_led4 = Blockly.Arduino.cb_led1

Blockly.Arduino.cb_led5 = Blockly.Arduino.cb_led1

Blockly.Arduino.cb_LEDW = Blockly.Arduino.cb_led1

Blockly.Arduino.cb_LEDR = Blockly.Arduino.cb_led1

Blockly.Arduino.cb_LEDG = Blockly.Arduino.cb_led1

Blockly.Arduino.cb_LEDB = Blockly.Arduino.cb_led1

Blockly.Arduino.cb_LEDY = Blockly.Arduino.cb_led1


Blockly.Arduino.cb_y_buzzer = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n'
  return code;
};

////////////////////蜂鸣器//////////////////////
Blockly.Arduino.cb_tone01 = function() {
  var code = this.getFieldValue('STAT');
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.cb_w_buzzer=function(){
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
   var fre = Blockly.Arduino.valueToCode(this, 'FREQUENCY',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
   var dur = Blockly.Arduino.valueToCode(this, 'DURATION',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
   Blockly.Arduino.setups_['setup_output'] = 'pinMode('+dropdown_pin+', OUTPUT);';

   var dropdown_type = this.getFieldValue('beat1');

   var code = 'tone('+dropdown_pin+','+fre+');\ndelay('+dropdown_type+');\n'; 
   /*if(window.isNaN(dropdown_pin)){
      code = code+'pinMode('+dropdown_pin+', OUTPUT);\n';
   }else{
      Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
   }*/
   //code += "tone("+dropdown_pin+","+fre+");\n";
   return code;
};

//////////////////////////music///////////////////////////
Blockly.Arduino.cb_w_music = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_output_music'] = 'pinMode('+dropdown_pin+', OUTPUT);';
  Blockly.Arduino.definitions_['include_birthday'] = 'void birthday()\n{\n  tone('+dropdown_pin+',294);\n  delay(250);\n  tone('+dropdown_pin+',440);\n  delay(250);\n  tone('+dropdown_pin+',392);\n  delay(250);\n  tone('+dropdown_pin+',532);\n  delay(250);\n  tone('+dropdown_pin+',494);\n  delay(500);\n  tone('+dropdown_pin+',392);\n  delay(250);\n  tone('+dropdown_pin+',440);\n  delay(250);\n  tone('+dropdown_pin+',392);\n  delay(250);\n  tone('+dropdown_pin+',587);\n  delay(250);\n  tone('+dropdown_pin+',532);\n  delay(500);\n  tone('+dropdown_pin+',392);\n  delay(250);\n  tone('+dropdown_pin+',784);\n  delay(250);\n  tone('+dropdown_pin+',659);\n  delay(250);\n  tone('+dropdown_pin+',532);\n  delay(250);\n  tone('+dropdown_pin+',494);\n  delay(250);\n  tone('+dropdown_pin+',440);\n  delay(250);\n  tone('+dropdown_pin+',698);\n  delay(375);\n  tone('+dropdown_pin+',659);\n  delay(250);\n  tone('+dropdown_pin+',532);\n  delay(250);\n  tone('+dropdown_pin+',587);\n  delay(250);\n  tone('+dropdown_pin+',532);\n  delay(500);\n}\n';
  Blockly.Arduino.definitions_['include_tone'] = '//tone\n#define D0 -1\n#define D1 262\n#define D2 293\n#define D3 329\n#define D4 349\n#define D5 392\n#define D6 440\n#define D7 494\n#define M1 523\n#define M2 586\n#define M3 658\n#define M4 697\n#define M5 783\n#define M6 879\n#define M7 987\n#define H1 1045\n#define H2 1171\n#define H3 1316\n#define H4 1393\n#define H5 1563\n#define H6 1755\n#define H7 1971\n\n#define WHOLE 1\n#define HALF 0.5\n#define QUARTER 0.25\n#define EIGHTH 0.25\n#define SIXTEENTH 0.625\n ';
  
  Blockly.Arduino.definitions_['include_tune'] = '\nint tune[]= \n{\n  M3,M3,M4,M5,\n  M5,M4,M3,M2,\n  M1,M1,M2,M3,\n  M3,M2,M2,\n  M3,M3,M4,M5,\n  M5,M4,M3,M2,\n  M1,M1,M2,M3,\n  M2,M1,M1,\n  M2,M2,M3,M1,\n  M2,M3,M4,M3,M1,\n  M2,M3,M4,M3,M2,\n  M1,M2,D5,D0,\n  M3,M3,M4,M5,\n  M5,M4,M3,M4,M2,\n  M1,M1,M2,M3,\n  M2,M1,M1\n};';
  Blockly.Arduino.definitions_['include_durt'] = '\nfloat durt[]= \n {\n  1,1,1,1,\n  1,1,1,1,\n  1,1,1,1,\n  1+0.5,0.5,1+1,\n  1,1,1,1,\n  1,1,1,1,\n  1,1,1,1,\n  1+0.5,0.5,1+1,\n  1,1,1,1,\n  1,0.5,0.5,1,1,\n  1,0.5,0.5,1,1,\n  1,1,1,1,\n  1,1,1,1,\n  1,1,1,0.5,0.5,\n  1,1,1,1,\n  1+0.5,0.5,1+1,\n };';
  Blockly.Arduino.definitions_['include_io1'] = '\n int length;\n int tonepin='+dropdown_pin+'; \n';
  Blockly.Arduino.definitions_['include_Ode_to_Joy'] = 'void Ode_to_Joy()\n{\n  for(int x=0;x<length;x++)\n  {\n    tone(tonepin,tune[x]);\n    delay(300*durt[x]);   \n  }\n}\n';

  Blockly.Arduino.setups_['setup_output_Ode'] = 'length=sizeof(tune)/sizeof(tune[0]);\n';
  var dropdown_type = this.getFieldValue('play');
  
  var code = '';
  if (dropdown_type == "Birthday") code += 'birthday();\n';
  if (dropdown_type == "Ode to Joy") code += 'Ode_to_Joy();\n';
  //if (dropdown_type == "City of Sky") code += 'digitalRead(8)';
  return code;
  //return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.cb_w_notone=function(){
   var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
   Blockly.Arduino.setups_['setup_output'] = 'pinMode('+dropdown_pin+', OUTPUT);';
   var code='';
   code += "noTone("+dropdown_pin+");\n";
   return code;
};


Blockly.Arduino.cb_relay = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n'
  return code;
};

Blockly.Arduino.cb_motor = function() {
  var dropdown_pin1 = Blockly.Arduino.valueToCode(this, 'PIN1',Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat1 = this.getFieldValue('STAT1');
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin1] = 'pinMode('+dropdown_pin1+', OUTPUT);';
  
  var dropdown_pin2 = Blockly.Arduino.valueToCode(this, 'PIN2',Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat2 = this.getFieldValue('STAT2');
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin2] = 'pinMode('+dropdown_pin2+', OUTPUT);';

  var code = 'digitalWrite('+dropdown_pin1+','+dropdown_stat1+');\ndigitalWrite('+dropdown_pin2+','+dropdown_stat2+');\n'
  return code;
};

Blockly.Arduino.cb_motor001 = function() {
  var dropdown_pin1 = Blockly.Arduino.valueToCode(this, 'PIN1',Blockly.Arduino.ORDER_ATOMIC);
  var data_a = this.getFieldValue('STAT1');
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin1] = 'pinMode('+dropdown_pin1+', OUTPUT);';
  
  var dropdown_pin2 = Blockly.Arduino.valueToCode(this, 'PIN2',Blockly.Arduino.ORDER_ATOMIC);
  var value_pwmb = Blockly.Arduino.valueToCode(this, 'pwmb', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin2] = 'pinMode('+dropdown_pin2+', OUTPUT);';

  var code = 'digitalWrite('+dropdown_pin1+','+data_a+');\nanalogWrite('+dropdown_pin2+','+value_pwmb+');\n'
  return code;
};

Blockly.Arduino.cb_motor002 = function() {
  var dropdown_pin1 = Blockly.Arduino.valueToCode(this, 'PIN1',Blockly.Arduino.ORDER_ATOMIC);
  var value_pwma = Blockly.Arduino.valueToCode(this, 'pwma', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin1] = 'pinMode('+dropdown_pin1+', OUTPUT);';
  
  var dropdown_pin2 = Blockly.Arduino.valueToCode(this, 'PIN2',Blockly.Arduino.ORDER_ATOMIC);
  var value_pwmb = Blockly.Arduino.valueToCode(this, 'pwmb', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin2] = 'pinMode('+dropdown_pin2+', OUTPUT);';

  var code = 'analogWrite('+dropdown_pin1+','+value_pwma+');\nanalogWrite('+dropdown_pin2+','+value_pwmb+');\n'
  return code;
};


/////////////////////////TB6612/////////////////////////////
  Blockly.Arduino.cb_TB6612 = function() {
  var dropdown_pin1 = Blockly.Arduino.valueToCode(this, 'Left1',Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat1 = this.getFieldValue('STAT1');
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin1] = 'pinMode('+dropdown_pin1+', OUTPUT);';

  var dropdown_pin2 = Blockly.Arduino.valueToCode(this, 'Left2',Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat2 = this.getFieldValue('STAT2');
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin2] = 'pinMode('+dropdown_pin2+', OUTPUT);';

  var dropdown_pin3 = Blockly.Arduino.valueToCode(this, 'PWM_L',Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin3] = 'pinMode('+dropdown_pin3+', OUTPUT);';
  var value_L = Blockly.Arduino.valueToCode(this, 'L', Blockly.Arduino.ORDER_ATOMIC);


  var dropdown_pin4 = Blockly.Arduino.valueToCode(this, 'Right1',Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat3 = this.getFieldValue('STAT3');
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin4] = 'pinMode('+dropdown_pin4+', OUTPUT);';

  var dropdown_pin5 = Blockly.Arduino.valueToCode(this, 'Right2',Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat4 = this.getFieldValue('STAT4');
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin5] = 'pinMode('+dropdown_pin5+', OUTPUT);';

  var dropdown_pin6 = Blockly.Arduino.valueToCode(this, 'PWM_R',Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin6] = 'pinMode('+dropdown_pin6+', OUTPUT);';
  var value_R = Blockly.Arduino.valueToCode(this, 'R', Blockly.Arduino.ORDER_ATOMIC);

  //var code = 'digitalWrite('+dropdown_pin1+','+dropdown_stat1+')\nanalogWrite('+PWM_L+','+value_L+');\ndigitalWrite('+dropdown_pin3+','+dropdown_stat3+'\ndigitalWrite('+dropdown_pin4+','+dropdown_stat4+'\nanalogWrite('+PWM_R+','+value_R+');\n';
   var code = 'digitalWrite('+dropdown_pin1+','+dropdown_stat1+');\ndigitalWrite('+dropdown_pin2+','+dropdown_stat2+');\nanalogWrite('+dropdown_pin3+','+value_L+');\ndigitalWrite('+dropdown_pin4+','+dropdown_stat3+');\ndigitalWrite('+dropdown_pin5+','+dropdown_stat4+');\nanalogWrite('+dropdown_pin6+','+value_R+');\n'; 
  return code;
};




/////////////////////////L298N/////////////////////////////
  Blockly.Arduino.cb_L298N = function() {
  var dropdown_pin1 = Blockly.Arduino.valueToCode(this, 'Left1',Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat1 = this.getFieldValue('STAT1');
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin1] = 'pinMode('+dropdown_pin1+', OUTPUT);';

  var dropdown_pin2 = Blockly.Arduino.valueToCode(this, 'Left2',Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat2 = this.getFieldValue('STAT2');
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin2] = 'pinMode('+dropdown_pin2+', OUTPUT);';

  var dropdown_pin3 = Blockly.Arduino.valueToCode(this, 'PWM_L',Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin3] = 'pinMode('+dropdown_pin3+', OUTPUT);';
  var value_L = Blockly.Arduino.valueToCode(this, 'L', Blockly.Arduino.ORDER_ATOMIC);


  var dropdown_pin4 = Blockly.Arduino.valueToCode(this, 'Right1',Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat3 = this.getFieldValue('STAT3');
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin4] = 'pinMode('+dropdown_pin4+', OUTPUT);';

  var dropdown_pin5 = Blockly.Arduino.valueToCode(this, 'Right2',Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat4 = this.getFieldValue('STAT4');
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin5] = 'pinMode('+dropdown_pin5+', OUTPUT);';

  var dropdown_pin6 = Blockly.Arduino.valueToCode(this, 'PWM_R',Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin6] = 'pinMode('+dropdown_pin6+', OUTPUT);';
  var value_R = Blockly.Arduino.valueToCode(this, 'R', Blockly.Arduino.ORDER_ATOMIC);

  //var code = 'digitalWrite('+dropdown_pin1+','+dropdown_stat1+')\nanalogWrite('+PWM_L+','+value_L+');\ndigitalWrite('+dropdown_pin3+','+dropdown_stat3+'\ndigitalWrite('+dropdown_pin4+','+dropdown_stat4+'\nanalogWrite('+PWM_R+','+value_R+');\n';
   var code = 'digitalWrite('+dropdown_pin1+','+dropdown_stat1+');\ndigitalWrite('+dropdown_pin2+','+dropdown_stat2+');\nanalogWrite('+dropdown_pin3+','+value_L+');\ndigitalWrite('+dropdown_pin4+','+dropdown_stat3+');\ndigitalWrite('+dropdown_pin5+','+dropdown_stat4+');\nanalogWrite('+dropdown_pin6+','+value_R+');\n'; 
  return code;
};

  //舵机
  Blockly.Arduino.cb_servo = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
  var value_degree = Blockly.Arduino.valueToCode(this, 'angle', Blockly.Arduino.ORDER_ATOMIC);
  //value_degree = value_degree.replace('(','').replace(')','')
  var delay_time = Blockly.Arduino.valueToCode(this, 'time', Blockly.Arduino.ORDER_ATOMIC) || '0'
  //delay_time = delay_time.replace('(','').replace(')','');
  
  Blockly.Arduino.definitions_['include_Servo'] = '#include <Servo.h>';
  Blockly.Arduino.definitions_['var_servo'+dropdown_pin] = 'Servo servo_'+dropdown_pin+';';
  Blockly.Arduino.setups_['setup_servo_'+dropdown_pin] = 'servo_'+dropdown_pin+'.attach('+dropdown_pin+');';
  
  var code = 'servo_'+dropdown_pin+'.write('+value_degree+');\n'+'delay(' + delay_time + ');\n';
  return code;
};

Blockly.Arduino.cb_servo_r = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.definitions_['include_Servo'] = '#include <Servo.h>';
  Blockly.Arduino.definitions_['var_servo'+dropdown_pin] = 'Servo servo_'+dropdown_pin+';';
  Blockly.Arduino.setups_['setup_servo_'+dropdown_pin] = 'servo_'+dropdown_pin+'.attach('+dropdown_pin+');';
  
  var code = 'servo_'+dropdown_pin+'.read()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.cb_traffic_light = function() {
  var dropdown_pin1 = Blockly.Arduino.valueToCode(this, 'R',Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat1 = this.getFieldValue('STAT1');
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin1] = 'pinMode('+dropdown_pin1+', OUTPUT);';
  
  var dropdown_pin2 = Blockly.Arduino.valueToCode(this, 'G',Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat2 = this.getFieldValue('STAT2');
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin2] = 'pinMode('+dropdown_pin2+', OUTPUT);';

  var dropdown_pin3 = Blockly.Arduino.valueToCode(this, 'B',Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat3 = this.getFieldValue('STAT3');
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin3] = 'pinMode('+dropdown_pin3+', OUTPUT);';

  var code = 'digitalWrite('+dropdown_pin1+','+dropdown_stat1+');\ndigitalWrite('+dropdown_pin2+','+dropdown_stat2+');\ndigitalWrite('+dropdown_pin3+','+dropdown_stat3+');\n'
  return code;
};

//////////////////////////RGB//////////////////////////////
  Blockly.Arduino.cb_rgb01 = function() {
  var dropdown_pin1 = Blockly.Arduino.valueToCode(this, 'R',Blockly.Arduino.ORDER_ATOMIC);
  var value_r = Blockly.Arduino.valueToCode(this, 'r', Blockly.Arduino.ORDER_ATOMIC);

  var dropdown_pin2 = Blockly.Arduino.valueToCode(this, 'G',Blockly.Arduino.ORDER_ATOMIC);
  var value_g = Blockly.Arduino.valueToCode(this, 'g', Blockly.Arduino.ORDER_ATOMIC);

  var dropdown_pin3 = Blockly.Arduino.valueToCode(this, 'B',Blockly.Arduino.ORDER_ATOMIC);
  var value_b = Blockly.Arduino.valueToCode(this, 'b', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.setups_['setup_output_'+dropdown_pin1] = 'pinMode('+dropdown_pin1+', OUTPUT);';
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin2] = 'pinMode('+dropdown_pin2+', OUTPUT);';
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin3] = 'pinMode('+dropdown_pin3+', OUTPUT);';
  
  var code = 'analogWrite('+dropdown_pin1+','+value_r+');\nanalogWrite('+dropdown_pin2+','+value_g+');\nanalogWrite('+dropdown_pin3+','+value_b+');\n';
  return code;
};



//////////////////////////数字传感器////////////////////////////////

Blockly.Arduino.cb_ir_g = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
/////////////////火焰传感器////////////////
Blockly.Arduino.cb_flame = Blockly.Arduino.cb_ir_g


/////////////////霍尔传感器////////////////
Blockly.Arduino.cb_hall = Blockly.Arduino.cb_ir_g


/////////////////碰撞传感器////////////////
Blockly.Arduino.cb_crash = Blockly.Arduino.cb_ir_g
  

/////////////////按键传感器////////////////
Blockly.Arduino.cb_button = Blockly.Arduino.cb_ir_g


/////////////////电容触摸传感器////////////////
Blockly.Arduino.cb_tuoch = Blockly.Arduino.cb_ir_g

/////////////////敲击传感器////////////////
Blockly.Arduino.cb_knock = Blockly.Arduino.cb_ir_g


/////////////////倾斜传感器////////////////
Blockly.Arduino.cb_tilt = Blockly.Arduino.cb_ir_g


/////////////////振动传感器////////////////
Blockly.Arduino.cb_shake = Blockly.Arduino.cb_ir_g


/////////////////干簧管传感器////////////////
Blockly.Arduino.cb_reed_s = Blockly.Arduino.cb_ir_g


/////////////////循迹传感器////////////////
Blockly.Arduino.cb_track = Blockly.Arduino.cb_ir_g


/////////////////避障传感器////////////////
Blockly.Arduino.cb_avoid = Blockly.Arduino.cb_ir_g

/////////////////光折断传感器////////////////
Blockly.Arduino.cb_light_b = Blockly.Arduino.cb_ir_g
//////////////////测电压//////////////////////
Blockly.Arduino.cb_light_b = Blockly.Blocks.cb_voltage

/////////////////MQ传感器////////////////
Blockly.Arduino.cb_MQ_d = Blockly.Arduino.cb_ir_g

////////////////////////////////////////////////////////
//////////////////////模拟传感器/////////////////////////
////////////////////////////////////////////////////////

Blockly.Arduino.cb_sound = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'analogRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/////////////////////遥感///////////////////////////
Blockly.Arduino.cb_joystick = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  //var code = 'analogRead('+dropdown_pin+')';

  var dropdown_type = this.getFieldValue('joy');
  var code = '';
  if (dropdown_type == "Lx") code += 'analogRead('+dropdown_pin+')';
  if (dropdown_type == "Ly") code += 'analogRead('+dropdown_pin+')';
  if (dropdown_type == "Lz") code += 'digitalRead('+dropdown_pin+')';
  if (dropdown_type == "Rx") code += 'analogRead('+dropdown_pin+')';
  if (dropdown_type == "Ry") code += 'analogRead('+dropdown_pin+')';
  if (dropdown_type == "Rz") code += 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

  //LM35 Temperature
Blockly.Arduino.cb_lm35 = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'analogRead(' + dropdown_pin + ')*0.488';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.cb_dianliu = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['amplitude_current'] = 'float amplitude_current;               //amplitude current';
  Blockly.Arduino.definitions_['effective_value'] = 'float effective_value;       //effective current ';
  Blockly.Arduino.definitions_['getMaxValue'] = 'int getMaxValue()\n{\n  int sensorValue;             //value read from the sensor\n  int sensorMax = 0;\n  uint32_t start_time = millis();\n  while((millis()-start_time) < 1000)//sample for 1000ms\n  {\n    sensorValue = analogRead('+dropdown_pin+');\n    if (sensorValue > sensorMax) \n    {\n      /*record the maximum sensor value*/\n      sensorMax = sensorValue;\n    }\n  }\n  return sensorMax;\n}\n';
  Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'int sensor_max;\n  sensor_max = getMaxValue();\n  amplitude_current=(float)sensor_max/1024*5/800*2000000;\n  effective_value=amplitude_current/1.414';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.cb_analog_t = Blockly.Arduino.cb_sound;

Blockly.Arduino.cb_light = Blockly.Arduino.cb_sound;

Blockly.Arduino.cb_water = Blockly.Arduino.cb_sound;

Blockly.Arduino.cb_soil = Blockly.Arduino.cb_sound;

Blockly.Arduino.cb_potentiometer = Blockly.Arduino.cb_sound;


Blockly.Arduino.cb_slide_potentiometer = Blockly.Arduino.cb_sound;

Blockly.Arduino.cb_temt6000 = Blockly.Arduino.cb_sound;

Blockly.Arduino.cb_steam = Blockly.Arduino.cb_sound;

Blockly.Arduino.cb_film_p = Blockly.Arduino.cb_sound;

//Blockly.Arduino.cb_joystick = Blockly.Arduino.cb_sound;

Blockly.Arduino.cb_smoke = Blockly.Arduino.cb_sound;

Blockly.Arduino.cb_alcohol = Blockly.Arduino.cb_sound;

Blockly.Arduino.cb_mq135 = Blockly.Arduino.cb_sound;

Blockly.Arduino.cb_18b20 = Blockly.Arduino.cb_sound;

Blockly.Arduino.cb_dht11 = Blockly.Arduino.cb_sound;

Blockly.Arduino.cb_bmp180 = Blockly.Arduino.cb_sound;

Blockly.Arduino.cb_flame_a = Blockly.Arduino.cb_sound;


///////////////////////////////////////////////////
///////////////////传感器/////////////////////////
////////////////////////////////////////////////////

///////////////////////超声波//////////////////////
Blockly.Arduino.cb_sr01 = function () {
    var dropdown_pin1 = Blockly.Arduino.valueToCode(this, 'PIN1', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_pin2 = Blockly.Arduino.valueToCode(this, 'PIN2', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_['setup_output_' + dropdown_pin1] = 'pinMode(' + dropdown_pin1 + ', OUTPUT);';
    Blockly.Arduino.setups_['setup_output_' + dropdown_pin2] = 'pinMode(' + dropdown_pin2 + ', INPUT);';
    var funcName = 'checkdistance_' + dropdown_pin1 + '_' + dropdown_pin2;
    var code = 'float' + ' ' + funcName + '() {\n'
  + '  digitalWrite(' + dropdown_pin1 + ', LOW);\n' + '  delayMicroseconds(2);\n'
  + '  digitalWrite(' + dropdown_pin1 + ', HIGH);\n' + '  delayMicroseconds(10);\n'
  + '  digitalWrite(' + dropdown_pin1 + ', LOW);\n'
  + '  float distance = pulseIn(' + dropdown_pin2 + ', HIGH) / 58.00;\n'
  + '  delay(10);\n' + '  return distance;\n'
  + '}\n';
    Blockly.Arduino.definitions_[funcName] = code;
    return [funcName + '()', Blockly.Arduino.ORDER_ATOMIC];
};

///////////////////18B20////////////////////////////
Blockly.Arduino.cb_18b20 = function () {
    var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
    var unit = this.getFieldValue('UNIT');
    Blockly.Arduino.definitions_['include_OneWire'] = '#include <OneWire.h>';
    Blockly.Arduino.definitions_['include_DallasTemperature'] = '#include <DallasTemperature.h>';
    Blockly.Arduino.definitions_['var_OneWire_oneWire_' + dropdown_pin] = 'OneWire oneWire_' + dropdown_pin + '(' + dropdown_pin + ');';
    Blockly.Arduino.definitions_['var_DallasTemperature_sensors_' + dropdown_pin] = 'DallasTemperature sensors_' + dropdown_pin + '(&oneWire_' + dropdown_pin + ');';
    Blockly.Arduino.definitions_['var_DeviceAddress_insideThermometer'] = 'DeviceAddress insideThermometer;';
    Blockly.Arduino.setups_['setup_sensors_' + dropdown_pin + '_getAddress'] = 'sensors_' + dropdown_pin + '.getAddress(insideThermometer, 0);';
    Blockly.Arduino.setups_['setup_sensors_' + dropdown_pin + '_setResolution'] = 'sensors_' + dropdown_pin + '.setResolution(insideThermometer, 9);';
    var funcName = 'ds18b20_' + dropdown_pin + '_getTemp';
    var code = 'float' + ' ' + funcName + '(int w) {\n'
  + '  sensors_' + dropdown_pin + '.requestTemperatures();\n'
  + '  if(w==0) {\nreturn sensors_' + dropdown_pin + '.getTempC(insideThermometer);\n}\n'
  + '  else {\nreturn sensors_' + dropdown_pin + '.getTempF(insideThermometer);\n}\n'
  + '}\n';
    Blockly.Arduino.definitions_[funcName] = code;
    return ['ds18b20_' + dropdown_pin + '_getTemp(' + unit + ')', Blockly.Arduino.ORDER_ATOMIC];
}

//////////////////////////DHT11///////////////////////////
Blockly.Arduino.cb_dht11 = function () {
    var sensor_type = this.getFieldValue('TYPE');
    var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
    var what = this.getFieldValue('WHAT');
    Blockly.Arduino.definitions_['include_dht'] = '#include <dht.h>';
    Blockly.Arduino.definitions_['var_dht_' + dropdown_pin] = 'dht myDHT_' + dropdown_pin + ';';
    var funcName = 'dht_' + dropdown_pin + '_get' + what;
    var code = 'int' + ' ' + funcName + '() {\n'
  + '  int chk = myDHT_' + dropdown_pin + '.read' + sensor_type + '(' + dropdown_pin + ');\n'
  + '  int value = myDHT_' + dropdown_pin + '.' + what + ';\n'
  + '  return value;\n'
  + '}\n';
    Blockly.Arduino.definitions_[funcName] = code;
    return [funcName + '()', Blockly.Arduino.ORDER_ATOMIC];
}

//////////////////////////SHT31///////////////////////////////////
  Blockly.Arduino.cb_SHT31 = function() {
  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['Addr'] = '#define Addr 0x44';
  Blockly.Arduino.definitions_['data'] = 'unsigned int data[6];';

  Blockly.Arduino.definitions_['init1'] = 'void init1()\n{\nWire.beginTransmission(Addr);\nWire.write(0x2C);\nWire.write(0x06);\nWire.endTransmission();\ndelay(500);\nWire.requestFrom(Addr, 6);\nif (Wire.available() == 6)\n{\ndata[0] = Wire.read();\ndata[1] = Wire.read();\ndata[2] = Wire.read();\ndata[3] = Wire.read();\ndata[4] = Wire.read();\ndata[5] = Wire.read();\n}\n}\n';
  Blockly.Arduino.definitions_['C'] ='float C()\n{\ninit1();\nfloat cTemp = ((((data[0] * 256.0) + data[1]) * 175) / 65535.0) - 45;\nreturn cTemp;\n}\n';
  Blockly.Arduino.definitions_['F'] ='float K()\n{\ninit1();\nfloat cTemp = ((((data[0] * 256.0) + data[1]) * 175) / 65535.0) - 45;\nfloat fTemp = (cTemp * 1.8) + 32;\nreturn fTemp;\n}\n';
  Blockly.Arduino.definitions_['H'] ='float H()\n{\ninit1();\nfloat humidity = ((((data[3] * 256.0) + data[4]) * 100) / 65535.0);\nreturn humidity;\n}\n';

  Blockly.Arduino.setups_['setup_SHT31'] = 'Wire.begin();';

  var dropdown_type = this.getFieldValue('sht31');

  var code = '';
  if (dropdown_type == "C") code += 'C()';
  if (dropdown_type == "F") code += 'K()';
  if (dropdown_type == "H") code += 'H()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//传感器-重力感应块-获取数据
  Blockly.Arduino.cb_adxl345 = function() {
  Blockly.Arduino.definitions_['include_ADXL345'] = '#include <ADXL345.h>';
  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['include_I2Cdev'] = '#include <I2Cdev.h>';
  Blockly.Arduino.definitions_['var_ADXL345'] = 'ADXL345 accel;';
  Blockly.Arduino.setups_['setup_ADXL345-A'] = 'Wire.begin();';
  Blockly.Arduino.setups_['setup_ADXL345-B'] = 'accel.initialize();';
  var dropdown_type = this.getFieldValue('ADXL345_PIN');
  var code = '';
  if (dropdown_type == "xa") code += 'accel.X_angle()';
  if (dropdown_type == "ya") code += 'accel.Y_angle()';
  if (dropdown_type == "x") code += 'accel.getAccelerationX()';
  if (dropdown_type == "y") code += 'accel.getAccelerationY()';
  if (dropdown_type == "z") code += 'accel.getAccelerationZ()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

///////////////////////MPU6050//////////////////////////
  Blockly.Arduino.cb_mpu6050 = function() {
 // Blockly.Arduino.definitions_['include_MPU6050'] = '#include <MPU6050.h>';
  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
 // Blockly.Arduino.definitions_['include_I2Cdev'] = '#include <I2Cdev.h>';
  Blockly.Arduino.definitions_['var_long'] = 'long accelX, accelY, accelZ,gyroX, gyroY, gyroZ;';
  Blockly.Arduino.definitions_['var_float'] = 'float gForceX, gForceY, gForceZ,rotX, rotY, rotZ;';

  Blockly.Arduino.definitions_['MPU'] = 'void setupMPU()\n{\nWire.beginTransmission(0b1101000);\nWire.write(0x6B);\nWire.write(0b00000000);\nWire.endTransmission();\nWire.beginTransmission(0b1101000);\nWire.write(0x1B);\nWire.write(0x00000000);\nWire.endTransmission();\nWire.beginTransmission(0b1101000);\nWire.write(0x1C);\nWire.write(0b00000000);\nWire.endTransmission();\n}\n';
  Blockly.Arduino.definitions_['AccelRegisters'] = 'void recordAccelRegisters() \n{\nWire.beginTransmission(0b1101000);\nWire.write(0x3B);\nWire.endTransmission();\nWire.requestFrom(0b1101000,6);\nwhile(Wire.available() < 6);\naccelX = Wire.read()<<8|Wire.read();\naccelY = Wire.read()<<8|Wire.read();\naccelZ = Wire.read()<<8|Wire.read();\n}\n';
  Blockly.Arduino.definitions_['GyroRegisters'] = 'void recordGyroRegisters() \n{\nWire.beginTransmission(0b1101000); \nWire.write(0x43); \nWire.endTransmission();\nWire.requestFrom(0b1101000,6); \nwhile(Wire.available() < 6);\ngyroX = Wire.read()<<8|Wire.read(); \ngyroY = Wire.read()<<8|Wire.read(); \ngyroZ = Wire.read()<<8|Wire.read(); \n}\n';
  Blockly.Arduino.definitions_['aX'] = 'float aX()\n{\nrecordAccelRegisters();\ngForceX = accelX / 16384.0;\nreturn gForceX;\n}\n';
  Blockly.Arduino.definitions_['aY'] = 'float aY()\n{\nrecordAccelRegisters();\ngForceY = accelY / 16384.0;\nreturn gForceY;\n}\n';
  Blockly.Arduino.definitions_['aZ'] = 'float aZ()\n{\nrecordAccelRegisters();\ngForceZ = accelZ / 16384.0;\nreturn gForceZ;\n}\n';
  Blockly.Arduino.definitions_['gX'] = 'float gX()\n{\nrecordGyroRegisters();\nrotX = gyroX / 131.0;\nreturn rotX;\n}\n';
  Blockly.Arduino.definitions_['gY'] = 'float gY()\n{\nrecordGyroRegisters();\nrotY = gyroY / 131.0;\nreturn rotY;\n}\n';
  Blockly.Arduino.definitions_['gZ'] = 'float gZ()\n{\nrecordGyroRegisters();\nrotZ = gyroZ / 131.0;\nreturn rotZ;\n}\n';

  Blockly.Arduino.setups_['begin_W'] = 'Wire.begin();';
  Blockly.Arduino.setups_['setupMPU'] = 'setupMPU();';


  var dropdown_type = this.getFieldValue('MPU6050_PIN');
  var code = '';
  if (dropdown_type == "ax") code += 'aX()';
  if (dropdown_type == "ay") code += 'aY()';
  if (dropdown_type == "az") code += 'aZ()';
  if (dropdown_type == "gx") code += 'gX()';
  if (dropdown_type == "gy") code += 'gY()';
  if (dropdown_type == "gz") code += 'gZ()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


///////////////////////BMP180温度大气压/////////////////////////////
Blockly.Arduino.cb_bmp180 = function() {
  Blockly.Arduino.definitions_['define_bmp180'] = '#define BMP180ADD 0xEE>>1';
  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['char_OSS'] = 'unsigned char OSS;';
  Blockly.Arduino.definitions_['int'] = 'int ac1,ac2,ac3,b1,b2,mb,mc,md;';
  Blockly.Arduino.definitions_['unsight_int'] = 'unsigned int ac4,ac5,ac6;';
  Blockly.Arduino.definitions_['float'] = 'float temperature;';
  Blockly.Arduino.definitions_['double'] = 'double pressure,pressure2,altitude;';
  Blockly.Arduino.definitions_['long'] = 'long b5;';

  //Blockly.Arduino.definitions_['calculate'] = 'void calculate()\n{\n  temperature = bmp180GetTemperature(bmp180ReadUT());\ntemperature = temperature*0.1;\npressure = bmp180GetPressure(bmp180ReadUP());\npressure2 = pressure/101325;\npressure2 = pow(pressure2,0.19029496);\naltitude = 44330*(1-pressure2);\n}';

 //Blockly.Arduino.definitions_['show'] = 'void show()\n{\n  Serial.print("Temperature: ");\nSerial.print(temperature, 1);\nSerial.println(" C");\nSerial.print("Pressure: ");\nSerial.print(pressure, 0);\nSerial.println(" Pa");\nSerial.print("altitude:");\nSerial.print(altitude);\nSerial.println("m");\n}';

  Blockly.Arduino.definitions_['BMP180start'] = 'void BMP180start()\n{\nac1 = bmp180ReadDate(0xAA);\nac2 = bmp180ReadDate(0xAC);\nac3 = bmp180ReadDate(0xAE);\nac4 = bmp180ReadDate(0xB0);\nac5 = bmp180ReadDate(0xB2);\nac6 = bmp180ReadDate(0xB4);\nb1  = bmp180ReadDate(0xB6);\nb2  = bmp180ReadDate(0xB8);\nmb  = bmp180ReadDate(0xBA);\nmc  = bmp180ReadDate(0xBC);\nmd  = bmp180ReadDate(0xBE);\n}';

  Blockly.Arduino.definitions_['bmp180GetTemperature'] = 'short bmp180GetTemperature(unsigned int ut)\n{\nlong x1, x2;\nx1 = (((long)ut - (long)ac6)*(long)ac5) >> 15;\nx2 = ((long)mc << 11)/(x1 + md);\nb5 = x1 + x2;\nreturn ((b5 + 8)>>4);\n}';
  
  Blockly.Arduino.definitions_['bmp180GetPressure'] = 'long bmp180GetPressure(unsigned long up)\n{\nlong x1, x2, x3, b3, b6, p;\nunsigned long b4, b7;\nb6 = b5 - 4000;\nx1 = (b2 * (b6 * b6)>>12)>>11;\nx2 = (ac2 * b6)>>11;\nx3 = x1 + x2;\nb3 = (((((long)ac1)*4 + x3)<<OSS) + 2)>>2;\nx1 = (ac3 * b6)>>13;\nx2 = (b1 * ((b6 * b6)>>12))>>16;\nx3 = ((x1 + x2) + 2)>>2;\nb4 = (ac4 * (unsigned long)(x3 + 32768))>>15;\nb7 = ((unsigned long)(up - b3) * (50000>>OSS));\nif (b7 < 0x80000000)\n  p = (b7<<1)/b4;\nelse\n  p = (b7/b4)<<1;\nx1 = (p>>8) * (p>>8);\nx1 = (x1 * 3038)>>16;\nx2 = (-7357 * p)>>16;\np += (x1 + x2 + 3791)>>4;\nreturn p;\n}';

  Blockly.Arduino.definitions_['bmp180Read'] = 'int bmp180Read(unsigned char address)\n{\nunsigned char data;\nWire.beginTransmission(BMP180ADD);\nWire.write(address);\nWire.endTransmission();\nWire.requestFrom(BMP180ADD, 1);\nwhile(!Wire.available());\nreturn Wire.read();\n}';

  Blockly.Arduino.definitions_['bmp180ReadDate'] = 'int bmp180ReadDate(unsigned char address)\n{\nunsigned char msb, lsb;\nWire.beginTransmission(BMP180ADD);\nWire.write(address);\nWire.endTransmission();\nWire.requestFrom(BMP180ADD, 2);\nwhile(Wire.available()<2);\nmsb = Wire.read();\nlsb = Wire.read();\nreturn (int) msb<<8 | lsb;\n}';

  Blockly.Arduino.definitions_['bmp180ReadUT'] = 'unsigned int bmp180ReadUT()\n{\nunsigned int ut;\nWire.beginTransmission(BMP180ADD);\nWire.write(0xF4);\nWire.write(0x2E);\nWire.endTransmission();\ndelay(5);\nut = bmp180ReadDate(0xF6);\nreturn ut;\n}';

  Blockly.Arduino.definitions_['bmp180ReadUP'] = 'unsigned long bmp180ReadUP()\n{\nunsigned char msb, lsb, xlsb;\nunsigned long up = 0;\nWire.beginTransmission(BMP180ADD);\nWire.write(0xF4);\nWire.write(0x34 + (OSS<<6));\nWire.endTransmission();\ndelay(2 + (3<<OSS));\nWire.beginTransmission(BMP180ADD);\nWire.write(0xF6);\nWire.endTransmission();\nWire.requestFrom(BMP180ADD, 3);\nwhile(Wire.available() < 3);\nmsb = Wire.read();\nlsb = Wire.read();\nxlsb = Wire.read();\nup = (((unsigned long) msb << 16) | ((unsigned long) lsb << 8) | (unsigned long) xlsb) >> (8-OSS);\nreturn up;\n}';
 
  Blockly.Arduino.definitions_['temperature1'] = 'float temperature1()\n{\ntemperature = bmp180GetTemperature(bmp180ReadUT());\ntemperature = temperature*0.1;\nreturn temperature;\n}';

  Blockly.Arduino.definitions_['pressure1'] = 'double pressure1()\n{\nbmp180GetTemperature(bmp180ReadUT());\npressure = bmp180GetPressure(bmp180ReadUP());\nreturn pressure;\n}\n'

  Blockly.Arduino.definitions_['altitude1'] = 'double altitude1()\n{\nbmp180GetTemperature(bmp180ReadUT());\npressure = bmp180GetPressure(bmp180ReadUP());\npressure2 = pressure/101325;\npressure2 = pow(pressure2,0.19029496);\naltitude = 44330*(1-pressure2);\nreturn altitude;\n}\n'

  Blockly.Arduino.setups_['wire.begin'] = 'Wire.begin();';
  Blockly.Arduino.setups_['OSS'] = 'OSS = 2;';
  Blockly.Arduino.setups_['BMP180start'] = 'BMP180start();';


  var dropdown_type = this.getFieldValue('BMP180_PIN');
  var code = '';
  if (dropdown_type == "T") code += 'temperature1()';
  if (dropdown_type == "P") code += 'pressure1()';
  if (dropdown_type == "A") code += 'altitude1()';
  //return code;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/////////////////////////////DS3231时钟/////////////////////////////
Blockly.Arduino.cb_ds3231 = function () {
  var RTCName = this.getFieldValue('RTCName');
  var year = Blockly.Arduino.valueToCode(this, "year", Blockly.Arduino.ORDER_ATOMIC);
  var month = Blockly.Arduino.valueToCode(this, "month", Blockly.Arduino.ORDER_ATOMIC);
  var day = Blockly.Arduino.valueToCode(this, "day", Blockly.Arduino.ORDER_ATOMIC);
  var dow = Blockly.Arduino.valueToCode(this, "dow", Blockly.Arduino.ORDER_ATOMIC);
  var hour = Blockly.Arduino.valueToCode(this, "hour", Blockly.Arduino.ORDER_ATOMIC);
  var minute = Blockly.Arduino.valueToCode(this, "minute", Blockly.Arduino.ORDER_ATOMIC);
  var second = Blockly.Arduino.valueToCode(this, "second", Blockly.Arduino.ORDER_ATOMIC);


  Blockly.Arduino.definitions_['include_DS3231_h'] = '#include <DS3231.h>';
  Blockly.Arduino.definitions_['DS3231'] = 'DS3231  '+RTCName+'(A4, A5);';

  Blockly.Arduino.setups_['begin1'] = ''+RTCName+'.begin();';
  Blockly.Arduino.setups_['setDOW'] = ''+RTCName+'.setDOW('+dow+');';
  Blockly.Arduino.setups_['setTime'] = ''+RTCName+'.setTime('+hour+', '+minute+', '+second+');';
  Blockly.Arduino.setups_['setDate'] = ''+RTCName+'.setDate('+day+', '+month+', '+year+');';

  var code = 'Serial.print('+RTCName+'.getDOWStr());\nSerial.print(" ");\nSerial.print('+RTCName+'.getDateStr());\nSerial.print(" -- ");\nSerial.println('+RTCName+'.getTimeStr());\ndelay (1000);';

  return code;
};

/////////////////////////////DS3231获取时间////////////////////////
Blockly.Arduino.cb_ds3231getTime = function () {
  var RTCName = this.getFieldValue('RTCName');
  var timeType = this.getFieldValue('TIME_TYPE');
  Blockly.Arduino.definitions_['include_DS3231_h'] = '#include <DS3231.h>';
  Blockly.Arduino.definitions_['DS3231'] = 'DS3231  '+RTCName+'(A4, A5);';
  Blockly.Arduino.definitions_['Time'] = 'Time  '+timeType+';';

  Blockly.Arduino.definitions_['second1'] = 'int second1()\n{\n'+timeType+' = '+RTCName+'.getTime();\n'+timeType+'.sec;\ndelay(1000);\nreturn '+timeType+'.sec;\n}';
  
  Blockly.Arduino.definitions_['minute1'] = 'int minute1()\n{\n'+timeType+' = '+RTCName+'.getTime();\n'+timeType+'.min;\ndelay(60000);\nreturn '+timeType+'.min;\n}';

  Blockly.Arduino.definitions_['hour1'] = 'int hour1()\n{\n'+timeType+' = '+RTCName+'.getTime();\n'+timeType+'.hour;\nint i=0;\nwhile(i<60)\n{\ni++;\ndelay(60000);\n}\nreturn '+timeType+'.hour;\n}';

  Blockly.Arduino.definitions_['day1'] = 'int day1()\n{\n'+timeType+' = '+RTCName+'.getTime();\n'+timeType+'.date;\ndelay(1000);\nreturn '+timeType+'.date;\n}';

  Blockly.Arduino.setups_['begin1'] = ''+RTCName+'.begin();';


  var dropdown_type = this.getFieldValue('TIME_TYPE');
  var code = '';
  //code += ''+timeType+' = '+RTCName+'.getTime();\n';
  //if (dropdown_type == "getYear") code += ''+timeType+'.year';
  //if (dropdown_type == "getMonth") code += ''+RTCName+'.getMonthStr()';
  if (dropdown_type == "getDay") code += 'day1()';
  if (dropdown_type == "getHour") code += 'hour1()';
  if (dropdown_type == "getMinute") code += 'minute1()';
  if (dropdown_type == "getSecond") code += 'second1()';
  //if (dropdown_type == "getWeek") code += ''+timeType+'.dow';

  //return code;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//传感器-非接触 红外温度
  Blockly.Arduino.cb_hwwd = function() {
  Blockly.Arduino.definitions_['wire3'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['MLX90614'] = '#include <Adafruit_MLX90614.h>';
  Blockly.Arduino.definitions_['mlx'] = 'Adafruit_MLX90614 mlx = Adafruit_MLX90614();';
  
  Blockly.Arduino.setups_['setup_mlx'] = 'mlx.begin();';
  
  var code = 'mlx.readObjectTempC()';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//颜色传感器
  Blockly.Arduino.cb_yanse = function() {
  Blockly.Arduino.definitions_['wire4'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['TCS34725'] = '#include "Adafruit_TCS34725.h"';
  Blockly.Arduino.definitions_['commonAnode'] = '#define commonAnode true';
  Blockly.Arduino.definitions_['gammatable'] = 'byte gammatable[256];';
  Blockly.Arduino.definitions_['tcs'] = 'Adafruit_TCS34725 tcs = Adafruit_TCS34725(TCS34725_INTEGRATIONTIME_50MS, TCS34725_GAIN_4X);';
  Blockly.Arduino.definitions_['red1'] = 'int red()\n{\n uint16_t clear, red, green, blue;\n  tcs.setInterrupt(false);      // turn on LED\n  delay(60);  // takes 50ms to read \n  tcs.getRawData(&red, &green, &blue, &clear);\n  tcs.setInterrupt(true);  // turn off LED\n  uint32_t sum = clear;\n  float r, g, b;\n  r = red; r /= sum;\n  g = green; g /= sum;\n  b = blue; b /= sum;\n  r *= 256; g *= 256; b *= 256;\n  return gammatable[(int)r];\n}\n';
  Blockly.Arduino.definitions_['green1'] = 'int green()\n{\n uint16_t clear, red, green, blue;\n  tcs.setInterrupt(false);      // turn on LED\n  delay(60);  // takes 50ms to read \n  tcs.getRawData(&red, &green, &blue, &clear);\n  tcs.setInterrupt(true);  // turn off LED\n  uint32_t sum = clear;\n  float r, g, b;\n  r = red; r /= sum;\n  g = green; g /= sum;\n  b = blue; b /= sum;\n  r *= 256; g *= 256; b *= 256;\n  return gammatable[(int)g];\n}\n';
  Blockly.Arduino.definitions_['blue1'] = 'int blue()\n{\n uint16_t clear, red, green, blue;\n  tcs.setInterrupt(false);      // turn on LED\n  delay(60);  // takes 50ms to read \n  tcs.getRawData(&red, &green, &blue, &clear);\n  tcs.setInterrupt(true);  // turn off LED\n  uint32_t sum = clear;\n  float r, g, b;\n  r = red; r /= sum;\n  g = green; g /= sum;\n  b = blue; b /= sum;\n  r *= 256; g *= 256; b *= 256;\n  return gammatable[(int)b];\n}\n';

  Blockly.Arduino.setups_['setup_tcs'] = 'Serial.begin(9600);\n  Serial.println("Color View Test!");\n  if (tcs.begin()) {\n    Serial.println("Found sensor");\n  } else {\n    Serial.println("No TCS34725 found ... check your connections");\n    while (1); // halt!\n  }\nfor (int i=0; i<256; i++) {\n    float x = i;\n    x /= 255;\n    x = pow(x, 2.5);\n    x *= 255;    \n    if (commonAnode) {\n      gammatable[i] = 255 - x;\n    } else {\n      gammatable[i] = x;      \n    }\n    //Serial.println(gammatable[i]);\n }\n';
  
  var dropdown_type = this.getFieldValue('RGB_sensor');
  var code = '';
  //code += ''+timeType+' = '+RTCName+'.getTime();\n';
  //if (dropdown_type == "getYear") code += ''+timeType+'.year';
  //if (dropdown_type == "getMonth") code += ''+RTCName+'.getMonthStr()';
  if (dropdown_type == "red") code += 'red()';
  if (dropdown_type == "green") code += 'green()';
  if (dropdown_type == "blue") code += 'blue()';
  //if (dropdown_type == "getSecond") code += 'second1()';
  //if (dropdown_type == "getWeek") code += ''+timeType+'.dow';

  //return code;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/*
#include <Wire.h>
#include "Adafruit_TCS34725.h"
// Example code for the Adafruit TCS34725 breakout library 

// Connect SCL    to analog 5
 //  Connect SDA    to analog 4
 //  Connect VDD    to 3.3V DC
 //  Connect GROUND to common ground 
   
// Initialise with default values (int time = 2.4ms, gain = 1x) 
// Adafruit_TCS34725 tcs = Adafruit_TCS34725();

Adafruit_TCS34725 tcs = Adafruit_TCS34725(TCS34725_INTEGRATIONTIME_700MS, TCS34725_GAIN_1X);

void setup(void) {
  Serial.begin(9600);
  
  if (tcs.begin()) {
    Serial.println("Found sensor");
  } else {
    Serial.println("No TCS34725 found ... check your connections");
    while (1);
  }
  
  // Now we're ready to get readings!
}

void loop(void) {
  uint16_t r, g, b, c, colorTemp, lux;
  
  tcs.getRawData(&r, &g, &b, &c);
  colorTemp = tcs.calculateColorTemperature(r, g, b);
  lux = tcs.calculateLux(r, g, b);
  
  Serial.print("Color Temp: "); Serial.print(colorTemp, DEC); Serial.print(" K - ");
  Serial.print("Lux: "); Serial.print(lux, DEC); Serial.print(" - ");
  Serial.print("R: "); Serial.print(r, DEC); Serial.print(" ");
  Serial.print("G: "); Serial.print(g, DEC); Serial.print(" ");
  Serial.print("B: "); Serial.print(b, DEC); Serial.print(" ");
  Serial.print("C: "); Serial.print(c, DEC); Serial.print(" ");
  Serial.println(" ");
}
*/
/*

#include <Wire.h>
#include "Adafruit_TCS34725.h"

// Pick analog outputs, for the UNO these three work well
// use ~560  ohm resistor between Red & Blue, ~1K for green (its brighter)
#define redpin 3
#define greenpin 5
#define bluepin 6
// for a common anode LED, connect the common pin to +5V
// for common cathode, connect the common to ground

// set to false if using a common cathode LED
#define commonAnode true

// our RGB -> eye-recognized gamma color
byte gammatable[256];


Adafruit_TCS34725 tcs = Adafruit_TCS34725(TCS34725_INTEGRATIONTIME_50MS, TCS34725_GAIN_4X);

void setup() {
  Serial.begin(9600);
  Serial.println("Color View Test!");

  if (tcs.begin()) {
    Serial.println("Found sensor");
  } else {
    Serial.println("No TCS34725 found ... check your connections");
    while (1); // halt!
  }
  
  // use these three pins to drive an LED
  pinMode(redpin, OUTPUT);
  pinMode(greenpin, OUTPUT);
  pinMode(bluepin, OUTPUT);
  
  // thanks PhilB for this gamma table!
  // it helps convert RGB colors to what humans see
  for (int i=0; i<256; i++) {
    float x = i;
    x /= 255;
    x = pow(x, 2.5);
    x *= 255;
      
    if (commonAnode) {
      gammatable = 255 - x;
    } else {
      gammatable = x;      
    }
    //Serial.println(gammatable);
  }
}


void loop() {
  uint16_t clear, red, green, blue;

  tcs.setInterrupt(false);      // turn on LED

  delay(60);  // takes 50ms to read 
  
  tcs.getRawData(&red, &green, &blue, &clear);

  tcs.setInterrupt(true);  // turn off LED
  
  Serial.print("C:\t"); Serial.print(clear);
  Serial.print("\tR:\t"); Serial.print(red);
  Serial.print("\tG:\t"); Serial.print(green);
  Serial.print("\tB:\t"); Serial.print(blue);

  // Figure out some basic hex code for visualization
  uint32_t sum = clear;
  float r, g, b;
  r = red; r /= sum;
  g = green; g /= sum;
  b = blue; b /= sum;
  r *= 256; g *= 256; b *= 256;
  Serial.print("\t");
  Serial.print((int)r, HEX); Serial.print((int)g, HEX); Serial.print((int)b, HEX);
  Serial.println();

  //Serial.print((int)r ); Serial.print(" "); Serial.print((int)g);Serial.print(" ");  Serial.println((int)b );

  analogWrite(redpin, gammatable[(int)r]);
  analogWrite(greenpin, gammatable[(int)g]);
  analogWrite(bluepin, gammatable[(int)b]);
}*/

////////////////////////////////////////////////////
//////////////////////////显示屏///////////////////
//////////////////////////////////////////////////////////

///////////////////////////RGB灯/////////////////
Blockly.Arduino.cb_rgb=function(){
  var dropdown_rgbpin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
  var value_led = Blockly.Arduino.valueToCode(this, 'num01', Blockly.Arduino.ORDER_ATOMIC);
  var value_rvalue = Blockly.Arduino.valueToCode(this, 'red', Blockly.Arduino.ORDER_ATOMIC);
  var value_gvalue = Blockly.Arduino.valueToCode(this, 'green', Blockly.Arduino.ORDER_ATOMIC);
  var value_bvalue = Blockly.Arduino.valueToCode(this, 'blue', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
   Blockly.Arduino.definitions_['include_Adafruit_NeoPixel'] = '#include <Adafruit_NeoPixel.h>';
   if (!Blockly.Arduino.definitions_['var_rgb_display' + dropdown_rgbpin]) {
      Blockly.Arduino.definitions_['var_rgb_display' + dropdown_rgbpin] = 'Adafruit_NeoPixel  rgb_display_' + dropdown_rgbpin + '' + '(4);';
      Blockly.Arduino.setups_['setup_rgb_display_begin_' + dropdown_rgbpin] = 'rgb_display_' + dropdown_rgbpin + '.begin();';
      Blockly.Arduino.setups_['setup_rgb_display_setpin' + dropdown_rgbpin] = 'rgb_display_' + dropdown_rgbpin + '.setPin(' + dropdown_rgbpin + ');';
  }
  
  var code = 'rgb_display_'+dropdown_rgbpin+'.setPixelColor('+value_led+'-1, '+value_rvalue+','+value_gvalue+','+value_bvalue+');\n';
  code+='rgb_display_'+dropdown_rgbpin+'.show();\n';
  return code;
};

////////////////////////////TM1637数码管初始化//////////////////////////
Blockly.Arduino.cb_tm1637_init = function(){
  var CLK = Blockly.Arduino.valueToCode(this, 'PIN1',Blockly.Arduino.ORDER_ATOMIC);
  var DIO = Blockly.Arduino.valueToCode(this, 'PIN2',Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.definitions_['include_TM1637.h'] = '#include <TM1637.h>';
  Blockly.Arduino.definitions_['TM1637'] = 'TM1637 TM('+CLK+', '+DIO+');';
  return '';
};

///////////////////////////TM1637数码管自定义显示/////////////////
Blockly.Arduino.cb_tm1637_dy=function(){
  var num = Blockly.Arduino.valueToCode(this, 'num', Blockly.Arduino.ORDER_ATOMIC);
  //var tc = Blockly.Arduino.valueToCode(this, 'tc', Blockly.Arduino.ORDER_ATOMIC);
  var weishu = Blockly.Arduino.valueToCode(this, 'weishu', Blockly.Arduino.ORDER_ATOMIC);
  var wei = Blockly.Arduino.valueToCode(this, 'wei', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'TM.cls();\nTM.Num('+num+',0,'+weishu+','+wei+');'+'\n';
  return code;
};

///////////////////////////TM1637数码管自定义显示是否填充/////////////////
Blockly.Arduino.cb_tm1637_tc=function(){
  var num = Blockly.Arduino.valueToCode(this, 'num', Blockly.Arduino.ORDER_ATOMIC);
  //var tc = Blockly.Arduino.valueToCode(this, 'tc', Blockly.Arduino.ORDER_ATOMIC);
  var tc = Blockly.Arduino.valueToCode(this, '0and1', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'TM.cls();\nTM.Num('+num+','+tc+');'+'\n';
  return code;
};

///////////////////////////TM1637数码管亮度/////////////////
Blockly.Arduino.cb_tm1637_ld=function(){
  var num = Blockly.Arduino.valueToCode(this, 'num', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'TM.BL('+num+');'+'\n';
  return code;
};


///////////////////////////TM1637数码管是否隐藏/////////////////
Blockly.Arduino.cb_tm1637_yc=function(){
  var bool = Blockly.Arduino.valueToCode(this, 'BOOL', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'TM.show('+bool+');'+'\n';
  return code;
};

///////////////////////////TM1637数码管是否显示冒号////////////////
Blockly.Arduino.cb_tm1637_mh=function(){
  var bool = Blockly.Arduino.valueToCode(this, 'BOOL', Blockly.Arduino.ORDER_ATOMIC);
  var num1 = Blockly.Arduino.valueToCode(this, 'num1', Blockly.Arduino.ORDER_ATOMIC);
  var num2 = Blockly.Arduino.valueToCode(this, 'num2', Blockly.Arduino.ORDER_ATOMIC);


  var code = 'TM.DNum('+num1+','+num2+','+bool+');'+'\n';
  return code;
};


Blockly.Arduino.cb_1602lcd_init = function() {
  var varName = this.getFieldValue('VAR');
  var TYPE = this.getFieldValue('TYPE');
  var device = Blockly.Arduino.valueToCode(this, 'address', Blockly.Arduino.ORDER_ATOMIC) || '0x27';
  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['include_LiquidCrystal_I2C'] = '#include <LiquidCrystal_I2C.h>';
  Blockly.Arduino.definitions_['var_LiquidCrystal_I2C_'+varName] = 'LiquidCrystal_I2C '+varName+'('+device+','+TYPE+');';
  return '';
};

Blockly.Arduino.cb_1602lcd = function() {
  var varName = this.getFieldValue('VAR');
  var str1 = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_ATOMIC) || '\"\"';
  var str2 = Blockly.Arduino.valueToCode(this, 'TEXT2', Blockly.Arduino.ORDER_ATOMIC) || '\"\"';
  //var str3 = Blockly.Arduino.valueToCode(this, 'TEXT3', Blockly.Arduino.ORDER_ATOMIC) || '\"\"';
  //var str4 = Blockly.Arduino.valueToCode(this, 'TEXT4', Blockly.Arduino.ORDER_ATOMIC) || '\"\"';
  if (Blockly.Arduino.definitions_['var_LiquidCrystal_SoftI2C_' + varName] || Blockly.Arduino.definitions_['var_LiquidCrystal_I2C_' + varName]) {
      Blockly.Arduino.setups_['setup_lcd_init_' + varName] = varName + '.init();';
      Blockly.Arduino.setups_['setup_lcd_backlight_' + varName] = varName + '.backlight();';
  }
  var code = varName+'.setCursor(0, 0);\n'
  code+=varName+'.print('+str1+');\n';
  code+=varName+'.setCursor(0, 1);\n';
  code+=varName+'.print('+str2+');\n';  
  //code+=varName+'.setCursor(0, 2);\n';
  //code+=varName+'.print('+str3+');\n';
  //code+=varName+'.setCursor(0, 3);\n';
  //code+=varName+'.print('+str4+');\n';
  return code;
};

Blockly.Arduino.cb_1602lcd_print2 = function() {
  var varName = this.getFieldValue('VAR');
  var str = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_ATOMIC) || 'String(\"\")';
  var row = Blockly.Arduino.valueToCode(this, 'row', Blockly.Arduino.ORDER_ATOMIC) || '1';
  var column = Blockly.Arduino.valueToCode(this, 'column', Blockly.Arduino.ORDER_ATOMIC) || '1';
  if (Blockly.Arduino.definitions_['var_LiquidCrystal_SoftI2C_' + varName] || Blockly.Arduino.definitions_['var_LiquidCrystal_I2C_' + varName]) {
      Blockly.Arduino.setups_['setup_lcd_init_' + varName] = varName + '.init();';
      Blockly.Arduino.setups_['setup_lcd_backlight_' + varName] = varName + '.backlight();';
  }
  var code = varName+'.setCursor('+column+'-1, '+row+'-1);\n'
  code+=varName+'.print('+str+');\n';
  return code;
};

Blockly.Arduino.cb_1602lcd_left = function() {
  var varName = this.getFieldValue('VAR');
  var code = ''+varName+'.scrollDisplayLeft();\n'
  return code;
};

Blockly.Arduino.cb_1602lcd_right = function() {
  var varName = this.getFieldValue('VAR');
  var code = ''+varName+'.scrollDisplayRight();\n'
  return code;
};


////////////////////////1602LCD///////////////////////////
/*Blockly.Arduino.KS_1602lcd = function() {
  var str1 = Blockly.Arduino.valueToCode(this, 'TEXT1', Blockly.Arduino.ORDER_ATOMIC) || 'String(\"\")'
  var str2 = Blockly.Arduino.valueToCode(this, 'TEXT2', Blockly.Arduino.ORDER_ATOMIC) || 'String(\"\")'
  var dropdown_stat = this.getFieldValue('STAT');
  //var bool = Blockly.Arduino.valueToCode(this, 'BOOL', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['define_lcd'] = '#include <LiquidCrystal_I2C.h>';
  Blockly.Arduino.definitions_['var_lcd'] = 'LiquidCrystal_I2C lcd(0x27,16,2);';
  Blockly.Arduino.setups_['setup_lcd1'] = 'lcd.init();';
  Blockly.Arduino.setups_['setup_lcd2'] = 'lcd.backlight();';
  var code = 'lcd.setCursor(0, 0);\n'
  code+='lcd.print('+str1+');\n';
  code+='lcd.setCursor(0, 1);\n';
  code+='lcd.print('+str2+');\n';
  return code;
};*/

Blockly.Arduino.cb_1602lcd_clear= function() {
  var varName = this.getFieldValue('VAR');
  var dropdown_stat = this.getFieldValue('STAT');
  if (Blockly.Arduino.definitions_['var_LiquidCrystal_SoftI2C_' + varName] || Blockly.Arduino.definitions_['var_LiquidCrystal_I2C_' + varName]) {
      Blockly.Arduino.setups_['setup_lcd_init_' + varName] = varName + '.init();';
      Blockly.Arduino.setups_['setup_lcd_backlight_' + varName] = varName + '.backlight();';
  }
  var code = varName+'.'+dropdown_stat+'();\n'
  return code;
};


////////////////////////2004LCD///////////////////////////
Blockly.Arduino.cb_2004lcd = function() {
  var str1 = Blockly.Arduino.valueToCode(this, 'TEXT1', Blockly.Arduino.ORDER_ATOMIC) || 'String(\"\")'
  var str2 = Blockly.Arduino.valueToCode(this, 'TEXT2', Blockly.Arduino.ORDER_ATOMIC) || 'String(\"\")'
  var str3 = Blockly.Arduino.valueToCode(this, 'TEXT3', Blockly.Arduino.ORDER_ATOMIC) || 'String(\"\")'
  var str4 = Blockly.Arduino.valueToCode(this, 'TEXT4', Blockly.Arduino.ORDER_ATOMIC) || 'String(\"\")'
  var dropdown_stat = this.getFieldValue('STAT');

  Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['define_lcd'] = '#include <LiquidCrystal_I2C.h>';
  Blockly.Arduino.definitions_['var_lcd'] = 'LiquidCrystal_I2C lcd(0x27,16,4);';
  Blockly.Arduino.setups_['setup_lcd1'] = 'lcd.init();';
  Blockly.Arduino.setups_['setup_lcd2'] = 'lcd.backlight();';
  var code = 'lcd.setCursor(0, 0);\n'
  code+='lcd.print('+str1+');\n';
  code+='lcd.setCursor(0, 1);\n';
  code+='lcd.print('+str2+');\n';
  code+='lcd.setCursor(0, 2);\n';
  code+='lcd.print('+str3+');\n';
  code+='lcd.setCursor(0, 3);\n';
  code+='lcd.print('+str4+');\n';
  code+='delay(300);\n';
  code+='if('+dropdown_stat+')\n{\nlcd.clear();\n}\n';
  return code;
};


//////////////////////////OLED//////////////////////////////////////
Blockly.Arduino.cb_oled = function() {

  var s = Blockly.Arduino.valueToCode(this, 'size', Blockly.Arduino.ORDER_ATOMIC);

  var str1 = Blockly.Arduino.valueToCode(this, 'TEXT1', Blockly.Arduino.ORDER_ATOMIC);
  var str2 = Blockly.Arduino.valueToCode(this, 'TEXT2', Blockly.Arduino.ORDER_ATOMIC);
  var str3 = Blockly.Arduino.valueToCode(this, 'TEXT3', Blockly.Arduino.ORDER_ATOMIC);
  var str4 = Blockly.Arduino.valueToCode(this, 'TEXT4', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['define_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['define_GFX'] = '#include <Adafruit_GFX.h>';
  Blockly.Arduino.definitions_['define_SSD1306'] = '#include <Adafruit_SSD1306.h>';

  Blockly.Arduino.definitions_['OLED_RESET'] = '#define OLED_RESET 4';
  Blockly.Arduino.definitions_['display'] = 'Adafruit_SSD1306 display(OLED_RESET);';
  
  Blockly.Arduino.setups_['setup_oled1'] = 'display.begin(SSD1306_SWITCHCAPVCC, 0x3C);';
  Blockly.Arduino.setups_['setup_oled2'] = 'display.display();';
  Blockly.Arduino.setups_['setup_oled3'] = 'delay(2000);';
  Blockly.Arduino.setups_['setup_oled4'] = 'display.clearDisplay();';


  var code = 'display.setTextSize('+s+');\ndisplay.setTextColor(WHITE);\ndisplay.setCursor(0,0);\ndisplay.println('+str1+');\ndisplay.println('+str2+');\ndisplay.println('+str3+');\ndisplay.println('+str4+');\ndisplay.display();\ndelay(250);';
  return code;
};

//////////////////////////////点阵初始化/////////////////////////////
Blockly.Arduino.cb_matrix_init = function() {
  var SDA = Blockly.Arduino.valueToCode(this, 'PIN1', Blockly.Arduino.ORDER_ATOMIC);
  var SCL = Blockly.Arduino.valueToCode(this, 'PIN2', Blockly.Arduino.ORDER_ATOMIC);
  var matrixName = this.getFieldValue('matrixName');
  Blockly.Arduino.definitions_['include_Matrix'] = '#include <Matrix.h>';
  Blockly.Arduino.definitions_[matrixName] = 'Matrix '+ matrixName +'('+SDA+','+SCL+');';
  Blockly.Arduino.setups_['setup_' + matrixName] = matrixName + '.begin(0x70); \n';
  var code= matrixName+'.clear();\n';
  return code;
};


////////////////////////////////点阵1////////////////////////////
//执行器_点阵屏显示_显示图案
Blockly.Arduino.cb_matrix1 = function() {
  var matrixName = this.getFieldValue('matrixName');
  var dotMatrixArray = Blockly.Arduino.valueToCode(this, 'LEDArray', Blockly.Arduino.ORDER_ASSIGNMENT);
  Blockly.Arduino.definitions_['LEDArray'] = 'uint8_t  LEDArray[8];';
//  var code='Matrix_'+SDA+'_'+SCL+'.clear()dotMatrix;\n';
  var code='';
  code+='for(int i=0; i<8; i++)\n';
  code+='{\n'
  code+='  LEDArray[i]='+dotMatrixArray+'[i];\n';
  code+='  for(int j=7; j>=0; j--)\n'
  code+='  {\n'
  code+='    if((LEDArray[i]&0x01)>0)\n';
  code+='    '+ matrixName +'.drawPixel(j, i,1);\n';
  code+='    LEDArray[i] = LEDArray[i]>>1;\n';
  code+='  }  \n'
  code+='}\n'
  code+= matrixName+'.writeDisplay();\n'
  return code;
};
//执行器_点阵屏显示_点阵数组
Blockly.Arduino.cb_matrix2 = function() {
  var varName = this.getFieldValue('VAR');
  var a = new Array();
  for (var i = 1; i < 9; i++) {
    a[i] = new Array();
    for (var j = 1; j < 9; j++) {
      a[i][j] = (this.getFieldValue('a' + i + j) == "TRUE") ? 1 : 0;
    }
  }
  var code = '{';
  for (var i = 1; i < 9; i++) {
    var tmp = ""
    for (var j = 1; j < 9; j++) {
      tmp += a[i][j];
    }
    tmp = (parseInt(tmp, 2)).toString(16)
    if (tmp.length == 1) tmp = "0" + tmp;
    code += '0x' + tmp + ((i != 8) ? ',' : '');
  }
  code += '};';
  //Blockly.Arduino.definitions_[this.id] = "byte LedArray_"+clearString(this.id)+"[]="+code;
  Blockly.Arduino.definitions_[varName] = "uint8_t " + varName + "[8]=" + code;
  //return ["LedArray_"+clearString(this.id), Blockly.Arduino.ORDER_ATOMIC];
  return [varName, Blockly.Arduino.ORDER_ATOMIC];
};
////////////////////////////////通讯///////////////////////////////

///////////////////////红外接收///////////////////
Blockly.Arduino.cb_ir_r = function () {
    var variable = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    Blockly.Arduino.definitions_['var_declare' + variable] = 'long ' + variable + ';';
    var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
    var branch = Blockly.Arduino.statementToCode(this, 'DO');
    var branch2 = Blockly.Arduino.statementToCode(this, 'DO2');
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'),
       Blockly.Variables.NAME_TYPE);
    Blockly.Arduino.definitions_['include_IRremote'] = '#include <IRremote.h>\n';
    //Blockly.Arduino.definitions_['var_declare'+varName] = 'long '+varName+';\n';
    Blockly.Arduino.definitions_['var_ir_recv' + dropdown_pin] = 'IRrecv irrecv_' + dropdown_pin + '(' + dropdown_pin + ');\ndecode_results results_' + dropdown_pin + ';\n';
    Blockly.Arduino.setups_['setup_ir_recv_' + dropdown_pin] = 'irrecv_' + dropdown_pin + '.enableIRIn();';
    var code = "if (irrecv_" + dropdown_pin + ".decode(&results_" + dropdown_pin + ")) {\n"
    code += '  ' + variable + '=results_' + dropdown_pin + '.value;\n';
    code += '  String type="UNKNOWN";\n';
    ////////////////////////////////////////////////////////////////
    code += '  String typelist[14]={"UNKNOWN", "NEC", "SONY", "RC5", "RC6", "DISH", "SHARP", "PANASONIC", "JVC", "SANYO", "MITSUBISHI", "SAMSUNG", "LG", "WHYNTER"};\n';
    code += '  if(results_' + dropdown_pin + '.decode_type>=1&&results_' + dropdown_pin + '.decode_type<=13){\n';
    code += '    type=typelist[results_' + dropdown_pin + '.decode_type];\n'
    code += '  }\n';
    code += '  Serial.print("IR TYPE:"+type+"  ");\n';
    code += branch;
    code += '  irrecv_' + dropdown_pin + '.resume();\n'
    code += '} else {\n';
    code += branch2;
    code += '}\n';
    return code;
};

//////////////////////////////////////红外发射/////////////////////////////
Blockly.Arduino.cb_ir_s = function() {

  var num1 = Blockly.Arduino.valueToCode(this, 'num1', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['define_IRre.h'] = '#include <IRremote.h>';
  Blockly.Arduino.definitions_['define_IRsend'] = 'IRsend irsend;';

  var code = 'irsend.sendRC5('+num1+', 8);\ndelay(200);\n';
  return code;
};

/////////////////////////////////////蓝牙////////////////////////////////////
Blockly.Arduino.cb_bluetooth = function () {
  var variable = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAL'), Blockly.Variables.NAME_TYPE);
  var val = this.getFieldValue('VAL');
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
  var dropdown_pin1 = Blockly.Arduino.valueToCode(this, 'PIN1', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_pin2 = Blockly.Arduino.valueToCode(this, 'PIN2', Blockly.Arduino.ORDER_ATOMIC);


  Blockly.Arduino.definitions_['include_Soft'] = '#include <SoftwareSerial.h>\n';
  Blockly.Arduino.definitions_['mySerial'] = 'SoftwareSerial mySerial('+dropdown_pin1+', '+dropdown_pin2+');\n';
  Blockly.Arduino.definitions_['char'] = 'char '+val+';\n';

  Blockly.Arduino.setups_['mySerial23'] = 'mySerial.begin(9600);';

   var code = 'if (mySerial.available())\n{\n'+val+' = mySerial.read();\n';
   code += branch;
   code += '}\n';
  return code;
};
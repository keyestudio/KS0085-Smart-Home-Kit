'use strict';

goog.provide('Blockly.Blocks.Keyestudio001');

goog.require('Blockly.Blocks');

//////////////////颜色/////////////////////
Blockly.Blocks.Keyestudio001.HUE = 120;

//////////////////食人鱼LED////////////////
Blockly.Blocks.cb_led1 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_KS_LED1)
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_led1.png", 43, 32));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_STAT)
    .appendField(new Blockly.FieldDropdown([[Blockly.Ks_ON, "HIGH"], [Blockly.Ks_OFF, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
Blockly.Blocks.cb_led01 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_KS_LED01)
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_led01.png", 43, 32));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_STAT)
    .appendField(new Blockly.FieldDropdown([[Blockly.Ks_ON, "HIGH"], [Blockly.Ks_OFF, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
Blockly.Blocks.cb_3wled = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_KS_LED3)
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_3wled.png", 43, 32));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_STAT)
    .appendField(new Blockly.FieldDropdown([[Blockly.Ks_ON, "HIGH"], [Blockly.Ks_OFF, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
Blockly.Blocks.cb_led4 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_KS_LED4)
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_led1.png", 43, 32));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_STAT)
    .appendField(new Blockly.FieldDropdown([[Blockly.Ks_ON, "HIGH"], [Blockly.Ks_OFF, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
Blockly.Blocks.cb_led5 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_KS_LED5)
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_led1.png", 43, 32));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_STAT)
    .appendField(new Blockly.FieldDropdown([[Blockly.Ks_ON, "HIGH"], [Blockly.Ks_OFF, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

////////////////////草帽LED///////////////////
Blockly.Blocks.cb_LEDW = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_KS_LED01)
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_LED-W.png", 43, 32));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_STAT)
    .appendField(new Blockly.FieldDropdown([[Blockly.Ks_ON, "HIGH"], [Blockly.Ks_OFF, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
Blockly.Blocks.cb_LEDR = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_KS_LED02)
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_LED-R.png", 43, 32));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_STAT)
    .appendField(new Blockly.FieldDropdown([[Blockly.Ks_ON, "HIGH"], [Blockly.Ks_OFF, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
Blockly.Blocks.cb_LEDG = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_KS_LED03)
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_LED-G.png", 43, 32));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_STAT)
    .appendField(new Blockly.FieldDropdown([[Blockly.Ks_ON, "HIGH"], [Blockly.Ks_OFF, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
Blockly.Blocks.cb_LEDB = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_KS_LED04)
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_LED-B.png", 43, 32));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_STAT)
    .appendField(new Blockly.FieldDropdown([[Blockly.Ks_ON, "HIGH"], [Blockly.Ks_OFF, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
Blockly.Blocks.cb_LEDY = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_KS_LED05)
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_LED-Y.png", 43, 32));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_STAT)
    .appendField(new Blockly.FieldDropdown([[Blockly.Ks_ON, "HIGH"], [Blockly.Ks_OFF, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
/////////////////有源蜂鸣器//////////////////////
Blockly.Blocks.cb_y_buzzer = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_KS_BUZZER1)
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_buzzer.png", 39, 32));    
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_STAT)
    .appendField(new Blockly.FieldDropdown([[Blockly.Ks_ON, "HIGH"], [Blockly.Ks_OFF, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

/////////////////无源蜂鸣器//////////////////////
       //////////////////蜂鸣器//////////////////
var TONE_NOTES=[["NOTE_C3", "131"],["NOTE_D3", "147"],["NOTE_E3", "165"],["NOTE_F3", "175"],["NOTE_G3", "196"],["NOTE_A3", "220"],["NOTE_B3", "247"],
           ["NOTE_C4", "262"],["NOTE_D4", "294"],["NOTE_E4", "330"],["NOTE_F4", "349"],["NOTE_G4", "392"],["NOTE_A4", "440"],["NOTE_B4", "494"],
           ["NOTE_C5", "532"],["NOTE_D5", "587"],["NOTE_E5", "659"],["NOTE_F5", "698"],["NOTE_G5", "784"],["NOTE_A5", "880"],["NOTE_B5", "988"]];


Blockly.Blocks.cb_tone01 = {
   init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(TONE_NOTES), 'STAT');
    this.setOutput(true, Number);
  }
};

Blockly.Blocks.cb_w_buzzer={
init:function(){
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_KS_BUZZER2)
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_pbuzzer.png", 39, 32));  
    this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
    this.appendValueInput('FREQUENCY')
        .setCheck(Number)
        //.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.ks_tone);

    //this.appendValueInput('DURATION')
        //.setCheck(Number)
        //.setAlign(Blockly.ALIGN_RIGHT)
        //.appendField(Blockly.kids_beat);
    this.appendDummyInput("")
        .appendField(Blockly.ks_beat)
        .appendField(new Blockly.FieldDropdown([["1/8", "125"],["3/8", "375"],["1/4", "250"],["3/4", "750"],["1/2", "500"],["1", "1000"]]), 'beat1');
    
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_TONE);
  }
};


///////////music////////////////////
Blockly.Blocks.cb_w_music = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.ks_music)
        .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_pbuzzer.png", 39, 32)); 
    this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);   
    this.appendDummyInput("")
        //.appendField(new Blockly.FieldDropdown([["Birthday", "Birthday"],["City of Sky", "City of Sky"],["Ode to Joy", "Ode to Joy"]]), 'play');
        .appendField(new Blockly.FieldDropdown([[Blockly.ks_Ode_to_joy, "Ode to Joy"],[Blockly.ks_birthday, "Birthday"]]), 'play');
    
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_NOTONE);
  }
};

////////////////////关闭蜂鸣器////////////////////////
Blockly.Blocks.cb_w_notone={
init:function(){
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.ks_notone)
        .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_pbuzzer.png", 39, 32)); 
    this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);   
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    //this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_NOTONE);
  }
};

///////////////////////继电器////////////////////////////
Blockly.Blocks.cb_relay = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_KS_RELAY)
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_relay.png", 43, 32));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_STAT)
    .appendField(new Blockly.FieldDropdown([[Blockly.Ks_ON, "HIGH"], [Blockly.Ks_OFF, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

////////////////////////电机///////////////////////////////////
Blockly.Blocks.cb_motor = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_KS_MOTOR)
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_dianji.png", 43, 32));
    this.appendValueInput("PIN1", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField('INA')
    .appendField(new Blockly.FieldDropdown([[Blockly.Ks_ON, "HIGH"], [Blockly.Ks_OFF, "LOW"]]), "STAT1");
    this.appendValueInput("PIN2", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField('INB')
    .appendField(new Blockly.FieldDropdown([[Blockly.Ks_ON, "HIGH"], [Blockly.Ks_OFF, "LOW"]]), "STAT2");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

////////////////////////电机001///////////////////////////////////
Blockly.Blocks.cb_motor001 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_KS_MOTOR)
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_dianji.png", 43, 32));
    this.appendValueInput("PIN1", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setAlign(Blockly.ALIGN_RIGHT)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField('INA')
    .appendField(new Blockly.FieldDropdown([[Blockly.Ks_ON, "HIGH"], [Blockly.Ks_OFF, "LOW"]]), "STAT1");
    this.appendValueInput("PIN2", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setAlign(Blockly.ALIGN_RIGHT)
    .setCheck(Number);
    this.appendValueInput("pwmb")
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("PWMB:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

////////////////////////电机002///////////////////////////////////
Blockly.Blocks.cb_motor002 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_KS_MOTOR)
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_dianji.png", 43, 32));
    this.appendValueInput("PIN1", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setAlign(Blockly.ALIGN_RIGHT)
    .setCheck(Number);
    this.appendValueInput("pwma")
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("PWMA:");
    this.appendValueInput("PIN2", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setAlign(Blockly.ALIGN_RIGHT)
    .setCheck(Number);
    this.appendValueInput("pwmb")
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("PWMB:");
    this.setPreviousStatement(true, null);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
  }
};


////////////////////////TB6612///////////////////////////////////
Blockly.Blocks.cb_TB6612 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField("TB6612")
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_TB6612.png", 43, 32));
    this.appendValueInput("Left1", Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("Left1")
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField('1:')
    .appendField(new Blockly.FieldDropdown([[Blockly.Ks_ON, "HIGH"], [Blockly.Ks_OFF, "LOW"]]), "STAT1");
    this.appendValueInput("Left2", Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("Left2")
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField('2:')
    .appendField(new Blockly.FieldDropdown([[Blockly.Ks_ON, "HIGH"], [Blockly.Ks_OFF, "LOW"]]), "STAT2");
    this.appendValueInput("PWM_L", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("PWM_L:");
    this.appendValueInput("L", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("L(0~255):");

    this.appendDummyInput("")
    .appendField('|||')

    this.appendValueInput("Right1", Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("Right1")
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField('1:')
    .appendField(new Blockly.FieldDropdown([[Blockly.Ks_ON, "HIGH"], [Blockly.Ks_OFF, "LOW"]]), "STAT3");
    this.appendValueInput("Right2", Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("Right2")
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField('2:')
    .appendField(new Blockly.FieldDropdown([[Blockly.Ks_ON, "HIGH"], [Blockly.Ks_OFF, "LOW"]]), "STAT4");
    this.appendValueInput("PWM_R", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("PWM_R:");
    this.appendValueInput("R", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("R(0~255):");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};



////////////////////////L298N///////////////////////////////////
Blockly.Blocks.cb_L298N = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField("L298N")
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_L298N.png", 43, 32));
    this.appendValueInput("Left1", Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("Left1")
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField('1:')
    .appendField(new Blockly.FieldDropdown([[Blockly.Ks_ON, "HIGH"], [Blockly.Ks_OFF, "LOW"]]), "STAT1");
    this.appendValueInput("Left2", Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("Left2")
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField('2:')
    .appendField(new Blockly.FieldDropdown([[Blockly.Ks_ON, "HIGH"], [Blockly.Ks_OFF, "LOW"]]), "STAT2");
    this.appendValueInput("PWM_L", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("PWM_L:");
    this.appendValueInput("L", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("L(0~255):");

    this.appendDummyInput("")
    .appendField('|||')

    this.appendValueInput("Right1", Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("Right1")
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField('1:')
    .appendField(new Blockly.FieldDropdown([[Blockly.Ks_ON, "HIGH"], [Blockly.Ks_OFF, "LOW"]]), "STAT3");
    this.appendValueInput("Right2", Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("Right2")
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField('2:')
    .appendField(new Blockly.FieldDropdown([[Blockly.Ks_ON, "HIGH"], [Blockly.Ks_OFF, "LOW"]]), "STAT4");
    this.appendValueInput("PWM_R", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("PWM_R:");
    this.appendValueInput("R", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("R(0~255):");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};



///////////////////////////舵机///////////////////////////////////
Blockly.Blocks.cb_servo = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_KS_SERVO)
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_servo.png", 70, 32))
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendValueInput("angle", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_DEGREE_0_180);
    this.appendValueInput("time", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_DELAY+'('+Blockly.MIXLY_DELAY_MS+')');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_SERVO_MOVE);
  }
};

Blockly.Blocks.cb_servo_r = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_KS_SERVO)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_READ_DEGREES)
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_SERVO_READ);
  }
};

////////////////////////traffic light///////////////////////////////////
Blockly.Blocks.cb_traffic_light = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField("traffic_light")
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_traffic-light.png", 43, 32));
    this.appendValueInput("R", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField('R:')
    .appendField(new Blockly.FieldDropdown([[Blockly.Ks_ON, "HIGH"], [Blockly.Ks_OFF, "LOW"]]), "STAT1");
    this.appendValueInput("G", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField('G:')
    .appendField(new Blockly.FieldDropdown([[Blockly.Ks_ON, "HIGH"], [Blockly.Ks_OFF, "LOW"]]), "STAT2");
    this.appendValueInput("B", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField('B:')
    .appendField(new Blockly.FieldDropdown([[Blockly.Ks_ON, "HIGH"], [Blockly.Ks_OFF, "LOW"]]), "STAT3");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

////////////////////////rgb01///////////////////////////////////
Blockly.Blocks.cb_rgb01 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField("RGB")
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_rgb01.png", 43, 32));
    this.appendValueInput("R", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendValueInput("r", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("R(0~255):");
    this.appendValueInput("G", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendValueInput("g", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("G(0~255):");
    this.appendValueInput("B", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendValueInput("b", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("B(0~255):");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};



/////////////////////数字传感器///////////////////////////////

///////////人体红外传感器////////////////////
Blockly.Blocks.cb_ir_g = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_KS_IR_G)
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_rentihongwai.png", 43, 32));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

///////////火焰传感器////////////////////
Blockly.Blocks.cb_flame = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_KS_FLAME)
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_fire.png", 43, 32));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

///////////霍尔传感器////////////////////
Blockly.Blocks.cb_hall = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_KS_HALL)
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_hall.png", 43, 32));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

///////////碰撞传感器////////////////////
Blockly.Blocks.cb_crash = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_KS_CRASH)
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_pengzhuang.png", 43, 32));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

///////////按键传感器////////////////////
Blockly.Blocks.cb_button = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_KS_BUTTON)
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_button.png", 43, 32));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

///////////电容触摸传感器////////////////////
Blockly.Blocks.cb_tuoch = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_KS_TUOCH)
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_touch.png", 43, 32));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

///////////敲击传感器////////////////////
Blockly.Blocks.cb_knock = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_KS_KNOCK)
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_xiangwei.png", 43, 32));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

///////////倾斜传感器////////////////////
Blockly.Blocks.cb_tilt = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_KS_TILT)
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_qingxie.png", 43, 32));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

///////////振动传感器////////////////////
Blockly.Blocks.cb_shake = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_KS_SHAKE)
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_zhengdong.png", 43, 32));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

///////////干簧管传感器////////////////////
Blockly.Blocks.cb_reed_s = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_KS_REED_S)
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_ghg.png", 43, 32));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

///////////循迹传感器////////////////////
Blockly.Blocks.cb_track = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_KS_TRACK)
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_xunji.png", 43, 32));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

///////////避障传感器////////////////////
Blockly.Blocks.cb_avoid = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_KS_AVOID)
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_hongwaibz.png", 43, 32));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

///////////光折断传感器////////////////////
Blockly.Blocks.cb_light_b = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_KS_LIGHT_B)
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_photo.png", 43, 32));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};



///////////MQ数字传感器////////////////////
Blockly.Blocks.cb_MQ_d = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.ks_MQ_d)
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_MQ.png", 43, 32));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

///////////////////////////模拟传感器//////////////////////////
///////////模拟温度传感器///////////////
Blockly.Blocks.cb_analog_t = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_KS_ANALOG_T)
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_mnwd.png", 50, 40));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

///////////声音传感器///////////////
Blockly.Blocks.cb_sound = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_KS_SOUND)
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_sound.png", 50, 40));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

///////////光线传感器///////////////
Blockly.Blocks.cb_light = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_KS_LIGHT)
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_guangmin.png", 50, 40));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

///////////水位传感器///////////////
Blockly.Blocks.cb_water = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_KS_WATER)
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_water.png", 50, 40));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

///////////土壤传感器///////////////
Blockly.Blocks.cb_soil = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_KS_SOIL)
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_soil.png", 50, 40));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

///////////电位器///////////////
Blockly.Blocks.cb_potentiometer = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_KS_POTENTIOMETER)
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_dianweiqi.png", 50, 40));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

///////////LM35///////////////
Blockly.Blocks.cb_lm35 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_KS_LM35)
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_lm35.png", 50, 40));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

///////////滑动电位器///////////////
Blockly.Blocks.cb_slide_potentiometer = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_KS_SLIDE_POTENTIOMETER)
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_hddwq.png", 50, 40));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

///////////TEMT6000环境光///////////////
Blockly.Blocks.cb_temt6000 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_KS_TEMT6000)
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_temt6000.png", 50, 40));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

///////////水蒸气传感器///////////////
Blockly.Blocks.cb_steam = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_KS_STEAM)
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_steam.png", 50, 40));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

///////////薄膜压力传感器///////////////
Blockly.Blocks.cb_film_p = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_KS_FILM_P)
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_tptouch.png", 50, 40));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

///////////摇杆传感器///////////////
var joystick = [
  ["Lx", "Lx"],
  ["Ly", "Ly"],
  ["Lz", "Lz"],
  ["Rx", "Rx"],
  ["Ry", "Ry"], 
  ["Rz", "Rz"]
];

Blockly.Blocks.cb_joystick = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown(joystick), "joy");
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_KS_JOYSTICK)
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_joystick.png", 50, 40));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};



///////////烟雾传感器///////////////
Blockly.Blocks.cb_smoke = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_KS_SMOKE)
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_gas.png", 50, 40));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

///////////酒精传感器///////////////
Blockly.Blocks.cb_alcohol = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_KS_ALCOHOL)
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_alcohol.png", 50, 40));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

///////////MQ135空气质量///////////////
Blockly.Blocks.cb_mq135 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.ks_MQ_a)
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_MQ.png", 50, 40));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

///////////电压///////////////
Blockly.Blocks.cb_voltage = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField("测电压")
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_voltage.png", 50, 40));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

///////////电流///////////////
Blockly.Blocks.cb_dianliu = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField("测电流");
    //.appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_voltage.png", 50, 40));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

///////////火焰传感器模拟////////////////////
Blockly.Blocks.cb_flame_a = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_KS_FLAME_a)
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_fire.png", 43, 32));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

///////////18B20温度模块///////////////
Blockly.Blocks.cb_18b20 = {
    init: function () {
        var UNIT = [[Blockly.MIXLY_DS18B20_C, '0'], [Blockly.MIXLY_DS18B20_F, '1']];
        this.setColour(Blockly.Blocks.Keyestudio001.HUE);
        this.appendValueInput("PIN", Number)
            .appendField(Blockly.MIXLY_KS_18B20)
            .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_18B20.png", 50, 40))
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField(Blockly.MIXLY_KS_RT)
            .appendField(new Blockly.FieldDropdown(UNIT), "UNIT");
        this.setOutput(true, Number);
    }
};

///////////////////////////////DHT11//////////////////////////////////
Blockly.Blocks.cb_dht11 = {
    init: function () {
        var WHAT = [[Blockly.MIXLY_DHT11_T, 'temperature'], [Blockly.MIXLY_DHT11_H, 'humidity']];
        this.setColour(Blockly.Blocks.Keyestudio001.HUE);
        this.appendValueInput("PIN", Number)
            .appendField(new Blockly.FieldDropdown([['DHT11', '11'], ['DHT21', '21'], ['DHT22', '22'], ['DHT33', '33'], ['DHT44', '44']]), 'TYPE')
            .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_dht11.png", 50, 40))
            .appendField(Blockly.MIXLY_PIN)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown(WHAT), "WHAT");
        this.setOutput(true, Number);
        var thisBlock = this;
        this.setTooltip(function () {
            var op = thisBlock.getFieldValue('WHAT');
            var TOOLTIPS = {
                'temperature': Blockly.MIXLY_TOOLTIP_BLOCKGROUP_GET_TEM,
                'humidity': Blockly.MIXLY_TOOLTIP_BLOCKGROUP_GET_HUM
            };
            return TOOLTIPS[op];
        });
    }
};

///////////////////////////////SHT31//////////////////////////////////
var SHT31 = [
  ["C", "C"],
  ["F", "F"],
  ["H", "H"],
];
/////////////////////////////BMP180////////////////////////
Blockly.Blocks.cb_SHT31 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField("SHT31")
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_SHT31.png", 50, 40));
    this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown(SHT31), "sht31");
    this.setInputsInline(true);
    this.setOutput(true);
   }
};


/////////////////////////////////////////////
////////////////传感器////////////////////////
/////////////////////////////////////////////

///////////////超声波/////////////////////////
Blockly.Blocks.cb_sr01 = {
  init: function () {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_KS_SR01)
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_sr04.png", 50, 40));
    this.appendValueInput("PIN1", Number)
    .appendField('Trig#')
    .setCheck(Number);
    this.appendValueInput("PIN2", Number)
    .appendField('Echo#')
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_CHAOSHENGBO);
  }
};


var ADXL345_ZHOU = [
  [Blockly.MIXLY_ADXL345_X, "x"],
  [Blockly.MIXLY_ADXL345_Y, "y"],
  [Blockly.MIXLY_ADXL345_Z, "z"],
  [Blockly.MIXLY_ADXL345_XA, "xa"],
  [Blockly.MIXLY_ADXL345_YA, "ya"]
  //, [Blockly.MIXLY_ADXL345_ZA, "za"]
];
//传感器-重力感应块-获取数据
Blockly.Blocks.cb_adxl345 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_KS_ADXL345)
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_adxl345.png", 50, 40));
    this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown(ADXL345_ZHOU), "ADXL345_PIN");
    this.setInputsInline(true);
    this.setOutput(true);
   }
};


//////////////////////////MPU6050//////////////////////
var MPU6050_S = [
  ["ax", "ax"],
  ["ay", "ay"],
  ["az", "az"],
  ["gx", "gx"],
  ["gy", "gy"],
  ["gz", "gz"]
];
//传感器-重力感应块-获取数据
Blockly.Blocks.cb_mpu6050 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField("MPU6050")
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_mpu6050.png", 50, 40));
    this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown(MPU6050_S), "MPU6050_PIN");
    this.setInputsInline(true);
    this.setOutput(true);
   }
};


/////////////////////////////BMP180////////////////////////
var BMP180_TP = [
  [Blockly.MIXLY_KS_T, "T"],
  [Blockly.MIXLY_KS_QY, "P"],
  [Blockly.MIXLY_KS_H, "A"],
];
/////////////////////////////BMP180////////////////////////
Blockly.Blocks.cb_bmp180 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_KS_BMP180)
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_bmp180.png", 50, 40));
    this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown(BMP180_TP), "BMP180_PIN");
    this.setInputsInline(true);
    this.setOutput(true);
   }
};

//////////////////////////////////DS3231时钟。//////////////////////////////
//传感器-实时时钟块_设置时间
Blockly.Blocks.cb_ds3231 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_KS_3231)
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_ds3231.png", 50, 40))
    .appendField(new Blockly.FieldTextInput('myTime'), 'RTCName');
    this.appendValueInput("dow").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.MIXLY_KS_TEXT);
    this.appendValueInput("day").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.MIXLY_KS_DAY);
    this.appendValueInput("month").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.MIXLY_KS_MONTH);
    this.appendValueInput("year").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.MIXLY_KS_YEAR);
    
    this.appendValueInput("hour").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.MIXLY_KS_HOUR);
    this.appendValueInput("minute").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.MIXLY_KS_MINUTE);
    this.appendValueInput("second").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.MIXLY_KS_SECOND);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(false);
   }
};

////////////////////////////DS3231读取时间/////////////////////////////////
//传感器-实时时钟块_时间变量
var RTC_TIME_TYPE = [
 // [Blockly.MIXLY_YEAR, "getYear"],
 // [Blockly.MIXLY_MONTH, "getMonth"],
  [Blockly.MIXLY_DAY, "getDay"],
  [Blockly.MIXLY_HOUR, "getHour"],
  [Blockly.MIXLY_MINUTE, "getMinute"],
  [Blockly.MIXLY_SECOND, "getSecond"],
  //[Blockly.MIXLY_WEEK, "getWeek"],
];


//传感器-实时时钟块_获取时间
Blockly.Blocks.cb_ds3231getTime = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.MIXLY_KS_GET);
    this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput('myRTC'), 'RTCName');
    this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown(RTC_TIME_TYPE), "TIME_TYPE");
    this.setInputsInline(true);
    this.setOutput(true, Number);
  }
};


/////////////////////////////红外温度////////////////////////
Blockly.Blocks.cb_hwwd = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField("非接触红外传感器,引脚为 SDA : A4 , SCL : A5");
    //.appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_bmp180.png", 50, 40));
    //this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown(BMP180_TP), "BMP180_PIN");
    this.setInputsInline(true);
    this.setOutput(true);
   }
};

/////////////////////////////颜色传感器////////////////////////
var RGB_sensor = [
  ["红色值", "red"],
  ["绿色值", "green"],
  ["蓝色值", "blue"]
  //["RGB合并值", "lux"]
];

/////////////////////////////颜色传感器////////////////////////
Blockly.Blocks.cb_yanse = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField("颜色传感器");
    //.appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_bmp180.png", 50, 40));
    this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown(RGB_sensor), "RGB_sensor");
    this.setInputsInline(true);
    this.setOutput(true);
   }
};

////////////////////////////////////////////////////
////////////////////////显示屏///////////////////////
////////////////////////////////////////////////////

//////////////////RGB灯////////////////////////////
Blockly.Blocks.cb_rgb = {
    init: function () {
        this.setColour(Blockly.Blocks.Keyestudio001.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.MIXLY_KS_2812RGB)
            .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_rgb2812.png", 50, 40));
         this.appendValueInput("PIN", Number)
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_PIN);
        this.appendValueInput("num01")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_KS_Count);
        this.appendValueInput("red")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("R：");
        this.appendValueInput("green")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("G：");
        this.appendValueInput("blue")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("B：");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};

/////////////////////TM1637数码管初始化////////////////////////////////////
Blockly.Blocks.cb_tm1637_init = {
    init: function () {
        this.setColour(Blockly.Blocks.Keyestudio001.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.MIXLY_KS_TM1637)
            .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_shumaguan.png", 50, 40));
        this.appendValueInput("PIN1", Number)
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("#CLK:");
        this.appendValueInput("PIN2", Number)
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("#DIO:");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_4DIGITDISPLAY_TM1637_TIP);
        this.setHelpUrl('');
    }
};

//////////////////TM1637数码自定义显示////////////////////////////
Blockly.Blocks.cb_tm1637_dy = {
    init: function () {
        this.setColour(Blockly.Blocks.Keyestudio001.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.MIXLY_KS_TM1637)
            .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_shumaguan.png", 50, 40));
  
        this.appendValueInput("num")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_KS_value);
   
        this.appendValueInput("weishu")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_KS_ws);
        this.appendValueInput("wei")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_KS_begin);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};

//////////////////TM1637数码自定义显示是否填充////////////////////////////
Blockly.Blocks.cb_tm1637_tc = {
    init: function () {
        this.setColour(Blockly.Blocks.Keyestudio001.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.MIXLY_KS_TM1637)
            .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_shumaguan.png", 50, 40));
  
        this.appendValueInput("num")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_KS_value);
   
        this.appendValueInput('0and1')
            .setCheck([Number,Boolean])
            .appendField(Blockly.MIXLY_KS_fill0);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};

//////////////////TM1637数码管亮度////////////////////////////
Blockly.Blocks.cb_tm1637_ld = {
    init: function () {
        this.setColour(Blockly.Blocks.Keyestudio001.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.MIXLY_KS_TM1637)
            .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_shumaguan.png", 50, 40));
  
        this.appendValueInput("num")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_KS_light);
   
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};

//////////////////TM1637数码管是否隐藏////////////////////////////
Blockly.Blocks.cb_tm1637_yc = {
    init: function () {
        this.setColour(Blockly.Blocks.Keyestudio001.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.MIXLY_KS_TM1637)
            .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_shumaguan.png", 50, 40));
  
        this.appendValueInput('BOOL')
            .setCheck([Number,Boolean])
            .appendField(Blockly.MIXLY_KS_XY);
   
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};

//////////////////TM1637数码管是否显示冒号////////////////////////////
Blockly.Blocks.cb_tm1637_mh = {
    init: function () {
        this.setColour(Blockly.Blocks.Keyestudio001.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.MIXLY_KS_TM1637)
            .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_shumaguan.png", 50, 40));
        this.appendValueInput("num1")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_KS_L);
        this.appendValueInput('BOOL')
            .setCheck([Number,Boolean])
            .appendField(Blockly.MIXLY_KS_MH);
        this.appendValueInput("num2")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_KS_R);
   
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};

/////////////////////8*8点阵/////////////////////

Blockly.Blocks.cb_matrix_init = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE)
    this.appendDummyInput("").appendField(Blockly.MIXLY_DISPLAY_MATRIX_INIT).appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_matrix.png", 70, 32));
    this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput('myMatrix'), 'matrixName');
    this.appendValueInput("PIN1").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField("SDA#");
    this.appendValueInput("PIN2").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField("SCL#"); 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
//   this.setTooltip("display_点阵屏初始化");
   }
};

//执行器_点阵屏显示_显示图案
Blockly.Blocks.cb_matrix1 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("").appendField(new Blockly.FieldTextInput('myMatrix'), 'matrixName').appendField(Blockly.MIXLY_DISPLAY_MATRIX_SHOW).appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_matrix.png", 70, 32));
    this.appendValueInput("LEDArray").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.MIXLY_DISPLAY_MATRIX_PICARRAY);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip();
  }
};
//执行器_点阵屏显示_图案数组
Blockly.Blocks.cb_matrix2 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("").appendField(Blockly.MIXLY_DISPLAY_MATRIX_ARRAYVAR).appendField(new Blockly.FieldTextInput("LedArray1"), "VAR");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a81").appendField(new Blockly.FieldCheckbox("FALSE"), "a82").appendField(new Blockly.FieldCheckbox("FALSE"), "a83").appendField(new Blockly.FieldCheckbox("FALSE"), "a84").appendField(new Blockly.FieldCheckbox("FALSE"), "a85").appendField(new Blockly.FieldCheckbox("FALSE"), "a86").appendField(new Blockly.FieldCheckbox("FALSE"), "a87").appendField(new Blockly.FieldCheckbox("FALSE"), "a88");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a71").appendField(new Blockly.FieldCheckbox("FALSE"), "a72").appendField(new Blockly.FieldCheckbox("FALSE"), "a73").appendField(new Blockly.FieldCheckbox("FALSE"), "a74").appendField(new Blockly.FieldCheckbox("FALSE"), "a75").appendField(new Blockly.FieldCheckbox("FALSE"), "a76").appendField(new Blockly.FieldCheckbox("FALSE"), "a77").appendField(new Blockly.FieldCheckbox("FALSE"), "a78");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a61").appendField(new Blockly.FieldCheckbox("FALSE"), "a62").appendField(new Blockly.FieldCheckbox("FALSE"), "a63").appendField(new Blockly.FieldCheckbox("FALSE"), "a64").appendField(new Blockly.FieldCheckbox("FALSE"), "a65").appendField(new Blockly.FieldCheckbox("FALSE"), "a66").appendField(new Blockly.FieldCheckbox("FALSE"), "a67").appendField(new Blockly.FieldCheckbox("FALSE"), "a68");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a51").appendField(new Blockly.FieldCheckbox("FALSE"), "a52").appendField(new Blockly.FieldCheckbox("FALSE"), "a53").appendField(new Blockly.FieldCheckbox("FALSE"), "a54").appendField(new Blockly.FieldCheckbox("FALSE"), "a55").appendField(new Blockly.FieldCheckbox("FALSE"), "a56").appendField(new Blockly.FieldCheckbox("FALSE"), "a57").appendField(new Blockly.FieldCheckbox("FALSE"), "a58");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a41").appendField(new Blockly.FieldCheckbox("FALSE"), "a42").appendField(new Blockly.FieldCheckbox("FALSE"), "a43").appendField(new Blockly.FieldCheckbox("FALSE"), "a44").appendField(new Blockly.FieldCheckbox("FALSE"), "a45").appendField(new Blockly.FieldCheckbox("FALSE"), "a46").appendField(new Blockly.FieldCheckbox("FALSE"), "a47").appendField(new Blockly.FieldCheckbox("FALSE"), "a48");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a31").appendField(new Blockly.FieldCheckbox("FALSE"), "a32").appendField(new Blockly.FieldCheckbox("FALSE"), "a33").appendField(new Blockly.FieldCheckbox("FALSE"), "a34").appendField(new Blockly.FieldCheckbox("FALSE"), "a35").appendField(new Blockly.FieldCheckbox("FALSE"), "a36").appendField(new Blockly.FieldCheckbox("FALSE"), "a37").appendField(new Blockly.FieldCheckbox("FALSE"), "a38");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a21").appendField(new Blockly.FieldCheckbox("FALSE"), "a22").appendField(new Blockly.FieldCheckbox("FALSE"), "a23").appendField(new Blockly.FieldCheckbox("FALSE"), "a24").appendField(new Blockly.FieldCheckbox("FALSE"), "a25").appendField(new Blockly.FieldCheckbox("FALSE"), "a26").appendField(new Blockly.FieldCheckbox("FALSE"), "a27").appendField(new Blockly.FieldCheckbox("FALSE"), "a28");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a11").appendField(new Blockly.FieldCheckbox("FALSE"), "a12").appendField(new Blockly.FieldCheckbox("FALSE"), "a13").appendField(new Blockly.FieldCheckbox("FALSE"), "a14").appendField(new Blockly.FieldCheckbox("FALSE"), "a15").appendField(new Blockly.FieldCheckbox("FALSE"), "a16").appendField(new Blockly.FieldCheckbox("FALSE"), "a17").appendField(new Blockly.FieldCheckbox("FALSE"), "a18");
    this.setOutput(true, Number);
    //this.setTooltip();
  }
};


///////////////////1602LCD_init//////////////////////
Blockly.Blocks.cb_1602lcd_init = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendValueInput("address", Number)
        //.setCheck(Number)
        //.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_SETUP)
        .appendField(Blockly.Ks_lcd_p)
        .appendField(new Blockly.FieldDropdown([['1602','16,2'],['2004','20,4']]),'TYPE')
        .appendField(Blockly.Ks_shilihua)
        .appendField(new Blockly.FieldTextInput('mylcd'), 'VAR')
        .appendField(Blockly.Ks_iic_pin)
        //.appendField("address:");
        
        //.setCheck(Number)
        //.setAlign(Blockly.ALIGN_RIGHT)
        //.appendField("address:");
        .appendField(Blockly.MIXLY_LCD_ADDRESS);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
  }
};


Blockly.Blocks.cb_1602lcd = {
  init: function() {
      this.setColour(Blockly.Blocks.Keyestudio001.HUE);
      this.appendDummyInput("")
          .appendField(Blockly.MIXLY_DF_LCD)
          .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_lcd1602.png", 70, 32));
    this.appendValueInput("TEXT", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
       // .appendField(Blockly.MIXLY_DF_LCD)
        
        .appendField(new Blockly.FieldTextInput('mylcd'), 'VAR')
        .appendField(Blockly.MIXLY_LCD_PRINT1);
    this.appendValueInput("TEXT2", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_LCD_PRINT2);
    /*
    this.appendValueInput("TEXT3", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_LCD_PRINT3);
    this.appendValueInput("TEXT4", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_LCD_PRINT4);
    */
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks.cb_1602lcd_print2 = {
  init: function() {
      this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendValueInput("row", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_DF_LCD)
        .appendField(new Blockly.FieldTextInput('mylcd'), 'VAR')
        .appendField(Blockly.MIXLY_LCD_ROW);
    this.appendValueInput("column", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_LCD_COLUMN);
    this.appendValueInput("TEXT", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_LCD_PRINT);
    this.setPreviousStatement(true, null);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
  }
};

 

///////////////////1602LCD//////////////////////
/*Blockly.Blocks.KS_1602lcd = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001_display.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_KS_1602LCD)
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001_kidsbits/KS_lcd1602.png", 70, 32));
    this.appendValueInput("TEXT1", String)
    .setCheck([String,Number])
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_KS_print1);
    this.appendValueInput("TEXT2", String)
    .setCheck([String,Number])
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_KS_print2)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};*/

Blockly.Blocks.cb_1602lcd_left = {
  init: function() {
      this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Ks_lcd_left)
        .appendField(new Blockly.FieldTextInput('mylcd'), 'VAR');
        
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks.cb_1602lcd_right = {
  init: function() {
      this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Ks_lcd_right)
        .appendField(new Blockly.FieldTextInput('mylcd'), 'VAR');
        
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks.cb_1602lcd_clear = {
  init: function() {
      this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput()
        .appendField(Blockly.MIXLY_DF_LCD)
        .appendField(new Blockly.FieldTextInput('mylcd'), 'VAR')
        .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_LCD_STAT_ON, "display"], [Blockly.MIXLY_LCD_STAT_OFF, "noDisplay"], [Blockly.MIXLY_LCD_STAT_CURSOR, "cursor"], [Blockly.MIXLY_LCD_STAT_NOCURSOR, "noCursor"], [Blockly.MIXLY_LCD_STAT_BLINK, "blink"], [Blockly.MIXLY_LCD_STAT_NOBLINK, "noBlink"], [Blockly.MIXLY_LCD_STAT_CLEAR, "clear"], [Blockly.MIXLY_LCD_NOBACKLIGHT, "noBacklight"], [Blockly.MIXLY_LCD_BACKLIGHT, "backlight"]]), "STAT");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};



////////////////////OLED////////////////////////
Blockly.Blocks.cb_oled = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_KS_OLED)
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_oled.png", 70, 32));

    this.appendValueInput("size", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("SIZE");
 
    this.appendValueInput("TEXT1", String)
    .setCheck([String,Number])
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_KS_one);
    this.appendValueInput("TEXT2", String)
    .setCheck([String,Number])
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_KS_two);
    this.appendValueInput("TEXT3", String)
    .setCheck([String,Number])
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_KS_three);
    this.appendValueInput("TEXT4", String)
    .setCheck([String,Number])
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_KS_four);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

/////////////////////////////通讯/////////////////////////////////////////////

////////////////红外接收////////////////////////////
//红外接收模块
Blockly.Blocks.cb_ir_r = {
    init: function () {
        this.setColour(Blockly.Blocks.Keyestudio001.HUE);
        this.appendValueInput("PIN", Number)
            .appendField(new Blockly.FieldTextInput('ir_rec'), 'VAR')
            .appendField(Blockly.MIXLY_KS_IR_R)
            .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_irr.png", 70, 32))
            .setCheck(Number);
        this.appendStatementInput('DO')
            .appendField(Blockly.MIXLY_KS_rec);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_IR_RECIEVE_TOOLTIP);
    },
    getVars: function () {
        return [this.getFieldValue('VAR')];
    },
    renameVar: function (oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
            this.setTitleValue(newName, 'VAR');
        }
    }
};

////////////////////红外发射/////////////////////
Blockly.Blocks.cb_ir_s = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyestudio001.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_KS_IR_E)
    .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_irs.png", 43, 32));
    
    this.appendValueInput("num1", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("Send");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

//////////////////////蓝牙////////////////////////////
Blockly.Blocks.cb_bluetooth = {
    init: function () {
        this.setColour(Blockly.Blocks.Keyestudio001.HUE);
        this.appendValueInput("PIN1", Number)
            .appendField(new Blockly.FieldTextInput('val'), 'VAL')
            .appendField(Blockly.MIXLY_KS_BLUETOOTH)
            .appendField(new Blockly.FieldImage("../../media/Keyestudio001/cb_bluetooth4.0.png", 70, 32))
            .appendField("RX:")
            .setCheck(Number);
        this.appendValueInput("PIN2", Number)
            .appendField("TX:")
            .setCheck(Number);
        this.appendStatementInput('DO')
            .appendField(Blockly.MIXLY_KS_rec);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setTooltip("bluetooth");
    },
    getVars: function () {
        return [this.getFieldValue('VAL')];
    },
    renameVar: function (oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue('VAL'))) {
            this.setTitleValue(newName, 'VAL');
        }
    }
};
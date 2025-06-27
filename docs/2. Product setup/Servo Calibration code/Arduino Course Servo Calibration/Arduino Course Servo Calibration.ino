// Define the servo control pin
#define SERVO_PIN 10

void setup() {
  // Set the pin as output
  pinMode(SERVO_PIN, OUTPUT);
}

void loop() {
  // Control servo to 90 degrees
  // 90 degrees corresponds to a 1.5ms high pulse (within a 20ms period)
  digitalWrite(SERVO_PIN, HIGH);
  delayMicroseconds(1500);  // 1.5ms high pulse
  digitalWrite(SERVO_PIN, LOW);
  delayMicroseconds(18500); // Remaining time in 20ms period (20ms - 1.5ms)
}
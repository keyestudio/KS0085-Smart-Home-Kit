
#ifndef __TM1637__
#define __TM1637__

#include <inttypes.h>

#define SEG_A   0b00000001
#define SEG_B   0b00000010
#define SEG_C   0b00000100
#define SEG_D   0b00001000
#define SEG_E   0b00010000
#define SEG_F   0b00100000
#define SEG_G   0b01000000

class TM1637 {

public:
  //!初始化一个TM1637对象，设置时钟和数据引脚。
  //!
  //!@参数 pinclk -数字引脚连接到模块的时钟引脚数
  //!@参数 pindio -数字引脚连接到模块的DIO引脚数
  TM1637(uint8_t pinClk, uint8_t pinDIO);
  
  //! 设置显示的亮度。
  //!
  //! @param brightness -从0多（亮度最低亮度）到7（最高亮度）
  void BL(uint8_t brightness);
  //!在模块上显示任意数据
  //!
  //!此功能接收原始段值作为输入，并显示它们。数据段作为一个字节数组
  //!每个字节对应一个数字。在每个字节0维是段A，1维是段B等。

  //!
  //!@param segments 显示的4维数组
  //! @param length 设置显示的数字的数量。用户必须确保显示的数字符合要求的数字（例如，如果两个数字被显示，数字必须在0到99之间,大于99则只显示个位与十位两位)
  //! @param pos 第一个数字位置 0-3，0最左，3最右（例如，123这个数，Pos=0,1显示在最在边；POS=1，1显示在左边第二个；POS=3，1显示在第四位）

  void setSegments(const uint8_t segments[], uint8_t length = 4, uint8_t pos = 0);
  
  //! 显示十进制数字
  //!
  //!
  //! @param num The number to be shown
  //! @param leading_zero 为真是，前面的填充0
  //! @param length 设置显示的数字的数量。用户必须确保显示的数字符合要求的数字（例如，如果两个数字被显示，数字必须在0到99之间,大于99则只显示个位与十位两位)
  //! @param pos 第一个数字位置 0-3，0最左，3最右（例如，123这个数，Pos=0,1显示在最在边；POS=1，1显示在左边第二个；POS=3，1显示在第四位）
  void Num(int num, bool leading_zero = false, uint8_t length = 4, uint8_t pos = 0);
  
  //! 将一个数字转换成7段代码
  //!
  //! 该方法在0 - 15之间接受一个数字，并将其转换为显示在7段显示上的数字所需的代码。
  //! 数字之间10-15转换为十六进制数字（A-F）
  //!
  //! @param digit 数字0-15
  //! @return 返回代码表示数字7段图像（LSB段；位6段G；7位总为零）
  uint8_t encodeDigit(uint8_t digit);
  //! 显示双数字，左边两位显示num1最后两位；左边两位显示num2最后两位；piont 是否显示中间的两点
  void DNum(uint8_t num1,uint8_t num2,bool piont =true);
  //!为真显示，否则不显示
  void show(bool BS);
  //!清除所显数据
  void cls();
protected:
   void bitDelay();
   
   void start();
   
   void stop();
   
   bool writeByte(uint8_t b);
   
private:
	uint8_t m_pinClk;
	uint8_t m_pinDIO;
	uint8_t m_brightness;
};

#endif // __TM1637__

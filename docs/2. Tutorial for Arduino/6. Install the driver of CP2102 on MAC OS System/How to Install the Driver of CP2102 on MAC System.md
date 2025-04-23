## 5. How to Install the Driver of CP2102 on MAC System

Connect board we provide to your computer, and open Arduino IDE

![image-20250417082903072](media/image-20250417082903072.png)

Click Tools to select Board Arduino Uno and /dev/cu.usbserial-001

![image-20250417083037840](media/image-20250417083037840.png)

Tap **Upload ** to upload code.If code is uploaded successfully,you will view **Done uploading**.

![image-20250417083148417](media/image-20250417083148417.png)

Note: If code is uploaded unsuccessfully,you need to install driver of CP2102,please continue to follow the instructions as below:

DownloadthedriverofCP2102:

<https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers>



1.Select Mac OSX edition

![image-20250417083549925](media/image-20250417083549925.png)

2.Unzip the downloaded package

![image-20250417083615847](media/image-20250417083615847.png)

3.Open folder and double-click SiLabsUSBDriverDisk.dmg file.

![image-20250417083758947](media/image-20250417083758947.png)

4.You will view the following files as follows:

![image-20250417083918581](media/image-20250417083918581.png)

5.Double-click <font color="FF0000">Install  CP210x VCP Driver</font>,tick **Don’twarn** **me....image** and tap Open.

![image-20250417084225039](media/image-20250417084225039.png)

6.Tap Continue

![image-20250417084300537](media/image-20250417084300537.png)

7.Tap Agree,**and**Continue

![image-20250417084352129](media/image-20250417084352129.png)

8.Click Continue and input your password.

![image-20250417084437049](media/image-20250417084437049.png)

![image-20250417084445052](media/image-20250417084445052.png)

9.Click Open Security Preferences

![image-20250417084527626](media/image-20250417084527626.png)

10.Click the lock to unlock security & privacy preference.

![image-20250417084623185](media/image-20250417084623185.png)

11.Tap Unlock and enter your Username and password

![image-20250417084724770](media/image-20250417084724770.png)

12.Then click Allow

![image-20250417084803825](media/image-20250417084803825.png)

13.Back to installation page,and wait to install.

![image-20250417084848672](media/image-20250417084848672-17448509322411.png)

14.Successfully installed

![image-20250417084920120](media/image-20250417084920120.png)

15.Then enter ArduinoIDE,click Tools and select Board Arduino Uno and /dev/ cu.SLAB_USBtoUAPT

![image-20250417085241510](media/image-20250417085241510.png)

16.Click![image-20250417085312966](media/image-20250417085312966.png)to upload code and show “Done uploading”.

![image-20250417085354405](media/image-20250417085354405.png)